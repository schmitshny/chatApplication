import { Server as HttpServer } from 'http';
import { Server as WebSocketServer, Socket } from 'socket.io';
import { MessageHandler } from './handlers/MessageHandler';
import { UserStatusHandler } from './handlers/UserStatusHandler';
import { WebRTCHandler } from './handlers/webRTCHandler';
import { SOCKET_EVENTS } from './types';
import { verifyTokenAndGetUserId } from '../../domain/user/service/TokenService';

export class SocketServer {
  private io: WebSocketServer;
  private messageHandler: MessageHandler;
  private userStatusHandler: UserStatusHandler;
  private webRTCHandler: WebRTCHandler;
  private socketUserMap = new Map<string, string>();

  constructor(httpServer: HttpServer) {
    this.io = new WebSocketServer(httpServer, {
      cors: {
        origin: process.env.CORS_ORIGIN,
        methods: ['GET', 'POST'],
        credentials: true,
      },
    });
    this.messageHandler = new MessageHandler(this.io, this.socketUserMap);
    this.userStatusHandler = new UserStatusHandler(this.io, this.socketUserMap);
    this.webRTCHandler = new WebRTCHandler(this.io, this.socketUserMap);

    this.configureSocketEvents();
  }

  private configureSocketEvents(): void {
    this.io.on(SOCKET_EVENTS.connection, (socket: Socket) => {
      this.handleNewConnection(socket);

      this.messageHandler.configureMessageEvents(socket);
      this.userStatusHandler.configureTypingEvents(socket);
      this.webRTCHandler.configureWebRTCEvents(socket);

      socket.on(SOCKET_EVENTS.disconnect, () => this.handleDisconnect(socket));
    });
  }

  private handleNewConnection(socket: Socket): void {
    const cookiesString = socket.request.headers.cookie;
    const userId = verifyTokenAndGetUserId(cookiesString);

    socket.emit('me', socket.id);

    if (userId) {
      this.socketUserMap.set(userId.toString(), socket.id);
      this.userStatusHandler.updateUserOnlineStatus(userId, 'online');
    }
  }

  private handleDisconnect(socket: Socket): void {
    const userId = [...this.socketUserMap].find(
      ([_, socketId]) => socketId === socket.id,
    )?.[0];
    if (userId) {
      this.userStatusHandler.updateUserOnlineStatus(userId, 'offline');
      this.socketUserMap.delete(socket.id);
    }
  }
}

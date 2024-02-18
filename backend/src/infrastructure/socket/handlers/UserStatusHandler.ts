import { Server as WebSocketServer, Socket } from 'socket.io';
import { SOCKET_EVENTS, TypingData } from '../types';

export class UserStatusHandler {
  private onlineUsers = new Map<string, boolean>();

  constructor(
    private io: WebSocketServer,
    private socketUserMap: Map<string, string>,
  ) {}

  configureTypingEvents(socket: Socket) {
    socket.on(SOCKET_EVENTS.typing, (data: TypingData) => {
      const { userId, isTyping, recipientId } = data;

      const recipientSocketId = this.socketUserMap.get(recipientId.toString());

      if (recipientSocketId) {
        this.io
          .to(recipientSocketId)
          .emit(SOCKET_EVENTS.userTyping, { userId, isTyping });
      }
    });
  }

  updateUserTypingStatus(userId: string, isTyping: boolean) {
    this.io.emit(SOCKET_EVENTS.userTyping, { userId, isTyping });
  }

  updateUserStatus(userId: string, isOnline: boolean) {
    isOnline
      ? this.onlineUsers.set(userId, true)
      : this.onlineUsers.delete(userId);

    this.emitUserStatusUpdate();
  }

  private emitUserStatusUpdate() {
    const onlineStatuses = Array.from(this.onlineUsers.entries()).map(
      ([userId, isOnline]) => ({
        userId,
        isOnline,
      }),
    );

    this.io.emit(SOCKET_EVENTS.userStatusUpdate, onlineStatuses);
  }
}

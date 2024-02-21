import { Server as WebSocketServer, Socket } from 'socket.io';
import { SOCKET_EVENTS, TypingData } from '../types';
import UserService from '../../../domain/user/service/UserService';

export class UserStatusHandler {
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

  updateUserOnlineStatus(userId: string, status: string) {
    UserService.updateUserStatus(userId, status);

    if (status === 'offline') {
      UserService.updateUserLastSeen(userId, new Date());
    }
  }
}

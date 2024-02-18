import { Server as WebSocketServer, Socket } from 'socket.io';
import { ICreateMessage } from '../../../domain/chat/dto/MessageDto';
import MessageService from '../../../domain/chat/Service/MessageService';
import { SOCKET_EVENTS } from '../types';

export class MessageHandler {
  constructor(
    private io: WebSocketServer,
    private socketUserMap: Map<string, string>,
  ) {}

  configureMessageEvents(socket: Socket): void {
    socket.on(SOCKET_EVENTS.message, (message: ICreateMessage) =>
      this.handleMessage(socket, message),
    );
  }

  async handleMessage(socket: Socket, message: ICreateMessage) {
    try {
      const savedMessage = await MessageService.addMessage(message);
      socket.emit(SOCKET_EVENTS.message, savedMessage);

      const recipientSocketId = this.socketUserMap.get(
        message.recipientId.toString(),
      );

      if (recipientSocketId) {
        this.io.to(recipientSocketId).emit(SOCKET_EVENTS.message, savedMessage);
      }
    } catch (error) {
      console.error('Error while saving message: ', error);
    }
  }
}

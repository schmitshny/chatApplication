import { Server as WebSocketServer, Socket } from 'socket.io';
import { EndCallData, webRTCEvents } from '../types';

interface IWebRTCCallData {
  userToCall: string;
  signalData: any;
  from: string;
  name: string;
}

export class WebRTCHandler {
  constructor(
    private io: WebSocketServer,
    private socketUserMap: Map<string, string>,
  ) {}

  configureWebRTCEvents(socket: Socket): void {
    socket.on(webRTCEvents.callUser, (data: IWebRTCCallData) =>
      this.handleCallUser(socket, data),
    );
    socket.on(webRTCEvents.answerCall, (data: any) =>
      this.handleAnswerCall(socket, data),
    );
    socket.on(webRTCEvents.endCall, (data: any) =>
      this.handleEndCall(socket, data),
    );
  }

  private handleCallUser(socket: Socket, data: IWebRTCCallData): void {
    const recipientSocketId = this.socketUserMap.get(
      data.userToCall.toString(),
    );

    if (recipientSocketId) {
      this.io.to(recipientSocketId).emit(webRTCEvents.callUser, {
        signal: data.signalData,
        from: data.from,
        name: data.name,
      });
    } else {
      socket.emit('userNotFound', { userToCall: data.userToCall });
    }
  }

  private handleAnswerCall(socket: Socket, data: any): void {
    if (data.to === undefined) return;

    const recipientSocketId = this.socketUserMap.get(data.to.id.toString());

    if (!recipientSocketId) {
      socket.emit('userNotFound', { userToCall: data.to });
      return;
    }

    this.io.to(recipientSocketId).emit(webRTCEvents.callAccepted, data.signal);
  }

  private handleEndCall(socket: Socket, data: EndCallData): void {
    if (data.to === undefined) return;

    const recipientSocketId = this.socketUserMap.get(data.to.toString());

    if (recipientSocketId) {
      this.io.to(recipientSocketId).emit(webRTCEvents.callEnded);
    }
  }
}

export const SOCKET_EVENTS = {
  connection: 'connection',
  disconnect: 'disconnect',
  message: 'message',
  userStatusUpdate: 'userStatusUpdate',
  userTyping: 'userTyping',
  typing: 'typing',
} as const;

export interface TypingData {
  userId: string;
  recipientId: string;
  isTyping: boolean;
}

export interface EndCallData {
  to: string;
}

export const webRTCEvents = {
  callUser: 'callUser',
  answerCall: 'answerCall',
  endCall: 'endCall',
  callAccepted: 'callAccepted',
  callEnded: 'callEnded',
} as const;

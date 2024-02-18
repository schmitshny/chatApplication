export interface IMessage {
  id: number;
  conversationId: number;
  senderId: number;
  recipientId: number;
  content: string;
  timestamp: Date;
  image?: string;
}

export interface ICreateMessage {
  senderId: number;
  recipientId: number;
  content?: string;
  image?: string;
  conversationId: number;
  file?: {
    fileUrl?: string;
    fileName?: string;
  };
}

export interface ICreateFile {
  conversationId: number;
  fileUrl: string;
  fileName: string;
}

export interface IUpdateMessage {
  id: number;
  message: string;
}

export interface IConversationSummary {
  conversationId: number;
  interlocutor: {
    id: number;
    name: string;
    lastName: string;
    avatarImg?: string;
  };
  lastMessage: { content: string; sentAt: Date };
}

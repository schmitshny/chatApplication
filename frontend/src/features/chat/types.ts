import { InfiniteData } from 'react-query';
import { User } from '../auth/types';
import { z } from 'zod';

export interface ISendMessage {
  senderId: number;
  recipientId: number;
  content?: string;
  image?: string | null;
  file?: File;
  conversationId?: number;
}
export interface IMessage extends ISendMessage {
  id: number;
  sentAt?: string;
  imageUrl?: string;
}

export interface ConversationSummary {
  conversationId: number;
  interlocutor: User;
  lastMessage: { content: string; sentAt: string };
}

export interface Conversation {
  messages: IMessage[];
  hasMoreMessages: boolean;
}

export interface File {
  fileUrl: string;
  fileName: string;
}

interface IPage {
  messages: IMessage[];
}

export interface UserStatus {
  userId: number;
  isOnline: boolean;
}

export enum SOCKET_EVENTS {
  message = 'message',
  userStatusUpdate = 'userStatusUpdate',
  userTyping = 'userTyping',
  typing = 'typing',
}

export enum QUERY_KEYS {
  messages = 'messages',
  users = 'users',
  conversations = 'conversations',
  conversationMedia = 'conversationMedia',
}

export type IChatData = InfiniteData<IPage>;

export const muteEndTimeSchema = z.union([z.number(), z.null()]);

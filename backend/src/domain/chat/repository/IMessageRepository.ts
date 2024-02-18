import { Message } from '../model/Message';
import { File } from '../model/File';
import {
  ICreateMessage,
  IConversationSummary,
  ICreateFile,
} from '../dto/MessageDto';

export interface IMessageRepository {
  createMessage(message: ICreateMessage): Promise<Message>;
  createFile(file: ICreateFile): Promise<File>;
  getConversation(
    user1Id: string,
    user2Id: string,
    messageLimit: number,
    messageOffset: number,
  ): Promise<{ messages: Message[]; conversationId: number } | null>;
  getUsersConversations(userId: string): Promise<IConversationSummary[]>;
  getConversationMedia(conversationId: string): Promise<string[]>;
}

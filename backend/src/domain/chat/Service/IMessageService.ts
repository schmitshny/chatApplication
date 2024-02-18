import { IConversationSummary, ICreateMessage } from '../dto/MessageDto';
import { Message } from '../model/Message';

export interface IMessageService {
  addMessage(message: ICreateMessage): Promise<Message>;
  getConversation(
    user1Id: string,
    user2Id: string,
    messagePage: number,
    messagePageSize: number,
  ): Promise<{
    messages: Message[];
    hasMoreMessages: boolean;
    conversationId: number;
  } | null>;
  getUsersConversations(userId: string): Promise<IConversationSummary[]>;
  getConversationsMedia(conversationId: string): Promise<string[]>;
}

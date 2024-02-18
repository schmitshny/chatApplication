import api from '../../api';
import { User } from '../auth/types';
import { ConversationSummary, IMessage } from './types';

export const getAllUsers = async () => {
  const { data } = await api.get<User[]>('user/get-users');
  return data;
};

export const getConversation = async (user1Id: number, user2Id: number, messagePage = 1, messagePageSize = 10) => {
  return await api.post<{ messages: IMessage[]; hasMoreMessages: boolean; conversationId: number } | null>(
    '/chat/get-conversation',
    {
      user1Id,
      user2Id,
      messagePage,
      messagePageSize,
    },
  );
};

export const getUsersConversations = async (userId?: number) => {
  const { data } = await api.get<ConversationSummary[]>(`/chat/get-conversations/${userId}`);
  return data;
};

export const getConversationMedia = async (conversationId: number) => {
  const { data } = await api.get<string[]>(`/chat/get-conversation-media/${conversationId}`);
  return data;
};

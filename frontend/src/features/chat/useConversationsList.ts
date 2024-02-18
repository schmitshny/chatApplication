import { useQuery } from 'react-query';
import { getUsersConversations } from './api';
import { QUERY_KEYS } from './types';

export const useConversationsList = (userId?: number) => {
  const { data, isError, isLoading } = useQuery(
    [QUERY_KEYS.conversations, userId],
    async () => getUsersConversations(userId),
    {
      enabled: !!userId,
    },
  );

  return { conversationsList: data, isError, isLoading };
};

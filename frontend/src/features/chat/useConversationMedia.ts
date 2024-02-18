import { useQuery, useQueryClient } from 'react-query';
import { getConversationMedia } from './api';
import { QUERY_KEYS } from './types';

export const useConversationMedia = (conversationId: number) => {
  const queryClient = useQueryClient();

  const query = useQuery([QUERY_KEYS.conversationMedia, conversationId], () => getConversationMedia(conversationId), {
    enabled: false,
  });

  const prefetchConversationMedia = () => {
    if (conversationId) {
      queryClient.prefetchQuery([QUERY_KEYS.conversationMedia, conversationId], () =>
        getConversationMedia(conversationId),
      );
    }
  };

  return {
    prefetchConversationMedia,
    ...query,
  };
};

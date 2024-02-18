import { useInfiniteQuery, useQueryClient } from 'react-query';
import { getConversation } from './api';
import { IChatData, IMessage, QUERY_KEYS, SOCKET_EVENTS } from './types';
import { useContext, useEffect } from 'react';
import { SocketContext } from '../socket/context';

export const useChat = (user1Id: number, user2Id: number) => {
  const queryClient = useQueryClient();
  const socket = useContext(SocketContext);

  const {
    data,
    isLoading: messagesLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isSuccess,
  } = useInfiniteQuery(
    [QUERY_KEYS.messages, user1Id, user2Id],
    async ({ pageParam = 1 }) => {
      const pageSize = 10;
      const { data } = await getConversation(user1Id, user2Id, pageParam, pageSize);
      return data;
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        const morePagesExist = lastPage?.hasMoreMessages;
        if (morePagesExist) {
          return allPages.length + 1;
        } else {
          return undefined;
        }
      },
    },
  );

  useEffect(() => {
    if (socket) {
      socket.on(SOCKET_EVENTS.message, (newMessage: IMessage) => {
        queryClient.setQueryData<IChatData>([QUERY_KEYS.messages, user1Id, user2Id], (oldQueryData) => {
          if (!oldQueryData) {
            return { pages: [{ messages: [newMessage], hasMore: true }], pageParams: [] };
          }

          const firstPage = oldQueryData.pages[0];

          const updatedFirstPage = {
            ...firstPage,
            messages: [newMessage, ...firstPage.messages],
          };

          queryClient.invalidateQueries([QUERY_KEYS.conversations]);

          return {
            ...oldQueryData,
            pages: [updatedFirstPage, ...oldQueryData.pages.slice(1)],
          };
        });
      });

      return () => {
        socket.off(SOCKET_EVENTS.message);
      };
    }
  }, [user1Id, user2Id, queryClient, socket]);

  const loadMoreMessages = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return {
    messages: data?.pages.flatMap((page) => page?.messages) ?? [],
    conversationId: data?.pages[0]?.conversationId,
    messagesLoading,
    loadMoreMessages,
    hasNextPage,
    isFetchingNextPage,
    isError,
    isSuccess,
    socket,
  };
};

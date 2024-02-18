import { User } from '../../../../features/auth/types';
import { useChat } from '../../../../features/chat/useChat';
import { useIntersectionObserver } from '../../../../hooks/useIntersectionObserver';

import { Message } from './Message';
import { MessageInput } from './MessageInput';
import { SelectedUserIcons, SelectedUserInfo } from './SelectedUserInfo';
import { SectionHeader } from '../SectionHeader';

import { ChatWindowContainer, MessagesWrapper } from './ChatWindow.styles';
import { ConversationInfo } from '../ConversationInfo';
import { useEffect } from 'react';
import { useConversationContext } from '../../../../features/chat/context/useConversationContext';
import { useTypingStatus } from '../../../../features/chat/useTypingStatus';
import { useSocket } from '../../../../features/socket/useSocket';
import { TypingIndicator } from './Message/TypingIndicator/TypingIndicator';

interface ChatWindowProps {
  selectedUser: User;
  currentUser: User;
}

export const ChatWindow = ({ currentUser, selectedUser }: ChatWindowProps) => {
  const { messages, isSuccess, loadMoreMessages, hasNextPage, isFetchingNextPage, conversationId } = useChat(
    currentUser.id,
    selectedUser.id,
  );
  const socket = useSocket();
  const { setActiveConversationId } = useConversationContext();
  const { isTyping, handleTypingChange, sendTypingStatus } = useTypingStatus(socket, selectedUser.id, currentUser.id);

  const loadMoreRef = useIntersectionObserver(
    loadMoreMessages,
    {
      threshold: 0.1,
    },
    Boolean(hasNextPage && !isFetchingNextPage),
  );

  useEffect(() => {
    setActiveConversationId(conversationId);
    return () => {
      setActiveConversationId(undefined);
    };
  }, [setActiveConversationId, conversationId]);

  return (
    <>
      <ChatWindowContainer>
        <SectionHeader
          leftSection={<SelectedUserInfo selectedUser={selectedUser} />}
          rightSection={<SelectedUserIcons selectedUser={selectedUser} />}
        />
        <MessagesWrapper>
          {isTyping && <TypingIndicator sender={selectedUser} />}
          {isSuccess && messages.map((message) => message && <Message key={message?.id} message={message} />)}
          <div ref={loadMoreRef} style={{ visibility: 'hidden' }}></div>
        </MessagesWrapper>
        <MessageInput
          currentUserId={currentUser.id}
          selectedUserId={selectedUser.id}
          socket={socket}
          conversationId={conversationId}
          handleTypingChange={handleTypingChange}
          sendTypingStatus={sendTypingStatus}
        />
      </ChatWindowContainer>
      <ConversationInfo selectedUser={selectedUser} />
    </>
  );
};

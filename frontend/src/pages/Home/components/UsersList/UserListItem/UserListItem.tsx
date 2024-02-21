import { useDateFormat } from '../../../../../hooks/useDateFormat';
import { Avatar, MovingDots } from '../../../../../components';
import { User } from '../../../../../features/auth/types';
import { shortenText } from '../../../../../utils/shortenText';
import { LastMessage, LastMessageTime, UserContainer, UserName } from './UserListItem.styles';
import { useConversationContext } from '../../../../../features/chat/context/useConversationContext';
import { useSocket } from '../../../../../features/socket/useSocket';
import { useTypingStatus } from '../../../../../features/chat/useTypingStatus';

interface UserListItemProps {
  interlocutor: User;
  onUserSelect: (user: User) => void;
  isUserSelected: boolean;
  status?: string;
  lastMessage?: {
    content: string;
    sentAt: string;
  };
  conversationId: number;
  userId: number;
}

export const UserListItem = ({
  interlocutor,
  onUserSelect,
  isUserSelected,
  status,
  lastMessage,
  conversationId,
  userId,
}: UserListItemProps) => {
  const socket = useSocket();
  const { name, avatarImg, lastName } = interlocutor;
  const { content, sentAt } = lastMessage || {};
  const { timeSince } = useDateFormat();
  const { setActiveConversationId } = useConversationContext();
  const { isTyping } = useTypingStatus(socket, interlocutor.id, userId);

  const messageContent = content && shortenText(content, 30);
  const messageTime = sentAt && timeSince(sentAt);

  const handleUserSelect = () => {
    onUserSelect(interlocutor);
    setActiveConversationId(conversationId);
  };

  return (
    <UserContainer onClick={handleUserSelect} $isActive={isUserSelected}>
      <Avatar avatarUrl={avatarImg} isOnline={status === 'online'} displayStatus={true} />
      <div>
        <UserName>{`${name} ${lastName}`}</UserName>
        {isTyping ? (
          <MovingDots />
        ) : (
          <>
            {messageTime && <LastMessageTime>{messageTime}</LastMessageTime>}
            {messageContent && <LastMessage>{messageContent}</LastMessage>}
          </>
        )}
      </div>
    </UserContainer>
  );
};

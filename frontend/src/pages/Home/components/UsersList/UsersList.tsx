import { useConversationsList } from '../../../../features/chat/useConversationsList';
import { Icon } from '../../../../components';
import { User } from '../../../../features/auth/types';
import { GroupChatSwitcher } from './GroupChatSwitcher';
import { SectionHeader } from '../SectionHeader';
import { UserListItem } from './UserListItem';
import { SectionHeaderTitle } from '../SectionHeader/SectionHeader.styles';
import { ListContainer, UserListWrapper } from './UsersList.styles';
import { UserListItemSkeleton } from './UserListItemSkeleton';

interface UsersListProps {
  onUserSelect: (user: User) => void;
  selectedUserId?: number;
  userId: number;
}

export const UsersList = ({ onUserSelect, selectedUserId, userId }: UsersListProps) => {
  const { conversationsList, isLoading } = useConversationsList(userId);

  return (
    <ListContainer>
      <SectionHeader
        leftSection={<SectionHeaderTitle>Recent Messages</SectionHeaderTitle>}
        rightSection={<Icon name="pen" />}
      />
      <GroupChatSwitcher />
      <UserListWrapper>
        {isLoading && <UserListItemSkeleton />}
        {conversationsList &&
          conversationsList.map(({ interlocutor, lastMessage, conversationId }) => (
            <UserListItem
              interlocutor={interlocutor}
              onUserSelect={onUserSelect}
              key={interlocutor.id}
              isUserSelected={selectedUserId === interlocutor.id}
              status={interlocutor.userStatus}
              lastMessage={lastMessage}
              conversationId={conversationId}
              userId={userId}
            />
          ))}
      </UserListWrapper>
    </ListContainer>
  );
};

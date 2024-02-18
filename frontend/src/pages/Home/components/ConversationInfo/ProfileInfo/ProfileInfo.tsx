import { Avatar } from '../../../../../components/Avatar';
import { User } from '../../../../../features/auth/types';
import { Media } from '../Media';
import { ProfileInfoWrapper, UserName } from './ProfileInfo.styles';
import { SectionHeaderTitle } from '../../SectionHeader/SectionHeader.styles';
import { useConversationContext } from '../../../../../features/chat/context/useConversationContext';

interface ProfileInfoProps {
  user: User;
}

export const ProfileInfo = ({ user }: ProfileInfoProps) => {
  const { avatarImg, name } = user;
  const { activeConversationId } = useConversationContext();
  return (
    <ProfileInfoWrapper>
      <SectionHeaderTitle>Profile</SectionHeaderTitle>
      <Avatar avatarUrl={avatarImg} />
      <UserName>{name}</UserName>
      {activeConversationId && <Media conversationId={activeConversationId} />}
    </ProfileInfoWrapper>
  );
};

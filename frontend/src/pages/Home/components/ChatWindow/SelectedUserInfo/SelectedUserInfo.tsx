import { Icon, Avatar } from '../../../../../components';
import { User } from '../../../../../features/auth/types';
import { useVideoChat } from '../../../../../features/videoChat/useVideoChat';
import { IconsWrapper, SelectedUserInfoWrapper, SelectedUserName } from './SelectedUserInfo.styles';

interface SelectedUserInfoProps {
  selectedUser: User;
}

export const SelectedUserInfo = ({ selectedUser }: SelectedUserInfoProps) => {
  const { avatarImg, name } = selectedUser;
  return (
    <SelectedUserInfoWrapper>
      <Avatar size="small" shape="circle" avatarUrl={avatarImg} displayStatus />
      <SelectedUserName>{name}</SelectedUserName>
    </SelectedUserInfoWrapper>
  );
};

export const SelectedUserIcons = ({ selectedUser }: SelectedUserInfoProps) => {
  const { callUser, setSelectedUser } = useVideoChat();

  const handleCallUser = () => {
    callUser(selectedUser.id.toString());
    setSelectedUser(selectedUser);
  };

  return (
    <IconsWrapper>
      <Icon name="phone" onClick={handleCallUser} />
      <Icon name="camera" onClick={handleCallUser} />
      <Icon name="options" />
    </IconsWrapper>
  );
};

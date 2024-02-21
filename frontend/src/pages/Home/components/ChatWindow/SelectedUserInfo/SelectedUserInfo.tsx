import { Icon, Avatar } from '../../../../../components';
import { User } from '../../../../../features/auth/types';
import { useVideoChat } from '../../../../../features/videoChat/useVideoChat';
import { useDateFormat } from '../../../../../hooks/useDateFormat';
import { IconsWrapper, SelectedUserInfoWrapper, SelectedUserName, SelectedUserStatus } from './SelectedUserInfo.styles';
import { getUserStatusDisplay } from './utils';

interface SelectedUserInfoProps {
  selectedUser: User;
}

export const SelectedUserInfo = ({ selectedUser }: SelectedUserInfoProps) => {
  const { avatarImg, name, userStatus, lastSeen } = selectedUser;
  const { timeSince } = useDateFormat();

  const userStatusDisplay = getUserStatusDisplay(timeSince, userStatus, lastSeen);

  return (
    <SelectedUserInfoWrapper>
      <Avatar size="small" shape="circle" avatarUrl={avatarImg} displayStatus isOnline={userStatus === 'online'} />
      <div>
        <SelectedUserName>{name}</SelectedUserName>
        <SelectedUserStatus>{userStatusDisplay}</SelectedUserStatus>
      </div>
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

import { useAuthContext } from '../../features/auth/context/useAuthContext';
import { useOutlet } from 'react-router-dom';
import { useToggle } from '../../hooks/useToggle';
import { Avatar, Card, NavBar, Modal } from '../../components';
import { AvatarEditor } from './components/AvatarEditor';
import { UserSettings } from './components/UserSettings';
import { PageContainer, CameraIcon, UserAvatarWrapper, UserInfoWrapper } from './UserProfile.styles';

const UserProfile = () => {
  const { user } = useAuthContext();
  const [isModalOpen, toggleIsModalOpen] = useToggle(false);
  const outlet = useOutlet();

  return (
    <PageContainer>
      <NavBar />
      <Card>
        <UserInfoWrapper>
          <UserAvatarWrapper>
            <Avatar avatarUrl={user?.avatarImg} />
            <CameraIcon onClick={toggleIsModalOpen} />
          </UserAvatarWrapper>
          <h3>
            {user?.name} {user?.lastName}
          </h3>
        </UserInfoWrapper>
        {outlet || <UserSettings />}
      </Card>
      <Modal show={isModalOpen} onClose={toggleIsModalOpen}>
        <AvatarEditor userId={user?.id} closeModal={toggleIsModalOpen} />
      </Modal>
    </PageContainer>
  );
};

export default UserProfile;

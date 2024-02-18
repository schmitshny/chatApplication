import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../features/auth/context/useAuthContext';
import { useNotifications } from '../../features/chat/useNotifications';
import { Icon } from '../Icon';
import { NavBarContainer, NavBarSection } from './NavBar.styles';

export const NavBar = () => {
  const { logout } = useAuthContext();
  const navigate = useNavigate();
  useNotifications();

  return (
    <NavBarContainer>
      <NavBarSection>
        <Icon name="chat" hoverText="Chats" onClick={() => navigate('/')} />
        <Icon name="media" hoverText="Stories" onClick={() => navigate('/stories')} />
        <Icon name="addContact" hoverText="Add Contact" onClick={() => navigate('/add-contact')} />
      </NavBarSection>
      <NavBarSection>
        <Icon name="notification" hoverText="Notifications" onClick={() => navigate('account/notifications')} />
        <Icon name="profile" hoverText="Account" onClick={() => navigate('/account')} />
        <Icon name="logout" hoverText="Log out" onClick={logout} customColor="#FF69B4" data-testid="logout-icon" />
      </NavBarSection>
    </NavBarContainer>
  );
};

import { useTheme } from '../../../../features/theme/useTheme';
import { Switch } from '../../../../components';
import { Icon } from '../../../../components/Icon';
import { OptionTitle, OptionWrapper, UserSettingsWrapper } from './UserSettings.styles';
import { ThemeName } from '../../../../features/theme';
import { useNavigate } from 'react-router-dom';
import { useConversationContext } from '../../../../features/chat/context/useConversationContext';
import { useAlerts } from '../../../../components/Alert/useAlerts';

export const UserSettings = () => {
  const navigate = useNavigate();
  const { addAlert } = useAlerts();
  const { toggleTheme, theme } = useTheme();
  const { isMuted, unmuteNotifications } = useConversationContext();
  const isDarkMode = theme === ThemeName.Dark;

  const handleSelectNotifications = () => {
    if (isMuted) {
      unmuteNotifications();
      addAlert('Notifications unpaused', 'success');
    } else {
      navigate('/account/notifications');
    }
  };

  const handleSelectManageAccount = () => {
    navigate('/account/manage-account');
  };

  return (
    <UserSettingsWrapper>
      <h5>Settings & preferences</h5>
      <OptionWrapper onClick={handleSelectManageAccount}>
        <OptionTitle>
          <Icon name="user" />
          <span>Manage Account</span>
        </OptionTitle>
        <Icon name="nextArrow" />
      </OptionWrapper>
      <OptionWrapper>
        <OptionTitle>
          <Icon name="notificationOutline" />
          <span>Notifications</span>
        </OptionTitle>
        <Switch isToggled={!isMuted} onToggle={handleSelectNotifications} />
      </OptionWrapper>
      <OptionWrapper>
        <OptionTitle>
          <Icon name="darkMode" />
          <span>Dark Mode</span>
        </OptionTitle>
        <Switch onToggle={toggleTheme} isToggled={isDarkMode} />
      </OptionWrapper>
    </UserSettingsWrapper>
  );
};

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useConversationContext } from '../../../../features/chat/context/useConversationContext';
import { Button } from '../../../../components';
import { UserSettingsWrapper } from '../../components/UserSettings/UserSettings.styles';
import {
  Dot,
  SectionDescription,
  SectionTitle,
  TimeLabel,
  TimeOption,
  TimeOptionsContainer,
} from './ManageNotifications.styles';
import { durations } from './utils';
import { useAlerts } from '../../../../components/Alert/useAlerts';

export const ManageNotifications = () => {
  const [selectedDuration, setSelectedDuration] = useState<number | null>(null);
  const navigate = useNavigate();
  const { muteNotifications } = useConversationContext();
  const { addAlert } = useAlerts();

  const handleSelectDuration = (duration: number | null) => {
    setSelectedDuration(duration);
  };

  const handleSubmit = () => {
    if (selectedDuration) {
      muteNotifications(selectedDuration);
      addAlert('Notifications paused', 'success');
      navigate(-1);
    }
  };

  return (
    <UserSettingsWrapper>
      <SectionTitle>Manage Notifications</SectionTitle>
      <SectionDescription>
        Utilize sounds to notify about incoming messages, video chats, and audio alerts in the application
      </SectionDescription>
      <TimeOptionsContainer>
        {durations.map((duration) => (
          <TimeOption key={duration.value} onClick={() => handleSelectDuration(duration.value)}>
            <Dot $isActive={selectedDuration === duration.value} />
            <TimeLabel>{duration.label}</TimeLabel>
          </TimeOption>
        ))}
      </TimeOptionsContainer>
      <Button $variant="secondary" onClick={handleSubmit} disabled={!selectedDuration}>
        Pause Notifications
      </Button>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
    </UserSettingsWrapper>
  );
};

import { useAlerts } from './useAlerts';
import { Alert } from './Alert';
import { StyledAlertContainer } from './Alert.styles';

export const AlertContainer = () => {
  const { alerts, removeAlert } = useAlerts();

  return (
    alerts.length > 0 && (
      <StyledAlertContainer>
        {alerts.map(({ id, message, type }) => (
          <Alert key={id} message={message} onClose={() => removeAlert(id)} type={type} />
        ))}
      </StyledAlertContainer>
    )
  );
};

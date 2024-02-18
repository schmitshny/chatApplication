import { Icon } from '..';
import { AlertBox, AlertMessage, CloseIcon, ProgressBar, getAlertColor } from './Alert.styles';
import { AlertType } from './types';

interface AlertProps {
  message: string;
  onClose: () => void;
  type: AlertType;
}

export const Alert = ({ message, onClose, type }: AlertProps) => {
  return (
    <AlertBox>
      <Icon name="alert" customColor={getAlertColor(type)} />
      <AlertMessage>{message}</AlertMessage>
      <CloseIcon>
        <Icon onClick={onClose} name="delete" data-testid="close-alert-icon" />
      </CloseIcon>
      <ProgressBar type={type} />
    </AlertBox>
  );
};

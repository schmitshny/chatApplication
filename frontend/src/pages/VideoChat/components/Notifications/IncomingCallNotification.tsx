import { Avatar, Icon, Modal } from '../../../../components';
import {
  IconsContainer,
  IncomingCallNotificationWrapper,
  NotificationHeader,
  Description,
  IconWrapper,
} from './IncomingCallNotification.styles';
import { useVideoChat } from '../../../../features/videoChat/useVideoChat';

export const IncomingCallNotification = () => {
  const { answerCall, call, callAccepted, callEnded, setSelectedUser } = useVideoChat();

  if (!call?.isReceivingCall || callAccepted || callEnded) return null;

  const caller = call?.from;

  const handleRejectCall = () => {
    console.log('Reject call');
  };

  const handleAcceptCall = () => {
    answerCall();
    setSelectedUser(caller);
  };

  return (
    <Modal show={!!call.isReceivingCall}>
      <IncomingCallNotificationWrapper>
        <Avatar avatarUrl={caller?.avatarImg} />
        <div>
          <NotificationHeader>{`${caller?.name} ${caller?.lastName}`}</NotificationHeader>
          <NotificationHeader>{'  is calling you.'}</NotificationHeader>
          <Description>The call will begin upon acceptance.</Description>
        </div>
        <IconsContainer>
          <IconWrapper>
            <Icon name="reject" onClick={handleRejectCall} />
            <Description>Reject</Description>
          </IconWrapper>
          <IconWrapper>
            <Icon name="acceptVideo" onClick={handleAcceptCall} />
            <Description>Accept</Description>
          </IconWrapper>
        </IconsContainer>
      </IncomingCallNotificationWrapper>
    </Modal>
  );
};

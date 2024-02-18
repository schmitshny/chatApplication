import { Avatar, MovingDots } from '../../../../../../components';
import { User } from '../../../../../../features/auth/types';
import { MessageContainer, MessageInfoWrapper, UserName } from '../Message.styles';

interface TypingIndicatorProps {
  sender: User;
}

export const TypingIndicator = ({ sender }: TypingIndicatorProps) => {
  return (
    <MessageContainer>
      <Avatar avatarUrl={sender.avatarImg} />
      <div>
        <MessageInfoWrapper>
          <UserName>{sender.name}</UserName>
        </MessageInfoWrapper>
        <MovingDots />
      </div>
    </MessageContainer>
  );
};

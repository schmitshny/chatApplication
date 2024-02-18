import { AvatarContainer, AvatarShape, StatusDot, StyledAvatar } from './Avatar.styles';
import defaultAvatar from './assets/defaultAvatar.jpg';

export type AvatarSize = 'small' | 'medium' | 'large';

interface AvatarProps {
  avatarUrl?: string;
  size?: AvatarSize;
  shape?: AvatarShape;
  isOnline?: boolean;
  displayStatus?: boolean;
}

export const Avatar = ({
  avatarUrl,
  size = 'medium',
  isOnline = false,
  displayStatus,
  shape = 'circle',
}: AvatarProps) => {
  return (
    <AvatarContainer>
      <StyledAvatar src={avatarUrl || defaultAvatar} alt="user avatar" size={size} shape={shape} loading="lazy" />
      {displayStatus && <StatusDot $isOnline={isOnline} data-testid="status-dot" />}
    </AvatarContainer>
  );
};

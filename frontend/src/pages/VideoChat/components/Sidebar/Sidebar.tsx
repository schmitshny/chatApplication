import { useVideoChat } from '../../../../features/videoChat/useVideoChat';
import { IconsWrapper } from './Sidebar.styles';
import { Icon } from '../../../../components';

interface SidebarProps {
  userId: number;
}

export const Sidebar = ({ userId }: SidebarProps) => {
  const { leaveCall } = useVideoChat();

  return (
    <IconsWrapper>
      <Icon name="reject" onClick={() => leaveCall(userId)} />
    </IconsWrapper>
  );
};

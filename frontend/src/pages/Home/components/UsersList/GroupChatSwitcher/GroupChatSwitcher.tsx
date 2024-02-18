import { useToggle } from '../../../../../hooks/useToggle';
import { GroupChatSwitcherWrapper, SwitchButton } from './GroupChatSwitcher.styles';

export const GroupChatSwitcher = () => {
  const [isChatActive, toggleChatActive] = useToggle(true);

  return (
    <GroupChatSwitcherWrapper>
      <SwitchButton $active={isChatActive} onClick={toggleChatActive}>
        Chat
      </SwitchButton>
      <SwitchButton $active={!isChatActive} onClick={toggleChatActive}>
        Groups
      </SwitchButton>
    </GroupChatSwitcherWrapper>
  );
};

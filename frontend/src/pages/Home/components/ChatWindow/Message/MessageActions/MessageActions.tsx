import { useRef } from 'react';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';
import { Icon } from '../../../../../../components';
import { useToggle } from '../../../../../../hooks/useToggle';
import { MessageActionsContainer, EmojiPickerDropdown, EmojiPickerContainer } from './MessageActions.styles';
import { useDetectOutsideClick } from '../../../../../../hooks/useDetectOutsideClick';

interface EmojiEvent {
  native: string;
}

interface MessageActionsProps {
  setMessageEmojis: (emojis: string[]) => void;
  messageEmojis: string[];
}

export const MessageActions = ({ setMessageEmojis, messageEmojis }: MessageActionsProps) => {
  const [isPickerOpen, togglePicker] = useToggle(false);
  const [isActionsVisible, toggleActionVisible] = useToggle(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  const addEmoji = (e: EmojiEvent) => {
    const emoji = e.native;
    setMessageEmojis([...messageEmojis, emoji]);
  };

  const handleEmojiClick = () => {
    toggleActionVisible();
    togglePicker();
  };

  useDetectOutsideClick(pickerRef, () => {
    if (isPickerOpen) {
      togglePicker();
      toggleActionVisible();
    }
  });

  return (
    <MessageActionsContainer $isVisible={isActionsVisible}>
      <EmojiPickerContainer ref={pickerRef}>
        <Icon name="smile" onClick={handleEmojiClick} />
        {isPickerOpen && (
          <EmojiPickerDropdown>
            <Picker data={data} onEmojiSelect={addEmoji} />
          </EmojiPickerDropdown>
        )}
      </EmojiPickerContainer>
    </MessageActionsContainer>
  );
};

import { useRef } from 'react';
import { useToggle } from '../../../../../../hooks/useToggle';
import { useDetectOutsideClick } from '../../../../../../hooks/useDetectOutsideClick';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { Icon } from '../../../../../../components';
import { EmojiPickerContainer, EmojiPickerDropdown } from './EmojiPicker.styles';

interface EmojiPickerProps {
  setMessage: (message: string) => void;
}

interface EmojiEvent {
  native: string;
}

export const EmojiPicker = ({ setMessage }: EmojiPickerProps) => {
  const [isPickerOpen, togglePicker] = useToggle(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  useDetectOutsideClick(pickerRef, () => {
    if (isPickerOpen) {
      togglePicker();
    }
  });

  const addEmoji = (e: EmojiEvent) => {
    const emoji = e.native;
    setMessage(emoji);
  };

  return (
    <EmojiPickerContainer ref={pickerRef}>
      <Icon name="smile" onClick={togglePicker} />
      {isPickerOpen && (
        <EmojiPickerDropdown>
          <Picker data={data} onEmojiSelect={addEmoji} />
        </EmojiPickerDropdown>
      )}
    </EmojiPickerContainer>
  );
};

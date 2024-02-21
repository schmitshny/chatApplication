import { EmojiWrapper } from './MessageEmoji.styles';

interface MessageEmojiProps {
  emoji: string;
  id: number;
  onClick: (id: number) => void;
}

export const MessageEmoji = ({ emoji, id, onClick }: MessageEmojiProps) => {
  return <EmojiWrapper onClick={() => onClick(id)}>{emoji}</EmojiWrapper>;
};

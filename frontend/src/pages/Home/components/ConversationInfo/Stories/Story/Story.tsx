import { Avatar } from '../../../../../../components';
import { StyledStory } from './Story.styles';

interface StoryProps {
  storyUrl: string;
  onClick?: () => void;
}

export const Story = ({ storyUrl, onClick }: StoryProps) => {
  return (
    <StyledStory onClick={onClick} data-testid="single-story">
      <Avatar size="medium" shape="circle" avatarUrl={storyUrl} />
    </StyledStory>
  );
};

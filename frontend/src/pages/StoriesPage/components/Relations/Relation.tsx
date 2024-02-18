import { Avatar } from '../../../../components';
import { Story } from '../../../../features/stories/types';
import { useDateFormat } from '../../../../hooks/useDateFormat';
import { RelationWrapper, UserName, StoryTime, StoryAvatar } from './Relation.styles';

interface RelationProps {
  story: Story;
  isActive: boolean;
  handleClick: (id: number) => void;
  index: number;
}

export const Relation = ({ story, isActive, handleClick, index }: RelationProps) => {
  const { timeSince } = useDateFormat();
  const { user, createdAt } = story;
  const storyTime = timeSince(createdAt);

  return (
    <RelationWrapper $isActive={isActive} onClick={() => handleClick(index)}>
      <StoryAvatar>
        <Avatar avatarUrl={story.imageUrl} />
      </StoryAvatar>
      <div>
        <UserName>{`${user.name} ${user.lastName}`}</UserName>
        <StoryTime>{storyTime}</StoryTime>
      </div>
    </RelationWrapper>
  );
};

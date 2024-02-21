import React from 'react';
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

const Relation: React.ForwardRefRenderFunction<HTMLDivElement, RelationProps> = (
  { story, isActive, handleClick, index },
  ref,
) => {
  const { timeSince } = useDateFormat();
  const { user, createdAt } = story;
  const storyTime = timeSince(createdAt);

  return (
    <RelationWrapper $isActive={isActive} onClick={() => handleClick(index)} ref={ref}>
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

export default React.forwardRef(Relation);

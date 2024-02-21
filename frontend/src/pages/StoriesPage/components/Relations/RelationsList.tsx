import React, { useEffect, useRef } from 'react';
import { Icon } from '../../../../components';
import { Story } from '../../../../features/stories/types';
import { SectionHeader } from '../../../Home/components/SectionHeader';
import { SectionHeaderTitle } from '../../../Home/components/SectionHeader/SectionHeader.styles';
import { AddRelation } from '../AddRelation';
import Relation from './Relation';
import { RelationsListWrapper, ScrollableContainer, SectionTitle } from './RelationsList.styles';

interface RelationsProps {
  stories: Story[];
  activeStoryId: number;
  setActiveStoryId: (id: number) => void;
}

export const RelationsList = ({ stories, activeStoryId, setActiveStoryId }: RelationsProps) => {
  const refs = useRef<React.RefObject<HTMLDivElement>[]>(stories.map(() => React.createRef()));

  useEffect(() => {
    const activeRef = refs.current[activeStoryId];
    if (activeRef && activeRef.current) {
      activeRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [activeStoryId]);

  return (
    <RelationsListWrapper>
      <SectionHeader
        leftSection={<SectionHeaderTitle>Stories</SectionHeaderTitle>}
        rightSection={<Icon name="pen" />}
      />
      <AddRelation />
      <SectionTitle>All Relations</SectionTitle>
      <ScrollableContainer>
        {stories.map((story, index) => (
          <Relation
            key={story.id}
            story={story}
            isActive={activeStoryId === index}
            handleClick={setActiveStoryId}
            index={index}
            ref={refs.current[index]}
          />
        ))}
      </ScrollableContainer>
    </RelationsListWrapper>
  );
};

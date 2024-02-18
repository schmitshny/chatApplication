import { Icon } from '../../../../components';
import { Story } from '../../../../features/stories/types';
import { SectionHeader } from '../../../Home/components/SectionHeader';
import { SectionHeaderTitle } from '../../../Home/components/SectionHeader/SectionHeader.styles';
import { GroupChatSwitcher } from '../../../Home/components/UsersList/GroupChatSwitcher';
import { Relation } from './Relation';
import { RelationsListWrapper } from './RelationsList.styles';

interface RelationsProps {
  stories: Story[];
  activeStoryId: number;
  setActiveStoryId: (id: number) => void;
}

export const RelationsList = ({ stories, activeStoryId, setActiveStoryId }: RelationsProps) => {
  return (
    <RelationsListWrapper>
      <SectionHeader
        leftSection={<SectionHeaderTitle>Stories</SectionHeaderTitle>}
        rightSection={<Icon name="pen" />}
      />
      {/* <GroupChatSwitcher /> */}
      {stories.map((story, index) => (
        <Relation
          key={story.id}
          story={story}
          isActive={activeStoryId === index}
          handleClick={setActiveStoryId}
          index={index}
        />
      ))}
    </RelationsListWrapper>
  );
};

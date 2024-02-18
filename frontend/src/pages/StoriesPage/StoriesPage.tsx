import { NavBar } from '../../components';
import { PageContainer, StoriesWrapper } from './StoriesPage.styles';
import { RelationsList } from './components/Relations';
import { StoryViewer } from '../Home/components/ConversationInfo/Stories/StoryViewer/StoryViewer';
import { useStories } from '../../features/stories/useStories';
import { useState } from 'react';

const StoriesPage = () => {
  const { data: stories } = useStories();
  const [activeStoryId, setActiveStoryId] = useState(0);

  console.log('stories', stories);

  return (
    <PageContainer>
      <NavBar />
      {stories ? (
        <>
          <RelationsList stories={stories} activeStoryId={activeStoryId} setActiveStoryId={setActiveStoryId} />
          <StoriesWrapper>
            <StoryViewer stories={stories} initialStoryIndex={activeStoryId} setActiveStoryId={setActiveStoryId} />
          </StoriesWrapper>
        </>
      ) : (
        <div>No stories found </div>
      )}
    </PageContainer>
  );
};

export default StoriesPage;

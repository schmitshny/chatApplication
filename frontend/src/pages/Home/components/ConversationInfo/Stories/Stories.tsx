import { useStories } from '../../../../../features/stories/useStories';
import { Story } from './Story';
import { AddStory } from './AddStory';
import { StoriesHeader, StoriesList, StoriesWrapper } from './Stories.styles';
import { Spinner } from '../../../../../components';
import { useState } from 'react';
import { StoryModal } from './StoryModal/StoryModal';

export const Stories = () => {
  const { data: stories, isLoading, isSuccess } = useStories();
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(0);

  const handleStoryClick = (index: number) => {
    setSelectedStoryIndex(index);
    setIsViewerOpen(true);
  };

  return (
    <StoriesWrapper>
      <StoriesHeader>Stories</StoriesHeader>
      {isLoading && <Spinner />}
      {isSuccess && !isLoading && (
        <>
          <StoriesList>
            <AddStory />
            {stories &&
              stories.map((story, index) => (
                <Story key={story.id} storyUrl={story.imageUrl} onClick={() => handleStoryClick(index)} />
              ))}
          </StoriesList>
          {isViewerOpen && (
            <StoryModal
              stories={stories}
              initialStoryIndex={selectedStoryIndex}
              onClose={() => setIsViewerOpen(false)}
            />
          )}
        </>
      )}
    </StoriesWrapper>
  );
};

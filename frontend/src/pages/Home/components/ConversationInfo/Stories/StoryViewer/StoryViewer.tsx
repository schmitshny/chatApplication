import { useState, useEffect, useRef } from 'react';
import { Avatar, Icon } from '../../../../../../components';
import { Story } from '../../../../../../features/stories/types';
import {
  NextButton,
  PreviousButton,
  StoryContainer,
  StoryImage,
  UserInfo,
  UserName,
  ImageContainer,
  ProgressBar,
} from './StoryViewer.styles';
import { resetAndStartTimer } from './utils';

interface StoryViewerProps {
  stories: Story[];
  initialStoryIndex: number;
  onClose?: () => void;
  setActiveStoryId?: (id: number) => void;
}

export const STORY_DURATION_MS = 5000;

export const StoryViewer = ({ stories, initialStoryIndex, onClose, setActiveStoryId }: StoryViewerProps) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(initialStoryIndex);
  const timerRef = useRef<number>();

  useEffect(() => {
    resetAndStartTimer(
      timerRef,
      () => {
        if (currentStoryIndex < stories.length - 1) {
          setCurrentStoryIndex(currentStoryIndex + 1);
          if (setActiveStoryId) setActiveStoryId(currentStoryIndex + 1);
        } else {
          onClose && onClose();
        }
      },
      STORY_DURATION_MS,
      clearTimeout,
    );

    const currentTimer = timerRef.current;
    console.log('initialStoryIndex', initialStoryIndex);

    return () => {
      if (currentTimer) {
        clearTimeout(currentTimer);
      }
    };
  }, [currentStoryIndex, stories.length, onClose, setActiveStoryId, initialStoryIndex]);

  useEffect(() => {
    setCurrentStoryIndex(initialStoryIndex);
  }, [initialStoryIndex]);

  const handleNextStory = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
      if (setActiveStoryId) setActiveStoryId(currentStoryIndex + 1);
    }
  };

  const handlePreviousStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
      if (setActiveStoryId) setActiveStoryId(currentStoryIndex - 1);
    }
  };

  const currentStory = stories[currentStoryIndex];

  if (!currentStory) {
    // Możesz tutaj obsłużyć brak historii, np. wyświetlając komunikat błędu lub zamykając widok
    console.error('No story found at this index:', currentStoryIndex);
    return null; // lub inne zachowanie, jakie chcesz zaimplementować
  }

  const user = currentStory.user;

  return (
    <StoryContainer data-testid="story-viewer">
      <PreviousButton onClick={handlePreviousStory} disabled={currentStoryIndex === 0} data-testid="next-button">
        <Icon name="prev" customColor="#7393b3" />
      </PreviousButton>
      <ImageContainer>
        <ProgressBar $duration={STORY_DURATION_MS} key={currentStoryIndex} />
        <UserInfo>
          <Avatar avatarUrl={user.avatarImg} />
          <UserName>{`${user.name} ${user.lastName}`}</UserName>
        </UserInfo>
        <StoryImage src={currentStory.imageUrl} alt="Story" />
      </ImageContainer>
      <NextButton
        onClick={handleNextStory}
        disabled={currentStoryIndex === stories.length - 1}
        data-testid="previous-button"
      >
        <Icon name="prev" customColor="#7393b3" />
      </NextButton>
    </StoryContainer>
  );
};

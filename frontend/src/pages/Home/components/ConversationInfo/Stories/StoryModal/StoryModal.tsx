import { Modal } from '../../../../../../components';
import { Story } from '../../../../../../features/stories/types';
import { StoryViewer } from '../StoryViewer/StoryViewer';

interface StoryViewerProps {
  stories: Story[];
  initialStoryIndex: number;
  onClose: () => void;
}

export const StoryModal = ({ stories, initialStoryIndex, onClose }: StoryViewerProps) => {
  return (
    <Modal onClose={onClose} show={true}>
      <StoryViewer stories={stories} initialStoryIndex={initialStoryIndex} onClose={onClose} />
    </Modal>
  );
};

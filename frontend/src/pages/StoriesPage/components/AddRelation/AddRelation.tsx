import { useState } from 'react';
import { Button, Modal } from '../../../../components';
import { PickerContainer } from '../../../Home/components/ConversationInfo/Stories/AddStory/AddStory.styles';
import ReactImagePickerEditor from 'react-image-picker-editor';
import { pickerConfig } from '../../../Home/components/ConversationInfo/Stories/utils';
import { useAddStory } from '../../../../features/stories/useAddStory';
import { AddDescription, AddIcon, AddRelationWrapper, AddTitle, AddRelationAction } from './AddRelation.style';
import { useAuthContext } from '../../../../features/auth/context/useAuthContext';

export const AddRelation = () => {
  const { user } = useAuthContext();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { mutate: addStory, isLoading } = useAddStory();
  const [imageSrc, setImageSrc] = useState<string | undefined>('');

  const initialImage = '';

  const handleSubmit = () => {
    if (imageSrc && user?.id) {
      addStory({ userId: user?.id, imageUrl: imageSrc });
      setModalOpen(false);
    }
  };

  const handleAttachImageClick = () => {
    setModalOpen(true);
  };

  return (
    <AddRelationWrapper>
      <h5>Your relation</h5>
      <AddRelationAction>
        <AddIcon onClick={handleAttachImageClick}>+</AddIcon>
        <div>
          <AddTitle>Create a story</AddTitle>
          <AddDescription>Share a photo or video</AddDescription>
        </div>
      </AddRelationAction>
      <Modal show={modalOpen} onClose={() => setModalOpen(false)}>
        <PickerContainer>
          <ReactImagePickerEditor
            config={pickerConfig}
            imageSrcProp={initialImage}
            imageChanged={(newDataUri: any) => {
              setImageSrc(newDataUri);
            }}
          />
          <Button onClick={handleSubmit} disabled={!imageSrc || isLoading}>
            Add Story
          </Button>
        </PickerContainer>
      </Modal>
    </AddRelationWrapper>
  );
};

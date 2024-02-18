import { useState } from 'react';
import { useAuthContext } from '../../../../../../features/auth/context/useAuthContext';
import { useAddStory } from '../../../../../../features/stories/useAddStory';
import { Avatar, Button, Icon, Modal } from '../../../../../../components';

import ReactImagePickerEditor from 'react-image-picker-editor';
import 'react-image-picker-editor/dist/index.css';

import { pickerConfig } from '../utils';
import { StyledStory } from '../Story/Story.styles';
import { AddIcon, PickerContainer, SkeletonLoader } from './AddStory.styles';

export const AddStory = () => {
  const { user } = useAuthContext();
  const { mutate: addStory, isLoading } = useAddStory();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
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
    <>
      <StyledStory>
        <Avatar size="medium" shape="circle" avatarUrl={user?.avatarImg} />
        <AddIcon onClick={handleAttachImageClick}>
          <Icon name="plus" />
        </AddIcon>
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
      </StyledStory>
      {isLoading && (
        <StyledStory>
          <SkeletonLoader />
        </StyledStory>
      )}
    </>
  );
};

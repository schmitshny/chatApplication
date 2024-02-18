import { useState } from 'react';
import { useToggle } from '../../../../../hooks/useToggle';
import { useConversationMedia } from '../../../../../features/chat/useConversationMedia';
import { Icon, Modal, Spinner } from '../../../../../components';
import {
  MediaWrapper,
  MediaHeader,
  MediaTitle,
  RotatableIconWrapper,
  ImagesContainer,
  ConversationImage,
  NoImagesText,
  LoaderWrapper,
} from './Media.styles';

interface MediaProps {
  conversationId: number;
}

export const Media = ({ conversationId }: MediaProps) => {
  const [isMediaExpanded, toggleMediaExpanded] = useToggle(false);
  const [selectedImage, setSelectedImage] = useState('');
  const { data: ConversationImages, isLoading, prefetchConversationMedia } = useConversationMedia(conversationId);

  const handleCloseModal = () => {
    setSelectedImage('');
  };

  return (
    <MediaWrapper onMouseEnter={() => prefetchConversationMedia()}>
      <MediaHeader onClick={toggleMediaExpanded}>
        <MediaTitle>Media</MediaTitle>
        <RotatableIconWrapper $isRotated={isMediaExpanded}>
          <Icon name="next" />
        </RotatableIconWrapper>
      </MediaHeader>
      <ImagesContainer $isExpanded={isMediaExpanded}>
        {isLoading && (
          <LoaderWrapper>
            <Spinner size="large" />
          </LoaderWrapper>
        )}
        {ConversationImages?.length ? (
          ConversationImages?.map((image, index) => (
            <ConversationImage
              key={index}
              src={image}
              alt="Conversation"
              onClick={() => setSelectedImage(image)}
              loading="lazy"
            />
          ))
        ) : (
          <NoImagesText>No images found</NoImagesText>
        )}
      </ImagesContainer>
      <Modal show={!!selectedImage} onClose={handleCloseModal}>
        <img src={selectedImage} alt="Conversation" />
      </Modal>
    </MediaWrapper>
  );
};

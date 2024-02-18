import { Icon } from '../../../../../../components';
import { DeleteIcon, ImagePreviewWrapper, Image } from './ImagePreview.styles';

interface ImagePreviewProps {
  previewUrl: string;
  handleDeleteImage: () => void;
}

export const ImagePreview = ({ previewUrl, handleDeleteImage }: ImagePreviewProps) => {
  return (
    <ImagePreviewWrapper>
      <Image src={previewUrl} alt="Preview" />
      <DeleteIcon>
        <Icon name="delete" onClick={handleDeleteImage} />
      </DeleteIcon>
    </ImagePreviewWrapper>
  );
};

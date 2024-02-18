import { useRef } from 'react';
import { fileToBase64 } from '../../../../../../utils/fileToBase64';
import { Icon } from '../../../../../../components';
import { useAlerts } from '../../../../../../components/Alert/useAlerts';

interface ImagePickerProps {
  onSelectImage: (image: string) => void;
  setPreviewUrl: (previewUrl: string) => void;
}

export const ImagePicker = ({ onSelectImage, setPreviewUrl }: ImagePickerProps) => {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const { addAlert } = useAlerts();

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      if (file.size > 10000000) {
        addAlert('File size is too big.', 'error');
        return;
      }

      const base64File = await fileToBase64(file);
      onSelectImage(base64File);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleAttachImageClick = () => {
    imageInputRef.current?.click();
  };

  return (
    <>
      <Icon name="image" onClick={handleAttachImageClick} hoverText="Send Image" />
      <input
        ref={imageInputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
    </>
  );
};

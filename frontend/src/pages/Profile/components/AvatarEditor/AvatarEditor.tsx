import { useState } from 'react';
import { useUpdateUserAvatar } from '../../../../features/User/useUpdateUserAvatar';
import EditAvatar from 'react-avatar-edit';
import { Button } from '../../../../components';
import { AvatarEditorContainer } from './AvatarEditor.styles';

interface AvatarEditorProps {
  userId?: number;
  closeModal: () => void;
}

export const AvatarEditor = ({ userId, closeModal }: AvatarEditorProps) => {
  const src = undefined;
  const [preview, setPreview] = useState<string | undefined>(undefined);
  const changeAvatar = useUpdateUserAvatar();

  const onClose = () => {
    setPreview(undefined);
  };

  const onCrop = (view: string) => {
    setPreview(view);
  };

  const handleSubmit = () => {
    if (preview !== undefined && userId !== undefined) {
      changeAvatar.mutate(
        { userId, avatarFile: preview },
        {
          onSuccess: () => {
            closeModal();
          },
        },
      );
    }
  };

  return (
    <AvatarEditorContainer>
      <EditAvatar
        width={400}
        height={400}
        src={src}
        onCrop={onCrop}
        onClose={onClose}
        labelStyle={{ color: '#007bff' }}
      />
      <Button onClick={handleSubmit}>Change Avatar</Button>
    </AvatarEditorContainer>
  );
};

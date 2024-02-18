import { ChangeEvent, useRef } from 'react';
import { Icon } from '../../../../../../components';
import { fileToBase64 } from '../../../../../../utils/fileToBase64';
import { File as FileToSend } from '../../../../../../features/chat/types';
import { useAlerts } from '../../../../../../components/Alert/useAlerts';

interface FilePickerProps {
  onSelectFile: (file: FileToSend) => void;
  setPreviewFile: (file: File | null) => void;
}

export const FilePicker = ({ onSelectFile, setPreviewFile }: FilePickerProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { addAlert } = useAlerts();

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      if (file.size > 10000000) {
        addAlert('File size is too big.', 'error');
        return;
      }

      setPreviewFile(file);
      const base64File = await fileToBase64(file);

      onSelectFile({
        fileUrl: base64File,
        fileName: file.name,
      });
    }
  };

  const handleAttachFileClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <Icon name="attach" hoverText="Attach File" onClick={handleAttachFileClick} />
      <input
        ref={fileInputRef}
        type="file"
        style={{ display: 'none' }}
        accept=".pdf, .doc, .docx, .txt"
        onChange={handleFileChange}
      />
    </>
  );
};

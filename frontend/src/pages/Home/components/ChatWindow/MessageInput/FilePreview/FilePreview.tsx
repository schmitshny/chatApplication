import { Icon } from '../../../../../../components';
import { shortenText } from '../../../../../../utils/shortenText';
import { formatFileSize } from './utils';
import { DeleteIcon, FileInfo, FileName, FilePreviewContainer, FileSize } from './FilePreview.styles';

interface FilePreviewProps {
  file: File;
  onDeleteFile: () => void;
}

export const FilePreview = ({ file, onDeleteFile }: FilePreviewProps) => {
  const fileSize = formatFileSize(file.size);

  const fileName = shortenText(file.name, 10);

  return (
    <FilePreviewContainer title={file.name}>
      <Icon name="file" />
      <FileInfo>
        <FileName>{fileName}</FileName>
        <FileSize>{fileSize}</FileSize>
      </FileInfo>
      <DeleteIcon>
        <Icon name="delete" onClick={onDeleteFile} />
      </DeleteIcon>
    </FilePreviewContainer>
  );
};

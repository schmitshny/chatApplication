import { useState } from 'react';
import { useUsers } from '../../../../../features/chat/useUsers';
import { useDateFormat } from '../../../../../hooks/useDateFormat';
import { Avatar, Modal, Icon } from '../../../../../components';
import { User } from '../../../../../features/auth/types';
import { IMessage } from '../../../../../features/chat/types';
import {
  MessageContainer,
  MessageInfoWrapper,
  MessageText,
  MessageImage,
  MessageFile,
  FileName,
  MessageTime,
  UserName,
} from './Message.styles';

export interface MessageProps {
  message: IMessage;
}

export const Message = ({ message }: MessageProps) => {
  const { content, sentAt, senderId, imageUrl, file } = message;
  const [displayImageModal, setDisplayImageModal] = useState(false);
  const { data: users } = useUsers();
  const user = users?.find((user: User) => user.id === senderId);

  const { formatDate } = useDateFormat();
  return (
    <MessageContainer>
      <Avatar avatarUrl={user?.avatarImg} />
      <div>
        <MessageInfoWrapper>
          <UserName>{user?.name}</UserName>
          {sentAt && <MessageTime>{formatDate(sentAt)}</MessageTime>}
        </MessageInfoWrapper>
        <MessageText>{content}</MessageText>
        {imageUrl && <MessageImage src={imageUrl} alt="message" onClick={() => setDisplayImageModal(true)} />}
        {file && (
          <MessageFile>
            <Icon name="documents" />
            <FileName href={file.fileUrl} download={file.fileName}>
              {file.fileName}
            </FileName>
          </MessageFile>
        )}
        <Modal show={displayImageModal} onClose={() => setDisplayImageModal(false)}>
          <img src={imageUrl} alt="message" />
        </Modal>
      </div>
    </MessageContainer>
  );
};

import { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import { useDebounce } from '../../../../../hooks/useDebounce/useDebounce';

import { Icon } from '../../../../../components';
import { File as FileToSend, ISendMessage, SOCKET_EVENTS } from '../../../../../features/chat/types';
import { EmojiPicker } from './EmojiPicker';
import { FilePicker } from './FilePicker';
import { ImagePicker } from './ImagePicker';
import { ImagePreview } from './ImagePreview';
import { FilePreview } from './FilePreview';

import {
  InputWrapper,
  MessageInputContainer,
  MessageInputField,
  SendIconWrapper,
  PreviewWrapper,
} from './MessageInput.styles';
import { IconsWrapper } from '../SelectedUserInfo/SelectedUserInfo.styles';

interface MessageInputProps {
  currentUserId: number;
  selectedUserId: number;
  socket: Socket | null;
  conversationId?: number;
  handleTypingChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sendTypingStatus: (isTyping: boolean) => void;
}

export const MessageInput = ({
  currentUserId,
  selectedUserId,
  socket,
  conversationId,
  handleTypingChange,
  sendTypingStatus,
}: MessageInputProps) => {
  const [message, setMessage] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<FileToSend | undefined>(undefined);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [previewFile, setPreviewFile] = useState<File | null>(null);
  const debouncedTypingChange = useDebounce(handleTypingChange, 500);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
    debouncedTypingChange(e);
  };

  const handleSendMessage = useDebounce(() => {
    if ((message.trim().length || selectedImage || selectedFile) && socket) {
      const messageData: ISendMessage = {
        senderId: currentUserId,
        recipientId: selectedUserId,
        content: message,
        image: selectedImage,
        file: selectedFile,
        conversationId,
      };

      socket.emit(SOCKET_EVENTS.message, messageData);
      sendTypingStatus(false);
      setMessage('');
      setSelectedImage(null);
      setSelectedFile(undefined);
      setPreviewUrl(null);
      setPreviewFile(null);
    }
  }, 500);

  const updateMessage = (message: string) => {
    setMessage((prevMessage) => prevMessage + message);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleImageSelect = (image: string) => {
    setSelectedImage(image);
  };

  const handleImagePreview = (previewUrl: string) => {
    setPreviewUrl(previewUrl);
  };

  const handleFileSelect = (file: FileToSend) => {
    setSelectedFile(file);
  };

  const handleDeleteImage = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
  };

  const handleDeleteFile = () => {
    setSelectedFile(undefined);
    setPreviewFile(null);
  };

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <>
      <MessageInputContainer>
        {(previewUrl || previewFile) && (
          <PreviewWrapper>
            {previewUrl && <ImagePreview previewUrl={previewUrl} handleDeleteImage={handleDeleteImage} />}
            {previewFile && <FilePreview file={previewFile} onDeleteFile={handleDeleteFile} />}
          </PreviewWrapper>
        )}
        <InputWrapper>
          <MessageInputField
            value={message}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            placeholder="Type your message..."
            maxLength={500}
          />
          <IconsWrapper>
            <EmojiPicker setMessage={updateMessage} />
            <FilePicker onSelectFile={handleFileSelect} setPreviewFile={setPreviewFile} />
            <ImagePicker onSelectImage={handleImageSelect} setPreviewUrl={handleImagePreview} />
            <SendIconWrapper>
              <Icon name="send" onClick={handleSendMessage} />
            </SendIconWrapper>
          </IconsWrapper>
        </InputWrapper>
      </MessageInputContainer>
    </>
  );
};

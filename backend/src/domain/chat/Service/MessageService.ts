import { Message } from '../model/Message';
import { IMessageService } from './IMessageService';
import MessageRepository from '../repository/MessageRepository';
import { ICreateMessage } from '../dto/MessageDto';
import { processFile, processImage } from './utils';

class MessageService implements IMessageService {
  async getUsersConversations(userId: string) {
    return MessageRepository.getUsersConversations(userId);
  }
  async getConversation(
    user1Id: string,
    user2Id: string,
    messagePage: number,
    messagePageSize: number,
  ) {
    const messageOffset = (messagePage - 1) * messagePageSize;
    const messageLimit = messagePageSize + 1;

    const { messages, conversationId } =
      await MessageRepository.getConversation(
        user1Id,
        user2Id,
        messageLimit,
        messageOffset,
      );

    if (!conversationId) {
      return null;
    }

    const hasMoreMessages = messages.length > messagePageSize;

    const messagesToSend = hasMoreMessages ? messages.slice(0, -1) : messages;

    return {
      messages: messagesToSend,
      hasMoreMessages,
      conversationId,
    };
  }

  async addMessage(message: ICreateMessage): Promise<Message> {
    const { image, senderId, recipientId, content, conversationId, file } =
      message;
    const imageUrl = image ? await processImage(image) : null;
    const fileUrl = file && (await processFile(file?.fileUrl, file?.fileName));

    const createdFile = fileUrl
      ? await MessageRepository.createFile({
          fileUrl: fileUrl,
          fileName: file?.fileName || 'file',
          conversationId,
        })
      : undefined;

    const messageToSave = {
      senderId,
      recipientId,
      content,
      imageUrl,
      file: createdFile,
      fileId: createdFile?.id,
      conversationId,
    };

    return MessageRepository.createMessage(messageToSave);
  }

  async getConversationsMedia(conversationId: string): Promise<string[]> {
    return await MessageRepository.getConversationMedia(conversationId);
  }
}

export default new MessageService();

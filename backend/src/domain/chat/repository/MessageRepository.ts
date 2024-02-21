import { Message } from '../model/Message';
import { ICreateFile, ICreateMessage } from '../dto/MessageDto';
import { IMessageRepository } from './IMessageRepository';
import { Op } from 'sequelize';
import { Conversation } from '../model/Conversation';
import { User } from '../../../domain/user/model/User';
import { File } from '../model/File';
import {
  mapConversations,
  sortConversationsByLastMessage,
} from './utils/conversationUtils';

class MessageRepository implements IMessageRepository {
  async createMessage(message: ICreateMessage): Promise<Message> {
    return Message.create(message as any);
  }
  async createFile(file: ICreateFile): Promise<File> {
    return File.create(file as any);
  }

  async getUsersConversations(userId: string) {
    const conversations = await Conversation.findAll({
      where: {
        [Op.or]: [{ user1Id: userId }, { user2Id: userId }],
      },
      include: [
        {
          model: User,
          as: 'user1',
          attributes: { exclude: ['password'] },
        },
        {
          model: User,
          as: 'user2',
          attributes: { exclude: ['password'] },
        },
        {
          model: Message,
          as: 'messages',
          attributes: ['content', 'createdAt'],
          limit: 1,
          order: [['createdAt', 'DESC']],
        },
      ],
    });

    const sortedConversations = sortConversationsByLastMessage(conversations);

    return mapConversations(sortedConversations, userId);
  }

  async getConversation(
    user1Id: string,
    user2Id: string,
    messageLimit: number,
    messageOffset: number,
  ) {
    const orderedIds =
      user1Id < user2Id
        ? { user1Id, user2Id }
        : { user1Id: user2Id, user2Id: user1Id };

    const [conversation] = await Conversation.findOrCreate({
      where: {
        user1Id: orderedIds.user1Id,
        user2Id: orderedIds.user2Id,
      },
    });

    const messages = await conversation.getMessages({
      limit: messageLimit,
      offset: messageOffset,
      order: [['createdAt', 'DESC']],
      include: [{ model: File, as: 'file' }],
    });

    return { messages, conversationId: conversation.id };
  }

  async getConversationMedia(conversationId: string) {
    const messages = await Message.findAll({
      where: { conversationId, imageUrl: { [Op.ne]: null } },
      attributes: ['imageUrl'],
    });

    return messages.map((message) => message.imageUrl);
  }
}

export default new MessageRepository();

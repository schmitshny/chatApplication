import MessageService from './../domain/chat/Service/MessageService';
import { Request, Response } from 'express';

export class ChatController {
  static async getUsersConversations(req: Request, res: Response) {
    try {
      const userId = req.params.id;
      const conversations = await MessageService.getUsersConversations(userId);
      return res.status(200).json(conversations);
    } catch (error) {
      console.error('Error fetching conversations:', error);
      return res.status(500).send({ message: 'Something went wrong', error });
    }
  }

  static async getConversation(req: Request, res: Response) {
    try {
      const { user1Id, user2Id, messagePage, messagePageSize } = req.body;

      const currentPage = messagePage || 1;
      const currentPageSize = messagePageSize || 20;

      if (!user1Id || !user2Id) {
        return res.status(400).send('Missing user id');
      }

      const conversation = await MessageService.getConversation(
        user1Id,
        user2Id,
        currentPage,
        currentPageSize,
      );

      if (!conversation) {
        return res.status(404).send('Conversation not found');
      }

      return res.json(conversation);
    } catch (error) {
      console.error('Error fetching messages:', error);
      return res.status(500).send({ message: 'Something went wrong', error });
    }
  }

  static async getConversationsMedia(req: Request, res: Response) {
    try {
      const conversationId = req.params.id;
      const media = await MessageService.getConversationsMedia(conversationId);
      return res.status(200).json(media);
    } catch (error) {
      console.error('Error fetching conversations media:', error);
      return res.status(500).send({ message: 'Something went wrong', error });
    }
  }
}

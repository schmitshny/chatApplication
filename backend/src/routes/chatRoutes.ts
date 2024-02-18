import { ChatController } from './../controllers/ChatController';
import { Router } from 'express';

export const chatRoutes = (): Router => {
  const router = Router();
  router.post('/get-conversation', ChatController.getConversation);
  router.get('/get-conversations/:id', ChatController.getUsersConversations);
  router.get(
    '/get-conversation-media/:id',
    ChatController.getConversationsMedia,
  );
  return router;
};

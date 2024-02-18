import { StoryController } from './../controllers/StoryController';
import { Router } from 'express';

export const storiesRoutes = (): Router => {
  const router = Router();
  router.post('/add', StoryController.addStory);
  router.get('/', StoryController.getStories);
  return router;
};

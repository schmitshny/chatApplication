import { Request, Response } from 'express';
import StoryService from '../domain/stories/service/StoryService';
import { StoryCreateDTO } from '../domain/stories/dto/StoryDto';

export class StoryController {
  static async addStory(req: Request, res: Response): Promise<void> {
    try {
      const story: StoryCreateDTO = req.body;
      const newStory = await StoryService.addStory(story);
      res.json(newStory);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Something went wrong', error });
    }
  }

  static async getStories(req: Request, res: Response): Promise<void> {
    try {
      const stories = await StoryService.getStories();
      res.json(stories);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Something went wrong', error });
    }
  }
}

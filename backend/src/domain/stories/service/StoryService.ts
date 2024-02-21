import StoryRepository from './../repository/StoryRepository';
import { IStoryService } from './IStoryService';
import { StoryCreateDTO } from './../dto/StoryDto';
import { processImage } from '../../../domain/chat/Service/utils';

class StoryService implements IStoryService {
  async addStory(createDto: StoryCreateDTO) {
    const imageUrl = await processImage(createDto.imageUrl);

    if (!imageUrl) throw new Error('Something went wrong');

    const storyToSave: StoryCreateDTO = {
      ...createDto,
      imageUrl: imageUrl,
    };

    return await StoryRepository.createStory(storyToSave);
  }

  async getStories() {
    return await StoryRepository.getStories();
  }
}

export default new StoryService();

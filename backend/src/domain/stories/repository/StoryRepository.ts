import { Story } from './../model/Story';
import { IStoryRepository } from './IStoryRepository';
import { StoryCreateDTO, StoryResponseDTO } from './../dto/StoryDto';
import { User } from '../../../domain/user/model/User';

class StoryRepository implements IStoryRepository {
  async createStory(createDto: StoryCreateDTO) {
    const story = await Story.create({
      ...createDto,
      userId: createDto.userId,
    });

    await story.reload({
      include: [User],
      order: [['createdAt', 'DESC']],
    });

    return this.toStoryResponseDTO(story);
  }

  async getStories() {
    const stories = await Story.findAll({
      include: [User],
      order: [['createdAt', 'DESC']],
    });
    return stories.map(this.toStoryResponseDTO);
  }

  private toStoryResponseDTO(story: Story): StoryResponseDTO {
    return {
      id: story.id,
      user: {
        id: story.id,
        name: story.user.name,
        lastName: story.user.lastName,
        avatarImg: story.user.avatarImg,
      },
      imageUrl: story.imageUrl,
      createdAt: story.createdAt,
    };
  }
}

export default new StoryRepository();

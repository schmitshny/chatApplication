import { StoryCreateDTO, StoryResponseDTO } from './../dto/StoryDto';

export interface IStoryRepository {
  createStory(createDto: StoryCreateDTO): Promise<StoryResponseDTO>;
  getStories(): Promise<StoryResponseDTO[]>;
}

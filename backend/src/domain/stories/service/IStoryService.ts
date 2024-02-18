import { StoryCreateDTO, StoryResponseDTO } from './../dto/StoryDto';

export interface IStoryService {
  addStory(createDto: StoryCreateDTO): Promise<StoryResponseDTO>;
  getStories(): Promise<StoryResponseDTO[]>;
}

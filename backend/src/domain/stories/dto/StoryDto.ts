import { UserDTO } from '../../../domain/user/dto/UserDto';

export interface StoryCreateDTO {
  userId: number;
  imageUrl: string;
}

export interface StoryResponseDTO {
  id: number;
  imageUrl: string;
  createdAt: Date;
  user: UserDTO;
}

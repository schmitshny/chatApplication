import { User } from '../auth/types';

export type Story = {
  id: string;
  imageUrl: string;
  createdAt: string;
  user: User;
};

export interface StoryCreate {
  imageUrl: string;
  userId: number;
}

export const STORY_QUERY_KEYS = {
  stories: 'stories',
};

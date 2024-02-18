import { Story } from '../types';
import { User } from '../../auth/types';

export const mockUser: User = {
  id: 1,
  name: 'John',
  avatarImg: 'http://example.com/avatar.jpg',
  lastName: 'Doe',
  email: 'mail',
};

export const mockStory: Story = {
  id: '1',
  imageUrl: 'http://example.com/story1.jpg',
  createdAt: new Date().toISOString(),
  user: mockUser,
};

export const mockStories: Story[] = [
  {
    id: '1',
    imageUrl: 'http://example.com/story1.jpg',
    createdAt: new Date().toISOString(),
    user: mockUser,
  },
  {
    id: '2',
    imageUrl: 'http://example.com/story2.jpg',
    createdAt: new Date().toISOString(),
    user: {
      ...mockUser,
      name: 'Brad',
    },
  },
  {
    id: '3',
    imageUrl: 'http://example.com/story3.jpg',
    createdAt: new Date().toISOString(),
    user: mockUser,
  },
];

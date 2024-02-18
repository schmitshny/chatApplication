import { useQuery } from 'react-query';
import api from '../../api';
import { STORY_QUERY_KEYS, Story } from './types';

const fetchStories = async (): Promise<Story[]> => {
  const { data } = await api.get<Story[]>('/stories');
  return data;
};

export const useStories = () => {
  return useQuery<Story[]>(STORY_QUERY_KEYS.stories, fetchStories);
};

import { useMutation, UseMutationResult, useQueryClient } from 'react-query';
import api from '../../api';
import { StoryCreate, Story, STORY_QUERY_KEYS } from './types';

const addStory = async (storyData: StoryCreate): Promise<Story> => {
  const { data } = await api.post<Story>('/stories/add', storyData);
  return data;
};

export const useAddStory = (): UseMutationResult<Story, Error, StoryCreate> => {
  const queryClient = useQueryClient();

  return useMutation(addStory, {
    onSuccess: () => {
      queryClient.invalidateQueries(STORY_QUERY_KEYS.stories);
    },
  });
};

import { useQuery } from 'react-query';
import { getAllUsers } from './api';
import { QUERY_KEYS } from './types';

export const useUsers = () => {
  return useQuery(QUERY_KEYS.users, async () => getAllUsers());
};

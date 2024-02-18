import { useQuery } from 'react-query';
import { searchUsers } from './api';

export const useSearchUsers = (searchTerm: string) => {
  return useQuery(['searchUsers', searchTerm], () => searchUsers(searchTerm), {
    enabled: !!searchTerm,
  });
};

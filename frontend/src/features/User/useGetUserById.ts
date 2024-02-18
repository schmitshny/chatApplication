import { useQuery } from 'react-query';
import api from '../../api';

const getUserById = async (userId: number) => {
  const { data } = await api.get(`/get-user/${userId}`);
  return data;
};

export const useGetUserById = (userId: number) => {
  return useQuery(['getUserById', userId], () => getUserById(userId), {
    enabled: !!userId,
  });
};

import api from '../../api';
import { useMutation } from 'react-query';

const updateUserStatus = async (userId: string, status: string) => {
  return await api.put(`/user/update-user-status/${userId}`, { status });
};

export const useUpdateUserStatus = () => {
  return useMutation((args: { userId: string; status: string }) => updateUserStatus(args.userId, args.status), {});
};

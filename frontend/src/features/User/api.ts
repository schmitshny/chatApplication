import api from '../../api';
import { ManageAccountFormValues } from '../../pages/Profile/pages/ManageAccount/types';
import { User } from '../auth/types';

export const updateUserAvatar = async (userId: number, avatarFile: string) => {
  return await api.put<User>(`/user/update-avatar/${userId}`, JSON.stringify({ avatar: avatarFile }), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const searchUsers = async (searchTerm: string) => {
  const { data } = await api.get<User[]>(`/user/search-users/${searchTerm}`);
  return data;
};

export const updateUserData = async (userData: ManageAccountFormValues) => {
  const { data } = await api.put<User>(`/user/update-user/${userData.id}`, userData);
  return data;
};

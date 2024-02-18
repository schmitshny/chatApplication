import { useMutation } from 'react-query';
import { updateUserAvatar } from './api';
import { useAuthContext } from '../auth/context/useAuthContext';

export const useUpdateUserAvatar = () => {
  const { setUserContext } = useAuthContext();

  return useMutation((args: { userId: number; avatarFile: string }) => updateUserAvatar(args.userId, args.avatarFile), {
    onSuccess: ({ data }) => {
      setUserContext(data);
    },
    onError: (error) => {
      console.error('There was an error updating the avatar', error);
    },
  });
};

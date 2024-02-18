import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAlerts } from '../../components/Alert/useAlerts';
import { ManageAccountFormValues } from '../../pages/Profile/pages/ManageAccount/types';
import { useMutation } from 'react-query';
import { updateUserData } from './api';
import { useAuthContext } from '../auth/context/useAuthContext';

export const useUpdateUser = (setError: (error: string) => void) => {
  const navigate = useNavigate();
  const { addAlert } = useAlerts();
  const { setUserContext } = useAuthContext();

  return useMutation((userData: ManageAccountFormValues) => updateUserData(userData), {
    onSuccess: (data) => {
      navigate('/account');
      setUserContext(data);
      addAlert('Your profile has been updated successfully', 'success');
    },
    onError: (error: AxiosError) => {
      if (error.response?.status === 400) {
        setError((error.response?.data as { message: string }).message);
      } else {
        setError('An error occurred while trying to update your profile. Please try again later.');
      }
    },
  });
};

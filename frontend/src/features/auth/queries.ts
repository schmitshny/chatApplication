import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { login, register, requestResetPassword, resetPassword } from './api';
import { LoginData, RegisterData } from './types';
import { AxiosError } from 'axios';
import { useAuthContext } from './context/useAuthContext';
import { useAlerts } from '../../components/Alert/useAlerts';

export const useRegister = (setError: (error: string) => void) => {
  const navigate = useNavigate();
  const { setUserContext } = useAuthContext();

  return useMutation((data: RegisterData) => register(data), {
    onSuccess: ({ data: UserData }) => {
      setUserContext(UserData);
      navigate('/welcome');
    },
    onError: (error: AxiosError) => {
      if (error.response?.status === 409) {
        setError((error.response?.data as { message: string }).message);
      } else {
        setError('An error occurred while trying to register. Please try again later.');
      }
    },
  });
};

export const useLogin = (setError: (error: string) => void) => {
  const navigate = useNavigate();
  const { setUserContext } = useAuthContext();

  return useMutation((data: LoginData) => login(data), {
    onSuccess: ({ data: UserData }) => {
      setUserContext(UserData);
      navigate('/home');
    },

    onError: (error: AxiosError) => {
      if (error.response?.status === 404 || error.response?.status === 400) {
        setError((error.response?.data as { message: string }).message);
      } else {
        setError('An error occurred while trying to login. Please try again later.');
      }
    },
  });
};

export const useRequestResetPassword = (setError: (error: string) => void) => {
  return useMutation((email: string) => requestResetPassword(email), {
    onError: (error: AxiosError) => {
      if (error.response) {
        setError((error.response.data as { message: string }).message);
      } else {
        setError('An error occurred while trying to reset the password. Please try again later.');
      }
    },
  });
};

export const useResetPassword = (setError: (error: string) => void) => {
  const navigate = useNavigate();
  const { addAlert } = useAlerts();

  return useMutation(({ password, token }: { password: string; token: string }) => resetPassword(password, token), {
    onSuccess: () => {
      navigate('/login');
      addAlert('Password reset successfully', 'success');
    },
    onError: (error: AxiosError) => {
      if (error.response?.status === 400) {
        setError((error.response?.data as { message: string }).message);
      } else {
        setError('An error occurred while trying to reset the password. Please try again later.');
      }
    },
  });
};

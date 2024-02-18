import { useNavigate } from 'react-router-dom';
import api from './index';
import { useEffect, useRef } from 'react';
import { AxiosError } from 'axios';
import { useAuthContext } from '../features/auth/context/useAuthContext';

export const ResponseInterceptor = () => {
  const navigate = useNavigate();
  const { logout } = useAuthContext();
  const networkInterceptorId = useRef<number | null>(null);
  const unauthorizedInterceptorId = useRef<number | null>(null);

  useEffect(() => {
    networkInterceptorId.current = api.interceptors.response.use(undefined, (error: AxiosError) => {
      if (error.message === 'Network Error') {
        navigate('/error');
      } else {
        console.error('Network Error:', error);
      }
      return Promise.reject(error);
    });

    unauthorizedInterceptorId.current = api.interceptors.response.use(undefined, (error: AxiosError) => {
      if (error.response?.status === 401) {
        logout();
        navigate('/login');
      }
      return Promise.reject(error);
    });

    return () => {
      api.interceptors.response.eject(networkInterceptorId.current as number);
      api.interceptors.response.eject(unauthorizedInterceptorId.current as number);
    };
  }, [navigate, logout]);

  return null;
};

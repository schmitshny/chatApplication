import api from '../../api';
import { LoginData, RegisterData, User } from './types';

export const login = (data: LoginData) => {
  return api.post<User>('auth/login', data);
};

export const register = (data: RegisterData) => {
  return api.post<User>('/auth/register', data);
};

export const requestResetPassword = (email: string) => {
  return api.post('/auth/request-reset-password', { email });
};

export const resetPassword = (password: string, token: string) => {
  return api.post('/auth/reset-password', { password, token });
};

import React, { useState } from 'react';
import AuthContext from './AuthContext';
import { User } from '../types';
import { getFromLocalStorage, removeFromLocalStorage, setToLocalStorage } from '../../../utils/localStorage';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(getFromLocalStorage<User>('user'));

  const setUserContext = (user?: User) => {
    if (user) {
      setUser(user);
      setToLocalStorage('user', user);
    }
  };

  const logout = () => {
    setUser(null);
    removeFromLocalStorage('user');
  };

  return (
    <AuthContext.Provider value={{ user, logout, isLoggedIn: user !== null, setUserContext }}>
      {children}
    </AuthContext.Provider>
  );
};

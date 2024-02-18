import React from 'react';
import { User } from '../types';

interface AuthContextProps {
  user: User | null;
  isLoggedIn: boolean;
  setUserContext: (user?: User, token?: string) => void;
  logout: () => void;
}

const AuthContext = React.createContext<AuthContextProps | undefined>(undefined);

export default AuthContext;

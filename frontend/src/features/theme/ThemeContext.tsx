import { createContext } from 'react';
import { ThemeName } from './types';

interface ThemeContextType {
  theme: ThemeName;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

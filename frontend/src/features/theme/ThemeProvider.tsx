import React, { useState, ReactNode, useEffect } from 'react';
import { setToLocalStorage } from '../../utils/localStorage';
import { ThemeContext, ThemeName } from '.';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../styles/themes';
import { getValidatedTheme } from './utils';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeName>(getValidatedTheme());

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === ThemeName.Light ? ThemeName.Dark : ThemeName.Light));
  };

  const currentTheme = theme === ThemeName.Light ? lightTheme : darkTheme;

  useEffect(() => {
    setToLocalStorage('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

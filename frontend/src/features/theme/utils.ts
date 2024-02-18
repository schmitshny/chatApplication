import { getFromLocalStorage } from '../../utils/localStorage';
import { ThemeName, themeNameSchema } from './types';

export const getValidatedTheme = (): ThemeName => {
  const storedThemeValue = getFromLocalStorage('theme');
  const parsedTheme = themeNameSchema.safeParse(storedThemeValue);

  if (parsedTheme.success) {
    return parsedTheme.data;
  }

  const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDarkTheme ? ThemeName.Dark : ThemeName.Light;
};

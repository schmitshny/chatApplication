import { z } from 'zod';

export enum ThemeName {
  Light = 'light',
  Dark = 'dark',
}

export const themeNameSchema = z.enum([ThemeName.Light, ThemeName.Dark]);

import { describe, test, expect, vi } from 'vitest';
import { getValidatedTheme } from '../utils';
import { ThemeName } from '..';
import * as localStorageUtils from '../../../utils/localStorage';

vi.mock('../../../utils/localStorage');

describe('getValidatedTheme', () => {
  test('should return the theme from localStorage if it is valid', () => {
    vi.spyOn(localStorageUtils, 'getFromLocalStorage').mockReturnValue(ThemeName.Dark);

    const theme = getValidatedTheme();

    expect(theme).toBe(ThemeName.Dark);
  });

  test('should return light theme as default if localStorage theme is invalid', () => {
    vi.spyOn(localStorageUtils, 'getFromLocalStorage').mockReturnValue('invalid-theme');
    vi.stubGlobal(
      'matchMedia',
      vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
      })),
    );

    const theme = getValidatedTheme();

    expect(theme).toBe(ThemeName.Light);
  });

  test('should return dark theme if system preference is set to dark', () => {
    vi.spyOn(localStorageUtils, 'getFromLocalStorage').mockReturnValue(null);
    vi.stubGlobal(
      'matchMedia',
      vi.fn().mockImplementation((query) => ({
        matches: true,
        media: query,
        onchange: null,
      })),
    );

    const theme = getValidatedTheme();

    expect(theme).toBe(ThemeName.Dark);
  });
});

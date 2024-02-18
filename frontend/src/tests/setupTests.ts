import '@testing-library/jest-dom';
import { afterAll, afterEach, beforeAll, vi } from 'vitest';
import { server } from './server';

beforeAll(() => {
  server.listen();

  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: vi.fn(),
        removeListener: vi.fn(),
      };
    };
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

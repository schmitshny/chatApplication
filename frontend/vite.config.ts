/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setupTests.ts'],
  },
  resolve: {
    alias: {
      'readable-stream': 'vite-compatible-readable-stream',
    },
  },
  server: {
    port: 8080,
  }
});

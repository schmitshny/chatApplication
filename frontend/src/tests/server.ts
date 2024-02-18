import { setupServer } from 'msw/node';
import { storiesHandlers } from '../features/stories/tests/handlers';

export const baseUrl = import.meta.env.VITE_API_URL;

export const server = setupServer(...storiesHandlers);

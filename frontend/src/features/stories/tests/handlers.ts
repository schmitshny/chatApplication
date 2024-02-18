import { HttpResponse, http } from 'msw';
import { mockStory } from './mocks';

export const storiesHandlers = [
  http.get('http://localhost:8000/stories', async () => {
    return HttpResponse.json([mockStory]);
  }),
];

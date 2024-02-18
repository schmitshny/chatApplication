useAddStory;
import { act, renderHook, waitFor } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { HttpResponse, http } from 'msw';
import { server } from '../../../tests/server';
import { useAddStory } from '../useAddStory';
import { createQueryClientWrapper } from '../../../tests/wrappers';
import { mockStory } from './mocks';

describe('useAddStory', () => {
  test('successfully fetches stories', async () => {
    server.use(
      http.post('http://localhost:8000/stories/add', () => {
        return HttpResponse.json(mockStory);
      }),
    );

    const { result } = renderHook(() => useAddStory(), {
      wrapper: createQueryClientWrapper(),
    });

    act(() => {
      result.current.mutate({ userId: 1, imageUrl: 'http://example.com/story1.jpg' });
    });

    await waitFor(() => result.current.isSuccess);
    expect(result.current.data).toEqual(mockStory);
  });
});

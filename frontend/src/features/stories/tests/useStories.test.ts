import { renderHook, waitFor } from '@testing-library/react';
import { useStories } from '../useStories';
import { describe, expect, test } from 'vitest';
import { server } from '../../../tests/server';
import { HttpResponse, http } from 'msw';
import { createQueryClientWrapper } from '../../../tests/wrappers';
import { mockStories } from './mocks';

describe('useStories', () => {
  test('successfully fetches stories', async () => {
    server.use(
      http.get('http://localhost:8000/stories', () => {
        return HttpResponse.json(mockStories);
      }),
    );

    const { result } = renderHook(() => useStories(), {
      wrapper: createQueryClientWrapper(),
    });

    await waitFor(() => result.current.isSuccess);
    expect(result.current.data).toEqual(mockStories);
  });
});

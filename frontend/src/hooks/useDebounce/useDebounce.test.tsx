import { describe, it, expect, vi } from 'vitest';
import { useDebounce } from './useDebounce';
import { act, renderHook } from '@testing-library/react';

vi.useFakeTimers();

describe('useDebounce', () => {
  it('should debounce the callback function', () => {
    const callback = vi.fn();
    const delay = 500;

    const { result } = renderHook(() => useDebounce(callback, delay));

    act(() => {
      result.current('test');
      result.current('test');
      result.current('test');
    });

    expect(callback).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(delay);
    });

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith('test');
  });

  it('should cancel the debounced function on unmount', () => {
    const callback = vi.fn();
    const delay = 500;

    const { result, unmount } = renderHook(() => useDebounce(callback, delay));

    act(() => {
      result.current('test');
      unmount();
    });

    act(() => {
      vi.advanceTimersByTime(delay);
    });

    expect(callback).not.toHaveBeenCalled();
  });
});

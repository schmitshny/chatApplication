import { renderHook, act } from '@testing-library/react';
import { useToggle } from '.';
import { describe, expect, test } from 'vitest';

describe('useToggle', () => {
  test('should return false as initial value', () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current[0]).toBe(false);
  });

  test('should allow initial state to be set', () => {
    const { result } = renderHook(() => useToggle(true));
    expect(result.current[0]).toBe(true);
  });

  test('should toggle the state', () => {
    const { result } = renderHook(() => useToggle());
    const [, toggle] = result.current;

    act(() => {
      toggle();
    });

    expect(result.current[0]).toBe(true);

    act(() => {
      toggle();
    });

    expect(result.current[0]).toBe(false);
  });
});

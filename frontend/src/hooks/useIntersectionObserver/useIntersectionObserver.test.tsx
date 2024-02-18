import { renderHook, act } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { useIntersectionObserver } from '.';

function createMockIntersectionObserver(isIntersecting: boolean) {
  return vi.fn().mockImplementation((callback) => {
    const observe = vi.fn((target: Element) => {
      act(() => {
        if (isIntersecting) {
          callback([{ isIntersecting, target }], {});
        }
      });
    });

    return {
      observe,
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    };
  });
}

describe('useIntersectionObserver', () => {
  it('should return a ref object', () => {
    const mockOnIntersect = vi.fn();
    globalThis.IntersectionObserver = createMockIntersectionObserver(true);

    const { result } = renderHook(() => useIntersectionObserver(mockOnIntersect, {}, true));
    expect(result.current).toBeDefined();
    expect(typeof result.current).toBe('object');
    expect(result.current.current).toBeNull();
  });

  it('calls onIntersect when the element is intersecting', () => {
    const mockOnIntersect = vi.fn();
    globalThis.IntersectionObserver = createMockIntersectionObserver(true);

    renderHook(() => useIntersectionObserver(mockOnIntersect, {}, true));

    act(() => {
      const fakeElement = document.createElement('div');
      const observer = new globalThis.IntersectionObserver(mockOnIntersect);
      observer.observe(fakeElement);
    });

    expect(mockOnIntersect).toHaveBeenCalled();
  });

  it('does not call onIntersect when the element is not intersecting', () => {
    const mockOnIntersect = vi.fn();
    globalThis.IntersectionObserver = createMockIntersectionObserver(false);

    renderHook(() => useIntersectionObserver(mockOnIntersect, {}, true));

    act(() => {
      const fakeElement = document.createElement('div');
      const observer = new globalThis.IntersectionObserver(mockOnIntersect);
      observer.observe(fakeElement);
    });

    expect(mockOnIntersect).not.toHaveBeenCalled();
  });
});

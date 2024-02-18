import { FC, useRef } from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { describe, test, expect, afterEach, vi, beforeEach } from 'vitest';

import { useDetectOutsideClick } from '.';

const TestComponent: FC<{ callback: () => void }> = ({ callback }) => {
  const ref = useRef<HTMLDivElement>(null);
  useDetectOutsideClick(ref, callback);
  return <div ref={ref}>Test</div>;
};

const mockCallback = vi.fn();

describe('useDetectOutsideClick', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(cleanup);

  test('calls callback when clicking outside the component', () => {
    render(<TestComponent callback={mockCallback} />);
    fireEvent.mouseDown(document);

    expect(mockCallback).toHaveBeenCalled();
  });

  test('does not call callback when clicking inside the component', () => {
    const { container } = render(<TestComponent callback={mockCallback} />);

    if (container.firstChild) {
      fireEvent.mouseDown(container.firstChild);

      expect(mockCallback).not.toHaveBeenCalled();
    } else {
      throw new Error('No child element found');
    }
  });

  test('cleans up event listener on unmount', () => {
    const { unmount } = render(<TestComponent callback={mockCallback} />);
    unmount();
    fireEvent.mouseDown(document);

    expect(mockCallback).not.toHaveBeenCalled();
  });
});

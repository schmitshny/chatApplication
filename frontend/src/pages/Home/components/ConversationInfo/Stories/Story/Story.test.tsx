import { describe, test, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Story } from './Story';

describe('Story', () => {
  test('renders with provided story URL', () => {
    const testUrl = 'http://example.com/story1.jpg';
    const { container } = render(<Story storyUrl={testUrl} />);

    const storyElement = screen.getByTestId('single-story');
    expect(storyElement).toBeInTheDocument();
    expect(storyElement.querySelector('img')).toHaveAttribute('src', testUrl);
    expect(container).toMatchSnapshot();
  });

  test('calls onClick when story is clicked', () => {
    const handleClick = vi.fn();
    render(<Story storyUrl="http://example.com/story.jpg" onClick={handleClick} />);

    const storyElement = screen.getByTestId('single-story');
    fireEvent.click(storyElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

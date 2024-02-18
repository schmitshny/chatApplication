import { describe, test, expect, vi } from 'vitest';
import { act, fireEvent, screen } from '@testing-library/react';
import { render } from '../../../../../../tests/test-utils';
import { STORY_DURATION_MS, StoryViewer } from './StoryViewer';
import { mockStories } from '../../../../../../features/stories/tests/mocks';

describe('StoryViewer', () => {
  test('renders the story viewer with initial story', () => {
    const { container } = render(<StoryViewer stories={mockStories} initialStoryIndex={0} onClose={vi.fn()} />);

    const expectedUserName = `${mockStories[0].user.name} ${mockStories[0].user.lastName}`;

    expect(screen.getByTestId('story-viewer')).toBeInTheDocument();
    expect(screen.getByText(expectedUserName)).toBeInTheDocument();
    expect(screen.getByAltText('Story')).toHaveAttribute('src', mockStories[0].imageUrl);
    expect(container).toMatchSnapshot();
  });

  test('navigates to next and previous story', () => {
    render(<StoryViewer stories={mockStories} initialStoryIndex={0} onClose={vi.fn()} />);

    let expectedUserName = `${mockStories[0].user.name} ${mockStories[0].user.lastName}`;

    fireEvent.click(screen.getByTestId('next-button'));
    expect(screen.getByText(expectedUserName)).toBeInTheDocument();

    expectedUserName = `${mockStories[1].user.name} ${mockStories[1].user.lastName}`;

    fireEvent.click(screen.getByTestId('previous-button'));
    expect(screen.getByText(expectedUserName)).toBeInTheDocument();
  });

  test('auto advances to the next story', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    render(<StoryViewer stories={mockStories} initialStoryIndex={0} onClose={vi.fn()} />);

    const expectedNextUserName = `${mockStories[1].user.name} ${mockStories[1].user.lastName}`;

    act(() => {
      vi.advanceTimersByTime(STORY_DURATION_MS);
    });

    expect(screen.getByText(expectedNextUserName)).toBeInTheDocument();
  });
});

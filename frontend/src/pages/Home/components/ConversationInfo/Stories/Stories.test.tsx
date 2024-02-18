import { describe, expect, test } from 'vitest';
import { Stories } from '.';
import { render } from '../../../../../tests/test-utils';
import { waitFor, screen, fireEvent } from '@testing-library/react';
import { server } from '../../../../../tests/server';
import { HttpResponse, http } from 'msw';
import { mockStories } from '../../../../../features/stories/tests/mocks';

describe('Stories', () => {
  test('should render stories', async () => {
    const { container } = render(<Stories />);

    await waitFor(() => {
      expect(screen.getByText('Stories')).toBeInTheDocument();
    });

    expect(container).toMatchSnapshot();
  });

  test('should open story viewer when clicking on a story', async () => {
    const { container } = render(<Stories />);

    await waitFor(() => {
      expect(screen.getByText('Stories')).toBeInTheDocument();
    });

    const firstStory = screen.getAllByTestId('single-story');

    expect(firstStory).toHaveLength(1);

    const event = fireEvent.click(firstStory[0]);

    expect(event).toBeTruthy();

    expect(screen.getByTestId('story-viewer')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  test('should render multiple stories', async () => {
    server.use(
      http.get('http://localhost:8000/stories', () => {
        return HttpResponse.json(mockStories);
      }),
    );

    const { container } = render(<Stories />);

    const stories = await screen.findAllByTestId('single-story');

    expect(stories).toHaveLength(3);

    await waitFor(() => {
      expect(screen.getByText('Stories')).toBeInTheDocument();
    });

    expect(container).toMatchSnapshot();
  });
});

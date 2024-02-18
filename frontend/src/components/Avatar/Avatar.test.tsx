import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { Avatar } from '.';
import defaultAvatar from './assets/defaultAvatar.jpg';
import { AvatarShape } from './Avatar.styles';

describe('Avatar component', () => {
  test('should render correctly', () => {
    const { container } = render(<Avatar />);

    const avatarImage = screen.getByAltText('user avatar');
    expect(avatarImage).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  test('displays custom avatar image', () => {
    const { container } = render(<Avatar avatarUrl="https://example.com/avatar.png" />);

    const avatarImage = screen.getByRole('img', { name: 'user avatar' });
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute('src', 'https://example.com/avatar.png');

    expect(container).toMatchSnapshot();
  });

  test.each<AvatarShape>(['circle', 'rounded'])('displays with shape %s', (shape) => {
    const { container } = render(<Avatar shape={shape} />);

    expect(container).toMatchSnapshot();
  });

  test.each([true, false])('displays status dot when displayStatus is %s', (displayStatus) => {
    render(<Avatar displayStatus={displayStatus} />);

    const statusDot = screen.queryByTestId('status-dot');

    displayStatus ? expect(statusDot).toBeInTheDocument() : expect(statusDot).not.toBeInTheDocument();
  });

  test('displays default avatar image when no URL is provided', () => {
    render(<Avatar />);
    const avatarImage = screen.getByRole('img', { name: 'user avatar' });

    expect(avatarImage).toHaveAttribute('src', defaultAvatar);
  });
});

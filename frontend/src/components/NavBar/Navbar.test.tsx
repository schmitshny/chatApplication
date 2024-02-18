import { describe, expect, test, vi } from 'vitest';
import { render } from '../../tests/test-utils';
import { NavBar } from './NavBar';

vi.mock('../../features/auth/context/useAuthContext', () => ({
  useAuthContext: vi.fn(() => ({
    logout: vi.fn(),
    user: null,
    isLoggedIn: false,
    setUserContext: vi.fn(),
  })),
}));

vi.mock('react-router-dom', () => ({
  useNavigate: () => vi.fn(),
}));

vi.mock('../../features/chat/useNotifications', () => ({
  useNotifications: vi.fn(),
}));

describe('NavBar Component', () => {
  test('renders NavBar correctly', () => {
    const { container } = render(<NavBar />);
    expect(container).toMatchSnapshot();
  });
});

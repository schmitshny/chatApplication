import { describe, expect, test, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { render } from '../../tests/test-utils';
import { Alert } from './Alert';

const mockOnClose = vi.fn();

describe('Alert Component', () => {
  test('renders with the correct message', () => {
    const testMessage = 'Test Alert Message';
    const { container } = render(<Alert message={testMessage} onClose={mockOnClose} type="error" />);

    expect(screen.getByText(testMessage)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('calls onClose when the close icon is clicked', () => {
    render(<Alert message="Test Alert Message" onClose={mockOnClose} type="error" />);

    const closeIcon = screen.getByTestId('close-alert-icon');
    fireEvent.click(closeIcon);

    expect(mockOnClose).toHaveBeenCalled();
  });
});

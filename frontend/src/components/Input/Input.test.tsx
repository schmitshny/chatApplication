import { describe, expect, test } from 'vitest';
import { screen } from '@testing-library/react';
import { Input } from './Input';
import { render } from '../../tests/test-utils';

describe('Input Component', () => {
  test('renders with icon and placeholder', () => {
    const testPlaceholder = 'Test Placeholder';
    const testId = 'test-input';

    render(<Input placeholder={testPlaceholder} Icon={<span>Icon</span>} id={testId} />);

    expect(screen.getByPlaceholderText(testPlaceholder)).toBeInTheDocument();
    expect(screen.getByText('Icon')).toBeInTheDocument();
  });

  test('displays error message when error prop is provided', () => {
    const testError = 'Error message';

    render(<Input Icon={<span>Icon</span>} id="test-input" error={testError} />);

    expect(screen.getByText(testError)).toBeInTheDocument();
  });
});

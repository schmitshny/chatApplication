import { describe, expect, test, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Switch } from './Switch';

const mockOnToggle = vi.fn();

describe('Switch Component', () => {
  test('renders with correct initial state', () => {
    render(<Switch isToggled={true} onToggle={mockOnToggle} />);
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeChecked();
  });

  test('renders with correct initial state when false', () => {
    render(<Switch isToggled={false} onToggle={mockOnToggle} />);
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).not.toBeChecked();
  });

  test('calls onToggle when clicked', () => {
    const mockOnToggle = vi.fn();
    render(<Switch isToggled={false} onToggle={mockOnToggle} />);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(mockOnToggle).toHaveBeenCalled();
  });
});

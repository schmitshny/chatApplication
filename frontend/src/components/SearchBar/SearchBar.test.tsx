import { describe, expect, test, vi } from 'vitest';
import { render } from '../../tests/test-utils';
import { screen, fireEvent } from '@testing-library/react';
import { SearchBar } from './SearchBar';

const mockOnChange = vi.fn();

describe('SearchBar Component', () => {
  test('renders with correct placeholder and value', () => {
    const placeholderText = 'Search...';
    const testValue = 'Test Query';

    const { container } = render(<SearchBar value={testValue} onChange={mockOnChange} placeholder={placeholderText} />);
    const inputElement = screen.getByPlaceholderText(placeholderText) as HTMLInputElement;

    expect(inputElement.value).toBe(testValue);
    expect(container).toMatchSnapshot();
  });

  test('calls onChange when typing in the search bar', () => {
    render(<SearchBar onChange={mockOnChange} />);

    const inputElement = screen.getByPlaceholderText('Search...');
    fireEvent.change(inputElement, { target: { value: 'New Query' } });

    expect(mockOnChange).toHaveBeenCalled();
  });

  test('calls onSubmit when pressing Enter', () => {
    const handleSubmit = vi.fn();
    render(<SearchBar onChange={mockOnChange} onSubmit={handleSubmit} />);

    const inputElement = screen.getByPlaceholderText('Search...');
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });

    expect(handleSubmit).toHaveBeenCalled();
  });
});

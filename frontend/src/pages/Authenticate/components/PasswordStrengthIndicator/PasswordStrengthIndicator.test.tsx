import { describe, test, expect, vi } from 'vitest';
import { validatePassword, passwordConditions } from './utils';
import { render } from '../../../../tests/test-utils';
import { PasswordStrengthIndicator } from '.';

describe('Password Validation Tests', () => {
  test('validates minimum length condition', () => {
    const result = validatePassword('Password1!', passwordConditions);
    expect(result.find((condition) => condition.key === 'minLength')?.isValid).toBe(true);
  });

  test('validates uppercase letter condition', () => {
    const result = validatePassword('Password1!', passwordConditions);
    expect(result.find((condition) => condition.key === 'uppercase')?.isValid).toBe(true);
  });

  test('validates number condition', () => {
    const result = validatePassword('Password1!', passwordConditions);
    expect(result.find((condition) => condition.key === 'number')?.isValid).toBe(true);
  });

  test('validates special character condition', () => {
    const result = validatePassword('Password1!', passwordConditions);
    expect(result.find((condition) => condition.key === 'specialChar')?.isValid).toBe(true);
  });

  test('validates all conditions', () => {
    const result = validatePassword('Password1!', passwordConditions);
    expect(result.every((condition) => condition.isValid)).toBe(true);
  });
});

describe('PasswordStrengthIndicator', () => {
  const testPassword = 'Password1!';

  test('renders password conditions', () => {
    const { container } = render(<PasswordStrengthIndicator password={testPassword} onValidationChange={vi.fn()} />);
    const conditionElements = container.querySelectorAll('span');
    expect(conditionElements.length).toBeGreaterThan(0);
  });

  test('renders password conditions', () => {
    const { getByTestId } = render(<PasswordStrengthIndicator password={testPassword} onValidationChange={vi.fn()} />);
    const validConditions = passwordConditions
      .map((condition) => condition.key)
      .filter((key) => {
        return getByTestId(`condition-${key}-valid`);
      });

    expect(validConditions.length).toBe(4);
  });

  test('calls onValidationChange with true when password is strong', () => {
    const mockOnValidationChange = vi.fn();
    render(<PasswordStrengthIndicator password={testPassword} onValidationChange={mockOnValidationChange} />);
    expect(mockOnValidationChange).toHaveBeenCalledWith(true);
  });

  test('calls onValidationChange with false when password is weak', () => {
    const mockOnValidationChange = vi.fn();
    render(<PasswordStrengthIndicator password="weak" onValidationChange={mockOnValidationChange} />);
    expect(mockOnValidationChange).toHaveBeenCalledWith(false);
  });
});

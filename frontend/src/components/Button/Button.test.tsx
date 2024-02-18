import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { describe, expect, test } from 'vitest';

describe('Button Component', () => {
  test('renders Button component', () => {
    const { container } = render(<Button>Click me</Button>);

    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test.each(['primary', 'secondary'] as const)('renders with %s variant', (variant) => {
    const { container } = render(<Button $variant={variant}>Click me</Button>);

    expect(container).toMatchSnapshot();
  });

  test('forwards additional props to the button element', () => {
    const { container } = render(<Button aria-label="Custom label">Click me</Button>);

    expect(screen.getByRole('button', { name: 'Custom label' })).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});

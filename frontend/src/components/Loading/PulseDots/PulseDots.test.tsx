import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { PulseDots } from './PulseDots';

describe('PulseDots', () => {
  test('renders three PulseDot components', () => {
    const { container, getByTestId } = render(<PulseDots />);

    const loaderWrapper = getByTestId('pulse-dots');

    expect(loaderWrapper.children).toHaveLength(3);
    expect(container).toMatchSnapshot();
  });
});

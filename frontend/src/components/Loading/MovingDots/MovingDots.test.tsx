import { describe, test, expect } from 'vitest';
import { render } from '../../../tests/test-utils';
import { MovingDots } from '..';

describe('MovingDots', () => {
  test('renders correctly', () => {
    const { container } = render(<MovingDots />);

    expect(container).toMatchSnapshot();
  });
});

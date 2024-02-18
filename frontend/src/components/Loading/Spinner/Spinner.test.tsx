import { describe, test, expect } from 'vitest';
import { render } from '../../../tests/test-utils';
import { Spinner } from '..';

describe('Spinner', () => {
  test('renders correctly', () => {
    const { container } = render(<Spinner />);

    expect(container).toMatchSnapshot();
  });
});

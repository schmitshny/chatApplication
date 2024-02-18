import { render } from '../../tests/test-utils';
import { describe, expect, test } from 'vitest';
import { Icon } from '.';

describe('Icon Component', () => {
  test('renders correctly', () => {
    const { container } = render(<Icon name="addContact" />);

    expect(container).toMatchSnapshot();
  });

  test('displays hover text when provided', () => {
    const hoverText = 'Test Hover';
    const { getByText } = render(<Icon name="chat" hoverText={hoverText} />);

    expect(getByText(hoverText)).toBeInTheDocument();
  });
});

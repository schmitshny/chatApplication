import { screen } from '@testing-library/react';
import { render } from '../../tests/test-utils';
import { describe, expect, test } from 'vitest';
import { Card } from '.';

describe('Card Component', () => {
  test('renders with children correctly', () => {
    const testMessage = 'Hello, Card!';
    const { container } = render(
      <Card>
        <p>{testMessage}</p>
      </Card>,
    );

    expect(screen.getByText(testMessage)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});

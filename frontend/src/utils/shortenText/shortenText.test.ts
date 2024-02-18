import { describe, it, expect } from 'vitest';
import { shortenText } from '.';

describe('shortenText', () => {
  it('should shorten the text to the default maximum length including the ellipsis', () => {
    const longText = 'This is a very long text that should be shortened';
    const result = shortenText(longText);
    const maxLengthWithEllipsis = 20 + 3;

    expect(result.length).toBe(maxLengthWithEllipsis);

    expect(result).toBe('This is a very long ...');
  });

  it('should not shorten the text if it is shorter than the maximum length', () => {
    const shortText = 'Short text';
    const result = shortenText(shortText);
    expect(result).toBe(shortText);
  });

  it('should shorten the text to a specified maximum length', () => {
    const longText = 'This is a very long text that should be shortened';
    const maxLength = 10;
    const result = shortenText(longText, maxLength);
    expect(result).toBe('This is a ...');
  });

  it('should return the original text if the maximum length is negative', () => {
    const text = 'Some text';
    const maxLength = -1;
    const result = shortenText(text, maxLength);
    expect(result).toBe(text);
  });

  it('should handle an empty string', () => {
    const result = shortenText('');
    expect(result).toBe('');
  });
});

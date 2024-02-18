import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useDateFormat } from '.';
import { DateTime } from 'luxon';

describe('useDateFormat', () => {
  it('should format the date correctly', () => {
    const { result } = renderHook(() => useDateFormat());
    const formattedDate = result.current.formatDate('2021-04-10T14:20:30');

    expect(formattedDate).toBe('10.04.2021 14:20');
  });

  it('should return "Invalid Date" for an invalid date', () => {
    const { result } = renderHook(() => useDateFormat());
    const formattedDate = result.current.formatDate('invalid-date-string');

    expect(formattedDate).toBe('Invalid Date');
  });

  it('should return proper message for a time e.g. 7 hours ago', () => {
    const { result } = renderHook(() => useDateFormat());

    const sevenHoursAgo = DateTime.now().minus({ hours: 7 }).toISO();

    if (sevenHoursAgo === null) {
      throw new Error('Invalid date generated');
    }

    const relativeTime = result.current.timeSince(sevenHoursAgo);

    expect(relativeTime).toBe('7 hours ago');
  });

  it('should return "Invalid Date" for an invalid date in relative time', () => {
    const { result } = renderHook(() => useDateFormat());
    const relativeTime = result.current.timeSince('invalid-date-string');

    expect(relativeTime).toBe('Invalid Date');
  });

  it('should correctly format the date with a custom format', () => {
    const { result } = renderHook(() => useDateFormat());
    const customFormat = 'yyyy-LL-dd';
    const formattedDate = result.current.formatDate('2021-04-10T14:20:30', customFormat);

    expect(formattedDate).toBe('2021-04-10');
  });
});

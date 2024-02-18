import { DateTime } from 'luxon';
import { useCallback } from 'react';

export function useDateFormat() {
  const formatDate = useCallback((dateString: string, formatString = 'dd.MM.yyyy HH:mm') => {
    const dateTime = DateTime.fromISO(dateString);
    return dateTime.isValid ? dateTime.toFormat(formatString) : 'Invalid Date';
  }, []);

  const timeSince = useCallback((dateString: string) => {
    const dateTime = DateTime.fromISO(dateString);
    if (dateTime.isValid) {
      return dateTime.toRelative() || 'Invalid Date';
    }
    return 'Invalid Date';
  }, []);

  return {
    formatDate,
    timeSince,
  };
}

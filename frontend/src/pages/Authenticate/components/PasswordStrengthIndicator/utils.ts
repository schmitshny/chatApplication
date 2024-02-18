import { TPasswordCondition } from './types';

export const passwordConditions: TPasswordCondition[] = [
  { key: 'minLength', isValid: false, text: 'Minimum 8 Characters' },
  { key: 'uppercase', isValid: false, text: 'One uppercase letter' },
  { key: 'number', isValid: false, text: 'One number' },
  { key: 'specialChar', isValid: false, text: 'One special character' },
];

const validateCondition = (key: TPasswordCondition['key'], password: string): boolean => {
  switch (key) {
    case 'minLength':
      return password.length >= 8;
    case 'uppercase':
      return /[A-Z]/.test(password);
    case 'number':
      return /[0-9]/.test(password);
    case 'specialChar':
      return /[^A-Za-z0-9]/.test(password);
    default:
      return false;
  }
};

export const validatePassword = (password: string, conditions: TPasswordCondition[]): TPasswordCondition[] => {
  return conditions.map((condition) => ({
    ...condition,
    isValid: validateCondition(condition.key, password),
  }));
};

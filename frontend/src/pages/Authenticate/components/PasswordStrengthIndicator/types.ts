export type TPasswordCondition = {
  key: 'minLength' | 'lowercase' | 'uppercase' | 'number' | 'specialChar';
  isValid: boolean;
  text: string;
};

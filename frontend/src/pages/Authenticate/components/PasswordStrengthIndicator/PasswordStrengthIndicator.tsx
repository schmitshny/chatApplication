import { useEffect } from 'react';
import { validatePassword, passwordConditions } from './utils';
import { ConditionsContainer, ConditionContainer, ConditionText, Dot } from './PasswordStrengthIndicator.styles';

interface PasswordStrengthIndicatorProps {
  password: string;
  onValidationChange: (isValid: boolean) => void;
}

export const PasswordStrengthIndicator = ({ password, onValidationChange }: PasswordStrengthIndicatorProps) => {
  const conditions = validatePassword(password, passwordConditions);
  const isPasswordValid = conditions.every((condition) => condition.isValid);

  useEffect(() => {
    onValidationChange(isPasswordValid);
  }, [isPasswordValid, onValidationChange]);

  return (
    <ConditionsContainer>
      {conditions.map(({ isValid, text, key }) => (
        <ConditionContainer key={key}>
          <Dot $isValid={isValid} />
          <ConditionText $isValid={isValid} data-testid={`condition-${key}-${isValid ? 'valid' : 'invalid'}`}>
            {text}
          </ConditionText>
        </ConditionContainer>
      ))}
    </ConditionsContainer>
  );
};

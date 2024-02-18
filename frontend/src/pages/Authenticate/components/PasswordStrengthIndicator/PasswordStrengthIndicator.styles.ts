import styled from 'styled-components';

export const ConditionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ConditionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  width: 48%;
`;

export const Dot = styled.span<{ $isValid: boolean }>`
  height: 8px;
  width: 8px;
  background-color: ${({ $isValid, theme }) => ($isValid ? theme.colors.success : theme.colors.error)};
  border-radius: 50%;
  display: inline-block;
  margin-right: 10px;
`;

export const ConditionText = styled.span<{ $isValid: boolean }>`
  font-size: 0.83rem;
  color: ${({ $isValid, theme }) => ($isValid ? theme.colors.success : theme.colors.error)};
`;

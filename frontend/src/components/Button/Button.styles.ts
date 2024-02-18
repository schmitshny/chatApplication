import styled from 'styled-components';
import { ButtonProps } from './Button';

export const StyledButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: #eee;

  ${({ $variant }) =>
    $variant === 'primary' &&
    `
    background-color: #007bff;
    &:hover {
      background-color: #0056b3;
    }
  `}

  ${({ $variant }) =>
    $variant === 'secondary' &&
    `
    background-color: #FF69B4;
    &:hover {
      background-color: #FF41A1;
    }
  `}

   &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

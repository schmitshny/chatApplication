import React from 'react';
import { StyledButton } from './Button.styles';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ $variant = 'primary', children, ...props }) => {
  return (
    <StyledButton $variant={$variant} {...props}>
      {children}
    </StyledButton>
  );
};

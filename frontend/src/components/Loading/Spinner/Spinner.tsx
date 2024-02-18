import { SpinnerContainer } from './Spinner.styles';

export type SpinnerSize = 'small' | 'medium' | 'large';

interface SpinnerProps {
  size?: SpinnerSize;
}

const sizes: { [key in SpinnerSize]: string } = {
  small: '10px',
  medium: '20px',
  large: '40px',
};

export const Spinner = ({ size = 'medium' }: SpinnerProps) => <SpinnerContainer size={sizes[size]} />;

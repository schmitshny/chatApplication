import { InputWrapper, StyledInput, IconLabel, InputError } from './Input.styles';

interface InputWithIconProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  Icon: React.ReactNode;
  id: string;
  error?: string | null;
}

export const Input = ({ placeholder, error, Icon, id, ...props }: InputWithIconProps) => (
  <div>
    <InputWrapper>
      <IconLabel htmlFor={id}>{Icon}</IconLabel>
      <StyledInput id={id} placeholder={placeholder} {...props} />
    </InputWrapper>
    {error && <InputError>{error}</InputError>}
  </div>
);

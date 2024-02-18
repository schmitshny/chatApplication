import { useState } from 'react';
import { useFormik } from 'formik';
import { useResetPassword } from '../../../../features/auth/queries';

import { Input, Button, Spinner } from '../../../../components';

import {
  ErrorMessage,
  FormContainer,
  StyledForm,
  StyledHeader,
  StyledLink,
  FormDescription,
} from '../../components/Form/Form.styles';
import { resetPasswordValidationSchema } from './utils';
import { RiLockPasswordFill, RiLockPasswordLine } from 'react-icons/ri';
import { PasswordStrengthIndicator } from '../../components/PasswordStrengthIndicator';

interface ResetPasswordFormProps {
  token: string;
}

export const ResetPasswordForm = ({ token }: ResetPasswordFormProps) => {
  const [resetPasswordError, setResetPasswordError] = useState('');
  const { mutate, isLoading } = useResetPassword(setResetPasswordError);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const handlePasswordValidationChange = (isValid: boolean) => {
    setIsSubmitDisabled(!isValid);
  };

  const formik = useFormik<{ password: string; confirmPassword: string; userId: number }>({
    initialValues: {
      password: '',
      confirmPassword: '',
      userId: 1,
    },
    validationSchema: resetPasswordValidationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      mutate(
        { password: values.password, token },
        {
          onSuccess: () => {
            resetForm();
          },
          onError: (error) => {
            console.log(error);
            setSubmitting(false);
          },
        },
      );
    },
  });

  const { touched, errors, values, handleChange, handleSubmit, isValid, dirty } = formik;

  const error = (field: keyof typeof touched & keyof typeof errors) =>
    touched[field] && errors[field] ? errors[field] : null;

  const isSubmitButtonDisabled = isSubmitDisabled || isLoading || !isValid || !dirty;

  return (
    <FormContainer>
      <StyledHeader>Forgot your password?</StyledHeader>
      <FormDescription>Please enter the new password</FormDescription>
      <StyledForm onSubmit={handleSubmit}>
        <Input
          type="password"
          Icon={<RiLockPasswordFill />}
          id="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          error={error('password')}
        />
        <Input
          type="password"
          Icon={<RiLockPasswordLine />}
          id="confirmPassword"
          placeholder="Confirm password"
          value={values.confirmPassword}
          onChange={handleChange}
          error={error('confirmPassword')}
        />
        <PasswordStrengthIndicator password={values.password} onValidationChange={handlePasswordValidationChange} />
      </StyledForm>
      {resetPasswordError && <ErrorMessage>{resetPasswordError}</ErrorMessage>}
      <Button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
        disabled={isSubmitButtonDisabled}
      >
        {isLoading ? <Spinner /> : 'Reset Password'}
      </Button>
      <div>
        <StyledLink to="/login">Back to login</StyledLink>
      </div>
    </FormContainer>
  );
};

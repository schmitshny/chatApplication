import { useState } from 'react';
import { useFormik } from 'formik';
import { useRequestResetPassword } from '../../../../features/auth/queries';

import { GrMail } from 'react-icons/gr';
import { Input, Button, Spinner } from '../../../../components';

import {
  ErrorMessage,
  FormContainer,
  StyledForm,
  StyledHeader,
  StyledLink,
  FormDescription,
} from '../../components/Form/Form.styles';
import { requestResetPasswordValidationSchema } from './utils';
import { useAlerts } from '../../../../components/Alert/useAlerts';
import { useNavigate } from 'react-router-dom';

export const RequestResetForm = () => {
  const [resetPasswordError, setResetPasswordError] = useState('');
  const { mutate, isLoading } = useRequestResetPassword(setResetPasswordError);
  const { addAlert } = useAlerts();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: requestResetPasswordValidationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      mutate(values.email, {
        onSuccess: () => {
          resetForm();
          addAlert('Password reset link sent. Please check your email and follow the instructions.', 'info');
          setSubmitting(false);
          navigate(`/login`);
        },
        onError: (error) => {
          console.log(error);
          setSubmitting(false);
          addAlert("Email doesn't exist", 'error');
        },
      });
    },
  });

  const { touched, errors, values, handleChange, handleSubmit } = formik;

  const error = (field: keyof typeof touched & keyof typeof errors) =>
    touched[field] && errors[field] ? errors[field] : null;

  return (
    <FormContainer>
      <StyledHeader>Forgot your password?</StyledHeader>
      <FormDescription>Please enter the email you use to sign in</FormDescription>
      <StyledForm onSubmit={handleSubmit}>
        <Input
          type="text"
          Icon={<GrMail />}
          id="email"
          placeholder="Your Email"
          value={values.email}
          onChange={handleChange}
          error={error('email')}
        />
      </StyledForm>
      {resetPasswordError && <ErrorMessage>{resetPasswordError}</ErrorMessage>}
      <Button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
        disabled={isLoading}
      >
        {isLoading ? <Spinner /> : 'Reset Password'}
      </Button>
      <div>
        <StyledLink to="/login">Back to login</StyledLink>
      </div>
    </FormContainer>
  );
};

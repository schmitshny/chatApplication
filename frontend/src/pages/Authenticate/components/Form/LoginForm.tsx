import { useState } from 'react';
import { useFormik } from 'formik';
import { useLogin } from '../../../../features/auth/queries';

import { GrMail } from 'react-icons/gr';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Input, Button, Spinner } from '../../../../components';

import { ErrorMessage, FormContainer, StyledForm, StyledHeader, StyledLink } from './Form.styles';
import { loginValidationSchema } from './utils';

export const LoginForm = () => {
  const [loginError, setLoginError] = useState('');
  const { mutate, isLoading } = useLogin(setLoginError);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      mutate(values, {
        onSuccess: () => {
          resetForm();
          setSubmitting(false);
        },
        onError: (error) => {
          console.log(error);
          setSubmitting(false);
        },
      });
    },
  });

  const { touched, errors, values, handleChange, handleSubmit } = formik;

  const error = (field: keyof typeof touched & keyof typeof errors) =>
    touched[field] && errors[field] ? errors[field] : null;

  return (
    <FormContainer>
      <StyledHeader>Sign in</StyledHeader>
      <StyledForm onSubmit={handleSubmit}>
        <Input
          type="email"
          Icon={<GrMail />}
          id="email"
          placeholder="Your Email"
          value={values.email}
          onChange={handleChange}
          error={error('email')}
        />
        <Input
          type="password"
          Icon={<RiLockPasswordFill />}
          id="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          error={error('password')}
        />
      </StyledForm>
      {loginError && <ErrorMessage>{loginError}</ErrorMessage>}
      <Button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
        disabled={isLoading}
      >
        {isLoading ? <Spinner /> : 'Login'}
      </Button>
      <div>
        <StyledLink to="/register">Create an account</StyledLink>
        <StyledLink to="/reset-password">Forgot Password?</StyledLink>
      </div>
    </FormContainer>
  );
};

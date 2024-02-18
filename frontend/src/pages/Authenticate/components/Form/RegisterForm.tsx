import { useState } from 'react';
import { useFormik } from 'formik';
import { FaUserAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { RiLockPasswordFill, RiLockPasswordLine } from 'react-icons/ri';

import { Input, Button } from '../../../../components';
import { useRegister } from '../../../../features/auth/queries';
import { RegisterData } from '../../../../features/auth/types';

import { ErrorMessage, FormContainer, StyledForm, StyledHeader, StyledLink } from './Form.styles';
import { registrationValidationSchema } from './utils';
import { PasswordStrengthIndicator } from '../PasswordStrengthIndicator';

export const RegisterForm = () => {
  const [registerError, setRegisterError] = useState('');
  const { mutate, isLoading } = useRegister(setRegisterError);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const handlePasswordValidationChange = (isValid: boolean) => {
    setIsSubmitDisabled(!isValid);
  };

  const formik = useFormik<RegisterData>({
    initialValues: {
      id: 1,
      email: '',
      name: '',
      lastName: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: registrationValidationSchema,
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

  const { touched, errors, values, handleChange, handleSubmit, isValid, dirty } = formik;
  const isSubmitButtonDisabled = isSubmitDisabled || isLoading || !isValid || !dirty;

  return (
    <FormContainer>
      <StyledHeader>Sign up</StyledHeader>
      <StyledForm onSubmit={handleSubmit}>
        <Input
          type="email"
          Icon={<GrMail />}
          id="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          error={touched.email && errors.email ? errors.email : null}
        />
        <Input
          type="text"
          Icon={<FaUserAlt />}
          id="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          error={touched.name && errors.name ? errors.name : null}
        />
        <Input
          type="text"
          Icon={<FaUserAlt />}
          id="lastName"
          placeholder="Last Name"
          value={values.lastName}
          onChange={handleChange}
          error={touched.lastName && errors.lastName ? errors.lastName : null}
        />
        <Input
          type="password"
          Icon={<RiLockPasswordFill />}
          id="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          error={touched.password && errors.password ? errors.password : null}
        />
        <Input
          type="password"
          Icon={<RiLockPasswordLine />}
          id="confirmPassword"
          placeholder="Confirm password"
          value={values.confirmPassword}
          onChange={handleChange}
          error={touched.confirmPassword && errors.confirmPassword ? errors.confirmPassword : null}
        />
        <PasswordStrengthIndicator password={values.password} onValidationChange={handlePasswordValidationChange} />
      </StyledForm>
      {registerError && <ErrorMessage>{registerError}</ErrorMessage>}

      <Button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
        disabled={isSubmitButtonDisabled}
      >
        Register
      </Button>
      <StyledLink to="/login">I am already member</StyledLink>
    </FormContainer>
  );
};

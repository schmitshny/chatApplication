import { ErrorMessage, FormContainer, StyledForm, StyledHeader, StyledLink } from './Form.styles';
import { FaUserAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { RiLockPasswordFill, RiLockPasswordLine } from 'react-icons/ri';
import { Button } from '../../../components/Button/Button';
import { useState } from 'react';
import { useRegister } from '../../../features/auth/queries';
import { registrationValidationSchema } from './utils';
import { useFormik } from 'formik';
import { RegisterData } from '../../../features/auth/types';

export const RegisterForm = () => {
  const [registerError, setRegisterError] = useState('');
  const { mutate, isLoading } = useRegister(setRegisterError);

  const formik = useFormik<RegisterData>({
    initialValues: {
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

  return (
    <FormContainer>
      <StyledHeader>Sign up</StyledHeader>
      <StyledForm onSubmit={formik.handleSubmit}>
        <InputWithIcon
          type="email"
          Icon={<GrMail />}
          id="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && formik.errors.email ? formik.errors.email : null}
        />
        <InputWithIcon
          type="text"
          Icon={<FaUserAlt />}
          id="name"
          placeholder="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && formik.errors.name ? formik.errors.name : null}
        />
        <InputWithIcon
          type="text"
          Icon={<FaUserAlt />}
          id="lastName"
          placeholder="Last Name"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : null}
        />
        <InputWithIcon
          type="password"
          Icon={<RiLockPasswordFill />}
          id="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && formik.errors.password ? formik.errors.password : null}
        />
        <InputWithIcon
          type="password"
          Icon={<RiLockPasswordLine />}
          id="confirmPassword"
          placeholder="Confirm password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : null}
        />
      </StyledForm>
      {registerError && <ErrorMessage>{registerError}</ErrorMessage>}

      <Button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          formik.handleSubmit();
        }}
        disabled={isLoading}
      >
        Register
      </Button>
      <StyledLink to="/login">I am already member</StyledLink>
    </FormContainer>
  );
};

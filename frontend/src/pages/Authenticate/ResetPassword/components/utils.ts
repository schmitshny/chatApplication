import * as Yup from 'yup';

export const requestResetPasswordValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

export const resetPasswordValidationSchema = Yup.object().shape({
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password')], 'Passwords do not match'),
});

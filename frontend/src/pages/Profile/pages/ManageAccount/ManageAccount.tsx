import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '../../../../components';
import { useFormik } from 'formik';
import { UserSettingsWrapper } from '../../components/UserSettings/UserSettings.styles';
import { SectionDescription, SectionTitle } from '../ManageNotifications/ManageNotifications.styles';
import { FaUserAlt } from 'react-icons/fa';
import { StyledForm } from './ManageAccount.styles';
import { useAuthContext } from '../../../../features/auth/context/useAuthContext';
import { updateUserValidationSchema } from './utils';
import { ManageAccountFormValues } from './types';
import { useUpdateUser } from '../../../../features/User/useUpdateUserData';
import { ErrorMessage } from '../../../Authenticate/components/Form/Form.styles';

export const ManageAccount = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const [updateError, setUpdateError] = useState('');
  const { mutate, isLoading } = useUpdateUser(setUpdateError);

  const formik = useFormik<ManageAccountFormValues>({
    initialValues: {
      id: user?.id ?? 0,
      name: user?.name ?? '',
      lastName: user?.lastName ?? '',
    },
    validationSchema: updateUserValidationSchema,
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
  const error = (field: keyof typeof touched & keyof typeof errors) =>
    touched[field] && errors[field] ? errors[field] : null;

  const isSubmitButtonDisabled = !isValid || !dirty || isLoading;

  return (
    <UserSettingsWrapper>
      <SectionTitle>Manage account</SectionTitle>
      <SectionDescription>In this section, you can update your personal information</SectionDescription>
      <StyledForm onSubmit={handleSubmit}>
        <Input
          type="text"
          Icon={<FaUserAlt />}
          id="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          error={error('name')}
          maxLength={20}
        />
        <Input
          type="text"
          Icon={<FaUserAlt />}
          id="lastName"
          placeholder="Last Name"
          value={values.lastName}
          onChange={handleChange}
          error={error('lastName')}
          maxLength={20}
        />
      </StyledForm>
      {updateError && <ErrorMessage>{updateError}</ErrorMessage>}
      <Button
        type="submit"
        disabled={isSubmitButtonDisabled}
        onClick={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        Save Changes
      </Button>
      <Button onClick={() => navigate(-1)} $variant="secondary">
        Go Back
      </Button>
    </UserSettingsWrapper>
  );
};

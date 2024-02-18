import { Card } from '../../../components';
import { AuthPageContainer } from './../AuthPage.styles';
import { RequestResetForm } from './components/RequestResetForm';
import { ResetPasswordForm } from './components/ResetPasswordForm';
import { useParams } from 'react-router-dom';

const ResetPasswordPage = () => {
  const { token } = useParams();

  return (
    <AuthPageContainer>
      <Card>{token ? <ResetPasswordForm token={token} /> : <RequestResetForm />}</Card>
    </AuthPageContainer>
  );
};

export default ResetPasswordPage;

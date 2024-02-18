import { Card } from '../../components/Card';
import { LoginForm } from './components/Form/LoginForm';
import { AuthPageContainer } from './AuthPage.styles';

const LoginPage = () => {
  return (
    <AuthPageContainer>
      <Card>
        <LoginForm />
      </Card>
    </AuthPageContainer>
  );
};

export default LoginPage;

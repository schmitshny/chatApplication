import { Card } from '../../components/Card';
import { RegisterForm } from './components/Form/RegisterForm';
import { AuthPageContainer } from './AuthPage.styles';

const RegisterPage = () => {
  return (
    <AuthPageContainer>
      <Card>
        <RegisterForm />
      </Card>
    </AuthPageContainer>
  );
};

export default RegisterPage;

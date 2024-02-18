import { useNavigate } from 'react-router-dom';
import { Card, Button } from '../../components';
import { ErrorPageContainer } from './ErrorPage.styles';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <ErrorPageContainer>
      <Card>
        <h2>Network Error</h2>
        <p>We encountered a network error. Please check your connection and try again.</p>
        <Button onClick={() => navigate('/')}>Go to Home Page</Button>
      </Card>
    </ErrorPageContainer>
  );
};

export default ErrorPage;

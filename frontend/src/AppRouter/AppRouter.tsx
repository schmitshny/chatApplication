import { Navigate, useRoutes } from 'react-router-dom';
import { RegisterPage } from '../pages/Authenticate/RegisterPage';
import { LoginPage } from '../pages/Authenticate/LoginPage';
import { ErrorPage } from '../pages/ErrorPage/ErrorPage';
import { HomePage } from '../pages/Home/HomePage';
import ProtectedRoute from './ProtectedRoute';

export const AppRouter = () => {
  return useRoutes([
    { path: 'register', element: <RegisterPage /> },
    { path: 'login', element: <LoginPage /> },
    { path: 'error', element: <ErrorPage /> },
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
      ),
    },
    { path: '*', element: <Navigate to="/" /> },
  ]);
};

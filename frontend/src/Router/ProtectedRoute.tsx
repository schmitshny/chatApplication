import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../features/auth/context/useAuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const location = useLocation();
  const { isLoggedIn } = useAuthContext();

  return isLoggedIn ? <>{children}</> : <Navigate to="/login" state={{ from: location }} replace />;
};

export default ProtectedRoute;

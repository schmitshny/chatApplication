import { Suspense, lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { PulseDots } from '../components';
import { ManageNotifications } from '../pages/Profile/pages/ManageNotifications';
import ResetPasswordPage from '../pages/Authenticate/ResetPassword/ResetPasswordPage';
import { ManageAccount } from '../pages/Profile/pages/ManageAccount';

const RegisterPage = lazy(() => import('../pages/Authenticate/RegisterPage'));
const LoginPage = lazy(() => import('../pages/Authenticate/LoginPage'));
const ErrorPage = lazy(() => import('../pages/ErrorPage/ErrorPage'));
const HomePage = lazy(() => import('../pages/Home/HomePage'));
const UserProfile = lazy(() => import('../pages/Profile/UserProfile'));
const AddContact = lazy(() => import('../pages/AddContact/AddContact'));
const VideoChat = lazy(() => import('../pages/VideoChat/VideoChat'));
const StoriesPage = lazy(() => import('../pages/StoriesPage/StoriesPage'));

export const Router = () => {
  return (
    <Suspense fallback={<PulseDots />}>
      {useRoutes([
        { path: 'register', element: <RegisterPage /> },
        { path: 'login', element: <LoginPage /> },
        { path: 'reset-password/:token', element: <ResetPasswordPage /> },
        { path: 'reset-password', element: <ResetPasswordPage /> },
        { path: 'error', element: <ErrorPage /> },
        {
          path: '/',
          element: (
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'account',
          element: (
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          ),
          children: [
            {
              path: 'notifications',
              element: (
                <ProtectedRoute>
                  <ManageNotifications />
                </ProtectedRoute>
              ),
            },
            {
              path: 'manage-account',
              element: (
                <ProtectedRoute>
                  <ManageAccount />
                </ProtectedRoute>
              ),
            },
          ],
        },
        {
          path: 'add-contact',
          element: (
            <ProtectedRoute>
              <AddContact />
            </ProtectedRoute>
          ),
        },
        {
          path: 'video-chat',
          element: (
            <ProtectedRoute>
              <VideoChat />
            </ProtectedRoute>
          ),
        },
        {
          path: 'stories',
          element: (
            <ProtectedRoute>
              <StoriesPage />
            </ProtectedRoute>
          ),
        },
        { path: '*', element: <Navigate to="/" /> },
      ])}
    </Suspense>
  );
};

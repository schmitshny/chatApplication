import { Router } from 'express';
import { AuthController } from '../controllers/AuthController';
import { validateUser } from '../middlewares/validateUser';

export const authRoutes = (): Router => {
  const router = Router();
  router.post('/login', AuthController.login);
  router.post('/register', validateUser, AuthController.register);
  router.post('/request-reset-password', AuthController.sendResetPasswordEmail);
  router.post('/reset-password', AuthController.resetPassword);
  return router;
};

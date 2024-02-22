import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { authMiddleware } from '../middlewares/authMiddleware';
import { validateUserUpdate } from '../middlewares/validateUserUpdate';

export const userRoutes = (): Router => {
  const router = Router();
  router.get('/get-users', UserController.getAllUsers);
  router.put(
    '/update-avatar/:id',
    UserController.updateUserAvatar,
  );
  router.get(
    '/search-users/:searchTerm',
    validateUserUpdate,
    UserController.searchUsers,
  );
  router.put('/update-user/:id', UserController.updateUser);
  router.get('/get-user/:id', UserController.getUserById);
  router.put(
    '/update-user-status/:id',
    UserController.updateUserStatus,
  );
  return router;
};

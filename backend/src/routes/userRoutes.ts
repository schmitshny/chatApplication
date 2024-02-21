import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { authMiddleware } from '../middlewares/authMiddleware';
import { validateUserUpdate } from '../middlewares/validateUserUpdate';

export const userRoutes = (): Router => {
  const router = Router();
  router.get('/get-users', authMiddleware, UserController.getAllUsers);
  router.put(
    '/update-avatar/:id',
    authMiddleware,
    UserController.updateUserAvatar,
  );
  router.get(
    '/search-users/:searchTerm',
    authMiddleware,
    validateUserUpdate,
    UserController.searchUsers,
  );
  router.put('/update-user/:id', authMiddleware, UserController.updateUser);
  router.get('/get-user/:id', authMiddleware, UserController.getUserById);
  router.put(
    '/update-user-status/:id',
    authMiddleware,
    UserController.updateUserStatus,
  );
  return router;
};

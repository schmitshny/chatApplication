import { Request, Response } from 'express';
import UserService from '../domain/user/service/UserService';
import { uploadImageToS3 } from '../infrastructure/aws/utils';

export class UserController {
  static async getAllUsers(req: Request, res: Response) {
    try {
      const users = await UserService.getAllUsers();
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      return res.status(500).send({ message: 'Something went wrong', error });
    }
  }

  static async updateUserAvatar(req: Request, res: Response) {
    const userId = req.params.id;
    const { avatar } = req.body;

    try {
      const avatarUrl = await uploadImageToS3(`avatar-${userId}`, avatar);

      if (!avatarUrl) {
        return res.status(500).send({ message: 'Failed to upload avatar' });
      }

      const updatedUser = await UserService.updateUserAvatar(userId, avatarUrl);

      if (!updatedUser) {
        return res.status(404).send({ message: 'User not found' });
      }

      return res.status(200).json(updatedUser);
    } catch (error) {
      console.log(error);
      return res.status(500).send({ message: 'Something went wrong', error });
    }
  }

  static async searchUsers(req: Request, res: Response) {
    const { searchTerm } = req.params;

    if (!searchTerm) {
      return res.status(400).send({ message: 'Search term is required' });
    }

    try {
      const users = await UserService.searchUsers(searchTerm);
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      return res.status(500).send({ message: 'Something went wrong', error });
    }
  }

  static async updateUser(req: Request, res: Response) {
    try {
      const userId = req.params.id;
      const { name, lastName, password } = req.body;

      const userData = {
        ...(name && { name }),
        ...(lastName && { lastName }),
        ...(password && { password }),
      };

      const updatedUser = await UserService.updateUser(userId, userData);

      if (!updatedUser) {
        return res.status(404).send({ message: 'User not found' });
      }

      const {
        id,
        name: updatedName,
        lastName: updatedLastName,
        avatarImg,
      } = updatedUser.toJSON();

      return res
        .status(200)
        .json({ id, name: updatedName, lastName: updatedLastName, avatarImg });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ message: 'Something went wrong', error });
    }
  }

  static async getUserById(req: Request, res: Response) {
    try {
      const userId = req.params.id;
      const user = await UserService.getUserById(userId);

      if (!user) {
        return res.status(404).send({ message: 'User not found' });
      }

      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
      return res.status(500).send({ message: 'Something went wrong', error });
    }
  }
}

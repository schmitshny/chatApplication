import { IUserService } from './IUserService';
import UserRepository from '../repository/UserRepository';
import { User } from '../model/User';

class UserService implements IUserService {
  async getAllUsers(): Promise<User[]> {
    try {
      return await UserRepository.getAllUsers();
    } catch (error) {
      console.error(error);
      throw new Error('Failed to get all users');
    }
  }

  async getUserById(userId: string): Promise<User | null> {
    try {
      return await UserRepository.getUserById(userId);
    } catch (error) {
      console.error(error);
      throw new Error('Failed to get user by id');
    }
  }

  async updateUser(
    userId: string,
    userData: Partial<User>,
  ): Promise<User | null> {
    try {
      return await UserRepository.updateUser(userId, userData);
    } catch (error) {
      console.error(error);
      throw new Error('Failed to update user');
    }
  }

  async updateUserAvatar(userId: string, avatar: string): Promise<User | null> {
    try {
      return await UserRepository.updateUserAvatar(userId, avatar);
    } catch (error) {
      console.error(error);
      throw new Error('Failed to update user avatar');
    }
  }

  async searchUsers(searchTerm: string): Promise<User[]> {
    try {
      return await UserRepository.searchUsers(searchTerm);
    } catch (error) {
      console.error(error);
      throw new Error('Failed to search users');
    }
  }
}

export default new UserService();

import { User } from '../model/User';

export interface IUserService {
  getAllUsers(): Promise<User[]>;
  getUserById(userId: string): Promise<User | null>;
}

import { User } from '../model/User';

export interface IUserService {
  getAllUsers(): Promise<User[]>;
  getUserById(userId: string): Promise<User | null>;
  updateUserStatus(userId: string, status: string): Promise<User | null>;
  updateUserLastSeen(userId: string, date: Date): Promise<User | null>;
}

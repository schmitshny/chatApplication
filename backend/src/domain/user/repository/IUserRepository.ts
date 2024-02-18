import { User } from '../model/User';

export interface IUserRepository {
  createUser(user: User): Promise<User>;
  getUserByEmail(email: string): Promise<User | null>;
  searchUsers(searchTerm: string): Promise<User[]>;
  getUserById(userId: string): Promise<User | null>;
}

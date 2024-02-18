import { IAuthenticateUser, ICreateUser } from '../dto/UserDto';
import { User } from '../model/User';

export interface IAuthService {
  registerUser(user: ICreateUser): Promise<User>;
  authenticateUser(user: IAuthenticateUser): Promise<User>;
}

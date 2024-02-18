import jwt from 'jsonwebtoken';
import { User } from '../model/User';
import UserRepository from '../repository/UserRepository';
import {
  ComparePasswordError,
  UserAlreadyExistsError,
  UserNotFoundError,
} from '../errors';
import { IAuthService } from './IAuthService';
import { IAuthenticateUser, ICreateUser } from '../dto/UserDto';
import { createToken } from './TokenService';
import { createResetPasswordMailOptions, sendEmail } from './utils';
import { InvalidTokenError } from '../errors/InvalidTokenError';

class AuthService implements IAuthService {
  async authenticateUser(data: IAuthenticateUser): Promise<User> {
    const user = await UserRepository.getUserByEmail(data.email);
    if (!user) {
      throw new UserNotFoundError();
    }
    const isPasswordValid = await user.comparePassword(data.password);
    if (!isPasswordValid) {
      throw new ComparePasswordError();
    }
    return user;
  }

  async registerUser(user: ICreateUser) {
    const existingUser = await UserRepository.getUserByEmail(user.email);
    if (existingUser) {
      throw new UserAlreadyExistsError();
    }
    return UserRepository.createUser(user);
  }

  async sendResetPasswordEmail(email: string): Promise<void> {
    const user = await UserRepository.getUserByEmail(email);
    if (!user) {
      throw new UserNotFoundError();
    }
    const token = createToken(user, '1h');
    const resetLink = `${process.env.CORS_ORIGIN}/reset-password/${token}`;

    user.resetPasswordInfo = {
      token,
      expires: new Date(Date.now() + 3600000),
    };
    await user.save();

    const mailOptions = createResetPasswordMailOptions(email, resetLink);
    await sendEmail(mailOptions);
  }

  async resetUserPassword(token: string, password: string): Promise<User> {
    if (!process.env.JWT_SECRET) {
      throw new InvalidTokenError();
    }
    interface JwtPayloadWithUser extends jwt.JwtPayload {
      user: {
        id: string;
      };
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET) as JwtPayloadWithUser;
    } catch (error) {
      throw new InvalidTokenError();
    }

    const userId = decoded.user.id;
    const user = await UserRepository.resetPassword(userId, password);

    if (!user) {
      throw new UserNotFoundError();
    }
    if (
      user?.resetPasswordInfo?.token !== token ||
      (user?.resetPasswordInfo?.expires &&
        new Date() > new Date(user.resetPasswordInfo.expires))
    ) {
      throw new InvalidTokenError();
    }

    return user;
  }
}

export default new AuthService();

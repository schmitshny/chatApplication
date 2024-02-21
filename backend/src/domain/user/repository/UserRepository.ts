import { Op } from 'sequelize';
import { ICreateUser } from '../dto/UserDto';
import { User } from '../model/User';
import { IUserRepository } from './IUserRepository';

class UserRepository implements IUserRepository {
  async createUser(user: ICreateUser): Promise<User> {
    return User.create(user);
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return User.findOne({
      where: { email },
    });
  }

  async getUserById(userId: string): Promise<User | null> {
    return User.findByPk(userId, { attributes: { exclude: ['password'] } });
  }

  async getAllUsers(): Promise<User[]> {
    return User.findAll({ attributes: { exclude: ['password'] } });
  }

  async updateUser(
    userId: string,
    userData: Partial<User>,
  ): Promise<User | null> {
    const user = await User.findByPk(userId);
    if (user) {
      await user.update(userData);
      return user;
    } else {
      return null;
    }
  }

  async updateUserAvatar(userId: string, avatar: string): Promise<User | null> {
    const user = await User.findOne({ where: { id: userId } });
    if (user) {
      user.avatarImg = avatar;
      await user.save();
      return user;
    } else {
      return null;
    }
  }

  async searchUsers(searchTerm: string): Promise<User[]> {
    return User.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${searchTerm}%` } },
          { lastName: { [Op.iLike]: `%${searchTerm}%` } },
        ],
      },
    });
  }

  async resetPassword(userId: string, password: string): Promise<User | null> {
    const user = await User.findByPk(userId);
    if (user) {
      user.password = password;
      user.resetPasswordInfo = {
        token: null,
        expires: null,
      };
      await user.save();
      return user;
    } else {
      return null;
    }
  }

  async updateUserStatus(userId: string, status: string): Promise<User | null> {
    const user = await User.findByPk(userId);
    if (user) {
      user.userStatus = status;
      await user.save();
      return user;
    }
    return null;
  }

  async updateUserLastSeen(userId: string, date: Date): Promise<User | null> {
    const user = await User.findByPk(userId);
    if (user) {
      user.lastSeen = date;
      await user.save();
      return user;
    }
    return null;
  }
}

export default new UserRepository();

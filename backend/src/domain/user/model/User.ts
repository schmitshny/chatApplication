import {
  Model,
  Column,
  Table,
  DataType,
  BeforeCreate,
  BeforeUpdate,
} from 'sequelize-typescript';
import { ICreateUser } from '../dto/UserDto';
import bcrypt from 'bcryptjs';

@Table
export class User extends Model<User, ICreateUser> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  avatarImg: string;

  @Column({
    type: DataType.JSON,
    allowNull: true,
  })
  resetPasswordInfo: {
    token: string | null;
    expires: Date | null;
  } | null;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: 'offline',
  })
  userStatus: string;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  lastSeen: Date;

  @BeforeCreate
  static async hashPassword(user: User) {
    user.password = await bcrypt.hash(user.password, 10);
  }

  @BeforeUpdate
  static async hashPasswordOnUpdate(user: User) {
    if (user.changed('password')) {
      user.password = await bcrypt.hash(user.password, 10);
    }
  }

  async comparePassword(inputPassword: string): Promise<boolean> {
    return await bcrypt.compare(inputPassword, this.password);
  }
}

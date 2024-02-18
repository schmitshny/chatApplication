import {
  Model,
  Column,
  Table,
  DataType,
  ForeignKey,
  HasMany,
  BelongsTo,
  Unique,
} from 'sequelize-typescript';
import { HasManyGetAssociationsMixin } from 'sequelize';

import { User } from '../../../domain/user/model/User';
import { Message } from './Message';
import { File } from './File';

@Table
export class Conversation extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Unique('uniqueUserPair')
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user1Id: number;

  @Unique('uniqueUserPair')
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user2Id: number;

  @BelongsTo(() => User, {
    foreignKey: 'user1Id',
    as: 'user1',
  })
  user1: User;

  @BelongsTo(() => User, {
    foreignKey: 'user2Id',
    as: 'user2',
  })
  user2: User;

  @HasMany(() => File)
  declare files: File[];
  declare getFiles: HasManyGetAssociationsMixin<File>;

  @HasMany(() => Message)
  declare messages: Message[];
  declare getMessages: HasManyGetAssociationsMixin<Message>;
}

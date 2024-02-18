import { User } from '../../../domain/user/model/User';
import {
  Model,
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Conversation } from './Conversation';
import { File } from './File';

@Table
export class Message extends Model {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  senderId: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  recipientId: number;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  content: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  imageUrl: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isRead: boolean;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  sentAt: Date;

  @ForeignKey(() => File)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  fileId: number;

  @BelongsTo(() => File)
  file: File;

  @ForeignKey(() => Conversation)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  conversationId: number;

  @BelongsTo(() => Conversation)
  conversation: Conversation;
}

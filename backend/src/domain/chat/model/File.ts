import {
  Model,
  Column,
  Table,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { Conversation } from './Conversation';

@Table
export class File extends Model {
  @ForeignKey(() => Conversation)
  @Column(DataType.INTEGER)
  conversationId: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  fileName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  fileUrl: string;
}

import { Sequelize } from 'sequelize-typescript';
import { Dialect } from 'sequelize';
import { User } from '../../domain/user/model/User';
import { Message } from '../../domain/chat/model/Message';
import { Conversation } from '../../domain/chat/model/Conversation';
import { File } from '../../domain/chat/model/File';
import { Story } from '../../domain/stories/model/Story';

export class Database {
  public sequelize: Sequelize;

  constructor() {
    this.sequelize = new Sequelize({
      dialect: process.env.DB_DIALECT as Dialect,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      port: parseInt(process.env.DB_PORT as string),
      models: [User, Message, Conversation, File, Story],
      ssl: true,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    });
    this.init();
  }

  private async init() {
    try {
      await this.sequelize.authenticate();
      await this.sequelize.sync();
      console.log(
        'Connection to the database has been established successfully.',
      );
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
  public async close() {
    try {
      await this.sequelize.close();
      console.log('Connection to the database has been closed.');
    } catch (error) {
      console.error('Unable to close the connection:', error);
    }
  }
}

export default new Database().sequelize;

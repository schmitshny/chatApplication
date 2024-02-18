import app from './app';
import Database from './infrastructure/database/Database';
import { Server } from 'http';
import { SocketServer } from './infrastructure/socket/SocketServer';

require('dotenv').config();

const port = process.env.PORT || 8000;

Database.authenticate()
  .then(() => {
    console.log('Connected to the database.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

const httpServer = new Server(app);

new SocketServer(httpServer);

httpServer.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

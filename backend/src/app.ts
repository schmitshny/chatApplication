import express from 'express';
import cors from 'cors';
import { authRoutes } from './routes/authRoutes';
import { userRoutes } from './routes/userRoutes';
import { chatRoutes } from './routes/chatRoutes';
import { storiesRoutes } from './routes/storiesRoutes';

import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
config();

const app = express();

app.use(express.json({ limit: '10mb' }));

const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());

app.set("trust proxy", 1);

app.use('/auth', authRoutes());
app.use('/user', userRoutes());
app.use('/chat', chatRoutes());
app.use('/stories', storiesRoutes());

export default app;

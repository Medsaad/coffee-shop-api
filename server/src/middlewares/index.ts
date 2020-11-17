import helmet from 'helmet';
import express from 'express';
import cors from 'cors';

export default (app: express.Application) => {
  //secure http responses
  app.use(helmet());
  app.use(cors({
    origin: process.env.CLIENT_URL,
    optionsSuccessStatus: 200
  }));
};

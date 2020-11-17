import express from 'express';
import AppContainer from './controllers';
import applyMiddleware from './middlewares';
import http from 'http';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

applyMiddleware(app);

new AppContainer().init(app);

const server = http.createServer(app);

server.listen(process.env.PORT, function () {
  console.log(`Listening at PORT: ${process.env.PORT}`);
});

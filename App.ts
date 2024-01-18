import express, { Application } from "express";
import { json, urlencoded } from "body-parser";
import cors from 'cors';

const home = require("./src/routes/home")
const auth = require('./src/routes/auth')

const createApp = (): Application => {
  const app: Application = express();

  // 미들웨어
  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use(cors({
    origin: "http://localhost:3001",
    credentials: true,
  }));
  app.use('/auth', auth);
  app.use('/', home);

  return app;
};

export default createApp;

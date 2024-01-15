import express, { Application } from "express";
import { json, urlencoded } from "body-parser";

const home = require("./src/routes/home")
const auth = require('./src/routes/auth')

const createApp = (): Application => {
  const app: Application = express();

  // 미들웨어
  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use('/auth', auth);
  app.use('/', home);

  return app;
};

export default createApp;
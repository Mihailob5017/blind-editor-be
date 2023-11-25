import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { IController } from './helpers/types/Controller.types';

import ChallangeRouter from './routes/Challange.router';

const app = express();
const mainController: IController = async (req, res) => {
  res.send('Hello World!');
};

const main = async () => {
  // Middleware
  dotenv.config();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Main route

  app.get('/', mainController);

  // Routes
  app.use('/challange', ChallangeRouter);

  // Start server
  app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}!`);
  });
};

main();

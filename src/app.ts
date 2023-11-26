import * as dotenv from 'dotenv';
import express, { Application } from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerConfig } from './config/setup';

const app: Application = express();

dotenv.config();
app.use(cors());

const server = new ApolloServer(ApolloServerConfig);

async function startServer() {
  await server.start();
  server.applyMiddleware({ app } as any);
}

startServer().then(() => {
  const PORT: number | string = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(
      `Server running at http://localhost:${PORT}${server.graphqlPath}`,
    );
  });
});

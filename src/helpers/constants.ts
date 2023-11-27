import { PrismaClient } from '@prisma/client';
import { VM } from 'vm2';
import { v4 as uuidv4 } from 'uuid';
import { gql } from 'apollo-server-express';

export const prismaClient: PrismaClient = new PrismaClient();

export const JavascriptVM = new VM({
  timeout: 1000,
  sandbox: {},
});

export const constructorFunction = (code: String, args: String) => {
  return `
      ${code}
      test(${args});
  `;
};

export const compareResults = (
  output: string,
  expectedOutput: any,
  expectedType: string,
) => {
  return output === expectedOutput && typeof output === expectedType;
};

export const uuid = uuidv4;

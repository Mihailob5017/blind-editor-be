import { PrismaClient } from '@prisma/client';
import { VM } from 'vm2';
import { v4 as uuidv4 } from 'uuid';
import { PythonShell } from 'python-shell';

export const prismaClient: PrismaClient = new PrismaClient();

export const JavascriptVM = new VM({
  timeout: 1000,
  sandbox: {},
});

export const PythonVM = PythonShell;

export const uuid = uuidv4;

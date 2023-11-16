import { Request, Response } from 'express';
export type IController = (req: Request, res: Response) => Promise<any>;

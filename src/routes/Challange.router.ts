import { Router } from 'express';
// Controller
import { ChallangeController } from '../controller/Challange.controller';

const router = Router();

// Code execution
router.post('/execute/:codeId', ChallangeController);

export default router;

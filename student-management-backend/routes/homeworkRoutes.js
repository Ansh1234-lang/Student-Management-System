import express from 'express';
import { createHomework, getAllHomework } from '../controllers/homeworkController.js';

const router = express.Router();

router.post('/', createHomework);     // POST /api/homework
router.get('/', getAllHomework);      // GET /api/homework

export default router;

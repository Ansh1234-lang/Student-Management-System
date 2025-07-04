import express from 'express';
import {
  addAttendance,
  getAttendance,
  deleteAttendance
} from '../controllers/attendanceController.js';

const router = express.Router();

router.post('/', addAttendance);         // Mark attendance
router.get('/', getAttendance);           // Get all attendance records
router.delete('/:id', deleteAttendance);  // Delete attendance record

export default router;

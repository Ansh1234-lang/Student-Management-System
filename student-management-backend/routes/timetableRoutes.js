import express from 'express';
import {
  addTimetableEntry,
  getTimetable,
  deleteTimetableEntry
} from '../controllers/timetableController.js';

const router = express.Router();

router.get('/', getTimetable);            // View timetable
router.post('/', addTimetableEntry);      // Add timetable entry
router.delete('/:id', deleteTimetableEntry); // Delete entry

export default router;

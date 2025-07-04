import express from "express";
import {
  addSubject,
  getSubjects,
  deleteSubject,
} from "../controllers/subjectController.js";

const router = express.Router();

router.get("/", getSubjects); // View all subjects
router.post("/", addSubject); // Add subject
router.delete("/:id", deleteSubject); // Delete subject by ID

export default router;

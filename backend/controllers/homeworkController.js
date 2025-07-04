import Homework from '../models/HomeworkModel.js';

// CREATE Homework
const createHomework = async (req, res) => {
  try {
    const { title, description, dueDate, className, subject } = req.body;

    if (!title || !description || !dueDate || !className || !subject) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newHomework = new Homework({ title, description, dueDate, className, subject });
    await newHomework.save();

    res.status(201).json({ message: "Homework created successfully", homework: newHomework });
  } catch (error) {
    res.status(500).json({ message: "Failed to create homework", error: error.message });
  }
};

// GET all Homework
const getAllHomework = async (req, res) => {
  try {
    const homeworkList = await Homework.find();
    res.status(200).json(homeworkList);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch homework", error: error.message });
  }
};

export { createHomework, getAllHomework };

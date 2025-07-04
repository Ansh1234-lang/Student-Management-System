import Student from '../models/StudentModel.js';

export const addStudent = async (req, res) => {
  try {
    const { name, rollNumber, class: className, section } = req.body;
    if (!name || !rollNumber || !className || !section) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const student = new Student({ name, rollNumber, class: className, section });
    await student.save();
    res.status(201).json({ message: "Student added successfully", student });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getStudents = async (req, res) => {
  try {
    console.log("fetching student....")
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: "Error fetching students", error });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const id = req.params.id;
    await Student.findByIdAndDelete(id);
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting student", error });
  }
};

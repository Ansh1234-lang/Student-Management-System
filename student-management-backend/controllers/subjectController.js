import Subject from '../models/subjectModel.js';

export const addSubject = async (req, res) => {
  try {
    const { name, teacher } = req.body;
    const subject = new Subject({ name, teacher });
    await subject.save();
    res.status(201).json({ message: 'Subject added', subject });
  } catch (error) {
    res.status(500).json({ message: 'Error adding subject', error });
  }
};

export const getSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.status(200).json(subjects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching subjects', error });
  }
};

export const deleteSubject = async (req, res) => {
  try {
    const id = req.params.id;
    await Subject.findByIdAndDelete(id);
    res.status(200).json({ message: 'Subject deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting subject', error });
  }
};

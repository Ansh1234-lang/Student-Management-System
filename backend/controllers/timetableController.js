import Timetable from '../models/timetableModel.js';

export const addTimetableEntry = async (req, res) => {
  try {
    const { className, day, period, subject, teacher } = req.body;
    const entry = new Timetable({ className, day, period, subject, teacher });
    await entry.save();
    res.status(201).json({ message: 'Timetable entry added', entry });
  } catch (error) {
    res.status(500).json({ message: 'Error adding timetable entry', error });
  }
};

export const getTimetable = async (req, res) => {
  try {
    const { className } = req.query;
    const entries = await Timetable.find(className ? { className } : {});
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching timetable', error });
  }
};

export const deleteTimetableEntry = async (req, res) => {
  try {
    const id = req.params.id;
    await Timetable.findByIdAndDelete(id);
    res.status(200).json({ message: 'Timetable entry deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting timetable entry', error });
  }
};

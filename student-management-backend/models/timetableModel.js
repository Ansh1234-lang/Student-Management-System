import mongoose from 'mongoose';

const timetableSchema = new mongoose.Schema({
  className: {
    type: String,
    required: true
  },
  day: {
    type: String,
    required: true
  },
  period: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  teacher: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const Timetable = mongoose.model('Timetable', timetableSchema);

export default Timetable;

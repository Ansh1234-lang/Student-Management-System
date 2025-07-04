import mongoose from 'mongoose';

const homeworkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: { type: Date, required: true },
  className: { type: String, required: true },
  subject: { type: String, required: true }
}, { timestamps: true });

const Homework = mongoose.model('Homework', homeworkSchema);
export default Homework;

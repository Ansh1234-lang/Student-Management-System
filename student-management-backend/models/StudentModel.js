import mongoose from 'mongoose';

export const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rollNumber: {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  section: {
    type: String,
    required: true
  }
}, { timestamps: true });

// export default mongoose.model('Student', studentSchema);

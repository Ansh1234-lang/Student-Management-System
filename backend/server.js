import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

// Load environment variables
dotenv.config();

// Import routes
import homeworkRoutes from './routes/homeworkRoutes.js';
import studentRoutes from './routes/studentRoutes.js';
import timetableRoutes from './routes/timetableRoutes.js';
import attendanceRoutes from './routes/attendanceRoutes.js';
import subjectRoutes from './routes/subjectRoutes.js';
// import cors from 'cors';

const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:5174' })); // Replace with your frontend port
app.use(express.json());

// Routes
app.use('/api/students', studentRoutes);
app.use('/api/homework', homeworkRoutes);
app.use('/api/timetable', timetableRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/subjects', subjectRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection failed:', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Student Management API is running on port ${PORT}...`);
});

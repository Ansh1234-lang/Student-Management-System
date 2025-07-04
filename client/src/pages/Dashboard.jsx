import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome to the Student Module Dashboard</h1>
      <p className="text-lg text-gray-700 mb-6">Quickly access your features below:</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Link to="/student-info" className="bg-white shadow-md rounded-xl p-6 hover:bg-blue-50">
          <h2 className="text-xl font-semibold text-blue-600">Student Info</h2>
        </Link>
        <Link to="/attendance" className="bg-white shadow-md rounded-xl p-6 hover:bg-blue-50">
          <h2 className="text-xl font-semibold text-blue-600">Attendance</h2>
        </Link>
        <Link to="/homework" className="bg-white shadow-md rounded-xl p-6 hover:bg-blue-50">
          <h2 className="text-xl font-semibold text-blue-600">Homework / Assignment</h2>
        </Link>
        <Link to="/timetable" className="bg-white shadow-md rounded-xl p-6 hover:bg-blue-50">
          <h2 className="text-xl font-semibold text-blue-600">Class Timetable</h2>
        </Link>
        <Link to="/subjects" className="bg-white shadow-md rounded-xl p-6 hover:bg-blue-50">
          <h2 className="text-xl font-semibold text-blue-600">Subjects</h2>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;

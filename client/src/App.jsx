import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

import StudentInfo from './components/StudentInfo';
import Attendance from './components/Attendance';
import Homework from './components/Homework';
import Timetable from './components/Timetable';
import Subjects from './components/Subjects';
import StudentList from "./pages/StudentList";
import AddStudent from "./pages/AddStudent";
import ViewAttendance from './pages/ViewAttendance';
import ViewTimetable from './pages/ViewTimetable';
import ViewHomework from './pages/ViewHomework';





function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/student-info" element={<StudentInfo />} />
      <Route path="/attendance" element={<Attendance />} />
      <Route path="/homework" element={<Homework />} />
      <Route path="/timetable" element={<Timetable />} />
      <Route path="/subjects" element={<Subjects />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/students" element={<StudentList />} />
      <Route path="/add-student" element={<AddStudent />} />
      <Route path="/attendance" element={<ViewAttendance />} />
      <Route path="/timetable" element={<ViewTimetable />} />
      <Route path="/homework" element={<ViewHomework />} />
    </Routes>
  );
}

export default App;

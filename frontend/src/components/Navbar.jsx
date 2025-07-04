// src/components/Navbar.jsx

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'border-b-2 border-yellow-400 pb-1 text-yellow-400'
      : 'hover:text-yellow-400 transition';

  return (
    <nav className="bg-blue-900 text-white px-6 py-3 shadow flex justify-between items-center">
      <h1 className="text-xl font-bold">🎓 Student Portal</h1>
      <div className="flex gap-5">
        <NavLink to="/" className={navLinkClass}>Student Info</NavLink>
        <NavLink to="/attendance" className={navLinkClass}>Attendance</NavLink>
        <NavLink to="/homework" className={navLinkClass}>Homework</NavLink>
        <NavLink to="/timetable" className={navLinkClass}>Timetable</NavLink>
        <NavLink to="/subjects" className={navLinkClass}>Subjects</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

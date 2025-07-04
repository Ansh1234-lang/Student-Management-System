import React, { useEffect, useState } from 'react';
import { getAllStudents, deleteStudent } from '../services/studentService';

const ManageStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const data = await getAllStudents();
    setStudents(data);
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    fetchStudents();
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student._id} className="flex justify-between items-center mb-2">
            {student.name}
            <button
              onClick={() => handleDelete(student._id)}
              className="text-red-600 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageStudents;

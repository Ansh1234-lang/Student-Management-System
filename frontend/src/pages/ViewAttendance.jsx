// src/pages/ViewAttendance.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewAttendance = () => {
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(true);
  const [studentId, setStudentId] = useState("64d123abc456def789012345"); // Replace with real or dynamic ID

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/attendance/${studentId}`);
        setAttendance(res.data.attendance);
      } catch (err) {
        console.error("Error fetching attendance:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAttendance();
  }, [studentId]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📋 Attendance Records</h1>

      {loading ? (
        <p>Loading...</p>
      ) : attendance.length === 0 ? (
        <p>No attendance records found.</p>
      ) : (
        <table className="w-full table-auto border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((item) => (
              <tr key={item._id}>
                <td className="p-2 border">{new Date(item.date).toLocaleDateString()}</td>
                <td className={`p-2 border ${item.status === "Present" ? "text-green-600" : "text-red-500"}`}>
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewAttendance;

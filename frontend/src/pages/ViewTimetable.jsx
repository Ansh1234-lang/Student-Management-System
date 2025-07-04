// src/pages/ViewTimetable.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewTimetable = () => {
  const [className, setClassName] = useState("10A"); // Replace with dynamic input later
  const [timetable, setTimetable] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTimetable = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/timetable/${className}`);
        setTimetable(res.data.timetable);
      } catch (err) {
        console.error("Error fetching timetable:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTimetable();
  }, [className]);

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🗓️ Class Timetable - {className}</h2>

      {loading ? (
        <p>Loading timetable...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Day</th>
                <th className="p-2 border">Period</th>
                <th className="p-2 border">Subject</th>
                <th className="p-2 border">Teacher</th>
              </tr>
            </thead>
            <tbody>
              {timetable.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center p-4">
                    No timetable available
                  </td>
                </tr>
              ) : (
                timetable.map((entry) => (
                  <tr key={entry._id}>
                    <td className="p-2 border">{entry.day}</td>
                    <td className="p-2 border">{entry.period}</td>
                    <td className="p-2 border">{entry.subject}</td>
                    <td className="p-2 border">{entry.teacher}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewTimetable;

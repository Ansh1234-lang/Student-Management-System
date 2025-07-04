// src/pages/ViewHomework.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewHomework = () => {
  const [className, setClassName] = useState("10A"); // Replace with dynamic selection later
  const [homeworks, setHomeworks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomework = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/homework/${className}`);
        setHomeworks(res.data.homework);
      } catch (error) {
        console.error("Error fetching homework:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHomework();
  }, [className]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📚 Homework - Class {className}</h2>

      {loading ? (
        <p>Loading homework...</p>
      ) : homeworks.length === 0 ? (
        <p>No homework assigned yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {homeworks.map(hw => (
            <div key={hw._id} className="border p-4 rounded-xl shadow-sm bg-white">
              <h3 className="text-lg font-semibold">{hw.title}</h3>
              <p className="text-sm text-gray-700">{hw.description}</p>
              <p className="text-sm mt-2">
                <strong>Subject:</strong> {hw.subject}
              </p>
              <p className="text-sm">
                <strong>Due Date:</strong> {new Date(hw.dueDate).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewHomework;

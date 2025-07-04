import React, { useState } from "react";

const Subjects = () => {
  const [subjects, setSubjects] = useState([
    "Mathematics",
    "Science",
    "English",
    "Social Studies",
    "Computer"
  ]);
  const [newSubject, setNewSubject] = useState("");

  const handleAddSubject = () => {
    const trimmed = newSubject.trim();
    if (trimmed === "" || subjects.includes(trimmed)) return;
    setSubjects([...subjects, trimmed]);
    setNewSubject("");
  };

  const handleDeleteSubject = (subjectToDelete) => {
    const updatedSubjects = subjects.filter(subject => subject !== subjectToDelete);
    setSubjects(updatedSubjects);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">📘 Subjects</h2>

      {/* Add Subject Input */}
      <div className="flex gap-3 mb-6">
        <input
          type="text"
          placeholder="Add new subject"
          value={newSubject}
          onChange={(e) => setNewSubject(e.target.value)}
          className="flex-grow p-2 border rounded"
        />
        <button
          onClick={handleAddSubject}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      {/* Subject List */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {subjects.map((subject, index) => (
          <div
            key={index}
            className="bg-white shadow rounded p-4 border flex justify-between items-center"
          >
            <span className="text-blue-800 font-semibold">{subject}</span>
            <button
              onClick={() => handleDeleteSubject(subject)}
              className="text-red-600 hover:text-red-800 font-bold ml-4"
              title="Delete"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subjects;

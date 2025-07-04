import React, { useState } from "react";

const Homework = () => {
  const [homeworkList, setHomeworkList] = useState([]);
  const [newHomework, setNewHomework] = useState({
    subject: "",
    description: "",
    dueDate: "",
    status: "Pending",
  });

  const handleAddHomework = () => {
    if (!newHomework.subject || !newHomework.description || !newHomework.dueDate) {
      alert("Please fill in all fields.");
      return;
    }

    setHomeworkList([...homeworkList, newHomework]);
    setNewHomework({ subject: "", description: "", dueDate: "", status: "Pending" });
  };

  const markCompleted = (index) => {
    const updatedList = [...homeworkList];
    updatedList[index].status = "Completed";
    setHomeworkList(updatedList);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">📚 Homework & Assignments</h2>

      {/* New Homework Form */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h3 className="text-xl font-semibold mb-2">➕ Add New Homework</h3>
        <div className="grid gap-3 md:grid-cols-3">
          <input
            type="text"
            placeholder="Subject"
            value={newHomework.subject}
            onChange={(e) => setNewHomework({ ...newHomework, subject: e.target.value })}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Description"
            value={newHomework.description}
            onChange={(e) => setNewHomework({ ...newHomework, description: e.target.value })}
            className="border p-2 rounded"
          />
          <input
            type="date"
            value={newHomework.dueDate}
            onChange={(e) => setNewHomework({ ...newHomework, dueDate: e.target.value })}
            className="border p-2 rounded"
          />
        </div>
        <button
          onClick={handleAddHomework}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Homework
        </button>
      </div>

      {/* Homework List */}
      {homeworkList.length === 0 ? (
        <p className="text-center text-gray-500">No homework added yet.</p>
      ) : (
        <div className="space-y-4">
          {homeworkList.map((hw, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded shadow-md">
              <h4 className="text-lg font-semibold text-blue-600">{hw.subject}</h4>
              <p className="text-gray-700">{hw.description}</p>
              <p className="text-sm text-gray-500">Due: {hw.dueDate}</p>
              <p className="mt-1">
                Status:{" "}
                <span className={hw.status === "Completed" ? "text-green-600" : "text-red-600"}>
                  {hw.status}
                </span>
              </p>
              <button
                onClick={() => markCompleted(index)}
                disabled={hw.status === "Completed"}
                className={`mt-2 px-3 py-1 rounded ${
                  hw.status === "Completed"
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
              >
                Mark Completed
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Homework;

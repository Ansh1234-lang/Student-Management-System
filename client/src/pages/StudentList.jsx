// src/pages/StudentList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    class: "",
    section: "",
    contact: "",
    address: "",
  });
  const [editingId, setEditingId] = useState(null);

  const fetchStudents = async () => {
    const res = await axios.get("/api/students");
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await axios.put(`/api/students/${editingId}`, formData);
    } else {
      await axios.post("/api/students", formData);
    }
    setFormData({
      name: "",
      rollNumber: "",
      class: "",
      section: "",
      contact: "",
      address: "",
    });
    setEditingId(null);
    fetchStudents();
  };

  const handleEdit = (student) => {
    setFormData(student);
    setEditingId(student._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/students/${id}`);
    fetchStudents();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Students</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 mb-6">
        {["name", "rollNumber", "class", "section", "contact", "address"].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            value={formData[field]}
            onChange={handleChange}
            placeholder={field}
            className="border p-2 rounded"
            required={["name", "rollNumber", "class", "section"].includes(field)}
          />
        ))}
        <button type="submit" className="col-span-2 bg-blue-500 text-white p-2 rounded">
          {editingId ? "Update" : "Add"} Student
        </button>
      </form>

      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th>Name</th>
            <th>Roll</th>
            <th>Class</th>
            <th>Section</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((stu) => (
            <tr key={stu._id} className="text-center">
              <td>{stu.name}</td>
              <td>{stu.rollNumber}</td>
              <td>{stu.class}</td>
              <td>{stu.section}</td>
              <td>{stu.contact}</td>
              <td>{stu.address}</td>
              <td>
                <button onClick={() => handleEdit(stu)} className="text-blue-600 mr-2">
                  Edit
                </button>
                <button onClick={() => handleDelete(stu._id)} className="text-red-600">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;

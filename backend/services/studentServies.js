import axios from 'axios';

const API = process.env.REACT_APP_API_BASE_URL;

export const getAllStudents = async () => {
  const res = await axios.get(`${API}/students`);
  return res.data;
};

export const addStudent = async (studentData) => {
  const res = await axios.post(`${API}/students`, studentData);
  return res.data;
};

export const deleteStudent = async (id) => {
  const res = await axios.delete(`${API}/students/${id}`);
  return res.data;
};


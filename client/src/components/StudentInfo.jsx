import React, { useState } from 'react';

const StudentInfo = () => {
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    studentClass: '',
    section: '',
    gender: '',
    dob: '',
    fatherName: '',
    motherName: '',
    guardianName: '',
    contactNumber: '',
    email: '',
    currentAddress: '',
    permanentAddress: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!formData.name || !formData.rollNumber || !formData.email) {
      alert('Please fill in all required fields');
      return false;
    }
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(formData.email)) {
      alert('Invalid email address');
      return false;
    }
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(formData.contactNumber)) {
      alert('Invalid contact number');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Student Information</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" name="name" placeholder="Student Name *" value={formData.name} onChange={handleChange} className="input" />
        <input type="text" name="rollNumber" placeholder="Roll Number *" value={formData.rollNumber} onChange={handleChange} className="input" />
        
        <select name="studentClass" value={formData.studentClass} onChange={handleChange} className="input">
          <option value="">Select Class</option>
          <option value="10">Class 10</option>
          <option value="11">Class 11</option>
          <option value="12">Class 12</option>
        </select>
        <select name="section" value={formData.section} onChange={handleChange} className="input">
          <option value="">Select Section</option>
          <option value="A">A</option>
          <option value="B">B</option>
        </select>

        <select name="gender" value={formData.gender} onChange={handleChange} className="input">
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="input" />

        <input type="text" name="fatherName" placeholder="Father's Name" value={formData.fatherName} onChange={handleChange} className="input" />
        <input type="text" name="motherName" placeholder="Mother's Name" value={formData.motherName} onChange={handleChange} className="input" />
        <input type="text" name="guardianName" placeholder="Guardian's Name" value={formData.guardianName} onChange={handleChange} className="input" />
        <input type="text" name="contactNumber" placeholder="Contact Number *" value={formData.contactNumber} onChange={handleChange} className="input" />
        <input type="email" name="email" placeholder="Email *" value={formData.email} onChange={handleChange} className="input" />

        <textarea name="currentAddress" placeholder="Current Address" value={formData.currentAddress} onChange={handleChange} className="input col-span-full" />
        <textarea name="permanentAddress" placeholder="Permanent Address" value={formData.permanentAddress} onChange={handleChange} className="input col-span-full" />

        <button type="submit" className="col-span-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentInfo;

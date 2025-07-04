import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AttendanceSection = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const attendanceData = [
    { date: '2025-07-01', status: 'Present' },
    { date: '2025-07-02', status: 'Absent' },
    { date: '2025-07-03', status: 'Present' },
    { date: '2025-07-04', status: 'Present' },
    { date: '2025-07-05', status: 'Absent' },
  ];

  const getFilteredData = () => {
    if (!startDate || !endDate) return attendanceData;
    return attendanceData.filter((record) => {
      const recordDate = new Date(record.date);
      return recordDate >= startDate && recordDate <= endDate;
    });
  };

  const summary = attendanceData.reduce(
    (acc, curr) => {
      if (curr.status === 'Present') acc.present++;
      else acc.absent++;
      return acc;
    },
    { present: 0, absent: 0 }
  );

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Attendance Records</h2>

      <div className="flex gap-4 mb-6 flex-wrap">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">From:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholderText="Select start date"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">To:</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholderText="Select end date"
          />
        </div>
      </div>

      <table className="min-w-full text-sm text-left border">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="px-4 py-2 border">Date</th>
            <th className="px-4 py-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {getFilteredData().map((record, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2 border">{record.date}</td>
              <td
                className={`px-4 py-2 border font-medium ${
                  record.status === 'Present' ? 'text-green-600' : 'text-red-500'
                }`}
              >
                {record.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6 bg-gray-50 p-4 rounded-md border text-sm">
        <p><span className="font-medium">Monthly Summary:</span> Present: {summary.present}, Absent: {summary.absent}</p>
      </div>
    </div>
  );
};

export default AttendanceSection;

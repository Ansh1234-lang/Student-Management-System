import React, { useState } from 'react';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Timetable = () => {
  const [day, setDay] = useState('');
  const [period, setPeriod] = useState('');
  const [subject, setSubject] = useState('');
  const [teacher, setTeacher] = useState('');
  const [timetable, setTimetable] = useState([]);

  const handleAddSlot = () => {
    if (!day || !period || !subject || !teacher) {
      alert("Please fill in all fields");
      return;
    }

    if (day === 'Sunday') {
      alert("Sunday is a holiday! Please choose another day.");
      return;
    }

    const newSlot = { day, period, subject, teacher };
    setTimetable([...timetable, newSlot]);

    // Reset fields
    setDay('');
    setPeriod('');
    setSubject('');
    setTeacher('');
  };

  const getSlotsByDay = (day) => {
    return timetable.filter((slot) => slot.day === day);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📅 Class Timetable</h1>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <select value={day} onChange={(e) => setDay(e.target.value)} className="p-2 border rounded">
          <option value="">Select Day</option>
          {daysOfWeek.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Period (e.g. 9:00 - 10:00)"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="p-2 border rounded"
        />

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="p-2 border rounded"
        />

        <input
          type="text"
          placeholder="Teacher"
          value={teacher}
          onChange={(e) => setTeacher(e.target.value)}
          className="p-2 border rounded"
        />
      </div>

      <button
        onClick={handleAddSlot}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        ➕ Add Slot
      </button>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {daysOfWeek.map((d) => (
          <div
            key={d}
            className={`p-4 rounded shadow border ${
              d === 'Sunday' ? 'bg-red-100 text-red-700 border-red-300' : 'bg-gray-50'
            }`}
          >
            <h2 className="text-lg font-semibold mb-2">{d}</h2>
            {d === 'Sunday' ? (
              <p>🚫 Sunday is a holiday</p>
            ) : (
              getSlotsByDay(d).length > 0 ? (
                <ul className="list-disc ml-4">
                  {getSlotsByDay(d).map((slot, index) => (
                    <li key={index}>
                      <strong>{slot.period}</strong> — {slot.subject} ({slot.teacher})
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500">No slots</p>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timetable;

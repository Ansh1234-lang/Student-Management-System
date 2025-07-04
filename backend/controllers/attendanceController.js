import Attendance from "../models/AttendanceModel.js";

export const addAttendance = async (req, res) => {
  try {
    const { studentId, date, status } = req.body;
    const attendance = new Attendance({ studentId, date, status });
    await attendance.save();
    res.status(201).json({ message: "Attendance marked", attendance });
  } catch (error) {
    res.status(500).json({ message: "Error marking attendance", error });
  }
};

// DELETE Attendance
export const deleteAttendance = async (req, res) => {
  try {
    const id = req.params.id;
    await Attendance.findByIdAndDelete(id);
    res.status(200).json({ message: "Attendance record deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting attendance", error: error.message });
  }
};

export const getAttendance = async (req, res) => {
  try {
    const records = await Attendance.find();
    res.status(200).json(records);
  } catch (error) {
    console.error("Error fetching attendance:", error); // Log for debugging
    res.status(500).json({ message: "Error fetching attendance records", error: error.message });
  }
};

// export { addAttendance, getAttendance, deleteAttendance };


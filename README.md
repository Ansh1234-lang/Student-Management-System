# 🎓 Student Management System

A full-stack Student Management System built using:

- **Frontend**: React (Vite) + Tailwind CSS
- **Backend**: Node.js + Express
- **Database**: MongoDB

This system allows schools or coaching centers to manage:
- 📝 Student Information
- 🗓️ Class Timetable
- 🧮 Attendance
- 📚 Homework & Assignments

---

## 📁 Project Structure

student-module/
├── frontend/ # React + Vite + Tailwind frontend
├── backend/ # Node.js + Express backend
└── README.md # Project guide


---

## ⚙️ Setup Instructions

### 🔧 Backend Setup (`/backend`)

1. Navigate to backend folder:
   ```bash
   cd backend
Install dependencies:

bash
Copy code
npm install
Create .env file:

env
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
Run backend server:

bash
Copy code
npm run dev
Server runs on http://localhost:5000

🎨 Frontend Setup (/frontend)
Navigate to frontend folder:

bash
Copy code
cd frontend
Install dependencies:

bash
Copy code
npm install
Start development server:

bash
Copy code
npm run dev
App runs on http://localhost:5173 (or next available port)

🧪 Features
View and manage student profiles

Assign and review homework

Mark and track attendance

View class-wise timetable

📦 Environment Variables
Create a .env file in /backend folder:

env
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
Note: Do not commit .env with sensitive data. Use .env.example for reference.

🧰 Tech Stack
Frontend	Backend	Database	Styling
React (Vite)	Node.js + Express	MongoDB	Tailwind CSS

🧑‍💻 Developed By
Ansh Verma

📨 Sharing
You can zip this full project (excluding node_modules) and share it with recruiters.

Also, share this GitHub repo link or deploy live for demo access.

✅ To Do
 CRUD for Students

 Timetable View

 Attendance Marking

 Homework Management

 Authentication & Authorization (Basic)


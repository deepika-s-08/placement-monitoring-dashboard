# Placement Skill Monitoring Management System

A full-stack assignment project built with React, React Router, Axios, Node.js, Express, MongoDB Atlas and Mongoose.

## Features
- Home dashboard with total students and placement-readiness counts
- Add student skill records
- View all student records
- Edit existing student records
- Delete student records
- REST API using GET, POST, PUT and DELETE
- MongoDB persistence using Mongoose

## Requirements
- Node.js 18+
- MongoDB Atlas account
- VS Code (recommended)

## 1. Configure MongoDB Atlas
1. Create a free MongoDB Atlas cluster.
2. Create a database user and password.
3. In Network Access, allow your current IP address (for learning only, you may temporarily use `0.0.0.0/0`).
4. Select Connect > Drivers and copy the connection string.
5. Open `server/.env.example`, copy it as `server/.env`, and replace `<db_password>` with your database user's password.
6. Keep the database name as `placementDB`.

Example:
`MONGO_URI=mongodb+srv://YOUR_USER:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/placementDB?retryWrites=true&w=majority`

Do not upload `.env` or share your database password on GitHub.

## 2. Run the backend
Open a terminal in the `server` folder:

```bash
npm install
```

Create `server/.env` from `.env.example`, then run:

```bash
npm run dev
```

Backend: `http://localhost:5000`
Health check: `http://localhost:5000/api/health`

## 3. Run the frontend
Open another terminal in the `client` folder:

```bash
npm install
npm run dev
```

Open the Vite URL shown in the terminal, usually `http://localhost:5173`.

## API endpoints
| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/students` | Get all student records |
| GET | `/api/students/:id` | Get one student |
| POST | `/api/students` | Add a student |
| PUT | `/api/students/:id` | Update a student |
| DELETE | `/api/students/:id` | Delete a student |

## Student fields
- studentName
- registerNumber
- department
- technicalSkills
- aptitudeScore (0–100)
- communicationSkills (0–100)
- placementStatus (`Ready`, `In Progress`, `Not Ready`)

## Notes
- Frontend uses `VITE_API_URL` if provided; otherwise it uses `http://localhost:5000/api`.
- Backend uses `MONGO_URI`, `PORT`, and `CLIENT_URL` from `.env`.
- This is an academic demonstration project. Add authentication and stronger validation before real-world deployment.

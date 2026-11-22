import React, { useState, useEffect } from "react";
import {
  NavLink,
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom";

import {
  LayoutDashboard,
  UserPlus,
  Users,
  GraduationCap
} from "lucide-react";

import Dashboard from "./pages/Dashboard.jsx";
import StudentList from "./pages/StudentList.jsx";
import StudentForm from "./pages/StudentForm.jsx";

export default function App() {
  return (
    <div className="app-shell">

      {/* Sidebar */}
      <aside className="sidebar">

        <Link to="/" className="brand">
          <span className="brand-icon">
            <GraduationCap size={25} />
          </span>

          <span>
            Placement
            <span className="brand-light">Monitor</span>
          </span>
        </Link>

        <p className="nav-label">MAIN MENU</p>

        <nav>
          <NavLink to="/" end>
            <LayoutDashboard size={18} />
            Dashboard
          </NavLink>

          <NavLink to="/add-student">
            <UserPlus size={18} />
            Add Student
          </NavLink>

          <NavLink to="/students">
            <Users size={18} />
            Student List
          </NavLink>
        </nav>

        <div className="sidebar-note">
          <strong>Student Skills Portal</strong>
          <span>Track skills. Build careers.</span>
        </div>

      </aside>

      {/* Main Content */}
      <main className="main-area">

        <header className="topbar">
          <div>
            <span className="topbar-kicker">
              STUDENT DEVELOPMENT
            </span>

            <h2>Placement Skill Monitoring</h2>
          </div>

          <div className="profile-chip">
            <span className="profile-dot">P</span>
            <span>Placement Admin</span>
          </div>
        </header>

        {/* Page Routes */}
        <div className="page-content">

          <Routes>
            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/add-student"
              element={<StudentForm />}
            />

            <Route
              path="/students"
              element={<StudentList />}
            />

            <Route
              path="/edit-student/:id"
              element={<StudentForm />}
            />

            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </Routes>

        </div>

        <footer>
          Placement Skill Monitoring Management System
          · Academic Project
        </footer>

      </main>
    </div>
  );
}

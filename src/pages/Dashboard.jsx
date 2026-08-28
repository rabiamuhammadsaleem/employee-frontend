import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { api } from "../api";

const Dashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({ employees: 0, departments: 0, attendance: 0, pendingLeaves: 0 });
  useEffect(() => { api("/dashboard").then(setStats).catch(() => {}); }, []);

  return (
    <div className="dashboard-page">

      {/* ================= SIDEBAR ================= */}
      <aside className="dashboard-sidebar">

        {/* Logo / Brand */}
        <div className="sidebar-brand">
          <div className="brand-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="12" cy="7" r="3.2" />
              <path d="M5.5 20c0-3.6 2.8-6 6.5-6s6.5 2.4 6.5 6" />
            </svg>
          </div>

          <div className="brand-text">
            <h3>Employee MS</h3>
            <p>Management System</p>
          </div>
        </div>


        {/* User Profile */}
        <div className="sidebar-user">

          <div className="user-avatar">
            J
          </div>

          <div className="user-info">
            <h4>John Doe</h4>
            <p>Employee</p>
          </div>

        </div>


        {/* Navigation */}
        <div className="navigation-title">
          NAVIGATION
        </div>

        <nav className="sidebar-navigation">

          {/* Dashboard */}
         
          <button
                className="sidebar-link active"
                onClick={() => navigate("/dashboard")}
          >
            <span className="nav-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <rect x="4" y="4" width="6" height="6" rx="1" />
                <rect x="14" y="4" width="6" height="6" rx="1" />
                <rect x="4" y="14" width="6" height="6" rx="1" />
                <rect x="14" y="14" width="6" height="6" rx="1" />
              </svg>
            </span>

            <span>Dashboard</span>

            <span className="nav-arrow">›</span>
          </button>


          {/* Attendance */}
     
          <button className="sidebar-link"
            onClick={() => navigate("/employees")}
>
            <span className="nav-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <rect x="4" y="5" width="16" height="15" rx="2" />
                <path d="M8 3v4M16 3v4M4 10h16" />
              </svg>
            </span>

            <span>Attendance</span>
          </button>


          {/* Leave */}
         <button
  className="sidebar-link"
  onClick={() => navigate("/leave")}
>
  <span className="nav-icon">
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M7 4h8l4 4v12H7z" />
      <path d="M15 4v5h4" />
      <path d="M10 13h6M10 16h4" />
    </svg>
  </span>

  <span>Leave</span>
</button>   
         
          {/* Payslips */}
          <button className="sidebar-link"
            onClick={() => navigate("/payslips")}
>
            <span className="nav-icon dollar-icon">
              $
            </span>

            <span>Payslips</span>
          </button>


          {/* Settings */}
          <button className="sidebar-link"
            onClick={() => navigate("/settings")}
>
            <span className="nav-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.8 1.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V20h-2.5v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1-1.8-1.8.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H6V11.5h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 1.8-1.8.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6V5h2.5v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.8 1.8-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.1V14h-.1a1.7 1.7 0 0 0-1.6 1Z" />
              </svg>
            </span>

            <span>Settings</span>
          </button>

        </nav>


        {/* Logout */}
        <button
          className="logout-button"
          onClick={() => navigate("/")}
        >
          <span className="logout-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <path d="M10 5H5v14h5" />
              <path d="M14 8l4 4-4 4" />
              <path d="M18 12H9" />
            </svg>
          </span>

          <span>Log out</span>
        </button>

      </aside>


      {/* ================= MAIN CONTENT ================= */}
      <main className="dashboard-main">

        {/* Page Heading */}
        <div className="dashboard-header">
          <h1>Dashboard</h1>

          <p>
            Welcome back, Admin — here's your overview
          </p>
        </div>


        {/* ================= STAT CARDS ================= */}
        <div className="dashboard-cards">

          {/* Total Employees */}
          <div className="dashboard-card">

            <div className="card-content">
              <p>Total Employees</p>
              <h2>{stats.employees}</h2>
            </div>

            <div className="card-icon employees-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="9" cy="8" r="3" />
                <path d="M3.5 19c0-3.2 2.3-5.5 5.5-5.5s5.5 2.3 5.5 5.5" />
                <circle cx="17" cy="9" r="2.3" />
                <path d="M15 14.5c2.8-.1 5 1.8 5.5 4.5" />
              </svg>
            </div>

          </div>


          {/* Departments */}
          <div className="dashboard-card">

            <div className="card-content">
              <p>Departments</p>
              <h2>{stats.departments}</h2>
            </div>

            <div className="card-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="5" y="5" width="14" height="15" rx="2" />
                <path d="M9 20v-5h6v5M8 9h2M14 9h2M8 12h2M14 12h2" />
              </svg>
            </div>

          </div>


          {/* Today's Attendance */}
          <div className="dashboard-card">

            <div className="card-content">
              <p>Today's Attendance</p>
              <h2>{stats.attendance}</h2>
            </div>

            <div className="card-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="4" y="5" width="16" height="15" rx="2" />
                <path d="M8 3v4M16 3v4M4 10h16" />
              </svg>
            </div>

          </div>


          {/* Pending Leaves */}
          <div className="dashboard-card">

            <div className="card-content">
              <p>Pending Leaves</p>
              <h2>{stats.pendingLeaves}</h2>
            </div>

            <div className="card-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M6 3h9l4 4v14H6z" />
                <path d="M15 3v5h4" />
                <path d="M9 12h6M9 15h5M9 18h3" />
              </svg>
            </div>

          </div>

        </div>

      </main>

    </div>
  );
};

export default Dashboard;
import React from "react";
import "./Setting.css";

const Setting = () => {
  return (
    <div className="settings-page">

      {/* Sidebar */}
      <aside className="sidebar">

        {/* Brand */}
        <div className="brand-section">
          <div className="brand-icon">
            <svg viewBox="0 0 24 24" width="22" height="22">
              <circle
                cx="12"
                cy="8"
                r="3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="M5.5 19c.7-3.4 2.9-5.2 6.5-5.2s5.8 1.8 6.5 5.2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="brand-text">
            <h2>Employee MS</h2>
            <span>Management System</span>
          </div>
        </div>

        {/* Profile */}
        <div className="profile-section">
          <div className="profile-avatar">J</div>

          <div className="profile-info">
            <h3>John Doe</h3>
            <span>Employee</span>
          </div>
        </div>

        {/* Navigation label */}
        <div className="navigation-label">
          NAVIGATION
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">

          <a href="/dashboard" className="nav-item">
            <svg viewBox="0 0 24 24">
              <rect
                x="4"
                y="4"
                width="6"
                height="6"
                rx="1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <rect
                x="14"
                y="4"
                width="6"
                height="6"
                rx="1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <rect
                x="4"
                y="14"
                width="6"
                height="6"
                rx="1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <rect
                x="14"
                y="14"
                width="6"
                height="6"
                rx="1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />
            </svg>

            <span>Dashboard</span>
          </a>

          <a href="#" className="nav-item">
            <svg viewBox="0 0 24 24">
              <rect
                x="4"
                y="5"
                width="16"
                height="15"
                rx="2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="M8 3v4M16 3v4M4 10h16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>

            <span>Attendance</span>
          </a>

          <a href="/leave" className="nav-item"
          >
            <svg viewBox="0 0 24 24">
              <path
                d="M6 3h9l3 3v15H6z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M14 3v4h4M9 12h6M9 16h4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>

            <span>Leave</span>
          </a>

          <a href="/payslips" className="nav-item">
            <svg viewBox="0 0 24 24">
              <rect
                x="3"
                y="6"
                width="18"
                height="12"
                rx="2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <circle
                cx="12"
                cy="12"
                r="2.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />
            </svg>

            <span>Payslips</span>
          </a>

          <a href="/settings" className="nav-item active">
            <svg viewBox="0 0 24 24">
              <circle
                cx="12"
                cy="12"
                r="3"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />

              <path
                d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.8 1.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V20h-2.6v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1-1.8-1.8.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H6v-2.6h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1L9 6.6l.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5V5h2.6v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.8 1.8-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.1v2.6h-.1a1.7 1.7 0 0 0-1.1 1.4z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>

            <span>Settings</span>

            <span className="nav-chevron">›</span>
          </a>

        </nav>

        {/* Logout */}
        <div className="logout-section">
          <a href="/" className="logout-btn">

            <svg viewBox="0 0 24 24">
              <path
                d="M10 5H5v14h5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M13 8l4 4-4 4M17 12H9"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span>Log out</span>

          </a>
        </div>

      </aside>

      {/* Main Content */}
      <main className="main-content">

        <div className="content-header">
          <h1>Settings</h1>
          <p>Manage your account and preferences</p>
        </div>

        {/* Password Card */}
        <div className="settings-card">

          <div className="setting-left">

            <div className="setting-icon">
              <svg viewBox="0 0 24 24">
                <rect
                  x="5"
                  y="10"
                  width="14"
                  height="10"
                  rx="2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />

                <path
                  d="M8 10V7a4 4 0 0 1 8 0v3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />

                <circle
                  cx="12"
                  cy="15"
                  r="1"
                  fill="currentColor"
                />
              </svg>
            </div>

            <div className="setting-info">
              <h3>Password</h3>
              <p>Update your account password</p>
            </div>

          </div>

          <button className="change-btn">
            Change
          </button>

        </div>

      </main>

    </div>
  );
};

export default Setting;
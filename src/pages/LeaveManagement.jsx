import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LeaveManagement.css";
import { api } from "../api";

const LeaveManagement = () => {
  const navigate = useNavigate();

  const [leaveApplications, setLeaveApplications] = useState([]);
  useEffect(() => { api("/leaves").then(setLeaveApplications).catch(() => {}); }, []);
  const formatDates = (leave) => `${new Date(leave.startDate).toLocaleDateString()} — ${new Date(leave.endDate).toLocaleDateString()}`;
  /*
    {
      employee: "David Michael",
      type: "ANNUAL",
      dates: "Mar 27 — Mar 29, 2026",
      reason: "Out for a trip",
      status: "APPROVED",
    },
    {
      employee: "Alex Matthew",
      type: "CASUAL",
      dates: "Mar 23 — Mar 24, 2026",
      reason: "Going For Vacations",
      status: "REJECTED",
    },
    {
      employee: "John Doe",
      type: "CASUAL",
      dates: "Mar 27 — Mar 28, 2026",
      reason: "Going to visit a temple",
      status: "PENDING",
    },
    {
      employee: "David Michael",
      type: "SICK",
      dates: "Mar 15 — Mar 16, 2026",
      reason: "I had a fracture on leg",
      status: "APPROVED",
    },
  ]; */

  const updateLeave = async (leave, status) => {
    const updated = await api(`/leaves/${leave._id}`, { method: "PATCH", body: JSON.stringify({ status }) });
    setLeaveApplications((current) => current.map((item) => item._id === updated._id ? updated : item));
  };

  return (
    <div className="leave-page">

      {/* =========================================
          SIDEBAR
      ========================================= */}

      <aside className="leave-sidebar">

        {/* Brand */}
        <div className="leave-brand">

          <div className="leave-brand-icon">
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

          <div>
            <h3>Employee MS</h3>
            <p>Management System</p>
          </div>

        </div>


        {/* User Profile */}
        <div className="leave-user">

          <div className="leave-avatar">
            J
          </div>

          <div className="leave-user-info">
            <h4>John Doe</h4>
            <p>Employee</p>
          </div>

        </div>


        {/* Navigation Title */}
        <div className="leave-nav-title">
          NAVIGATION
        </div>


        {/* Navigation */}
        <nav className="leave-navigation">

          {/* Dashboard */}
          <button
            className="leave-nav-item"
            onClick={() => navigate("/dashboard")}
          >
            <span className="leave-nav-icon">
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
          </button>


          {/* Attendance */}
          <button className="leave-nav-item"
                      onClick={() => navigate("/employees")}
>
            <span className="leave-nav-icon">
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
            className="leave-nav-item active"
            onClick={() => navigate("/leave")}
          >
            <span className="leave-nav-icon">
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

            <span className="leave-nav-arrow">
              ›
            </span>
          </button>


          {/* Payslips */}
          <button className="leave-nav-item"
                      onClick={() => navigate("/payslips")}
>

            <span className="leave-nav-icon leave-dollar">
              $
            </span>

            <span>Payslips</span>

          </button>


          {/* Settings */}
          <button className="leave-nav-item"
                      onClick={() => navigate("/settings")}
>

            <span className="leave-nav-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <circle cx="12" cy="12" r="3" />

                <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.8 1.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V20h-2.5v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1-1.8-1.8.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H6V11.5h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 1.8-1.8.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6V5h2.5v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.8 1.8-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0-1.6 1h.1V14h-.1a1.7 1.7 0 0 0-1.6 1Z" />
              </svg>
            </span>

            <span>Settings</span>

          </button>

        </nav>


        {/* Logout */}
        <button
          className="leave-logout"
          onClick={() => navigate("/")}
        >
          <span className="leave-logout-icon">
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


      {/* =========================================
          MAIN CONTENT
      ========================================= */}

      <main className="leave-main">

        {/* Heading */}
        <div className="leave-header">

          <h1>
            Leave Management
          </h1>

          <p>
            Manage leave applications
          </p>

        </div>


        {/* =========================================
            LEAVE TABLE
        ========================================= */}

        <div className="leave-table-wrapper">

          <table className="leave-table">

            <thead>
              <tr>
                <th>EMPLOYEE</th>
                <th>TYPE</th>
                <th>DATES</th>
                <th>REASON</th>
                <th>STATUS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>


            <tbody>

              {leaveApplications.map((leave) => (

                <tr key={leave._id}>

                  {/* Employee */}
                  <td className="employee-name">
                    {leave.employee}
                  </td>


                  {/* Type */}
                  <td>
                    <span className="leave-type">
                      {leave.type}
                    </span>
                  </td>


                  {/* Dates */}
                  <td className="leave-date">
                    {formatDates(leave)}
                  </td>


                  {/* Reason */}
                  <td className="leave-reason">
                    {leave.reason}
                  </td>


                  {/* Status */}
                  <td>

                    <span
                      className={`leave-status ${
                        leave.status.toLowerCase()
                      }`}
                    >
                      {leave.status}
                    </span>

                  </td>


                  {/* Actions */}
                  <td className="leave-actions">

                    {leave.status === "PENDING" && (
                      <>
                        <button
                          className="approve-button"
                          onClick={() =>
                            updateLeave(leave, "APPROVED")
                          }
                          title="Approve"
                        >
                          ✓
                        </button>

                        <button
                          className="reject-button"
                          onClick={() =>
                            updateLeave(leave, "REJECTED")
                          }
                          title="Reject"
                        >
                          ×
                        </button>
                      </>
                    )}

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </main>

    </div>
  );
};

export default LeaveManagement;
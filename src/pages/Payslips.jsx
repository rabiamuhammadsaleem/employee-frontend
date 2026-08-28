import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Payslips.css";
import { api } from "../api";

const Payslips = () => {
  const navigate = useNavigate();

  const [payslips, setPayslips] = useState([]);
  const [showPayslipForm, setShowPayslipForm] = useState(false);
  const [payslipError, setPayslipError] = useState("");
  const [payslipForm, setPayslipForm] = useState({ employee: "", period: "", basicSalary: "", allowances: "0", deductions: "0" });
  useEffect(() => { api("/payslips").then(setPayslips).catch(() => {}); }, []);
  /*
    {
      employee: "David Michael",
      period: "February 2026",
      basicSalary: "$2,000",
      netSalary: "$2,180",
    },
    {
      employee: "Alex Matthew",
      period: "February 2026",
      basicSalary: "$2,000",
      netSalary: "$2,180",
    },
    {
      employee: "John Doe",
      period: "February 2026",
      basicSalary: "$1,000",
      netSalary: "$1,090",
    },
    {
      employee: "David Michael",
      period: "January 2026",
      basicSalary: "$1,000",
      netSalary: "$1,180",
    },
    {
      employee: "Alex Matthew",
      period: "January 2026",
      basicSalary: "$2,000",
      netSalary: "$2,090",
    },
    {
      employee: "John Doe",
      period: "January 2026",
      basicSalary: "$2,000",
      netSalary: "$2,090",
    },
  ]; */

  const handleGeneratePayslip = async (event) => {
    event.preventDefault();
    setPayslipError("");
    try {
      const payslip = await api("/payslips", { method: "POST", body: JSON.stringify(payslipForm) });
      setPayslips((current) => [payslip, ...current]);
      setShowPayslipForm(false);
      setPayslipForm({ employee: "", period: "", basicSalary: "", allowances: "0", deductions: "0" });
    } catch (error) {
      setPayslipError(error.message);
    }
  };

  const handleDownload = (employee, period) => {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([`Payslip\nEmployee: ${employee}\nPeriod: ${period}`], { type: "text/plain" }));
    link.download = `${employee}-${period}.txt`; link.click(); URL.revokeObjectURL(link.href);
  };

  return (
    <div className="payslip-page">

      {/* =====================================
          SIDEBAR
      ===================================== */}

      <aside className="payslip-sidebar">

        {/* Logo / Brand */}
        <div className="payslip-brand">

          <div className="payslip-brand-icon">
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


        {/* User Card */}
        <div className="payslip-user">

          <div className="payslip-avatar">
            J
          </div>

          <div className="payslip-user-info">
            <h4>John Doe</h4>
            <p>Employee</p>
          </div>

        </div>


        {/* Navigation Heading */}
        <div className="payslip-nav-title">
          NAVIGATION
        </div>


        {/* Navigation */}
        <nav className="payslip-navigation">

          {/* Dashboard */}
          <button
            className="payslip-nav-item"
            onClick={() => navigate("/dashboard")}
          >
            <span className="payslip-nav-icon">
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
          <button className="payslip-nav-item"
                      onClick={() => navigate("/employees")}
>

            <span className="payslip-nav-icon">
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
            className="payslip-nav-item"
            onClick={() => navigate("/leave")}
          >

            <span className="payslip-nav-icon">
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


          {/* Payslips - ACTIVE */}
          <button
            className="payslip-nav-item active"
            onClick={() => navigate("/payslips")}
          >

            <span className="payslip-nav-icon payslip-dollar">
              $
            </span>

            <span>Payslips</span>

            <span className="payslip-nav-arrow">
              ›
            </span>

          </button>


          {/* Settings */}
          <button className="payslip-nav-item"
                      onClick={() => navigate("/settings")}
>

            <span className="payslip-nav-icon">
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
          className="payslip-logout"
          onClick={() => navigate("/")}
        >

          <span className="payslip-logout-icon">
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


      {/* =====================================
          MAIN CONTENT
      ===================================== */}

      <main className="payslip-main">

        {/* Header */}
        <div className="payslip-header">

          <div>
            <h1>Payslips</h1>

            <p>
              Generate and manage employee payslips
            </p>
          </div>


          {/* Generate Button */}
          <button
            className="generate-payslip-button"
            onClick={() => { setPayslipError(""); setShowPayslipForm(true); }}
          >

            <span className="generate-plus">
              +
            </span>

            <span>
              Generate Payslip
            </span>

          </button>

        </div>


        {/* =====================================
            PAYSLIP TABLE
        ===================================== */}

        <div className="payslip-table-wrapper">

          <table className="payslip-table">

            <thead>

              <tr>

                <th>EMPLOYEE</th>

                <th>PERIOD</th>

                <th>BASIC SALARY</th>

                <th>NET SALARY</th>

                <th>ACTION</th>

              </tr>

            </thead>


            <tbody>

              {payslips.map((payslip) => (

                <tr key={payslip._id}>

                  {/* Employee */}
                  <td className="payslip-employee">
                    {payslip.employee}
                  </td>


                  {/* Period */}
                  <td className="payslip-period">
                    {payslip.period}
                  </td>


                  {/* Basic Salary */}
                  <td className="payslip-basic">
                    {payslip.basicSalary}
                  </td>


                  {/* Net Salary */}
                  <td className="payslip-net">
                    {payslip.netSalary}
                  </td>


                  {/* Action */}
                  <td>

                    <button
                      className="download-button"
                      onClick={() =>
                        handleDownload(
                          payslip.employee,
                          payslip.period
                        )
                      }
                    >

                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path d="M12 3v12" />
                        <path d="m7 10 5 5 5-5" />
                        <path d="M5 20h14" />
                      </svg>

                      <span>
                        Download
                      </span>

                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {showPayslipForm && (
          <div className="payslip-form-overlay" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setShowPayslipForm(false)}>
            <form className="payslip-form" onSubmit={handleGeneratePayslip}>
              <div className="payslip-form-header"><h2>Generate Payslip</h2><button type="button" onClick={() => setShowPayslipForm(false)} aria-label="Close form">×</button></div>
              <label>Employee name<input required value={payslipForm.employee} onChange={(event) => setPayslipForm({ ...payslipForm, employee: event.target.value })} /></label>
              <label>Pay period<input required placeholder="August 2026" value={payslipForm.period} onChange={(event) => setPayslipForm({ ...payslipForm, period: event.target.value })} /></label>
              <label>Basic salary<input required min="0" type="number" value={payslipForm.basicSalary} onChange={(event) => setPayslipForm({ ...payslipForm, basicSalary: event.target.value })} /></label>
              <label>Allowances<input min="0" type="number" value={payslipForm.allowances} onChange={(event) => setPayslipForm({ ...payslipForm, allowances: event.target.value })} /></label>
              <label>Deductions<input min="0" type="number" value={payslipForm.deductions} onChange={(event) => setPayslipForm({ ...payslipForm, deductions: event.target.value })} /></label>
              {payslipError && <p className="payslip-form-error" role="alert">{payslipError}</p>}
              <div className="payslip-form-actions"><button type="button" onClick={() => setShowPayslipForm(false)}>Cancel</button><button type="submit">Create payslip</button></div>
            </form>
          </div>
        )}

      </main>

    </div>
  );
};

export default Payslips;
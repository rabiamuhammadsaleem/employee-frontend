import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Employees.css";
import { api } from "../api";

const Employees = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All Departments");

  const [employees, setEmployees] = useState([]);
  const [employeeForm, setEmployeeForm] = useState({ name: "", position: "", department: "", email: "", phone: "" });
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [editingEmployeeId, setEditingEmployeeId] = useState(null);
  const [showEmployeeForm, setShowEmployeeForm] = useState(false);
  const [formError, setFormError] = useState("");
  useEffect(() => { api("/employees").then(setEmployees).catch(() => {}); }, []);

  const openAddForm = () => {
    setEditingEmployee(null);
    setEditingEmployeeId(null);
    setShowEmployeeForm(true);
    setFormError("");
    setEmployeeForm({ name: "", position: "", department: "", email: "", phone: "" });
  };
  const openEditForm = (employee) => {
    setEditingEmployee(employee);
    setEditingEmployeeId(employee._id);
    setShowEmployeeForm(true);
    setFormError("");
    setEmployeeForm({ name: employee.name, position: employee.position, department: employee.department, email: employee.email || "", phone: employee.phone || "" });
  };
  const handleEmployeeSubmit = async (event) => {
    event.preventDefault();
    setFormError("");
    try {
      const path = editingEmployeeId ? `/employees/${editingEmployeeId}` : "/employees";
      const method = editingEmployeeId ? "PUT" : "POST";
      const savedEmployee = await api(path, { method, body: JSON.stringify(employeeForm) });
      setEmployees((current) => editingEmployeeId
        ? current.map((item) => item._id === editingEmployeeId ? { ...item, ...savedEmployee } : item)
        : [savedEmployee, ...current]);
      setEditingEmployee(null);
      setEditingEmployeeId(null);
      setShowEmployeeForm(false);
      setEmployeeForm({ name: "", position: "", department: "", email: "", phone: "" });
    } catch (error) {
      setFormError(error.message);
    }
  };
  const deleteEmployee = async (employee) => {
    if (!window.confirm(`Delete ${employee.name}?`)) return;
    await api(`/employees/${employee._id}`, { method: "DELETE" });
    setEmployees((current) => current.filter((item) => item._id !== employee._id));
  };

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch =
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.position.toLowerCase().includes(search.toLowerCase());

    const matchesDepartment =
      department === "All Departments" ||
      employee.department === department;

    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="employees-page">

      {/* ================= SIDEBAR ================= */}

      <aside className="employees-sidebar">

        {/* Brand */}
        <div className="employees-brand">

          <div className="employees-brand-icon">
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


        {/* User */}
        <div className="employees-user">

          <div className="employees-avatar">
            J
          </div>

          <div className="employees-user-info">
            <h4>John Doe</h4>
            <p>Administrator</p>
          </div>

        </div>


        {/* Navigation Title */}
        <div className="employees-nav-title">
          NAVIGATION
        </div>


        {/* Navigation */}
        <nav className="employees-navigation">

          {/* Dashboard */}
          <button
            className="employees-nav-item"
            onClick={() => navigate("/dashboard")}
          >
            <span className="employees-nav-icon">
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


          {/* Employees */}
          <button
            className="employees-nav-item active"
            onClick={() => navigate("/employees")}
          >
            <span className="employees-nav-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <circle cx="9" cy="8" r="3" />
                <path d="M3.5 19c0-3.2 2.3-5.5 5.5-5.5s5.5 2.3 5.5 5.5" />
                <circle cx="17" cy="9" r="2.3" />
                <path d="M15 14.5c2.8-.1 5 1.8 5.5 4.5" />
              </svg>
            </span>

            <span>Employees</span>

            <span className="employees-nav-arrow">
              ›
            </span>
          </button>


          {/* Leave */}
          <button className="employees-nav-item"
          onClick={() => navigate("/leave")}
>
            <span className="employees-nav-icon">
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
          <button className="employees-nav-item"
                      onClick={() => navigate("/payslips")}
>

            <span className="employees-nav-icon dollar-icon">
              $
            </span>

            <span>Payslips</span>

          </button>


          {/* Settings */}
          <button className="employees-nav-item"
                      onClick={() => navigate("/settings")}
>

            <span className="employees-nav-icon">
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
          className="employees-logout"
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

      <main className="employees-main">

        {/* Header */}
        <div className="employees-header">

          <div>
            <h1>Employees</h1>

            <p>
              Manage your team members
            </p>
          </div>


          {/* Add Employee */}
          <button
            className="add-employee-button"
            onClick={openAddForm}
          >
            <span className="add-icon">
              +
            </span>

            <span>
              Add Employee
            </span>
          </button>

        </div>


        {/* ================= SEARCH + FILTER ================= */}

        <div className="employee-filters">

          {/* Search */}
          <div className="employee-search">

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="11" cy="11" r="6.5" />
              <path d="m16 16 4 4" />
            </svg>

            <input
              type="text"
              placeholder="Search employees..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>


          {/* Department */}
          <select
            className="department-filter"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option>All Departments</option>
            <option>IT Support</option>
            <option>Engineering</option>
          </select>

        </div>


        {/* ================= EMPLOYEE CARDS ================= */}

        <div className="employee-cards">

          {filteredEmployees.map((employee) => (

            <div
              className="employee-card"
              key={employee._id}
            >

              {/* Card Top */}
              <div className="employee-card-top">

                <div className="department-badge">
                  {employee.department}
                </div>

                <div className="employee-initials">
                  {employee.initials}
                </div>

              </div>


              {/* Card Bottom */}
              <div className="employee-card-bottom">

                <h3>
                  {employee.name}
                </h3>

                <p>
                  {employee.position}
                </p>

                <div className="employee-card-actions">
                  <button type="button" onClick={() => openEditForm(employee)}>Edit</button>
                  <button type="button" onClick={() => deleteEmployee(employee)}>Delete</button>
                </div>

              </div>

            </div>

          ))}

        </div>

        {showEmployeeForm && (
          <div className="employee-form-overlay" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setShowEmployeeForm(false)}>
            <form className="employee-form" onSubmit={handleEmployeeSubmit}>
              <div className="employee-form-header"><h2>{editingEmployee ? "Edit Employee" : "Add Employee"}</h2><button type="button" onClick={() => setShowEmployeeForm(false)} aria-label="Close form">×</button></div>
              <label>Full name<input required value={employeeForm.name} onChange={(event) => setEmployeeForm({ ...employeeForm, name: event.target.value })} /></label>
              <label>Position<input required value={employeeForm.position} onChange={(event) => setEmployeeForm({ ...employeeForm, position: event.target.value })} /></label>
              <label>Department<input required value={employeeForm.department} onChange={(event) => setEmployeeForm({ ...employeeForm, department: event.target.value })} /></label>
              <label>Email<input type="email" value={employeeForm.email} onChange={(event) => setEmployeeForm({ ...employeeForm, email: event.target.value })} /></label>
              <label>Phone<input value={employeeForm.phone} onChange={(event) => setEmployeeForm({ ...employeeForm, phone: event.target.value })} /></label>
              {formError && <p className="employee-form-error" role="alert">{formError}</p>}
              <div className="employee-form-actions"><button type="button" onClick={() => setShowEmployeeForm(false)}>Cancel</button><button type="submit">{editingEmployee ? "Save changes" : "Create employee"}</button></div>
            </form>
          </div>
        )}

      </main>

    </div>
  );
};

export default Employees;
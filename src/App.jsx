import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PortalSelection from "./pages/PortalSelection";
import EmployeeLogin from "./pages/EmployeeLogin";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import LeaveManagement from "./pages/LeaveManagement";
import Payslips from "./pages/Payslips";
import Setting from "./pages/Setting";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortalSelection />} />
        <Route path="/employee-login" element={<EmployeeLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/employees" element={<Employees />}/>
        <Route path="/leave" element={<LeaveManagement />} />
        <Route path="/payslips" element={<Payslips />} />
        <Route path="/settings" element={<Setting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
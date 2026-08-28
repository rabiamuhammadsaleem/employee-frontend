import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EmployeeLogin.css";
import { api, saveSession } from "../api";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault(); setError("");
    try {
      const result = await api(isSignup ? "/auth/signup" : "/auth/login", { method: "POST", body: JSON.stringify({ name: "Administrator", email: event.target.email.value, password: event.target.password.value, role: "admin" }) });
      saveSession(result); navigate("/dashboard");
    } catch (requestError) { setError(requestError.message); }
  };
  return <div className="employee-login-page"><div className="employee-left-panel"><div className="employee-left-content"><h1>Employee<br />Management System</h1><p>Streamline your workforce operations, track<br />attendance, manage payroll, and empower your team<br />securely.</p></div></div><div className="employee-right-panel"><div className="employee-login-container"><button type="button" className="back-to-portals" onClick={() => navigate("/")}><span className="back-arrow">←</span><span>Back to portals</span></button><div className="employee-heading"><h2>Admin Portal</h2><p>{isSignup ? "Create your administrator account" : "Sign in to access your account"}</p></div><form className="employee-login-form" onSubmit={handleSubmit}><div className="form-group"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" placeholder="admin@gmail.com" required /></div><div className="form-group password-group"><label htmlFor="password">Password</label><div className="password-input-wrapper"><input id="password" name="password" type={showPassword ? "text" : "password"} placeholder="••••••••" required /><button type="button" className="password-eye" onClick={() => setShowPassword(!showPassword)} aria-label="Toggle password">{showPassword ? "◉" : "○"}</button></div></div>{error && <p role="alert">{error}</p>}<button type="submit" className="employee-signin-button">{isSignup ? "Sign up" : "Sign in"}</button></form><button type="button" className="back-to-portals" onClick={() => setIsSignup(!isSignup)}>{isSignup ? "Already have an account? Sign in" : "Create admin account"}</button></div></div></div>;
};
export default AdminLogin;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EmployeeLogin.css";
import { api, saveSession } from "../api";

const EmployeeLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const result = await api("/auth/login", { method: "POST", body: JSON.stringify({ email: e.target.email.value, password: e.target.password.value, role: "employee" }) });
      saveSession(result); navigate("/dashboard");
    } catch (requestError) { setError(requestError.message); }
  };

  return (
    <div className="employee-login-page">

      {/* ================= LEFT PANEL ================= */}

      <div className="employee-left-panel">
        <div className="employee-left-content">

          <h1>
            Employee
            <br />
            Management System
          </h1>

          <p>
            Streamline your workforce operations, track
            <br />
            attendance, manage payroll, and empower your team
            <br />
            securely.
          </p>

        </div>
      </div>


      {/* ================= RIGHT PANEL ================= */}

      <div className="employee-right-panel">

        <div className="employee-login-container">

          {/* ================= BACK TO PORTALS ================= */}

          <button
            type="button"
            className="back-to-portals"
            onClick={() => navigate("/")}
          >
            <span className="back-arrow">
              ←
            </span>

            <span>
              Back to portals
            </span>
          </button>


          {/* ================= HEADING ================= */}

          <div className="employee-heading">

            <h2>
              Employee Portal
            </h2>

            <p>
              Sign in to access your account
            </p>

          </div>


          {/* ================= LOGIN FORM ================= */}

          <form
            className="employee-login-form"
            onSubmit={handleSubmit}
          >

            {/* ================= EMAIL ================= */}

            <div className="form-group">

              <label htmlFor="email">
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                required
              />

            </div>


            {/* ================= PASSWORD ================= */}

            <div className="form-group password-group">

              <label htmlFor="password">
                Password
              </label>

              <div className="password-input-wrapper">

                <input
                  id="password"
                  name="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="••••••••"
                  required
                />


                {/* Password Eye Button */}

                <button
                  type="button"
                  className="password-eye"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >

                  {showPassword ? (

                    /* Eye Off */

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    >

                      <path d="M3 3l18 18" />

                      <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />

                      <path d="M9.9 4.2A10.9 10.9 0 0 1 12 4c5.5 0 9.2 5 9.2 5a16.4 16.4 0 0 1-3.3 3.5" />

                      <path d="M6.2 6.2C3.9 7.6 2.8 9 2.8 9S6.5 14 12 14c1 0 1.9-.2 2.7-.5" />

                    </svg>

                  ) : (

                    /* Eye */

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    >

                      <path d="M2.8 12s3.7-5 9.2-5 9.2 5 9.2 5-3.7 5-9.2 5-9.2-5-9.2-5Z" />

                      <circle
                        cx="12"
                        cy="12"
                        r="2.5"
                      />

                    </svg>

                  )}

                </button>

              </div>

            </div>


            {/* ================= SIGN IN BUTTON ================= */}

            <button
              type="submit"
              className="employee-signin-button"
            >
              Sign in
            </button>
            {error && <p role="alert">{error}</p>}

          </form>

        </div>

      </div>

    </div>
  );
};

export default EmployeeLogin;
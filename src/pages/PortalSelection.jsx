import React from "react";
import { useNavigate } from "react-router-dom";
import "./PortalSelection.css";

const PortalSelection = () => {
    const navigate = useNavigate();
    const handleAdminPortal = () => {
        navigate("/admin-login");
    };


    return (
        <div className="portal-page">

            {/* Left Section */}
            <section className="portal-left-panel">
                <div className="portal-left-content">
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
            </section>

            {/* Blue Divider */}
            <div className="portal-divider"></div>

            {/* Right Section */}
            <section className="portal-right-panel">
                <div className="portal-container">

                    {/* Heading */}
                    <div className="portal-heading">
                        <h2>Welcome Back</h2>

                        <p>
                            Select your portal to securely access the system.
                        </p>
                    </div>

                    {/* Portal Buttons */}
                    <div className="portal-buttons">

                        <button
                            className="portal-button"
                            onClick={handleAdminPortal}
                        >
                            <span>Admin Portal</span>

                            <span className="portal-arrow">
                                →
                            </span>
                        </button>

                        <button
                            className="portal-button"
                            onClick={() => navigate("/employee-login")}
                        >
                            <span>Employee Portal</span>

                            <span className="portal-arrow">
                                →
                            </span>
                        </button>

                    </div>

                    {/* Copyright */}
                    <p className="portal-copyright">
                        © 2026 GreatStack. All rights reserved.
                    </p>

                </div>
            </section>

        </div>
    );
};

export default PortalSelection;
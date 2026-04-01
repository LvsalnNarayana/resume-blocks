import React from "react";
import { Routes, Route, Navigate, NavLink } from "react-router-dom";

import ResumeBlocks from "./ResumeBlocks";
import CoverLetter from "./CoverLetter";
import MessageFormats from "./MessageFormats";
import EmailTemplates from "./EmailTemplates";

const App = () => {
  return (
    <div className="app-container">
      {/* 🔹 Navigation */}
      <nav className="nav-bar bg-gray-100 sticky pt-4 top-0 z-50">
        <NavLink
          to="/resume-blocks"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Resume Blocks
        </NavLink>

        <NavLink
          to="/cover-letter"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Cover Letters
        </NavLink>

        <NavLink
          to="/message-formats"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Messages
        </NavLink>

        <NavLink
          to="/email-templates"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Emails
        </NavLink>
      </nav>

      {/* 🔹 Routes */}
      <Routes>
        <Route path="/" element={<Navigate to="/resume-blocks" />} />

        <Route path="/resume-blocks" element={<ResumeBlocks />} />
        <Route path="/cover-letter" element={<CoverLetter />} />
        <Route path="/message-formats" element={<MessageFormats />} />
        <Route path="/email-templates" element={<EmailTemplates />} />
      </Routes>
    </div >
  );
};

export default App;
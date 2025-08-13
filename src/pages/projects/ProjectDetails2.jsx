import React from "react";
import { Link } from "react-router-dom";
// import dashboardImg from "../../assets/student-dashboard.png";
// import courseImg from "../../assets/course-management.png";
// import profileImg from "../../assets/student-profile.png";
import "./ProjectDetails1.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function ProjectDetails() {
  return (
    <div className="pd-project-details-container">
      {/* 1️⃣ Hero Section */}
      <section className="pd-hero">
        <h1>Student Management System</h1>
        <p>Secure & Efficient Academic Management</p>
      </section>

      {/* 2️⃣ About the Project */}
      <section className="pd-about">
        <h2>About the Project</h2>
        <p>
          The Student Management System is a full-stack web application built
          with Java Spring Boot and PostgreSQL/MySQL, enabling administrators to
          manage students, courses, and profiles efficiently. It features
          secure authentication with JWT and BCrypt password hashing, CRUD
          operations for students and courses, profile management, and a
          responsive React frontend. Designed for educational institutions, it
          streamlines administrative work while providing a user-friendly
          interface for students.
        </p>
      </section>

      {/* 3️⃣ Features */}
      <div className="section-for-both">
        <section className="pd-features">
          <h1>Key Features</h1>
          <ul>
            <li>Admin & Student role-based authentication</li>
            <li>JWT-secured login and session handling</li>
            <li>BCrypt password encryption</li>
            <li>Course and Student CRUD operations</li>
            <li>Search and filter for quick record access</li>
            <li>Responsive design for all devices</li>
            <li>Cloud deployment on Railway & Render</li>
          </ul>
        </section>

        {/* 4️⃣ Tech Stack */}
        <section className="pd-tech-stack">
          <h2>Tech Stack</h2>
          <div className="pd-tech-tags">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>PostgreSQL</span>
            <span>MySQL</span>
            <span>React</span>
            <span>Vite</span>
            <span>REST API</span>
            <span>Maven</span>
            <span>Postman</span>
            <span>Hibernate / JPA</span>
            <span>Spring Security</span>
            <span>JWT Authentication</span>
            <span>BCrypt Password Hashing</span>
          </div>
        </section>
      </div>
      {/* future changes */}
      <section className="pd-features future">
        <h1>Future Updates</h1>
        <ul>
          <li>Export student data to Excel/PDF</li>
          <li>Attendance tracking module</li>
          <li>Advanced analytics dashboard</li>
          <li>Multi-language support</li>
          <li>Integration with third-party APIs</li>
        </ul>
      </section>
      {/* 6️⃣ Live Demo & GitHub */}
      <section className="pd-links">
        <h2>Explore the Project</h2>
        <div className="pd-buttons">
          <a
            href="https://student-management-springboot.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="pd-btn"
          >
            Live Demo <FaExternalLinkAlt />
          </a>
          <a
            href="https://github.com/GitFlow-Yogesh/student-management-springboot"
            target="_blank"
            rel="noopener noreferrer"
            className="pd-btn"
          >
            View Code <FaGithub />
          </a>
        </div>
      </section>



      {/* 8️⃣ Back Navigation */}
      <section className="pd-back-link-section">
        <Link to="/" className="pd-back-link">
          ← Back to Projects
        </Link>
      </section>
    </div>
  );
}

export default ProjectDetails;

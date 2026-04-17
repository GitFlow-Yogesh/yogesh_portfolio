import React from "react";
import { Link } from "react-router-dom";
import "./ProjectDetails1.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function ProjectDetailsEdTech() {
  return (
    <div className="pd-project-details-container">
      {/* 1️⃣ Hero Section */}
      <section className="pd-hero">
        <h1>EdTech Platform</h1>
        <p>Master In-Demand Skills With Real Certificates</p>
      </section>

      {/* 2️⃣ About the Project */}
      <section className="pd-about">
        <h2>About the Project</h2>
        <p>
          The EdTech Platform is a comprehensive web application designed to help people learn and gain real-life coding experience. It offers a structured approach to learning programming, web development, and fullstack technologies through courses and paid internships. Built on the MERN stack using TypeScript, the platform features time-based topic unlocks and provides users with verifiable certificates upon completion.
        </p>
      </section>

      <div className="section-for-both">
        {/* 3️⃣ Features */}
        <section className="pd-features">
          <h1>Key Features</h1>
          <ul>
            <li>Structured courses and paid internships enrollment</li>
            <li>Time-based topic unlocks depending upon duration</li>
            <li>Generation of real, verifiable certificates</li>
            <li>User dashboard for progress tracking</li>
            <li>Secure authentication and data protection</li>
            <li>Responsive and interactive user interface</li>
          </ul>
        </section>

        {/* 4️⃣ Tech Stack */}
        <section className="pd-tech-stack">
          <h2>Tech Stack</h2>
          <div className="pd-tech-tags">
            <span>TypeScript</span>
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>Tailwind CSS</span>
            <span>Vercel</span>
            <span>Git & GitHub</span>
          </div>
        </section>
      </div>

      {/* 5️⃣ Future Updates */}
      <section className="pd-features future">
        <h1>Future Updates</h1>
        <ul>
          <li>Interactive coding playgrounds within the platform</li>
          <li>Peer-to-peer discussion forums for courses</li>
          <li>AI-assisted resume building based on completed courses</li>
          <li>Live mentorship sessions integration</li>
          <li>Advanced admin dashboard for course creators</li>
        </ul>
      </section>

      {/* 6️⃣ Links */}
      <section className="pd-links">
        <h2>Explore the Project By Yourself</h2>
        <div className="pd-buttons">
          <a
            href="https://ed-tech-internship.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="pd-btn"
          >
            Live Demo <FaExternalLinkAlt />
          </a>
          <a
            href="https://github.com/GitFlow-Yogesh/EdTech-Internship"
            target="_blank"
            rel="noopener noreferrer"
            className="pd-btn"
          >
            View Code <FaGithub />
          </a>
        </div>
      </section>

      {/* 7️⃣ Back Navigation */}
      <section className="pd-back-link-section">
        <Link to="/" className="pd-back-link">
          ← Back to Projects
        </Link>
      </section>
    </div>
  );
}

export default ProjectDetailsEdTech;

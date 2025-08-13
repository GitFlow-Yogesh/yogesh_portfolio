import React from "react";
import { Link } from "react-router-dom";
import "./ProjectDetails1.css"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function ProjectDetails() {
  return (
    <div className="pd-project-details-container">
      {/* 1️⃣ Hero Section */}
      <section className="pd-hero">
        <h1>AI StudyMate</h1>
        <p>Your One-Stop AI Study Companion</p>

      </section>

      {/* 2️⃣ About the Project */}
      <section className="pd-about">
        <h2>About the Project</h2>
        <p>
          AI StudyMate is a web platform that helps students discover, explore,
          and use powerful AI tools in one place. It features a curated list of
          50+ AI tools for studying, writing, coding, research, and creativity.
          Users can like and save their favorite tools, subscribe for updates,
          and even access an integrated AI workspace to use tools without
          leaving the site(This line is upcoming features). The platform is designed for simplicity, speed, and
          accessibility — making learning smarter and more efficient.
        </p>
      </section>
      <div className="section-for-both">
        {/* 3️⃣ Features */}
        <section className="pd-features">
          <h1>Key Features</h1>
          <ul>
            <li>Secure signup & login with hashed passwords</li>
            <li>JWT-protected routes for authenticated users</li>
            <li>Like & unlike AI tools with real-time updates</li>
            <li>Search and filter through 50+ AI tools</li>
            <li>Integrated AI Workspace with multiple tool tabs</li>
            <li>Subscription system with duplicate prevention</li>
            <li>Admin panel to manage tools, messages, and subscribers</li>
          </ul>
        </section>

        {/* 4️⃣ Tech Stack */}
        <section className="pd-tech-stack">
          <h2>Tech Stack</h2>
          <div className="pd-tech-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB Atlas</span>
            <span>Axios</span>
            <span>bcrypt </span>
            <span>Mongoose </span>
            <span>JWT(JSON Web Token)</span>
            <span>Vercel </span>
            <span>Render </span>
            <span>Git & GitHub </span>
            <span>Postman(API testing) </span>
          </div>
        </section>
      </div>
      {/* future update section  */}
      <section className="pd-features future">
        <h1>Future Updates</h1>
        <ul>
          <li>All-in-one workspace to use AI tools directly on the site</li>
          <li>AI-powered recommendations tailored to user interests</li>
          <li>User analytics to track tool usage</li>
          <li>Collaboration features for group study</li>
          <li>Integration with additional AI APIs</li>
        </ul>
      </section>
      {/* both buttons  */}
      <section className="pd-links">
        <h2>Explore the Project By YourSelf</h2>
        <div className="pd-buttons">
          <a
            href="https://ai-studymate-yogesh.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="pd-btn"
          >
            Live Demo <FaExternalLinkAlt />
          </a>
          <a
            href="https://github.com/GitFlow-Yogesh/ai-studymate"
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

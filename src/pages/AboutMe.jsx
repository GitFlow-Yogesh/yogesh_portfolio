import React from "react";
import "./AboutMe.css";
import myResume from "../assets/yogesh.pdf";

function AboutMe() {
  return (
    <div className="about-page">

      {/* Page Header */}
      <section className="about-hero">
        <span className="section-label">GET TO KNOW ME</span>
        <h1>About <span className="highlight">Me</span></h1>
        <p className="about-hero-desc">
          A passionate developer turning ideas into real-world applications
        </p>
      </section>

      {/* Personal Info Cards */}
      <section className="info-section">
        <div className="info-grid">
          <div className="info-card">
            <div className="info-icon">👤</div>
            <div className="info-details">
              <span className="info-label">Name</span>
              <span className="info-value">Yogesh</span>
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon">📍</div>
            <div className="info-details">
              <span className="info-label">Location</span>
              <span className="info-value">Bengaluru, India</span>
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon">✉️</div>
            <div className="info-details">
              <span className="info-label">Email</span>
              <span className="info-value">yogeshrao5024@gmail.com</span>
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon">📞</div>
            <div className="info-details">
              <span className="info-label">Phone</span>
              <span className="info-value">+91-9896691470</span>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="education-section">
        <span className="section-label">EDUCATION</span>
        <div className="education-card">
          <div className="edu-icon">🎓</div>
          <div className="edu-details">
            <h3>CMR University</h3>
            <p className="edu-degree">B.Tech in Computer Science (Final Year)</p>
            <div className="edu-meta">
              <span className="edu-duration">2022 — 2026</span>
              <span className="edu-cgpa">CGPA: 8.69</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="skills-section">
        <span className="section-label">TECH STACK</span>
        <h2 className="section-heading">Skills & Technologies</h2>

        <div className="skills-category">
          <h4 className="category-title">Frontend</h4>
          <div className="skills-row">
            <span className="skill-chip">HTML</span>
            <span className="skill-chip">CSS</span>
            <span className="skill-chip">Tailwind CSS</span>
            <span className="skill-chip">JavaScript</span>
            <span className="skill-chip">React</span>
          </div>
        </div>

        <div className="skills-category">
          <h4 className="category-title">Backend</h4>
          <div className="skills-row">
            <span className="skill-chip accent">Node.js</span>
            <span className="skill-chip accent">Express</span>
            <span className="skill-chip accent">Java</span>
            <span className="skill-chip accent">Spring Boot</span>
          </div>
        </div>

        <div className="skills-category">
          <h4 className="category-title">Database & Tools</h4>
          <div className="skills-row">
            <span className="skill-chip green">MongoDB Atlas</span>
            <span className="skill-chip green">MySQL</span>
            <span className="skill-chip green">Git</span>
            <span className="skill-chip green">GitHub</span>
            <span className="skill-chip green">Postman</span>
          </div>
        </div>

        <div className="skills-category">
          <h4 className="category-title">Languages</h4>
          <div className="skills-row">
            <span className="skill-chip purple">JavaScript</span>
            <span className="skill-chip purple">Java</span>
            <span className="skill-chip purple">C (Basic)</span>
            <span className="skill-chip purple">Python (Basic)</span>
          </div>
        </div>
      </section>

      {/* DSA Topics */}
      <section className="dsa-section">
        <span className="section-label">PROBLEM SOLVING</span>
        <h2 className="section-heading">DSA Topics Covered</h2>
        <div className="skills-row" style={{ justifyContent: 'center' }}>
          <span className="skill-chip outline">Arrays & Basics</span>
          <span className="skill-chip outline">ArrayList</span>
          <span className="skill-chip outline">Linked List</span>
          <span className="skill-chip outline">Stack</span>
          <span className="skill-chip outline">Queue</span>
          <span className="skill-chip outline">Recursion & Backtracking</span>
          <span className="skill-chip outline">Trees</span>
          <span className="skill-chip outline">Tree-based Problems</span>
          <span className="skill-chip outline">HashMap</span>
          <span className="skill-chip outline">Heaps</span>
          <span className="skill-chip outline">Strings</span>
          <span className="skill-chip outline">Sorting Algorithms</span>
        </div>
      </section>

      {/* Progress / Journey */}
      <section className="journey-section">
        <span className="section-label">MY JOURNEY</span>
        <h2 className="section-heading">Progress So Far</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <p>Learned HTML, CSS, and JavaScript for frontend development with good UI design practices.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <p>Built fast and responsive frontend applications using React and Tailwind CSS.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <p>Developed backend with <strong>Node.js & Express.js</strong> (AI StudyMate) and <strong>Java Spring Boot</strong> (Student Management System).</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <p>Worked with <strong>MongoDB</strong>, <strong>MySQL</strong>, and <strong>PostgreSQL</strong> across multiple projects.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <p>Implemented secure auth with <strong>bcrypt</strong>, <strong>JWT tokens</strong>, and role-based access control.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <p>Deployed frontends on <strong>Vercel</strong> and backends on <strong>Render & Railway</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Buttons */}
      <section className="resume-section">
        <div className="resume-card">
          <h3>My Resume</h3>
          <p>Download or view my resume to know more about my experience and skills.</p>
          <div className="resume-actions">
            <a href={myResume} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-glow">
              <span>View Resume</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" /></svg>
            </a>
            <a href={myResume} download className="btn btn-green">
              <span>Download PDF</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AboutMe;

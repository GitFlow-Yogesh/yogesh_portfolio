import React from "react";
import "./HireMe.css";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function HireMe() {
  return (
    <div className="hireme-page">

      {/* Hero */}
      <section className="hire-hero">
        <span className="section-label">LET'S CONNECT</span>
        <h1>Hire <span className="highlight">Me</span></h1>
        <p className="hire-subtitle">
          I'm always open to exciting opportunities! Let's connect and build something amazing together.
        </p>
      </section>

      {/* What I Offer */}
      <section className="offer-section">
        <div className="offer-grid">
          <div className="offer-card">
            <div className="offer-icon">🌐</div>
            <h3>Full Stack Development</h3>
            <p>End-to-end web applications using React, Node.js, Spring Boot, and modern databases.</p>
          </div>
          <div className="offer-card">
            <div className="offer-icon">🎨</div>
            <h3>Frontend Excellence</h3>
            <p>Beautiful, responsive UIs with React, Tailwind CSS, and attention to every pixel.</p>
          </div>
          <div className="offer-card">
            <div className="offer-icon">🔒</div>
            <h3>Secure Backends</h3>
            <p>JWT authentication, bcrypt hashing, role-based access, and cloud deployments.</p>
          </div>
        </div>
      </section>

      {/* Social Profiles */}
      <section className="social-section">
        <h2 className="section-heading">Find Me Online</h2>
        <div className="social-cards">
          <a href="https://github.com/GitFlow-Yogesh" target="_blank" rel="noopener noreferrer" className="social-card github">
            <FaGithub size={32} />
            <div>
              <span className="social-name">GitHub</span>
              <span className="social-handle">@GitFlow-Yogesh</span>
            </div>
          </a>
          <a href="https://linkedin.com/in/yogesh-yadav24" target="_blank" rel="noopener noreferrer" className="social-card linkedin">
            <FaLinkedin size={32} />
            <div>
              <span className="social-name">LinkedIn</span>
              <span className="social-handle">yogesh-yadav24</span>
            </div>
          </a>
          <a href="https://leetcode.com/yogeshrao5024/" target="_blank" rel="noopener noreferrer" className="social-card leetcode">
            <SiLeetcode size={28} />
            <div>
              <span className="social-name">LeetCode</span>
              <span className="social-handle">yogeshrao5024</span>
            </div>
          </a>
        </div>
      </section>

      {/* Contact Info */}
      <section className="contact-section">
        <h2 className="section-heading">Reach Out Directly</h2>
        <div className="contact-cards">
          <a href="mailto:yogeshrao5024@gmail.com" className="contact-card">
            <div className="contact-icon-wrap">
              <FaEnvelope size={22} />
            </div>
            <div className="contact-details">
              <span className="contact-type">Email</span>
              <span className="contact-value">yogeshrao5024@gmail.com</span>
            </div>
            <svg className="contact-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="tel:+919896691470" className="contact-card">
            <div className="contact-icon-wrap">
              <FaPhone size={20} />
            </div>
            <div className="contact-details">
              <span className="contact-type">Phone</span>
              <span className="contact-value">+91 9896691470</span>
            </div>
            <svg className="contact-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="hire-cta">
        <div className="hire-cta-card">
          <h2>Ready to start a project?</h2>
          <p>Drop me a message and I'll get back to you as soon as possible!</p>
          <a href="mailto:yogeshrao5024@gmail.com" className="btn btn-primary btn-glow btn-lg">
            <span>Send an Email</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </section>

    </div>
  );
}

export default HireMe;

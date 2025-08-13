import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import myPhoto from "../assets/image.png";

function Home() {
  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Hi, I'm Yogesh</h1>
          <h2>Full Stack Developer</h2>
          <p>Developed secure, fast, and user-friendly web applications using MERN.</p>
          <Link to="hireme" className="btn btn-primary">Hire Me</Link>
        </div>
        <div className="hero-image">
          <img src={myPhoto} alt="Yogesh" />
        </div>
      </section>

      {/* About Me Preview */}
      <section className="about-preview">
        <h1>About Me</h1>
        <p>
          I'm a passionate developer who loves building impactful digital experiences.
          Skilled in JavaScript, React, and Node.js, I enjoy turning ideas into reality.
        </p>
        <Link to="/about" className="btn">Read More</Link>
      </section>

      {/* Projects Preview */}
      <section className="projects-preview">
        <h1>Featured Projects</h1>

        {/* Flex container for two projects */}
        <div className="projects-row">
          {/* Project 1 */}
          <div className="project-card alt-bg">
            <h3>AI StudyMate</h3>
            <small className="tagline">Discover, Explore & Use AI Tools in One Place</small>
            <p>
              AI StudyMate is a web platform that helps students discover, explore, and use powerful AI tools. It features a curated list of 50+ AI tools for studying, writing, coding, research, and creativity. Users can like tools, track their favorites, subscribe for updates, and even access a built-in AI workspace to use tools without leaving the site.
            </p>
            <div className="project-buttons">
              <a
                href="https://ai-studymate-yogesh.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Go to Project
              </a>
              <Link to="/projects/project1" className="btn">More Details</Link>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <h3>Student Management System</h3>
            <small className="tagline">Secure & Efficient Academic Management</small>
            <p>
              Manage students, courses, and profiles with ease using a full-stack Spring Boot + React application. Features secure JWT authentication, BCrypt password hashing, admin-only controls, and cloud deployment on Railway. Perfect for institutions seeking automation and efficiency.
            </p>
            <div className="project-buttons">
              <a
                href="https://student-management-springboot.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Go to Project
              </a>
              <Link to="/projects/project2" className="btn">More Details</Link>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import myPhoto from "../assets/photo_update.png";

const roles = ["Full Stack Developer", "MERN Stack Engineer", "Java Developer", "Problem Solver"];

function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <div className="home-container">

      {/* Animated background grid */}
      <div className="bg-grid"></div>
      <div className="bg-gradient-orb orb-1"></div>
      <div className="bg-gradient-orb orb-2"></div>

      {/* Hero Section */}
      <section className="hero" id="hero-section">
        <div className="hero-text">
          <p className="hero-badge">👋 Welcome to my portfolio</p>
          <h1 className="hero-greeting">
            Hi, I'm <span className="highlight">Yogesh</span>
          </h1>
          <h2 className="hero-title">
            <span className="typing-text">{displayed}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-desc">
            I build secure, fast, and user-friendly web applications with modern technologies.
            Specializing in the MERN stack and Spring Boot ecosystem.
          </p>
          <div className="hero-actions">
            <Link to="/hireme" className="btn btn-primary btn-glow" id="hero-hire-btn">
              <span>Hire Me</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <Link to="/about" className="btn btn-glass" id="hero-about-btn">About Me</Link>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">2026</span>
              <span className="stat-label">B.Tech Grad</span>
            </div>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-ring ring-1"></div>
          <div className="hero-ring ring-2"></div>
          <div className="hero-image-glow"></div>
          <img src={myPhoto} alt="Yogesh" className="hero-image" />
          <div className="floating-badge badge-react">⚛️ React</div>
          <div className="floating-badge badge-node">🟢 Node.js</div>
          <div className="floating-badge badge-java">☕ Java</div>
          <div className="hidden floating-badge badge-ts">🔷 TypeScript</div>
          <div className="hidden floating-badge badge-mongo">🍃 MongoDB</div>
        </div>
      </section>

      {/* Tech Marquee */}
      <section className="tech-marquee-section">
        <div className="marquee-track">
          <div className="marquee-content">
            <span>React</span><span>•</span>
            <span>Node.js</span><span>•</span>
            <span>MongoDB</span><span>•</span>
            <span>Express</span><span>•</span>
            <span>JavaScript</span><span>•</span>
            <span>Java</span><span>•</span>
            <span>Spring Boot</span><span>•</span>
            <span>MySQL</span><span>•</span>
            <span>Git</span><span>•</span>
            <span>TailwindCSS</span><span>•</span>
            <span>React</span><span>•</span>
            <span>Node.js</span><span>•</span>
            <span>MongoDB</span><span>•</span>
            <span>Express</span><span>•</span>
            <span>JavaScript</span><span>•</span>
            <span>Java</span><span>•</span>
            <span>Spring Boot</span><span>•</span>
            <span>MySQL</span><span>•</span>
            <span>Git</span><span>•</span>
            <span>TailwindCSS</span><span>•</span>
          </div>
        </div>
      </section>

      {/* About Me Preview */}
      <section className="about-preview" id="about-section">
        <div className="about-content">
          <span className="section-label">ABOUT ME</span>
          <h2 className="about-heading">
            Passionate about creating <span className="highlight">impactful</span> digital experiences
          </h2>
          <p className="about-desc">
            I'm a developer who thrives on turning complex problems into elegant, user-friendly solutions.
            With hands-on experience in JavaScript, React, Node.js, Java, and Spring Boot, I bring
            ideas to life with clean code and thoughtful design.
          </p>
          <Link to="/about" className="link-arrow" id="about-read-more">
            Discover my journey
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="projects-preview" id="projects-section">
        <div className="projects-header">
          <span className="section-label">FEATURED WORK</span>
          <h2 className="section-title">Projects I've Built</h2>
          <p className="section-subtitle-text">Each project is a unique piece of development</p>
        </div>

        <div className="projects-grid">
          {/* Project 1 — EdTech Platform */}
          <article className="project-card" id="project-edtech">
            <div className="project-image-area proj-4">
              <div className="proj-number">01</div>
              <div className="proj-icon">🎓</div>
            </div>
            <div className="project-content">
              <div className="project-top">
                <h3>EdTech Platform</h3>
                <small className="tagline">Learn · Build · Get Certified</small>
              </div>
              <div className="tech-stack">
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
              </div>
              <p>
                A full-stack platform selling courses & internships — helping developers learn in-demand skills with real-world coding experience and verifiable certificates.
              </p>
              <div className="project-buttons">
                <a href="https://ed-tech-internship.vercel.app" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm" id="proj-edtech-demo">
                  <span>Live Demo</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" /></svg>
                </a>
                <Link to="/projects/edtech" className="btn btn-outline btn-sm" id="proj-edtech-details">Details →</Link>
              </div>
            </div>
          </article>

          {/* Project 2 — B2B Marketplace */}
          <article className="project-card" id="project-b2b">
            <div className="project-image-area proj-5">
              <div className="proj-number">02</div>
              <div className="proj-icon">🏢</div>
            </div>
            <div className="project-content">
              <div className="project-top">
                <h3>NeloHub - B2B Marketplace</h3>
                <small className="tagline">Production-Grade Platform for Bulk Orders</small>
              </div>
              <div className="tech-stack">
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Express</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">MongoDB</span>
              </div>
              <p>
                A robust backend system featuring order management, multi-address delivery handling, base-unit pricing models, and Razorpay integration.
              </p>
              <div className="project-buttons">
                <a href="https://hub.nelo.co.in" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm" id="proj-b2b-demo">
                  <span>Live Platform</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" /></svg>
                </a>
                <Link to="/projects/b2b" className="btn btn-outline btn-sm" id="proj-b2b-details">Details →</Link>
              </div>
            </div>
          </article>

          {/* Project 3 */}
          <article className="project-card" id="project-ai-studymate">
            <div className="project-image-area proj-1">
              <div className="proj-number">03</div>
              <div className="proj-icon">🤖</div>
            </div>
            <div className="project-content">
              <div className="project-top">
                <h3>AI StudyMate</h3>
                <small className="tagline">Discover, Explore & Use AI Tools</small>
              </div>
              <div className="tech-stack">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
              </div>
              <p>
                A web platform helping students discover and use 50+ powerful AI tools, with user favorites and a built-in AI workspace.
              </p>
              <div className="project-buttons">
                <a href="https://ai-studymate-yogesh.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm" id="proj1-demo">
                  <span>Live Demo</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" /></svg>
                </a>
                <Link to="/projects/project1" className="btn btn-outline btn-sm" id="proj1-details">Details →</Link>
              </div>
            </div>
          </article>

          {/* Project 4 */}
          <article className="project-card" id="project-student-mgmt">
            <div className="project-image-area proj-2">
              <div className="proj-number">04</div>
              <div className="proj-icon">🎓</div>
            </div>
            <div className="project-content">
              <div className="project-top">
                <h3>Student Management System</h3>
                <small className="tagline">Secure Academic Management</small>
              </div>
              <div className="tech-stack">
                <span className="tech-tag">Spring Boot</span>
                <span className="tech-tag">React</span>
                <span className="tech-tag">MySQL</span>
              </div>
              <p>
                Full-stack app with JWT authentication, BCrypt hashing, admin controls, and cloud deployment on Railway.
              </p>
              <div className="project-buttons">
                <a href="https://student-management-springboot.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm" id="proj2-demo">
                  <span>Live Demo</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" /></svg>
                </a>
                <Link to="/projects/project2" className="btn btn-outline btn-sm" id="proj2-details">Details →</Link>
              </div>
            </div>
          </article>

          {/* Project 5 */}
          <article className="project-card" id="project-weather">
            <div className="project-image-area proj-3">
              <div className="proj-number">05</div>
              <div className="proj-icon">🌦️</div>
            </div>
            <div className="project-content">
              <div className="project-top">
                <h3>Weather App</h3>
                <small className="tagline">Real-Time Weather Forecast</small>
              </div>
              <div className="tech-stack">
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">React</span>
                <span className="tech-tag">API</span>
              </div>
              <p>
                Live weather for any city worldwide — temperature, humidity, wind speed, hourly and 5-day forecasts.
              </p>
              <div className="project-buttons">
                <a href="https://weather-topaz-one.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm" id="proj3-demo">
                  <span>Live Demo</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" /></svg>
                </a>
                <Link to="/projects/project3" className="btn btn-outline btn-sm" id="proj3-details">Details →</Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="cta-section">
        <div className="cta-card">
          <h2>Let's work together</h2>
          <p>Have a project in mind? I'm always open to discuss new opportunities and creative ideas.</p>
          <Link to="/hireme" className="btn btn-primary btn-glow btn-lg" id="cta-hire-btn">
            <span>Get in Touch</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Home;

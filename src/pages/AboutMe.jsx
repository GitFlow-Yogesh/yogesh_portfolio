import React from "react";
import "./AboutMe.css";
import myResume from "../assets/yogesh.pdf";

function AboutMe() {
  return (
    <div className="about-container">
      <h3 className="abt-h">Details</h3>
      <div className="info-container">
        {/* First Row - Contact Info */}
        <div className="row contact-row">
          <div><strong>Name:</strong> Yogesh </div>
          <div><strong>Email:</strong> yogeshrao5024@gmail.com</div>
          <div><strong>Mobile:</strong> +91-9896691470</div>
          <div><strong>Location:</strong> Bengluru</div>
        </div>

        {/* Second Row - Education */}
        <div className="row education-row">
          <div><strong>Education:</strong> CMR University</div>
          <div>(B.Tech Student Final Year in Computer Science)</div>
          <div><strong>Duration : </strong> 2022 - 2026</div>
        </div>
      </div>
      {/* Skills Heading */}
      <h2 className="skills-heading">Skills</h2>
      {/* Third Row - Skills / Tech Stack */}
      <div className="row skills-row">
        <span className="skill">HMTL</span>
        <span className="skill">CSS</span>
        <span className="skill">TailWind CSS</span>
        <span className="skill">Java Script</span>
        <span className="skill">React</span>
        <span className="skill">Node.js</span>
        <span className="skill">Express</span>
        <span className="skill">MongoDB Atlas</span>
        <span className="skill">MySQL</span>
        <span className="skill">C(Basic)</span>
        <span className="skill">Python(Basic)</span>
        <span className="skill">Java</span>
        <span className="skill">SpringBoot</span>
        <span className="skill">Git</span>
        <span className="skill">GitHub</span>
        <span className="skill">Postman</span>
      </div>
      <h2 className="skills-heading">DSA Topics Solved</h2>
      <div className="row skills-row">
        <span className="skill">Arrays & Basics</span>
        <span className="skill">ArrayList</span>
        <span className="skill">Linked List</span>
        <span className="skill">Stack</span>
        <span className="skill">Queue</span>
        <span className="skill">Recursion & Backtracking(Basics)</span>
        <span className="skill">Trees</span>
        <span className="skill">Tree-based Problems(Basics)</span>
        <span className="skill">HashMap</span>
        <span className="skill">Heaps</span>
        <span className="skill">Strings</span>
        <span className="skill">Sorting Algorithms</span>
      </div>

      {/* About Text */}
      <div className="progress-container">
        <h2>So Far Progress</h2>
        <ul>
          <li>Learned HTML, CSS, and JavaScript for frontend development with good UI design practices.</li>
          <li>Built fast and responsive frontend applications using React and Tailwind CSS.</li>
          <li>Developed backend applications using:
            <ul>
              <li>Node.js & Express.js in AI StudyMate project.</li>
              <li>Java Spring Boot in Student Management System.</li>
            </ul>
          </li>
          <li>Worked with multiple databases:
            <ul>
              <li>
                MongoDB used in AI Tools project —
                <a href="https://ai-studymate-yogesh.vercel.app/" target="_blank" rel="noopener noreferrer">
                  Visit Project
                </a>
              </li>
              <li>
                MySQL & PostgreSQL used in Student Management project —
                <a href="https://student-management-springboot.vercel.app/" target="_blank" rel="noopener noreferrer">
                  Visit Project
                </a>
              </li>
            </ul>
          </li>
          <li>Implemented secure authentication & authorization:
            <ul>
              <li>Stored passwords using bcrypt (Node.js) and BCryptPasswordEncoder (Spring Boot).</li>
              <li>Protected API routes using JWT tokens.</li>
              <li>Role-based access for admin and normal users.</li>
            </ul>
          </li>
          <li>Deployment & Hosting:
            <ul>
              <li>Frontend hosted on Vercel for fast global delivery.</li>
              <li>Backend hosted on Render & Railway with environment variables for security.</li>
            </ul>
          </li>
          <li>Followed clean code principles and reusable component structure.</li>
        </ul>
      </div>



      {/* Resume Buttons */}
      <div className="resume-buttons">
        <a href={myResume} target="_blank" rel="noopener noreferrer" className="btn">
          View Resume
        </a>
        <a href={myResume} download className="btn btn-download">
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default AboutMe;

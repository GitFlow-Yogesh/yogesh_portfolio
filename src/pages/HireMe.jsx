import React from "react";
import "./HireMe.css";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function HireMe() {
  return (
    <div className="hireme-container">
      <h1>Hire Me</h1>
      <p>
        I’m always open to exciting opportunities! Let’s connect and build
        something amazing together.
      </p>

      {/* Social Links */}
      <div className="social-links">
        <a
          href="https://github.com/GitFlow-Yogesh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://linkedin.com/in/yogesh-yadav24"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://leetcode.com/yogeshrao5024/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode size={28} />
        </a>
      </div>

      {/* Contact Info */}
      <div className="contact-info">
        <h3>Reach Out Options</h3>
        <p>
          <FaEnvelope />{" "}
          <a href="mailto:yogeshrao5024@gmail.com">
            yogeshrao5024@gmail.com
          </a>
        </p>
        <p>
          <FaPhone />{" "}
          <a href="tel:+919896691470">
            +91 9896691470
          </a>
        </p>
      </div>
    </div>
  );
}

export default HireMe;

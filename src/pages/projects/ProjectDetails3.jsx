import React from "react";
import { Link } from "react-router-dom";
import "./ProjectDetails1.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function ProjectDetailsWeather() {
  return (
    <div className="pd-project-details-container">
      {/* 1️⃣ Hero Section */}
      <section className="pd-hero">
        <h1>Weather App</h1>
        <p>Real-time Weather Forecast at Your Fingertips</p>
      </section>

      {/* 2️⃣ About the Project */}
      <section className="pd-about">
        <h2>About the Project</h2>
        <p>
          This Weather App provides live, real-time weather updates for any city worldwide. 
          Built with React, it fetches data from weather APIs and renders a clean, intuitive 
          UI displaying temperature, humidity, wind speed, sunrise/sunset times, and more. 
          It includes hourly and 5-day forecasts, along with a search feature to instantly 
          find weather details for any location.
        </p>
      </section>

      <div className="section-for-both">
        {/* 3️⃣ Features */}
        <section className="pd-features">
          <h1>Key Features</h1>
          <ul>
            <li>Live weather data using external APIs</li>
            <li>Search for any city worldwide</li>
            <li>Displays temperature, humidity, pressure, wind speed & visibility</li>
            <li>Hourly forecast with temperature updates</li>
            <li>5-day forecast with weather conditions</li>
            <li>Responsive and visually appealing UI</li>
            <li>Dynamic icons and descriptions based on weather conditions</li>
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
            <span>Axios</span>
            <span>OpenWeather API</span>
            <span>Vercel</span>
            <span>Git & GitHub</span>
          </div>
        </section>
      </div>

      {/* 5️⃣ Future Updates */}
      <section className="pd-features future">
        <h1>Future Updates</h1>
        <ul>
          <li>Location auto-detection using Geolocation API</li>
          <li>Weather alerts for extreme conditions</li>
          <li>Theme customization (light/dark modes)</li>
          <li>Air quality index integration</li>
          <li>Animated weather icons</li>
        </ul>
      </section>

      {/* 6️⃣ Links */}
      <section className="pd-links">
        <h2>Explore the Project By Yourself</h2>
        <div className="pd-buttons">
          <a
            href="https://weather-topaz-one.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="pd-btn"
          >
            Live Demo <FaExternalLinkAlt />
          </a>
          <a
            href="https://github.com/GitFlow-Yogesh/weather"
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

export default ProjectDetailsWeather;

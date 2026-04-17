import React from "react";
import { Link } from "react-router-dom";
import "./ProjectDetails1.css";
import { FaExternalLinkAlt } from "react-icons/fa";

function ProjectDetailsB2B() {
  return (
    <div className="pd-project-details-container">
      {/* 1️⃣ Hero Section */}
      <section className="pd-hero">
        <h1>NeloHub - B2B Marketplace</h1>
        <p>Production-Grade Platform for Bulk Orders & Deliveries</p>
      </section>

      {/* 2️⃣ About the Project */}
      <section className="pd-about">
        <h2>About the Project</h2>
        <p>
          Built during my internship, this B2B marketplace platform (similar to Hyperpure) allows businesses to place bulk orders and manage deliveries efficiently. I was primarily responsible for architecting and implementing the backend using Node.js, Express, TypeScript, and MongoDB. The system features advanced core modules like order management, a flexible base-unit pricing model for bulk quantities, and a unique multi-address delivery system.
        </p>
      </section>

      <div className="section-for-both">
        {/* 3️⃣ Features */}
        <section className="pd-features">
          <h1>Key Features & Contributions</h1>
          <ul>
            <li><strong>Multi-Address Delivery:</strong> A single order can be split and delivered to multiple locations with independent tracking.</li>
            <li><strong>Robust Pricing & Payments:</strong> Accurate price calculations on the backend, PayLater functionality, and advanced coupon logic.</li>
            <li><strong>Payment Integration:</strong> Razorpay integration handling asynchronous payment states and webhook verification to prevent duplicate/failed transactions.</li>
            <li><strong>Admin Panel:</strong> Built with role-based access control (RBAC), ensuring proper authorization for different employee roles.</li>
            <li><strong>Performance Optimization:</strong> Resolved database indexing issues (e.g., duplicate indexes in MongoDB) to ensure scalability and reliability in production.</li>
          </ul>
        </section>

        {/* 4️⃣ Tech Stack */}
        <section className="pd-tech-stack">
          <h2>Tech Stack</h2>
          <div className="pd-tech-tags">
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>React</span>
            <span>Razorpay API</span>
          </div>
        </section>
      </div>

      {/* 5️⃣ Challenges Overcome */}
      <section className="pd-features future">
        <h1>Challenges Overcome</h1>
        <ul style={{ textAlign: "left" }}>
          <li>Ensuring the backend remains the single source of truth for accurate price calculations when orders are split across multiple addresses.</li>
          <li>Maintaining a clean, scalable architecture while continuously adding new features without breaking existing workflows.</li>
          <li>Handling asynchronous payment states and webhooks effectively to guarantee transaction reliability.</li>
        </ul>
      </section>

      {/* 6️⃣ Links */}
      <section className="pd-links" style={{ justifyContent: "center" }}>
        <h2>Explore the Project</h2>
        <div className="pd-buttons" style={{ width: "auto" }}>
          <a
            href="https://hub.nelo.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="pd-btn"
          >
            Live Platform <FaExternalLinkAlt style={{ marginLeft: "8px" }} />
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

export default ProjectDetailsB2B;

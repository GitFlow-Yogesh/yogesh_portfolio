import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">Let's Connect</Link>
      </div>
      <div className="navbar-right">
        <Link to="/" className="home">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/hireme">Hire Me</Link>
      </div>
    </nav>
  );
}

export default Navbar;

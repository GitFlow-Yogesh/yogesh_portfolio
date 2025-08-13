import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import HireMe from "./pages/HireMe";
import ProjectDetails1 from "./pages/projects/ProjectDetails1";
import ProjectDetails2 from "./pages/projects/ProjectDetails2";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/hireme" element={<HireMe />} />
        <Route path="/projects/project1" element={<ProjectDetails1 />} />
        <Route path="/projects/project2" element={<ProjectDetails2 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

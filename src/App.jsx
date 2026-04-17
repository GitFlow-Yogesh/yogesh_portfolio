import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import HireMe from "./pages/HireMe";
import ProjectDetails1 from "./pages/projects/ProjectDetails1";
import ProjectDetails2 from "./pages/projects/ProjectDetails2";
import ProjectDetails3 from "./pages/projects/ProjectDetails3";
import ProjectDetailsEdTech from "./pages/projects/ProjectDetailsEdTech";
import ProjectDetailsB2B from "./pages/projects/ProjectDetailsB2B";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/hireme" element={<HireMe />} />
          <Route path="/projects/edtech" element={<ProjectDetailsEdTech />} />
          <Route path="/projects/b2b" element={<ProjectDetailsB2B />} />
          <Route path="/projects/project1" element={<ProjectDetails1 />} />
          <Route path="/projects/project2" element={<ProjectDetails2 />} />
          <Route path="/projects/project3" element={<ProjectDetails3 />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

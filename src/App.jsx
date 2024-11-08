import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import Team from "./components/Team/Team";
import Gallery from "./components/Gallery/Gallery";
import Initiatives from "./components/Initiative/Initiatives";
import About from "./components/About/About";
import Card from "./components/Team/Card";
import Contact from './components/Contact/Contact';
import Committee from "./components/Committee/Committee";
import "./App.css";
import "./components/Navbar.css";
import "./components/Footer.css";

function App() {
  const location = useLocation();

  // Determine if the current path is /home or /
  const isHomePage = location.pathname === "/home" || location.pathname === "/";

  return (
    <>
      <Navbar />
      
      {/* Conditionally apply scroll control based on the route */}
      <div className={`container ${isHomePage ? "no-scroll" : "scroll"}`}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/about" element={<About />} />
          <Route path="/card" element={<Card />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/committee" element={<Committee />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;

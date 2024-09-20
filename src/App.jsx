import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./components/Navbar.css";
import "./components/Footer.css"
import Home from "./components/Home/Home";
import Team from "./components/Team/Team";
import Gallery from "./components/Gallery/Gallery";
import Initiatives from "./components/Initiative/Initiatives";
import About from "./components/About/About";
import Card from "./components/Team/Card";
import Contact from './components/Contact/Contact';
import Committee from "./components/Committee/Committee";
function App() {
  return (
    <>
      <Navbar />
      
      <div className="container">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Initiatives" element={<Initiatives />} />
          <Route path="/About" element={<About />} />
          <Route path="/Card" element={<Card />} />
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Committee" element={<Committee/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

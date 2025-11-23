// src/App.tsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Features from "./components/Features";
import Mission from "./components/Mission";
import Team from "./components/Team";
import PeopleAlsoAsk from "./components/PeopleAlsoAsk";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Hero />
          <Welcome />
          <Features />
          <Mission />
          <Team />
          <PeopleAlsoAsk />
          <Contact />
          <CTA />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
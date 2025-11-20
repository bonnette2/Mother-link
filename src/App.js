// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Features from './components/Features';
import Mission from './components/Mission';
import Team from './components/Team';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App = () => (
  <div>
    <Navbar />
    <Hero />
    <Welcome />
    <Features />
    <Mission />
    <Team />
    <Contact />
    <CTA />
    <Footer />
  </div>
);

export default App;
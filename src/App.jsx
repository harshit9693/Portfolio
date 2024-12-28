import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ParticleBackground from "./components/Particle";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";

const App = () => {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

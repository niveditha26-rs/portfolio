import React from "react";
import Navbar from "./components/Navbar";

import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />

      <div className="pt-20">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="education"><Education /></section>
        <section id="skill"><Skill /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
        <section id="Footer"><Footer></Footer></section>
      </div>
    </div>
  );
}

export default App;
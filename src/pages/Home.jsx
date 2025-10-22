// import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
// import Project from "./pages/Project";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default Home;

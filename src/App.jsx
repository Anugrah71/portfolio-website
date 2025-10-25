import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Project from "./pages/Project";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/project/:id" element={<Project />} />
        <Route path="/ContactMe" element={<ContactMe />} />

        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

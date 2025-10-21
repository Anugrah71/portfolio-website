import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Project from "./pages/Project";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Projects />
              <Skills />
              <Contact />
            </>
          }
        />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;

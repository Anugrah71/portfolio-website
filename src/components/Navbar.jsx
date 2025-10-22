import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full bg-white px-[5%] py-6 flex justify-between items-center shadow-md z-[1000]">
      <h1 className="text-xl font-bold">ANUGRAH K</h1>
      <ul className="hidden md:flex gap-8 list-none sm:hidden">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <button
        className="md:hidden flex flex-col gap-1.5 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block w-6 h-0.5 bg-black"></span>
        <span className="block w-6 h-0.5 bg-black"></span>
        <span className="block w-6 h-0.5 bg-black"></span>
      </button>

      {isOpen && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden list-none text-center">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/skills" onClick={() => setIsOpen(false)}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

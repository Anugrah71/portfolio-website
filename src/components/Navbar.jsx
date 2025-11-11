import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  return (
    <nav
      className={`fixed top-0 w-full bg-white px-[5%] py-6 flex justify-between items-center shadow-md z-[1000] transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <h1 className="text-xl font-bold cursor-pointer">ANUGRAH K</h1>

      <ul className="hidden md:flex gap-8 list-none cursor-pointer">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            activeClass="text-black font-semibold border-b-2 border-black pb-1"
            className="cursor-pointer transition-all duration-200 hover:text-gray-700"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            activeClass="text-black font-semibold border-b-2 border-black pb-1"
            className="cursor-pointer transition-all duration-200 hover:text-gray-700"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            activeClass="text-black font-semibold border-b-2 border-black pb-1"
            className="cursor-pointer transition-all duration-200 hover:text-gray-700"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            activeClass="text-black font-semibold border-b-2 border-black pb-1"
            className="cursor-pointer transition-all duration-200 hover:border-black"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            activeClass="text-black font-semibold border-b-2 border-black pb-1"
            className="cursor-pointer transition-all duration-200 hover:text-gray-700"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Menu */}
      <button
        className="md:hidden flex flex-col gap-1.5 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block w-6 h-0.5 bg-black"></span>
        <span className="block w-6 h-0.5 bg-black"></span>
        <span className="block w-6 h-0.5 bg-black"></span>
      </button>

      {isOpen && (
        <ul className="absolute top-[70px] left-0 w-full bg-white flex flex-col items-center gap-4 py-4 shadow-md md:hidden">
          {["home", "about", "skills", "projects", "contact"].map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isStandalonePage =
    location.pathname.startsWith("/project") ||
    location.pathname.startsWith("/ContactMe");

  const handleLinkClick = () => {
    setIsOpen(false);
  };
  return (
    <nav className="fixed top-0 w-full bg-white px-[5%] py-6 flex justify-between items-center shadow-md z-[1000] transition-transform duration-300 ">
      {/*Logo or Name */}
      <h1 className="text-xl font-bold cursor-pointer">ANUGRAH K</h1>

      {/*If NOT in project page → show normal navbar*/}
      {!isStandalonePage && (
        <ul className="hidden md:flex gap-8 list-none cursor-pointer">
          <li>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="text-black font-semibold border-b-2 border-black pb-1"
              className="cursor-pointer transition-all duration-200 hover:text-gray-700"
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="text-black font-semibold border-b-2 border-black pb-1"
              className="cursor-pointer transition-all duration-200 hover:text-gray-700"
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="text-black font-semibold border-b-2 border-black pb-1"
              className="cursor-pointer transition-all duration-200 hover:text-gray-700"
            >
              Skills
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="text-black font-semibold border-b-2 border-black pb-1"
              className="cursor-pointer transition-all duration-200 hover:border-black"
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="text-black font-semibold border-b-2 border-black pb-1"
              className="cursor-pointer transition-all duration-200 hover:text-gray-700"
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      )}

      {/*If in project page show back icon (desktop)*/}
      {isStandalonePage && (
        <RouterLink
          to="/"
          className="hidden md:flex items-center gap-2 text-black hover:text-gray-700 transition"
        >
          <ArrowLeft size={22} />
          <span className="font-semibold">Back to Home</span>
        </RouterLink>
      )}

      {/* Mobile Menu or Back Button  */}
      <div className="md:hidden">
        {/* If on Project Page show back icon instead of menu */}
        {isStandalonePage ? (
          <RouterLink to="/" className="text-black">
            <ArrowLeft size={26} />
          </RouterLink>
        ) : (
          <button
            className="flex flex-col gap-1.5 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </button>
        )}
      </div>

      {/* Mobile Menu (only when open & not on project page) */}
      {!isStandalonePage && isOpen && (
        <ul className="absolute top-[70px] left-0 w-full bg-white flex flex-col items-center gap-4 py-4 shadow-md md:hidden">
          <li>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              onClick={handleLinkClick}
              activeClass="text-black font-semibold border-b-2 border-black pb-1"
              className="cursor-pointer transition-all duration-200 hover:text-gray-700"
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={handleLinkClick}
              spy={true}
              activeClass="text-black font-semibold border-b-2 border-black pb-1"
              className="cursor-pointer transition-all duration-200 hover:text-gray-700"
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={handleLinkClick}
              spy={true}
              activeClass="text-black font-semibold border-b-2 border-black pb-1"
              className="cursor-pointer transition-all duration-200 hover:text-gray-700"
            >
              Skills
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={handleLinkClick}
              spy={true}
              activeClass="text-black font-semibold border-b-2 border-black pb-1"
              className="cursor-pointer transition-all duration-200 hover:border-black"
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={handleLinkClick}
              spy={true}
              activeClass="text-black font-semibold border-b-2 border-black pb-1"
              className="cursor-pointer transition-all duration-200 hover:text-gray-700"
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

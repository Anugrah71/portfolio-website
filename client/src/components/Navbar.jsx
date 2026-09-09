import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { ArrowLeft, Github, Linkedin, Mail } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isStandalonePage =
    location.pathname.startsWith("/project") ||
    location.pathname.startsWith("/ContactMe") ||
    location.pathname.startsWith("/admin");

  const handleLinkClick = () => {
    setIsOpen(false);
  };
  return (
    <nav className="fixed top-0 w-full bg-[#080B12]/80 backdrop-blur-xl border-b border-[#202632] px-[5%] py-5 flex justify-between items-center z-[1000] transition-all duration-300">
      <h1 className="text-lg sm:text-xl font-extrabold tracking-tight text-[#F1F3F5] cursor-pointer flex items-center gap-2">
        ANUGRAH KARIYATT
      </h1>

      {!isStandalonePage && (
        <ul className="hidden md:flex items-center gap-6 list-none cursor-pointer text-sm font-medium text-[#8B93A1]">
          <li>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="text-[#7C6CFF] font-bold border-b-2 border-[#7C6CFF] pb-1"
              className="cursor-pointer transition-all duration-200 hover:text-[#F1F3F5]"
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
              activeClass="text-[#7C6CFF] font-bold border-b-2 border-[#7C6CFF] pb-1"
              className="cursor-pointer transition-all duration-200 hover:text-[#F1F3F5]"
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
              activeClass="text-[#7C6CFF] font-bold border-b-2 border-[#7C6CFF] pb-1"
              className="cursor-pointer transition-all duration-200 hover:text-[#F1F3F5]"
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
              activeClass="text-[#7C6CFF] font-bold border-b-2 border-[#7C6CFF] pb-1"
              className="cursor-pointer transition-all duration-200 hover:text-[#F1F3F5]"
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
              activeClass="text-[#7C6CFF] font-bold border-b-2 border-[#7C6CFF] pb-1"
              className="cursor-pointer transition-all duration-200 hover:text-[#F1F3F5]"
            >
              Contact
            </ScrollLink>
          </li>

          {/* Social Icons */}
          <li className="flex items-center gap-3 pl-4 border-l border-[#202632]">
            <a
              href="https://github.com/anugrahkariyatt"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#8B93A1] hover:text-[#F1F3F5] hover:bg-[#10141D] rounded-xl transition"
              title="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/anugrahkariyatt/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#8B93A1] hover:text-[#7C6CFF] hover:bg-[#10141D] rounded-xl transition"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="p-2 text-[#8B93A1] hover:text-[#7C6CFF] hover:bg-[#10141D] rounded-xl transition cursor-pointer"
              title="Contact / Email"
            >
              <Mail size={18} />
            </ScrollLink>
          </li>
        </ul>
      )}

      {/*If in project page show back icon (desktop)*/}
      {isStandalonePage && (
        <RouterLink
          to="/"
          className="hidden md:flex items-center gap-2 text-[#F1F3F5] hover:text-[#7C6CFF] transition font-semibold text-sm"
        >
          <ArrowLeft size={18} />
          <span>Back to Home</span>
        </RouterLink>
      )}

      {/* Mobile Menu or Back Button  */}
      <div className="md:hidden">
        {/* If on Project Page show back icon instead of menu */}
        {isStandalonePage ? (
          <RouterLink to="/" className="text-[#F1F3F5]">
            <ArrowLeft size={24} />
          </RouterLink>
        ) : (
          <button
            className="flex flex-col gap-1.5 cursor-pointer p-2 text-[#F1F3F5]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="block w-6 h-0.5 bg-[#F1F3F5]"></span>
            <span className="block w-6 h-0.5 bg-[#F1F3F5]"></span>
            <span className="block w-6 h-0.5 bg-[#F1F3F5]"></span>
          </button>
        )}
      </div>

      {/* Mobile Menu (only when open & not on project page) */}
      {!isStandalonePage && isOpen && (
        <ul className="absolute top-[70px] left-0 w-full bg-[#080B12]/95 backdrop-blur-2xl border-b border-[#202632] flex flex-col items-center gap-5 py-6 text-[#8B93A1] md:hidden shadow-2xl">
          <li>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              onClick={handleLinkClick}
              className="cursor-pointer transition-all hover:text-[#F1F3F5]"
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
              className="cursor-pointer transition-all hover:text-[#F1F3F5]"
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
              className="cursor-pointer transition-all hover:text-[#F1F3F5]"
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
              className="cursor-pointer transition-all hover:text-[#F1F3F5]"
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
              className="cursor-pointer transition-all hover:text-[#F1F3F5]"
            >
              Contact
            </ScrollLink>
          </li>

          {/* Social Icons Mobile */}
          <li className="flex items-center gap-5 pt-3 border-t border-[#202632] w-full justify-center">
            <a
              href="https://github.com/anugrahkariyatt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B93A1] hover:text-[#F1F3F5] p-2"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/anugrahkariyatt/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B93A1] hover:text-[#7C6CFF] p-2"
            >
              <Linkedin size={20} />
            </a>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={handleLinkClick}
              className="text-[#8B93A1] hover:text-[#7C6CFF] p-2 cursor-pointer"
              title="Contact / Email"
            >
              <Mail size={20} />
            </ScrollLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

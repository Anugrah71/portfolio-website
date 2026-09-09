import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const navLinks = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" },
];

const topProjects = [
  { label: "Job Application Tracker", href: "https://github.com/anugrahkariyatt/Job-application" },
  { label: "Weather Analytics Dashboard", href: "https://github.com/Anugrah71/-Weather-Analytics-Dashboar" },
  { label: "Food Delivery App", href: "https://github.com/anugrahkariyatt/amaze" },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="w-full bg-[#080B12] border-t border-[#202632] text-[#F1F3F5] pt-16 pb-12 px-6 sm:px-10 md:px-16 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-[#202632]">
          {/* Col 1: Brand & Status */}
          <div className="space-y-4 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#F1F3F5]">
              ANUGRAH KARIYATT
            </h3>
            <p className="text-[#8B93A1] text-sm leading-relaxed">
              Full Stack Developer focused on backend development, REST APIs, authentication,
              and AI-powered integrations using Node.js, TypeScript, and modern web technologies.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#10141D] border border-[#202632] rounded-full text-xs font-semibold text-[#F1F3F5]">
              <span className="w-2 h-2 rounded-full bg-[#7C6CFF] animate-pulse shrink-0" />
              <span>Open to Junior Backend &amp; Full Stack Roles</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-[#F1F3F5] uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-sm text-[#8B93A1] hover:text-[#7C6CFF] cursor-pointer transition font-medium inline-block"
                  >
                    {link.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Top Projects */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-[#F1F3F5] uppercase tracking-widest">
              Top Projects
            </h4>
            <ul className="space-y-2.5">
              {topProjects.map((p) => (
                <li key={p.label}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#8B93A1] hover:text-[#7C6CFF] transition font-medium block leading-snug"
                  >
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Connect */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-[#F1F3F5] uppercase tracking-widest">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/anugrahkariyatt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-[#8B93A1] hover:text-[#F1F3F5] transition font-medium"
              >
                <Github size={16} className="text-[#7C6CFF]" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/anugrahkariyatt/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-[#8B93A1] hover:text-[#7C6CFF] transition font-medium"
              >
                <Linkedin size={16} className="text-[#7C6CFF]" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:anugrahkariyatt@gmail.com"
                className="flex items-center gap-2.5 text-sm text-[#8B93A1] hover:text-[#7C6CFF] transition font-medium"
              >
                <Mail size={16} className="text-[#7C6CFF]" />
                <span>Email Inbox</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8B93A1]">
          <p>© {new Date().getFullYear()} Anugrah Kariyatt. All rights reserved.</p>
          <p className="hidden sm:block">Built with React, Vite &amp; Tailwind CSS</p>
          <button
            onClick={scrollToTop}
            className="px-3.5 py-2 bg-[#10141D] hover:bg-[#161c29] border border-[#202632] text-[#F1F3F5] rounded-xl transition flex items-center gap-2 cursor-pointer font-medium"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

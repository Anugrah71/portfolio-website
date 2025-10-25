import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import ResumePDF from "/resume.pdf";
import { Link } from "react-router-dom";


const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 sm:px-8 md:px-12 bg-[#f8f8f8] mt-10 text-center">
      <h1
        data-aos="fade-right"
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] font-black mb-4 mt-2 tracking-tight leading-tight"
      >
        MERN STACK DEVELOPER
      </h1>

      <h2 className="text-[#666] mb-10 text-lg sm:text-xl md:text-2xl">
        <Typewriter
          options={{
            strings: ["Problem Solver", "Creative Coder"],
            autoStart: true,
            loop: true,
            cursor: "|",
          }}
        />
      </h2>

      <div className="flex flex-col sm:flex-row gap-4  sm:gap-6 lg:gap-2 mb-10">
        <a href={ResumePDF} download
          data-aos="fade-up"
          className="relative overflow-hidden group w-full sm:w-auto lg:w-60 px-8 py-3 sm:py-4 border-2 border-[#333] bg-transparent text-[1rem] sm:text-[1.1rem] cursor-pointer transition-all duration-300 inline-flex items-center justify-center gap-2"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
            Download Resume ⬇
          </span>
          <span className="absolute inset-0 bg-[#333] origin-bottom scale-y-0 transition-transform duration-300 group-hover:scale-y-100"></span>
        </a>

        <Link 
        to='/ContactMe'
          data-aos="fade-up"
          className="relative overflow-hidden group w-full sm:w-auto lg:w-60 px-8 py-3 sm:py-4 border-2 border-[#333] bg-transparent text-[1rem] sm:text-[1.1rem] cursor-pointer transition-all duration-300 inline-flex items-center justify-center gap-2"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
            Contact Me
          </span>
          <span className="absolute inset-0 bg-[#333] origin-bottom scale-y-0 transition-transform duration-300 group-hover:scale-y-100"></span>
        </Link>
      </div>

      <p
        data-aos="fade-up"
        className="max-w-[700px] text-[0.95rem] sm:text-[1rem] md:text-[1.1rem] leading-relaxed text-[#555]"
      >
        I'm a Full Stack Developer refining my MERN skills through consistent
        practice and projects. I enjoy building complete applications from
        backend logic to frontend design and I'm focused on writing cleaner,
        more efficient code every day as I grow into a stronger developer.
      </p>
    </section>
  );
};

export default Hero;

import { stringify } from "postcss";
import React from "react";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1500});
  }, []);
  return (
    <>
      <section className=" min-h-screen flex flex-col justify-center items-center p-8 bg-[#f8f8f8] mt-10">
        <h1
          data-aos="fade-right"
          className="text-[5rem] font-black mb-4 mt-1 tracking-tight"
        >
          MERN STACK DEVELOPER
        </h1>
        <h2 className=" text-[#666] mb-12 text-2xl">
          <Typewriter
            options={{
              strings: ["Problem Solver", "Creative Coder"],
              autoStart: true,
              loop: true,
              cursor: "|",
            }}
          />
        </h2>
        <div className="flex gap-2">
        <button
          data-aos="fade-up"
          className="relative overflow-hidden group w-57  px-8 py-4 border-2 border-[#333] bg-transparent text-[1.1rem] cursor-pointer transition-all duration-300 mb-12 inline-flex items-center gap-2"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
            Download Resume ⬇
          </span>
          <span className="absolute inset-0 bg-[#333] origin-bottom scale-y-0 transition-transform duration-300 group-hover:scale-y-100"></span>
        </button>
        <button
          data-aos="fade-up"
          className="relative overflow-hidden group w-57  px-8 py-4 border-2 border-[#333] bg-transparent text-[1.1rem] cursor-pointer transition-all duration-300 mb-12 inline-flex items-center justify-center gap-2"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
            Contact Me
          </span>
          <span className="absolute inset-0 bg-[#333] origin-bottom scale-y-0 transition-transform duration-300 group-hover:scale-y-100"></span>
        </button>
        </div>
        <p
          data-aos="fade-up"
          className="max-w-[700px] text-center text-[1.1rem] leading-[1.8] text-[#555]"
        >
          I'm a Full Stack Developer still refining my MERN skills through
          consistent practice and projects. I enjoy building complete
          applications from backend logic to frontend design and I'm focused on
          writing cleaner, more efficient code every day as I grow into a
          stronger developer.
        </p>
      </section>
    </>
  );
};

export default Hero;

import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <>
    <section className="hero min-h-screen flex flex-col justify-center items-center p-8 bg-[#f8f8f8] mt-[70px]" id="about">
        <h1 className='text-[5rem] font-black mb-4 tracking-[-2px]'>ANUGRAH K</h1>
        <h2 className='text-[1.5rem] text-[#666] mb-12 font-normal'>Creative Problem Solver</h2>
        <button className="resume-btn  px-8 py-4 border-2 border-[#333] bg-transparent text-[1.1rem] cursor-pointer transition-all duration-300 mb-12 inline-flex items-center gap-2">Download Resume ⬇</button>
        <p className='max-w-[700px] text-center text-[1.1rem] leading-[1.8] text-[#555]'>I'm a full stack web developer working with the MERN stack. I enjoy learning new things every day and love working on the backend side of projects. I'm always trying to improve and build clean, useful applications.</p>
        <div className="scroll-indicator mt-12 text-[2rem] animate-bounce">⌄</div>
    </section>
    </>
  )
}

export default Hero
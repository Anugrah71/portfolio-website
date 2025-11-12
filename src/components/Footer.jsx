import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-white px-6 md:px-12 lg:px-24 pt-8 pb-8 flex justify-center shadow-[0_-4px_10px_rgba(0,0,0,0.1)] z-[1000]">
      <div className="max-w-3xl text-center">
        <h3 className="text-2xl md:text-3xl mb-4">
          Let's Build Something Great Together
        </h3>
        <p className="text-[#666] text-sm md:text-base leading-relaxed">
          I'm a BCA graduate and self-driven developer, focused on turning ideas
          into impactful web experiences. Open to collaboration, learning, and
          building products that matter.
        </p>
      </div>
    </div>
  );
};

export default Footer;

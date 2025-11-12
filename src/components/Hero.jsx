import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import ResumePDF from "/resume.pdf";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center px-6 sm:px-8 md:px-12 bg-[#f8f8f8] mt-10 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        variants={itemVariants}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] font-black mb-4 mt-2 tracking-tight leading-tight"
      >
        Full Stack Developer
      </motion.h1>

      <motion.h2
        variants={itemVariants}
        className="text-[#666] mb-10 text-lg sm:text-xl md:text-2xl"
      >
        <Typewriter
          options={{
            strings: ["Problem Solver", "Creative Coder", "Product Builder"],
            autoStart: true,
            loop: true,
            cursor: "|",
          }}
        />
      </motion.h2>

      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-2 mb-10"
      >
        {/* Resume Button */}
        <motion.a
          href={ResumePDF}
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative overflow-hidden group w-full sm:w-auto md:w-58 lg:w-60 px-8 py-3 sm:py-4 border-2 border-[#333] bg-transparent text-[1rem] sm:text-[1.1rem] cursor-pointer transition-all duration-300 inline-flex items-center justify-center gap-2"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
            Download Resume ⬇
          </span>
          <span className="absolute inset-0 bg-[#333] origin-bottom scale-y-0 transition-transform duration-300 group-hover:scale-y-100"></span>
        </motion.a>

        {/* Contact Button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/ContactMe"
            className="relative overflow-hidden group w-full sm:w-auto md:w-58 lg:w-60 px-8 py-3 sm:py-4 border-2 border-[#333] bg-transparent text-[1rem] sm:text-[1.1rem] cursor-pointer transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              Contact Me
            </span>
            <span className="absolute inset-0 bg-[#333] origin-bottom scale-y-0 transition-transform duration-300 group-hover:scale-y-100"></span>
          </Link>
        </motion.div>
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="max-w-[700px] text-[0.95rem] sm:text-[1rem] md:text-[1.1rem] leading-relaxed text-[#555]"
      >
        I think beyond just features — I care about how every decision affects
        performance, design, and the overall experience. For me, good
        development is about building something that feels right to use.
      </motion.p>
    </motion.section>
  );
};

export default Hero;

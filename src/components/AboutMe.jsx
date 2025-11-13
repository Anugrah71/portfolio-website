import { motion } from "framer-motion";


const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.5,
    },
  },
};

const leftFade = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const rightFade = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const boxVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AboutMe = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      id="about"
    >
      <motion.h2
        className="section-title text-center mb-12"
        id="about"
        variants={rightFade}
      >
        About <span>Me</span>
      </motion.h2>

      <motion.div
        className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row shadow-lg p-6 rounded-md gap-12"
        variants={containerVariants}
      >
        <motion.div
          className="flex flex-col items-center gap-4 w-full md:w-1/3"
          variants={leftFade}
        >
          <div className="w-58 h-58 rounded-full overflow-hidden border-[3px] shadow-sm mt-5">
            <img
              src="/Anugrah.jpg"
              alt="Anugrah K"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-6 w-full md:w-2/3"
          variants={rightFade}
        >
          <motion.p
            className="leading-relaxed text-[1.05rem] text-gray-600"
            variants={rightFade}
          >
            I'm <span className="font-semibold text-gray-900">Anugrah K</span>,
            a BCA graduate and full-stack web developer focused on building
            efficient, scalable applications using the MERN stack.
          </motion.p>

          <motion.p
            className="leading-relaxed text-[1.05rem] text-gray-600"
            variants={rightFade}
          >
            I enjoy solving problems through code and crafting intuitive
            interfaces with React and Tailwind, supported by reliable backend
            logic in Node.js and Express. My projects include end-to-end
            applications like a food ordering system and a task manager that
            strengthened my understanding of REST APIs, authentication, and
            full-cycle deployment.
          </motion.p>

          <motion.p
            className="leading-relaxed text-[1.05rem] text-gray-600"
            variants={rightFade}
          >
            I'm now sharpening my focus on system architecture, performance
            optimization, and UX-driven design, pushing beyond code to build
            products that are both technically strong and user-centric. My goal
            is to join a team where I can contribute to impactful projects,
            scale my engineering mindset, and continue growing into a strong
            full-stack engineer.
          </motion.p>

          <motion.div
            className="grid sm:grid-cols-3 gap-6 mt-4"
            variants={containerVariants}
          >
            {[
              { title: "Degree", text: "BCA (2025)" },
              { title: "Projects", text: "Full-Stack Development" },
              { title: "Focus", text: "Clean UI & Reliable Backend" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={boxVariant}
                whileHover={{ scale: 1.05 }}
                className="p-5 bg-[#f9fafb] shadow-sm rounded-xl text-center border-t-[3px] border-black-500 hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutMe;

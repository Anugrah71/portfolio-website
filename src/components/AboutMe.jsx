import {
  GithubIcon,
  LinkedInIcon,
  LocationIcon,
  PhoneIcon,
  EmailIcon,
} from "../assets/icons";

const AboutMe = () => {
  return (
    <section id="about" className="py-20 bg-white text-gray-700">
      <h2 className="section-title">
        About <span>Me</span>
      </h2>

      <div className="max-w-6xl  mx-auto px-6 md:px-12 flex flex-col md:flex-row shadow-lg p-6 rounded-md gap-12">
        <div className="flex flex-col items-center gap-4 w-full md:w-1/3  ">
          <div className="w-58 h-58 rounded-full overflow-hidden border-[3px]  shadow-sm mt-5">
            <img
              src="/Anugrah.jpg"
              alt="Anugrah K"
              className="w-full h-full object-cover"
            />
          </div>
          
        </div>

        <div className="flex flex-col gap-6 w-full md:w-2/3">
          <p className="leading-relaxed text-[1.05rem] text-gray-600">
            I'm <span className="font-semibold text-gray-900">Anugrah K</span>,
            a BCA graduate and full-stack web developer focused on building
            efficient, scalable applications using the MERN stack.
          </p>

          <p className="leading-relaxed text-[1.05rem] text-gray-600">
            I enjoy solving problems through code and crafting intuitive
            interfaces with React and Tailwind, supported by reliable backend
            logic in Node.js and Express. My projects include end-to-end
            applications like a food ordering system and a task manager that
            strengthened my understanding of REST APIs, authentication, and
            deployment.
          </p>
          <p className="leading-relaxed text-[1.05rem] text-gray-600">
            I'm currently learning Next.js and TypeScript to build faster, more
            scalable applications. My goal is to join a team where I can
            contribute to real-world projects, write clean code, and continue
            growing into a strong full-stack engineer.
          </p>

          {/* HIGHLIGHT BOXES */}
          <div className="grid sm:grid-cols-3 gap-6 mt-4">
            <div className="p-5 bg-[#f9fafb] shadow-sm rounded-xl text-center border-t-[3px] border-black-500 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Degree
              </h3>
              <p className="text-sm text-gray-500">BCA (2025)</p>
            </div>

            <div className="p-5 bg-[#f9fafb] shadow-sm rounded-xl text-center border-t-[3px] border-black-500 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Projects
              </h3>
              <p className="text-sm text-gray-500">5+ Completed</p>
            </div>

            <div className="p-5 bg-[#f9fafb] shadow-sm rounded-xl text-center border-t-[3px] border-black-500 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Focus
              </h3>
              <p className="text-sm text-gray-500">MERN Stack</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

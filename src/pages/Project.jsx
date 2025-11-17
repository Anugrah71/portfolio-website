import React, { useEffect, useState } from "react";
import { projectData } from "../data/projectData";
import { useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const found = projectData.find((p) => p.id === Number(id));
    setProject(found);
  }, [id]);

  if (!project) {
    return (
      <h2 className="text-center text-red-500 mt-20">Project not found!</h2>
    );
  }

  return (
    <>
      {/*  HERO SECTION  */}
      <section className="relative z-0 mt-16 sm:mt-12 md:mt-0 px-4 sm:px-10 md:px-20 bg-white text-black text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-900">
            {project.title}
          </h1>
          <p className="text-sm sm:text-base md:text-xl text-gray-600 mt-2 mb-4 px-2">
            {project.tagline}
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            loop
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            {project.images.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt={`Screenshot ${i + 1}`}
                  className="w-full h-[200px] sm:h-[320px] md:h-[480px] object-contain bg-white"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile-only Overview */}
        <div className="block md:hidden mt-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">Project Overview</h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{project.overview}</p>
          </div>

          <div className="max-w-5xl mx-auto mt-10">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-gray-900 text-center">Tech Stack</h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {Object.entries(project.techStack).map(([category, tools]) => (
                <div
                  key={category}
                  className="bg-white border rounded-2xl shadow-sm p-5 hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-gray-800 mb-3 text-lg">{category}</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 font-medium hover:bg-gray-100 transition"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*  DESKTOP OVERVIEW (hidden on mobile) */}
      <section className="hidden md:block pt-10 pb-20 px-10  text-center bg-[#f8f8f8]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Project Overview</h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">{project.overview}</p>
        </div>

        <div className="max-w-5xl mx-auto mt-14">
          <h2 className="text-3xl font-semibold mb-8 text-gray-900 text-center">Tech Stack</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {Object.entries(project.techStack).map(([category, tools]) => (
              <div
                key={category}
                className="bg-white border rounded-2xl shadow-sm p-5 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-gray-800 mb-3 text-lg">{category}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 font-medium hover:bg-gray-100 transition"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  FEATURES SECTION */}
      <section className="py-14 sm:py-20 px-4 sm:px-10 md:px-20 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-gray-900">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.features.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:-translate-y-1 hover:shadow-lg transition text-left sm:text-center"
              >
                
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      {/*  CHALLENGES & SOLUTIONS  */}
    {project.challenges ?  <section className="py-14 sm:py-20 px-4 sm:px-10 md:px-20 bg-[#f8f8f8]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-gray-900 text-center">
            Challenges & Solutions
          </h2>
          {project.challenges.map(({ title, problem, solution }) => (
            <div
              key={title}
              className="bg-white p-5 sm:p-6 border-l-4 border-black rounded-lg mb-6 shadow-sm"
            >
              <h3 className="font-semibold text-black mb-2 text-lg">
                Challenge: {title}
              </h3>
              <p className="text-gray-700 mb-3 text-sm sm:text-base">
                {problem}
              </p>
              <div className="bg-gray-50 p-4 rounded-md text-gray-800 text-sm sm:text-base">
                <strong>Solution:</strong> {solution}
              </div>
            </div>
          ))}
        </div>
      </section>: ""}

      {/* OUTCOME */}
      <section className="py-14 sm:py-20 px-4 sm:px-10 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-gray-900">
            Outcome & Takeaways
          </h2>
          <div className="bg-black text-white rounded-xl p-6 sm:p-10 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              What I Learned
            </h3>
            <p className="opacity-90 leading-relaxed mb-4 text-sm sm:text-base">
              {project.outcome.learned}
            </p>
            <p className="opacity-90 leading-relaxed text-sm sm:text-base">
              {project.outcome.improvements}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;

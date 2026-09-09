import React, { useEffect, useState } from "react";
import { projectData } from "../data/projectData";
import { getProjectById } from "../services/api";
import { useParams, useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ArchitectureDiagram from "../components/ArchitectureDiagram";
import Footer from "../components/Footer";
import { Zap, ArrowLeft, ExternalLink, Github, CheckCircle2, AlertCircle, Award } from "lucide-react";

const Project = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Instant fallback from bundled projects
    const localFound = projectData.find((p) => p.id === Number(id));
    if (localFound) setProject(localFound);

    // Fetch latest data from database
    getProjectById(id).then((apiProject) => {
      if (apiProject) {
        if (localFound) {
          const hasCustomUpload =
            apiProject.imageUrl &&
            !apiProject.imageUrl.includes("unsplash.com") &&
            !apiProject.imageUrl.includes("photo-") &&
            apiProject.imageUrl.startsWith("http");

          setProject({
            ...apiProject,
            imageUrl: hasCustomUpload ? apiProject.imageUrl : localFound.imageUrl,
            images:
              apiProject.images &&
              apiProject.images.length > 0 &&
              !apiProject.images[0].includes("unsplash.com") &&
              apiProject.images[0].startsWith("http")
                ? apiProject.images
                : localFound.images,
          });
        } else {
          setProject(apiProject);
        }
      }
    });
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#080B12] text-[#F1F3F5] flex flex-col items-center justify-center pt-24 px-6">
        <h2 className="text-2xl font-bold text-red-400 mb-4">Project Not Found</h2>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2.5 bg-[#7C6CFF] hover:bg-[#6b59ff] text-white text-sm font-bold rounded-xl transition flex items-center gap-2"
        >
          <ArrowLeft size={16} /> Back to Portfolio
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080B12] text-[#F1F3F5] pt-24 pb-12">
      {/* Navigation Top Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 mb-8">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#10141D] hover:bg-[#161c29] border border-[#202632] rounded-xl text-xs sm:text-sm font-semibold text-[#8B93A1] hover:text-[#F1F3F5] transition cursor-pointer"
        >
          <ArrowLeft size={16} />
          <span>Back to Projects</span>
        </button>
      </div>

      {/* HERO / HEADER SECTION */}
      <section className="px-6 sm:px-10 md:px-16 text-center max-w-7xl mx-auto mb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#F1F3F5] mb-4 tracking-tight leading-tight">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#8B93A1] mb-6 leading-relaxed max-w-3xl mx-auto">
            {project.tagline}
          </p>

          {project.keyMetric && (
            <div className="inline-flex items-center gap-2 bg-[#10141D] text-[#F1F3F5] text-xs sm:text-sm font-semibold px-4 py-2 rounded-full mb-8 border border-[#202632] shadow-lg">
              <Zap size={16} className="text-[#7C6CFF] shrink-0" />
              <span>{project.keyMetric}</span>
            </div>
          )}

          {/* Action Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#7C6CFF] hover:bg-[#6b59ff] text-white text-sm font-bold rounded-xl shadow-lg transition flex items-center gap-2"
              >
                <span>Live Demo</span>
                <ExternalLink size={16} />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#10141D] hover:bg-[#161c29] text-[#F1F3F5] border border-[#202632] text-sm font-bold rounded-xl transition flex items-center gap-2"
              >
                <Github size={16} />
                <span>GitHub Code</span>
              </a>
            )}
          </div>
        </div>

        {/* IMAGE CAROUSEL */}
        <div className="w-full max-w-5xl mx-auto bg-[#10141D] p-3 sm:p-4 border border-[#202632] rounded-2xl shadow-2xl">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            loop
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500 }}
            className="rounded-xl overflow-hidden"
          >
            {project.images.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="w-full h-[240px] sm:h-[380px] md:h-[500px] bg-[#080B12] rounded-lg overflow-hidden flex items-center justify-center p-2">
                  <img
                    src={img}
                    alt={`${project.title} Screenshot ${i + 1}`}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* OVERVIEW & TECH STACK */}
      <section className="py-14 px-6 sm:px-10 md:px-16 max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Overview */}
          <div className="lg:col-span-2 bg-[#10141D] border border-[#202632] rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F1F3F5] mb-4">
                Project Overview
              </h2>
              <p className="text-[#8B93A1] text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {project.overview}
              </p>
            </div>

            {/* Quick Tech Tags */}
            <div className="pt-6 mt-6 border-t border-[#202632]">
              <h4 className="text-xs font-bold text-[#8B93A1] uppercase tracking-wider mb-3">
                Core Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-[#080B12] border border-[#202632] rounded-lg text-xs font-mono text-[#F1F3F5]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Categorized Tech Stack */}
          <div className="bg-[#10141D] border border-[#202632] rounded-2xl p-6 sm:p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-[#F1F3F5] mb-6 border-b border-[#202632] pb-4">
              Tech Stack
            </h2>
            <div className="space-y-6">
              {Object.entries(project.techStack).map(([category, tools]) => (
                <div key={category}>
                  <h3 className="text-xs font-bold text-[#7C6CFF] uppercase tracking-wider mb-2.5">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 bg-[#080B12] border border-[#202632] rounded-lg text-xs text-[#8B93A1] font-medium"
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

      {/* SYSTEM ARCHITECTURE DIAGRAM */}
      <section className="py-14 px-6 sm:px-10 md:px-16 max-w-7xl mx-auto mb-16">
        <div className="bg-[#10141D] border border-[#202632] rounded-2xl p-6 sm:p-10 shadow-xl">
          <ArchitectureDiagram projectId={project.id} />
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="py-14 px-6 sm:px-10 md:px-16 max-w-7xl mx-auto mb-16">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-center text-[#F1F3F5] mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.features.map(({ title, desc }) => (
            <div
              key={title}
              className="p-6 bg-[#10141D] border border-[#202632] rounded-2xl shadow-lg hover:border-[#7C6CFF]/50 transition duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#080B12] border border-[#202632] flex items-center justify-center text-[#7C6CFF] mb-4">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="text-lg font-bold text-[#F1F3F5] mb-2">{title}</h3>
              <p className="text-[#8B93A1] text-xs sm:text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CHALLENGES & SOLUTIONS */}
      {project.challenges && project.challenges.length > 0 && (
        <section className="py-14 px-6 sm:px-10 md:px-16 max-w-7xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-center text-[#F1F3F5] mb-12">
            Engineering Challenges &amp; Solutions
          </h2>
          <div className="space-y-6">
            {project.challenges.map(({ title, problem, solution }) => (
              <div
                key={title}
                className="bg-[#10141D] border border-[#202632] rounded-2xl p-6 sm:p-8 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-amber-500/10 text-amber-400 rounded-lg shrink-0 border border-amber-500/20">
                    <AlertCircle size={18} />
                  </div>
                  <h3 className="text-lg font-bold text-[#F1F3F5]">
                    Challenge: {title}
                  </h3>
                </div>
                <p className="text-[#8B93A1] text-sm mb-4 leading-relaxed pl-11">
                  {problem}
                </p>
                <div className="bg-[#080B12] border border-[#202632] p-4 rounded-xl text-xs sm:text-sm text-[#F1F3F5] leading-relaxed ml-0 sm:ml-11">
                  <strong className="text-[#7C6CFF] block mb-1">Solution Implemented:</strong>
                  <span>{solution}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* OUTCOME & TAKEAWAYS */}
      {project.outcome && (
        <section className="py-14 px-6 sm:px-10 md:px-16 max-w-7xl mx-auto mb-16">
          <div className="bg-[#10141D] border border-[#202632] rounded-2xl p-6 sm:p-10 shadow-2xl text-center max-w-4xl mx-auto">
            <div className="w-12 h-12 bg-[#7C6CFF]/10 text-[#7C6CFF] rounded-2xl flex items-center justify-center mx-auto mb-4 border border-[#7C6CFF]/20">
              <Award size={24} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F1F3F5] mb-6">
              Outcome &amp; Key Takeaways
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#8B93A1] leading-relaxed text-left sm:text-center">
              <p>{project.outcome.learned}</p>
              {project.outcome.improvements && (
                <p className="text-xs sm:text-sm text-[#7C6CFF] pt-2">
                  <strong>Future Roadmap:</strong> {project.outcome.improvements}
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Project;

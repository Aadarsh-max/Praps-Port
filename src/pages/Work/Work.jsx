import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/Theme/ThemeContext";

const projects = [
  {
    title: "QuickScribe",
    description:
      "QuickScribe — Intelligent MERN Note-Taking App. A user-friendly web app to create, manage, and organize notes with titles, descriptions, tags, and pinning. Features include dynamic search and filtering.",
    live: "https://notes-frontend-alpha-beryl.vercel.app",
    github: "https://github.com/Aadarsh-max/QuickScribe",
    image: "./notes.png",
  },
  {
    title: "Expense Tracker",
    description:
      "Expense Tracker — Smart MERN app to manage your finances. Add, track, and visualize your income and expenses with a sleek and interactive dashboard.",
    live: "https://expense-tracker-gamma-dun.vercel.app",
    github: "https://github.com/Aadarsh-max/Expense-Tracker",
    image: "./expenses.png",
  },
  {
    title: "PrepMate AI",
    description:
      "PrepMateAI — AI-powered interview preparation app using Google's Gemini. Get tailored technical interview questions based on your experience and focus areas.",
    live: "https://prepmate-ai-nine.vercel.app",
    github: "https://github.com/Aadarsh-max/PrepMateAI",
    image: "./prepmateai.png",
  },
  {
    title: "Streamify",
    description:
      "Streamify — MERN-based social platform to connect, chat, and collaborate with others. A full-featured communication app for seamless learning and sharing.",
    live: "https://streamify-app-47nz.onrender.com",
    github: "https://github.com/Aadarsh-max/Streamify",
    image: "./streamify.png",
  },
  {
    title: "Resume Builder",
    description:
      "Resume Builder — MERN Stack application that allows users to easily build professional resumes with real-time preview and customization options.",
    live: "https://resume-three-cyan.vercel.app",
    github: "https://github.com/Aadarsh-max/Resume-Builder",
    image: "./resume.png",
  },
];

const Work = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const bgGradient =
    theme === "dark"
      ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white"
      : "bg-gradient-to-br from-slate-50 via-white to-slate-100 text-black";

  const cardBg =
    theme === "dark"
      ? "bg-white/5 border-gray-700/30"
      : "bg-white/80 border-gray-200/20";

  const textColor = theme === "dark" ? "text-gray-100" : "text-gray-900";
  const descriptionColor = theme === "dark" ? "text-gray-300" : "text-gray-700";

  return (
    <div
      className={`min-h-screen px-4 sm:px-6 md:px-10 py-16 transition-all duration-500 ${bgGradient}`}
    >
      <style>{`
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .project-card { animation: slideInUp 0.6s ease-out forwards; }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0"
          }`}
        >
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 inline-block leading-tight">
            My Work
          </h1>

          <div className="flex gap-2 justify-center mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
            <div className="w-4 h-1 bg-gradient-to-r from-pink-600 to-orange-600 rounded-full"></div>
          </div>
          <p
            className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto ${descriptionColor}`}
          >
            A showcase of my featured projects — blending creativity,
            functionality, and modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="project-card group relative"
              style={{ animationDelay: `${0.1 + idx * 0.1}s` }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/40 to-purple-600/40 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div
                className={`relative flex flex-col overflow-hidden rounded-3xl shadow-xl border backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-3 group-hover:shadow-2xl ${cardBg}`}
              >
                {/* Image */}
                <div className="relative h-52 sm:h-56 md:h-60 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-5 sm:p-6">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {project.title}
                  </h2>
                  <p
                    className={`text-sm sm:text-base leading-relaxed flex-grow ${descriptionColor}`}
                  >
                    {project.description}
                  </p>

                  {/* Buttons */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 text-sm font-medium rounded-full flex items-center gap-2 border transition-all duration-300 transform hover:scale-105 ${
                        theme === "dark"
                          ? "bg-white/10 text-white border-gray-600 hover:bg-white/20"
                          : "bg-black/10 text-black border-gray-400 hover:bg-black/20"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                      >
                        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.92.58.11.79-.25.79-.55 0-.27-.01-1.18-.02-2.13-3.2.7-3.87-1.39-3.87-1.39-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.74 1.27 3.41.97.1-.76.41-1.27.75-1.56-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a10.95 10.95 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.26 5.7.42.37.8 1.09.8 2.2 0 1.59-.01 2.88-.01 3.27 0 .3.21.67.8.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

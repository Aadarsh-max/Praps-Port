import React, { useEffect, useState } from "react";
import { useTheme } from "../../context/Theme/ThemeContext";

const About = () => {
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
      ? "bg-white/5 dark:bg-slate-800/40 border-gray-700/30"
      : "bg-white/80 border-gray-200/20";

  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-700";

  const certifications = [
    {
      title: "Android Development",
      img: "./certand.png",
      link: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:18e98e08-25df-41a8-ae3a-b010bc18593e",
    },
    {
      title: "Game Development",
      img: "./certgame.png",
      link: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:f19fa6d2-6f05-49bf-be51-f28e67c27032",
    },
    {
      title: "Full Stack Development",
      img: "./certwhite.png",
      link: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:31c87bfe-e6d3-4f0d-b457-66116fb49cfb",
    },
  ];

  const skills = [
    { icon: "⚡", label: "JavaScript", delay: 0 },
    { icon: "📱", label: "Thunkable", delay: 0.1 },
    { icon: "🐙", label: "Git & GitHub", delay: 0.2 },
    { icon: "🧩", label: "JSON & APIs", delay: 0.3 },
    { icon: "🔥", label: "Firebase", delay: 0.4 },
    { icon: "⚛️", label: "React", delay: 0.5 },
    { icon: "🐍", label: "Python", delay: 0.6 },
    { icon: "📊", label: "Pandas", delay: 0.7 },
  ];

  return (
    <div
      className={`min-h-screen px-4 sm:px-8 py-16 transition-all duration-700 ${bgGradient}`}
    >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .skill-item { animation: slideInLeft 0.6s ease-out forwards; }
        .skill-item:nth-child(2) { animation-delay: 0.1s; }
        .skill-item:nth-child(3) { animation-delay: 0.2s; }
        .skill-item:nth-child(4) { animation-delay: 0.3s; }
        .skill-item:nth-child(5) { animation-delay: 0.4s; }
        .skill-item:nth-child(6) { animation-delay: 0.5s; }
        .skill-item:nth-child(7) { animation-delay: 0.6s; }
        .skill-item:nth-child(8) { animation-delay: 0.7s; }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0"
          }`}
        >
          <div className="relative inline-block mb-6">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-2xl rounded-full"></div>
            <h1 className="mt-5 relative text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h1>
          </div>
          <div className="flex gap-2 justify-center mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
            <div className="w-4 h-1 bg-gradient-to-r from-pink-600 to-orange-600 rounded-full"></div>
          </div>
          <p
            className={`text-base sm:text-lg max-w-3xl mx-auto leading-relaxed ${textColor}`}
          >
            This section provides an overview of my programming experience,
            tracing my journey from initial exposure in the ninth grade to
            advanced exploration in full-stack development, AI technologies, and
            application deployment.
          </p>
        </div>

        {/* Journey Section */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-20"></div>
            <div
              className={`relative ${cardBg} backdrop-blur-xl rounded-3xl shadow-2xl border p-6 sm:p-10 hover:shadow-xl transition-all duration-300`}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                My Coding Journey
              </h2>
              <p
                className={`${textColor} leading-relaxed text-sm sm:text-lg space-y-4`}
              >
                <span className="block">
                  I commenced my programming education in{" "}
                  <strong>ninth grade</strong> through{" "}
                  <strong>WhiteHat Jr</strong>. My initial focus was on
                  mastering <strong>JavaScript</strong>, during which I
                  developed and published a mobile game on the{" "}
                  <strong>App Store</strong> utilizing{" "}
                  <strong>Thunkable</strong>. Subsequently, I acquired
                  proficiency in <strong>Git & GitHub</strong> for version
                  control and gained experience with{" "}
                  <strong>JSON and API integrations</strong> for facilitating
                  data exchange between applications.
                </span>
                <span className="block">
                  My development trajectory continued with{" "}
                  <strong>Google Firebase</strong> for real-time database
                  management and the creation of a functional chatbot.
                  Thereafter, I advanced my front-end expertise by studying{" "}
                  <strong>HTML, CSS, and Flexbox</strong>, culminating in the
                  adoption of <strong>React</strong> for constructing dynamic
                  and interactive user interfaces.
                </span>
                <span className="block">
                  To broaden my understanding of back-end development, I
                  explored <strong>Python-based web development</strong>,
                  conducted data analysis using <strong>Kaggle datasets</strong>
                  , and applied the <strong>Pandas library</strong> for
                  comprehensive data manipulation and processing.
                </span>
              </p>

              {/* Skills Grid */}
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {skills.map((skill, idx) => (
                  <div key={idx} className="skill-item group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <div
                      className={`relative flex items-center gap-3 ${
                        theme === "dark"
                          ? "bg-white/5 hover:bg-white/10"
                          : "bg-black/5 hover:bg-black/10"
                      } p-3 rounded-lg border ${
                        theme === "dark"
                          ? "border-gray-700/30"
                          : "border-gray-300/30"
                      } transition-all duration-300 backdrop-blur-sm`}
                    >
                      <span className="text-xl">{skill.icon}</span>
                      <span
                        className={`text-sm font-medium ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {skill.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
            Professional Certifications
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {certifications.map((cert, idx) => (
              <a
                key={idx}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/40 to-pink-600/40 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div
                  className={`relative ${cardBg} backdrop-blur-xl p-4 sm:p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border group-hover:-translate-y-3`}
                >
                  <div className="relative overflow-hidden rounded-xl mb-5 h-40 sm:h-44">
                    <img
                      src={cert.img}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {cert.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

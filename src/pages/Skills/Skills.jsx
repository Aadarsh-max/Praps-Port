import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/Theme/ThemeContext";

const categories = [
  {
    title: "Programming Languages",
    description:
      "Core programming languages I use to solve problems and build applications.",
    skills: [
      { name: "C", level: 85, icon: "⚙️" },
      { name: "C++", level: 90, icon: "🔧" },
      { name: "Java", level: 80, icon: "☕" },
      { name: "JavaScript", level: 95, icon: "⚡" },
      { name: "Python", level: 88, icon: "🐍" },
    ],
  },
  {
    title: "Web & App Development",
    description: "Web, app, and backend technologies I’ve built projects with.",
    skills: [
      { name: "React", level: 92, icon: "⚛️" },
      { name: "HTML & CSS", level: 95, icon: "🌐" },
      { name: "Thunkable", level: 85, icon: "📱" },
      { name: "Firebase", level: 80, icon: "🔥" },
      { name: "Google Authentication", level: 85, icon: "🔑" },
      { name: "Python Web Dev", level: 78, icon: "🐍" },
      { name: "Kaggle & Pandas", level: 80, icon: "📊" },
    ],
  },
  {
    title: "Tools & Version Control",
    description:
      "Essential tools I use daily for development and project management.",
    skills: [
      { name: "Git", level: 90, icon: "📋" },
      { name: "GitHub", level: 92, icon: "🐙" },
      { name: "VS Code", level: 95, icon: "💻" },
    ],
  },
  {
    title: "Hardware & Electronics",
    description:
      "Hardware and electronics knowledge foundational for computing.",
    skills: [
      { name: "Semiconductor Devices", level: 80, icon: "🔌" },
      { name: "Digital Electronics", level: 85, icon: "💡" },
      { name: "Computer Architecture", level: 78, icon: "🖥️" },
      { name: "Boolean Logic", level: 88, icon: "🔧" },
    ],
  },
];

const Skills = () => {
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
        .skill-card { animation: slideInUp 0.6s ease-out forwards; }
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
            My Skills
          </h1>

          <div className="flex gap-2 justify-center mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
            <div className="w-4 h-1 bg-gradient-to-r from-pink-600 to-orange-600 rounded-full"></div>
          </div>

          <p
            className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto ${descriptionColor}`}
          >
            A deep dive into the technologies, tools, and languages I’ve
            mastered throughout my coding journey.
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, idx) => (
            <div
              key={category.title}
              className="skill-card group relative"
              style={{ animationDelay: `${0.1 + idx * 0.1}s` }}
            >
              {/* Hover Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/40 to-purple-600/40 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

              <div
                className={`relative flex flex-col rounded-3xl shadow-xl border backdrop-blur-xl overflow-hidden transition-all duration-300 group-hover:-translate-y-3 group-hover:shadow-2xl ${cardBg}`}
              >
                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  {/* Title */}
                  <h2 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {category.title}
                  </h2>

                  {/* Description */}
                  <p
                    className={`text-sm mb-6 leading-relaxed ${descriptionColor}`}
                  >
                    {category.description}
                  </p>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-1">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{skill.icon}</span>
                            <span className={`font-medium ${textColor}`}>
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-xs text-gray-500">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-300/30 dark:bg-gray-700/30 rounded-full h-2 overflow-hidden">
                          <div
                            className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
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

export default Skills;

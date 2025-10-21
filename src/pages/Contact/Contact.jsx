import React, { useEffect, useState } from "react";
import { useTheme } from "../../context/Theme/ThemeContext";

const Contact = () => {
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

  const contacts = [
    {
      title: "Email",
      value: "prapti.churi7@gmail.com",
      icon: "✉️",
      link: "mailto:prapti.churi7@gmail.com",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      title: "GitHub",
      value: "github.com/Prapti28",
      icon: "🐙",
      link: "https://github.com/Prapti28",
      gradient: "from-gray-700 to-black",
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/prapti-churi-28mskp",
      icon: "💼",
      link: "https://www.linkedin.com/in/prapti-churi-28mskp",
      gradient: "from-blue-600 to-sky-400",
    },
  ];

  return (
    <div
      className={`min-h-screen px-4 sm:px-6 md:px-10 py-16 transition-all duration-500 ${bgGradient}`}
    >
      <style>{`
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .contact-card { animation: slideInUp 0.6s ease-out forwards; }
      `}</style>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}
        >
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 inline-block leading-tight">
            Contact Me
          </h1>

          <div className="flex gap-2 justify-center mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
            <div className="w-4 h-1 bg-gradient-to-r from-pink-600 to-orange-600 rounded-full"></div>
          </div>

          <p
            className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto ${descriptionColor}`}
          >
           Connect with me , Find Me On 
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-center">
          {contacts.map((contact, idx) => (
            <div
              key={contact.title}
              className="contact-card group relative"
              style={{ animationDelay: `${0.1 + idx * 0.1}s` }}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/40 to-purple-600/40 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

              <a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative block text-center rounded-3xl shadow-xl border backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-3 group-hover:shadow-2xl p-8 ${cardBg}`}
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl bg-gradient-to-r ${contact.gradient} text-white shadow-md`}
                >
                  {contact.icon}
                </div>
                <h2 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {contact.title}
                </h2>
                <p
                  className={`text-sm sm:text-base font-medium ${descriptionColor} break-all`}
                >
                  {contact.value}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;

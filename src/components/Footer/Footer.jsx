import React from "react";
import { useTheme } from "../../context/Theme/ThemeContext";

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

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`py-8 transition-colors duration-500 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-lg font-semibold">Prapti Churi</p>
          <p
            className={`text-sm transition-colors duration-500 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div className="flex space-x-4 md:space-x-6">
          {contacts.map((contact) => (
            <a
              key={contact.title}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-transform duration-200 transform hover:scale-105 hover:shadow-lg ${
                theme === "dark"
                  ? `bg-gradient-to-r ${contact.gradient} text-white`
                  : `bg-gradient-to-r ${contact.gradient} text-white/90`
              }`}
            >
              <span>{contact.icon}</span>
              <span className="text-sm font-medium">{contact.title}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

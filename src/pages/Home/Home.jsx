import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FaGamepad, FaMobileAlt, FaCode, FaBolt } from "react-icons/fa";
import { useTheme } from "../../context/Theme/ThemeContext";

const Home = () => {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) =>
      setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const roles = [
    { name: "Game Developer", icon: FaGamepad },
    { name: "App Developer", icon: FaMobileAlt },
    { name: "Full Stack Developer", icon: FaCode },
    { name: "Tech Enthusiast", icon: FaBolt },
  ];

  const bgGradient =
    theme === "dark"
      ? "bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950"
      : "bg-gradient-to-br from-blue-50 via-white to-purple-50";
  const textPrimary = theme === "dark" ? "text-gray-100" : "text-gray-900";
  const textSecondary = theme === "dark" ? "text-gray-400" : "text-gray-600";
  const roleBg =
    theme === "dark"
      ? "bg-white/10 border-gray-700 text-gray-100"
      : "bg-white/50 border-gray-200 text-gray-900";

  return (
    <div
      className={`w-full min-h-screen relative overflow-hidden flex flex-col ${bgGradient}`}
    >
      {/* Animated Background Blobs */}
      <motion.div
        className={`absolute w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full blur-3xl opacity-20 pointer-events-none ${
          theme === "dark" ? "bg-purple-600" : "bg-blue-300"
        }`}
        style={{ top: "-100px", left: "-100px" }}
        animate={{ x: [0, 150, 0], y: [0, 100, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className={`absolute w-[350px] sm:w-[500px] md:w-[600px] h-[350px] sm:h-[500px] md:h-[600px] rounded-full blur-3xl opacity-20 pointer-events-none ${
          theme === "dark" ? "bg-pink-600" : "bg-pink-200"
        }`}
        style={{ bottom: "-150px", right: "-150px" }}
        animate={{ x: [0, -150, 0], y: [0, -100, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-1 w-full items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full max-w-7xl">
          {/* LEFT SECTION */}
          <motion.div
            className="flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-3 sm:mb-4 ${textPrimary}`}
            >
              Hi, I'm{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 relative">
                Prapti Churi
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className={`text-lg sm:text-xl md:text-2xl font-bold mt-2 sm:mt-4 mb-4 sm:mb-6 ${textPrimary}`}
            >
              Game • App • Fullstack Developer
            </motion.p>

            <motion.p
              variants={itemVariants}
              className={`text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 ${textSecondary}`}
            >
              I am Prapti Churi, a second-year B.Tech in ECS. I am a Game
              Developer, App Developer, and Full Stack Developer.
            </motion.p>
          </motion.div>

          {/* RIGHT SECTION */}
          <motion.div
            className="flex flex-col justify-center items-center"
            initial={{ x: 100, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden border-4 shadow-2xl mb-6 sm:mb-8"
              variants={floatingVariants}
              animate="animate"
            >
              <img
                src="./praps.jpg"
                alt="Prapti"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Role Boxes */}
            <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 w-full px-2 sm:px-0">
              {roles.map((role, idx) => {
                const Icon = role.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className={`flex flex-col items-center justify-center gap-2 px-2 sm:px-3 md:px-4 py-4 sm:py-5 md:py-6 rounded-lg border transition-all ${roleBg}`}
                  >
                    <Icon className="text-xl sm:text-2xl md:text-3xl" />
                    <span className="font-semibold text-center text-xs sm:text-sm md:text-base">
                      {role.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex justify-center items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          className={`p-2 rounded-full border ${
            theme === "dark"
              ? "border-slate-700/50 text-gray-400"
              : "border-gray-300 text-gray-600"
          }`}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;

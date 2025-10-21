import React from "react";
import { Routes, Route } from "react-router-dom"; // no BrowserRouter here
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import Work from "./pages/Work/Work";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;

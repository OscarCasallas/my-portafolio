import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-900 text-white py-6 shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer">
          <Link
            to="home"
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-black
                hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.7)]"
          >
            Oscar Casallas
          </Link>
        </div>

        {/* Mobile menu icon */}
        <div className="lg:hidden">
          <button
            className="text-white text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu Items */}
        {/* Desktop menu: siempre visible en lg+ */}
        <div className="hidden lg:flex lg:items-center lg:space-x-8">
          <ul className="flex flex-row lg:space-x-8 text-center">
            <li className="py-2 lg:py-0">
              <Link to="home" smooth={true} offset={-70} duration={500} className="relative pb-1 cursor-pointer transition duration-300 font-bold lg:font-normal after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[4px] after:bg-white after:w-0 after:transition-all after:duration-300 hover:after:w-full" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link to="about" smooth={true} offset={-70} duration={500} className="relative pb-1 cursor-pointer transition duration-300 font-bold lg:font-normal after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[4px] after:bg-white after:w-0 after:transition-all after:duration-300 hover:after:w-full" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link to="skills" smooth={true} offset={-70} duration={500} className="relative pb-1 cursor-pointer transition duration-300 font-bold lg:font-normal after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[4px] after:bg-white after:w-0 after:transition-all after:duration-300 hover:after:w-full" onClick={() => setIsOpen(false)}>Skills</Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link to="projects" smooth={true} offset={-70} duration={500} className="relative pb-1 cursor-pointer transition duration-300 font-bold lg:font-normal after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[4px] after:bg-white after:w-0 after:transition-all after:duration-300 hover:after:w-full" onClick={() => setIsOpen(false)}>Projects</Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link to="resume" smooth={true} offset={-70} duration={500} className="relative pb-1 cursor-pointer transition duration-300 font-bold lg:font-normal after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[4px] after:bg-white after:w-0 after:transition-all after:duration-300 hover:after:w-full" onClick={() => setIsOpen(false)}>Resume</Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link to="contact" smooth={true} offset={-70} duration={500} className="relative pb-1 cursor-pointer transition duration-300 font-bold lg:font-normal after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[4px] after:bg-white after:w-0 after:transition-all after:duration-300 hover:after:w-full" onClick={() => setIsOpen(false)}>Contact</Link>
            </li>
          </ul>
        </div>
        {/* Mobile menu: animado y solo visible en mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }}
              exit={{ opacity: 0, y: -40, transition: { duration: 0.5, ease: "easeIn" } }}
              className="absolute top-16 left-0 w-full bg-white text-blue-900 shadow-md flex flex-col lg:hidden"
            >
              <ul className="flex flex-col text-center">
                <li className="py-2">
                  <Link to="home" smooth={true} offset={-70} duration={500} className="relative pb-1 cursor-pointer transition duration-300 font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[4px] after:bg-blue-900 after:w-0 after:transition-all after:duration-300 hover:after:w-full" onClick={() => setIsOpen(false)}>Home</Link>
                </li>
                <li className="py-2">
                  <Link to="about" smooth={true} offset={-70} duration={500} className="relative pb-1 cursor-pointer transition duration-300 font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[4px] after:bg-blue-900 after:w-0 after:transition-all after:duration-300 hover:after:w-full" onClick={() => setIsOpen(false)}>About</Link>
                </li>
                <li className="py-2">
                  <Link to="skills" smooth={true} offset={-70} duration={500} className="relative pb-1 cursor-pointer transition duration-300 font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[4px] after:bg-blue-900 after:w-0 after:transition-all after:duration-300 hover:after:w-full" onClick={() => setIsOpen(false)}>Skills</Link>
                </li>
                <li className="py-2">
                  <Link to="projects" smooth={true} offset={-70} duration={500} className="relative pb-1 cursor-pointer transition duration-300 font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[4px] after:bg-blue-900 after:w-0 after:transition-all after:duration-300 hover:after:w-full" onClick={() => setIsOpen(false)}>Projects</Link>
                </li>
                <li className="py-2">
                  <Link to="resume" smooth={true} offset={-70} duration={500} className="relative pb-1 cursor-pointer transition duration-300 font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[4px] after:bg-blue-900 after:w-0 after:transition-all after:duration-300 hover:after:w-full" onClick={() => setIsOpen(false)}>Resume</Link>
                </li>
                <li className="py-2">
                  <Link to="contact" smooth={true} offset={-70} duration={500} className="relative pb-1 cursor-pointer transition duration-300 font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[4px] after:bg-blue-900 after:w-0 after:transition-all after:duration-300 hover:after:w-full" onClick={() => setIsOpen(false)}>Contact</Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;

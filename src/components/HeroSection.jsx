import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HomeImage from "../assets/images/dp-bg-reg.jpg";

const rotatingTitles = [
  "Software Developer",
  "Systems Engineer",
  "Full-Stack Developer",
  "Web Developer",
  "Tech Enthusiast"
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTitles.length);
    }, 2500); // cambia cada 2.5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#F4F4F4] py-10 md:py-24" id="home">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-0 md:gap-8">

          {/* Left Section */}
          <div className="md:w-1/2 text-center md:text-left">

            {/* NAME */}
            <h1 className="text-6xl font-extrabold text-secondary mb-4 md:mt-0 mt-6 leading-tight">
              Oscar Casallas
            </h1>

            {/* Rotating Subtitle */}
            <div className="h-10 mb-4 font-semibold text-[#606060] text-2xl">
              <AnimatePresence mode="wait">
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  {rotatingTitles[index]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Description */}
            <p className="text-secondary mb-6 text-justify text-lg">
              Passionate about web development, mobile applications, 
              and artificial intelligence. I enjoy creating solutions 
              that solve real-world problems and constantly learning 
              new technologies.
            </p>

            {/* Button with Animated Border */}
            <a
              href="/OscarCasallas-CV-dev.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="animated-border-btn inline-block px-6 py-3 bg-blue-900 text-white rounded-lg shadow-md hover:bg-[#F4F4F4] hover:text-blue-900 hover:border-blue-900 border transition-all relative overflow-hidden"
            >
              Download CV
            </a>

          </div>

          {/* Right Section - Image */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img
              src={HomeImage}
              alt="Oscar Casallas - Software Developer"
              className="w-full max-w-sm md:max-w-md h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

        </div>
      </div>

      <style>{`
        .animated-border-btn {
          position: relative;
          z-index: 1;
        }

        .animated-border-btn::before {
          content: "";
          position: absolute;
          inset: 0;
          padding: 3px; /* borde más grueso para que se note mejor */
          border-radius: inherit;

          /* 🔥 Degradado más llamativo estilo "serpiente neón" */
          background: linear-gradient(
            90deg,
            #00c6ff,
            #0072ff,
            #ffffff,
            #0072ff,
            #00c6ff
          );

          background-size: 300% 300%; /* movimiento más amplio */
          animation: borderMove 3s linear infinite; /* más rápido y notorio */

          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
                  mask-composite: exclude;
        }

        @keyframes borderMove {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

    </section>
  );
};

export default HeroSection;

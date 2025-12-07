import React, { useState, useEffect } from "react";
import HomeImage from "../assets/images/dp-bg-reg.jpg";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeUp, fadeLeft, fadeRight } from "../utils/useScrollAnimation";

const rotatingTitles = [
  "Software Developer",
  "Systems Engineer",
  "Full-Stack Developer",
  "Web Developer",
  "Tech Enthusiast",
];

const HeroSection = () => {
  const nameAnim = useScrollAnimation(fadeUp);
  const subtitleAnim = useScrollAnimation(fadeUp);
  const descAnim = useScrollAnimation(fadeLeft);
  const buttonAnim = useScrollAnimation(fadeUp);
  const imageAnim = useScrollAnimation(fadeRight);




  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const current = rotatingTitles[loopIndex % rotatingTitles.length];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(current.substring(0, displayText.length + 1));
        setTypingSpeed(120);
      } else {
        setDisplayText(current.substring(0, displayText.length - 1));
        setTypingSpeed(80);
      }

      if (!isDeleting && displayText === current) {
        setTimeout(() => setIsDeleting(true), 900);
      }

      if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopIndex(loopIndex + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting]);

  return (
    <section className="bg-[#F4F4F4] py-10 md:py-24" id="home">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-0 md:gap-8">
          {/* Left Section */}
          <div className="md:w-1/2 text-center md:text-left">
            {/* NAME */}
            <motion.h1 {...nameAnim.motionProps} ref={nameAnim.ref}
              className="text-5xl md:text-6xl font-extrabold text-secondary mb-4 mt-20 md:mt-0 leading-tight"
            >
              Oscar Casallas
            </motion.h1>

            {/* Rotating Subtitle */}
            <motion.div {...subtitleAnim.motionProps} ref={subtitleAnim.ref}
              className="h-10 mb-4 font-semibold text-[#606060] text-2xl flex justify-center md:justify-start"
            >
              <span className="typing-text">
                {displayText}
                <span className="cursor">|</span>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p {...descAnim.motionProps} ref={descAnim.ref}
              className="text-secondary mb-6 text-justify text-lg"
            >
              Passionate about web development, mobile applications, and
              artificial intelligence. I enjoy creating solutions that solve
              real-world problems and constantly learning new technologies.
            </motion.p>

            {/* Button with Animated Border */}
            <motion.a {...buttonAnim.motionProps} ref={buttonAnim.ref}
              href="/OscarCasallas-CV-dev.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="animated-border-btn inline-block px-6 py-3 bg-blue-900 text-white rounded-lg shadow-md hover:bg-[#F4F4F4] hover:text-blue-900 hover:border-blue-900 border transition-all relative overflow-hidden"
            >
              Download CV
            </motion.a>
          </div>

          {/* Right Section - Image */}
          <motion.div {...imageAnim.motionProps} ref={imageAnim.ref}
            className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
          >
            <img
              src={HomeImage}
              alt="Oscar Casallas - Software Developer"
              className="w-full max-w-sm md:max-w-md h-auto rounded-lg shadow-lg object-cover"
            />
          </motion.div>
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
        
          .cursor {
          display: inline-block;
          margin-left: 2px;
          color: #0072ff;
          animation: blink 0.7s infinite;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }

        .typing-text {
          white-space: nowrap;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;

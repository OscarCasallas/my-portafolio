import React from "react";
import AboutImage from "../assets/images/yorascacielos.jpg";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeUp, fadeLeft, fadeRight } from "../utils/useScrollAnimation";

const About = () => {
  // Animaciones para cada bloque
  const titleAnim = useScrollAnimation(fadeRight);
  const imageAnim = useScrollAnimation(fadeUp);
  const textAnim = useScrollAnimation(fadeLeft);

  return (
    <section id="about" className="py-8 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <motion.h1 {...titleAnim.motionProps} ref={titleAnim.ref}
          className="text-4xl font-bold text-blue-900 mb-6 text-center"
        >
          About Me
        </motion.h1>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-0">
          {/* Left Column - Image */}
          <motion.div {...imageAnim.motionProps} ref={imageAnim.ref}
            className="md:w-1/3 mb-8 md:mb-0 flex justify-center"
          >
            <div className="rounded-full overflow-hidden shadow-xl">
              <img
                src={AboutImage}
                alt="Oscar Casallas - Systems Engineer"
                className="w-48 rounded-full h-48 object-cover border-4 border-blue-900"
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div {...textAnim.motionProps} ref={textAnim.ref}
            className="md:w-2/3 md:px-8"
          >
            <div className="text-[#333333] text-xl leading-relaxed md:text-2xl">
              <p className="mb-4 text-justify">
                Hi, I'm <strong>Oscar Casallas</strong>, I am a final-year{" "}
                <strong>Systems Engineering</strong>{" "} student with over 
                three years of <strong>academic experience</strong> developing software, 
                web and mobile applications, and AI projects.
                I have knowledge in Python, JavaScript, Node.js, 
                React, HTML, CSS, MongoDB databases, and APIs. 
                I also have experience using cloud services such as AWS.
              </p>

              <p className="mb-4 text-justify">
                I have <strong>led and developed personal and academic projects</strong>{" "}
                including CRM systems, video games, mobile applications, 
                and an intelligent agent for video analysis using computer 
                vision techniques.
              </p>

              <p className="mb-4 text-justify">
                I am characterized by my <strong>rapid adaptability, continuous learning, 
                and ability to work effectively in teams.</strong> I am motivated to 
                continue growing professionally and applying my knowledge to 
                real-world projects in the world of development and technology.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

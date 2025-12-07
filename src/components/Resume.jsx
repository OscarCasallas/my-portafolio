import React, { useState, useEffect } from "react";
import { useScrollAnimation, fadeUp, fadeLeft, fadeRight } from "../utils/useScrollAnimation";
import AboutImage from "../assets/images/dp-bg-reg.jpg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Resume = () => {
    // Animaciones para los bloques principales
    const titleAnim = useScrollAnimation(fadeUp);
    const leftAnim = useScrollAnimation(fadeLeft);
    const rightAnim = useScrollAnimation(fadeRight);
  const slides = [
    {
      title: "Experience - Customer Service",
      content: (
        <ul className="list-disc pl-5 space-y-3">
          <li>
            <p className="font-semibold">Cashier – Mattelsa</p>
            <p className="text-sm">
              December 2023, 2024, 2025 — Customer service, season support,
              inventory handling.
            </p>
          </li>

          <li>
            <p className="font-semibold">Pool Operator – MGN Pools (USA)</p>
            <p className="text-sm">
              2024 — Technical pool operation, safety supervision, communication
              in English.
            </p>
          </li>

          <li>
            <p className="font-semibold">
              Banquet Server – Hotel Resort & Spa (USA)
            </p>
            <p className="text-sm">
              2023 — Event service and logistics in bilingual environments.
            </p>
          </li>

          <li>
            <p className="font-semibold">Sales Assistant – Chispas Sports</p>
            <p className="text-sm">
              2021 — Store support, product management, customer service.
            </p>
          </li>

          <li>
            <p className="font-semibold">Cashier – Fruver La Granja</p>
            <p className="text-sm">
              2021 — POS operation and customer assistance.
            </p>
          </li>
        </ul>
      ),
    },
    {
      title: "Education",
      content: (
        <ul className="list-disc pl-5 space-y-3">
          <li>
            <p className="font-semibold">
              Systems Engineering – Universidad de Ibagué
            </p>
            <p className="text-sm">2022 – Present</p>
          </li>

          <li>
            <p className="font-semibold">Systems Technician – SENA</p>
            <p className="text-sm">2020 – 2021</p>
          </li>

          <li>
            <p className="font-semibold">
              High School – I.E. Germán Pardo García
            </p>
            <p className="text-sm">Graduated 2021</p>
          </li>
        </ul>
      ),
    },
    {
      title: "Certifications - Developer",
      content: (
        <ul className="space-y-4 list-disc pl-5">
          {[
            {
              name: "Full Stack Empresarial - Spring Boot & Angular - DevSenior - 2025",
              url: "https://profiles.badgeclaimed.com/user-7290/badges/urn:uuid:f57133f7-27d2-4f65-81f1-c7eb896dd392.html",
            },
            {
              name: "AWS Academy Cloud Architecting - AWS - 2025",
              url: "https://drive.google.com/file/d/147UgN1l01PLXVBDQdrEyjLcugy7OD-ao/view?usp=sharing",
            },
            {
              name: "Google Cybersecurity Certificate - Coursera - 2025",
              url: "https://drive.google.com/file/d/1pq999onX5b_8C06rXnG2RS9Zli1lcwkY/view?usp=sharing",
            },
            {
              name: "Google AI Essentials - Coursera - 2025",
              url: "https://drive.google.com/file/d/1KLa7Eq24diWl3DYwLvH5Vt-M3IOmvfKp/view?usp=sharing",
            },
            {
              name: "Google Prompting Essentials - Coursera - 2025",
              url: "https://drive.google.com/file/d/1k9hvjdCtWhjp1TdEa7U5Cg0SYbiTZUVx/view?usp=sharing",
            },
            {
              name: "Unity Essentials Pathway - Unity - 2024",
              url: "https://drive.google.com/file/d/1ikL6WP9UqQOgcNc3X6IXNgV2jWem4Jpx/view?usp=sharing",
            },
            {
              name: "AWS Academy Cloud Foundations - AWS - 2024",
              url: "https://drive.google.com/file/d/10P4xNll0yOx9mZFFDTXMzvc8UEyF7FZl/view?usp=sharing",
            },
            {
              name: "Innovation & Entrepreneurship - Coursera - 2022",
              url: "https://drive.google.com/file/d/1jsI6Ecz2bYhjxUtI_q4Z8pLhv9kz-OKo/view",
            },
            {
              name: "MinTIC Programming Foundations - MinTIC - 2021",
              url: "https://drive.google.com/file/d/14xTR0pGReEI1QFLkKc7xz8TdJ9gnbuN9/view?usp=sharing",
            },
          ].map((cert, i) => (
            <li key={i}>
              <div className="grid grid-cols-[1fr_auto] items-start gap-4">
                {/* Texto alineado a la izquierda */}
                <p className="font-semibold text-left leading-tight text-sm">
                  {cert.name}
                </p>

                {/* Botón fijo */}
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
              min-w-[130px] max-w-[130px]
              h-[30px]
              flex items-center justify-center
              bg-blue-700 text-white text-sm
              rounded hover:bg-secondary transition
              text-center whitespace-nowrap
            "
                >
                  Ver certificado
                </a>
              </div>
            </li>
          ))}
        </ul>
      ),
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  const prev = () => setIndex((prev) => (prev > 0 ? prev - 1 : prev));

  return (
    <section id="resume" className="py-12 bg-light-gray">
      <div className="container mx-auto px-4">
        <motion.h2 {...titleAnim.motionProps} ref={titleAnim.ref}
          className="text-4xl font-bold text-blue-900 mb-4 text-center"
        >
          Resume
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-8">
          {/* Left Slider Column */}
          <motion.div {...leftAnim.motionProps} ref={leftAnim.ref}
            className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg h-full flex flex-col justify-between relative overflow-hidden"
          >
            <h3 className="text-3xl font-bold text-secondary mb-8 text-center">
              {slides[index].title}
            </h3>

            {/* Animated Content */}
            <div
              className={` 
                min-h-[420px] max-h-[420px] overflow-y-auto px-4 
                scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-primary rounded
              `}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                >
                  {slides[index].content}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              <button
                onClick={prev}
                disabled={index === 0}
                className={`p-3 rounded-full shadow-md transition-all duration-300 ${
                  index === 0
                    ? "opacity-30 cursor-not-allowed"
                    : "bg-blue-700 text-white hover:bg-secondary"
                }`}
              >
                <FaChevronLeft />
              </button>

              <button
                onClick={next}
                disabled={index === slides.length - 1}
                className={`p-3 rounded-full shadow-md transition-all duration-300 ${
                  index === slides.length - 1
                    ? "opacity-30 cursor-not-allowed"
                    : "bg-blue-700 text-white hover:bg-secondary"
                }`}
              >
                <FaChevronRight />
              </button>
            </div>
          </motion.div>
          {/* Right Fixed Column */}
          <motion.div {...rightAnim.motionProps} ref={rightAnim.ref}
            className="w-full md:w-1/2 text-center flex flex-col 
          items-center justify-center 
          bg-white p-6 rounded-lg shadow-lg min-h-[600px] h-full"
          >
            <img
              src={AboutImage}
              alt="Oscar Casallas"
              className="rounded-full object-cover w-48 h-48 mx-auto mb-6 border-4 border-blue-900"
            />

            <p className="text-xl font-medium">Oscar Casallas</p>
            <p className="text-lg text-secondary">Software Developer</p>

            <a
              href="mailto:oscarcasallas2004@gmail.com"
              className="text-lg text-blue-700 mt-4 block"
            >
              oscarcasallas2004@gmail.com
            </a>

            <div className="flex justify-center space-x-6 mt-6">
              <a
                href="https://www.linkedin.com/in/oscar--casallas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl text-[#0077B5] hover:text-secondary" />
              </a>

              <a
                href="https://github.com/OscarCasallas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl text-[#333] hover:text-red-600" />
              </a>

              <a
                href="https://www.instagram.com/oscar__casallas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl text-[#E4405F] hover:text-secondary" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

import React, { useState, useEffect } from "react";
import AboutImage from "../assets/images/dp-bg-reg.jpg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Resume = () => {
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
        <ul className="list-disc pl-5 space-y-3">
          <li>
            <p className="font-semibold">Full Stack Empresarial - Spring Boot & Angular</p>
            <p className="text-sm">2025</p>
          </li>
          <li>
            <p className="font-semibold">AWS Academy Cloud Architecting</p>
            <p className="text-sm">2025</p>
          </li>
          <li>
            <p className="font-semibold">Google Cybersecurity Certificate</p>
            <p className="text-sm">2025</p>
          </li>
          <li>
            <p className="font-semibold">Google Data Analytics</p>
            <p className="text-sm">2025</p>
          </li>
          <li>
            <p className="font-semibold">Google AI Essentials</p>
            <p className="text-sm">2025</p>
          </li>
          <li>
            <p className="font-semibold">Google Prompting Essentials</p>
            <p className="text-sm">2025</p>
          </li>
          <li>
            <p className="font-semibold">Unity Essentials Pathway</p>
            <p className="text-sm">2024</p>
          </li>
          <li>
            <p className="font-semibold">AWS Academy Cloud Foundations</p>
            <p className="text-sm">2024</p>
          </li>
          <li>
            <p className="font-semibold">Innovation & Entrepreneurship - Coursera</p>
            <p className="text-sm">2022</p>
          </li>
          <li>
            <p className="font-semibold">MinTIC Programming Foundations</p>
            <p className="text-sm">2021</p>
          </li>
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
        <h2 className="text-4xl font-bold text-blue-900 mb-4 text-center">
          Resume
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-8">
          {/* Left Slider Column */}
          <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg h-full flex flex-col justify-between relative overflow-hidden">
            <h3 className="text-3xl font-bold text-secondary mb-8 text-center">
              {slides[index].title}
            </h3>

            {/* Animated Content */}
            <div
              className={`
                min-h-[420px] max-h-[420px] overflow-y-auto px-4 
                scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-primary rounded
                flex 
                ${
                  index === 0
                    ? "items-center justify-center text-center" // Sección 1 centrada vertical + horizontal
                    : index === 1
                    ? "items-center justify-center text-center" // Sección 2 igual que antes
                    : "items-center justify-center text-center" // Sección 3 centrada horizontal, NO vertical
                }
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
          </div>
          {/* Right Fixed Column */}
          <div
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

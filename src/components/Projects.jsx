// ==============================
// ORIGINAL PROJECTS COMPONENT (COMMENTED OUT)
// ==============================
/*
import React, { useState, useEffect } from "react";
import getImgUrl from "../utils/getImgUrl";

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => {
        setProjectsData(data);
        setFilteredProjects(data);
      })
      .catch((error) => console.error("Error fetching projects data:", error));
  }, []);

  const filterProjects = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter((p) => p.category === category));
    }
  };

  return (
    <section id="projects" className="py-16 bg-lightgray">
      ...
    </section>
  );
};

export default Projects;
*/

// ============================================================
// NEW CUSTOMIZED PROJECTS SECTION FOR OSCAR D. CASALLAS
// ============================================================
import React, { useState, useEffect, useRef } from "react";
import getImgUrl from "../utils/getImgUrl";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const projects = [
  {
    name: "AI Agent — Tennis Match Analysis",
    repo: "https://github.com/OscarCasallas/Tenniis_analysis_IA",
    description:
      "Intelligent agent that analyzes tennis match videos. Detects players, ball, and court metrics using YOLO + OpenCV + PyTorch.",
    tech: ["Python", "YOLO", "OpenCV", "PyTorch"],
    image: "tennis.jpg",
  },
  {
    name: "Clinic CRM — Personal API Project",
    repo: "https://github.com/OscarCasallas/CLINIC_CRM",
    description:
      "REST API for patient management in a medical clinic. Built with Express, MongoDB Atlas and Mongoose.",
    tech: ["Node.js", "Express", "MongoDB", "Mongoose"],
    image: "clinic.png",
  },
  {
    name: "Fuga del Circo Maldito",
    repo: "https://github.com/OscarCasallas/Fuga-del-Circo-Maldito",
    description:
      "First-person horror game developed in Unity. Escape a cursed circus solving puzzles.",
    tech: ["Unity", "C#"],
    image: "circo.avif",
  },
  {
    name: "Zoo Animals — Java MVC Project",
    repo: "https://github.com/OscarCasallas/Zoo_Animals",
    description:
      "Educational Java MVC application implementing SOLID principles and clean architecture.",
    tech: ["Java 17+", "MVC", "SOLID"],
    image: "zoo.webp",
  },
  {
    name: "ICFES Analytics — BI & ML Project",
    repo: "https://github.com/Andres-Nieto/Proyecto-Inteligencia-de-Negocios",
    description:
      "BI system for clustering, prediction and analysis using ICFES Saber datasets.",
    tech: ["Python", "FastAPI", "Scikit-learn", "Plotly"],
    image: "negocios.jpg",
  },
];

const Projects = () => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      next();
    }, 5000); // 5 segundos
  };

  useEffect(() => {
    resetTimer();
    return () => clearTimeout(timerRef.current);
  }, [index]);

  const next = () =>
    setIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  const prev = () =>
    setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  const variants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <section id="projects" className="py-16 bg-lightgray">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900 tracking-wide">
          My Projects
        </h2>

        {/* Carousel Container */}
        <div
          className="relative flex items-center justify-center"
          style={{ minHeight: "520px" }}
        >
          {/* LEFT BUTTON */}
          <button
            onClick={() => {
              prev();
              resetTimer();
            }}
            className="absolute left-[2%] top-1/2 -translate-y-1/2 bg-blue-900 text-white p-3 rounded-full shadow-lg hover:bg-secondary transition-all"
          >
            <FaChevronLeft />
          </button>

          {/* CARD ANIMATED */}
          <div className="w-full md:w-3/4 lg:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45 }}
                className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200"
              >
                {/* Project Image */}
                <img
                  src={getImgUrl(projects[index].image)}
                  alt={projects[index].name}
                  className="w-full h-64 object-cover"
                />

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-3xl font-semibold text-blue-900 mb-3 text-center">
                    {projects[index].name}
                  </h3>

                  <p className="text-secondary text-base leading-relaxed mb-5 text-center">
                    {projects[index].description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex justify-center flex-wrap gap-2 mb-4">
                    {projects[index].tech.map((t, i) => (
                      <span
                        key={i}
                        className="bg-primary/10 text-blue-700 text-xs px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="text-center mt-4">
                    <a
                      href={projects[index].repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-900 font-bold hover:underline"
                    >
                      View Repository →
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT BUTTON */}
          <button
            onClick={() => {
              next();
              resetTimer();
            }}
            className="absolute right-[2%] top-1/2 -translate-y-1/2 bg-blue-900 text-white p-3 rounded-full shadow-lg hover:bg-secondary transition-all"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

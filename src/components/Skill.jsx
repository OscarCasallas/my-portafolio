import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import firebaseImage from "../assets/images/firebase.png";
import figmaImage from "../assets/images/figma.webp";
import mongodbImage from "../assets/images/mongodb.png";
import awsImage from "../assets/images/aws.png";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 className="w-20 h-20 mx-auto mb-4 text-orange-600" />,
    desc: "Building structured web content",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="w-20 h-20 mx-auto mb-4 text-blue-600" />,
    desc: "Modern UI styling",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="w-20 h-20 mx-auto mb-4 text-yellow-500" />,
    desc: "Dynamic and interactive apps",
  },
  {
    name: "React",
    icon: <FaReact className="w-20 h-20 mx-auto mb-4 text-blue-400" />,
    desc: "UI components & state mgmt",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="w-20 h-20 mx-auto mb-4 text-green-600" />,
    desc: "Server-side applications",
  },
  {
    name: "MongoDB",
    icon: <img src={mongodbImage} className="w-20 h-20 mx-auto mb-4" />,
    desc: "NoSQL DB systems",
  },
  {
    name: "Firebase",
    icon: <img src={firebaseImage} className="w-20 h-20 mx-auto mb-4" />,
    desc: "Backend-as-a-Service",
  },
  {
    name: "Git",
    icon: <FaGitAlt className="w-20 h-20 mx-auto mb-4 text-orange-500" />,
    desc: "Version control",
  },
  {
    name: "Figma",
    icon: <img src={figmaImage} className="w-20 h-20 mx-auto mb-4" />,
    desc: "UI/UX design",
  },
  {
    name: "Python",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        className="w-20 h-20 mx-auto mb-4"
      />
    ),
    desc: "Automation & scripting",
  },
  {
    name: "PHP",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
        className="w-20 h-20 mx-auto mb-4"
      />
    ),
    desc: "Backend systems",
  },
  {
    name: "MySQL",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
        className="w-20 h-20 mx-auto mb-4"
      />
    ),
    desc: "Relational DB mgmt",
  },
  {
    name: "GitHub",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        className="w-20 h-20 mx-auto mb-4"
      />
    ),
    desc: "Code hosting",
  },
  {
    name: "Postman",
    icon: (
      <img
        src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
        className="w-20 h-20 mx-auto mb-4"
      />
    ),
    desc: "API testing",
  },
  {
    name: "Android Studio",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"
        className="w-20 h-20 mx-auto mb-4"
      />
    ),
    desc: "Mobile development",
  },
  {
    name: "Unity",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
        className="w-20 h-20 mx-auto mb-4"
      />
    ),
    desc: "Game development",
  },
  {
    name: "AWS",
    icon: <img src={awsImage} className="w-20 h-20 mx-auto mb-4" />,
    desc: "Cloud fundamentals",
  },
  {
    name: "English (B1)",
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/512/197/197374.png"
        className="w-20 h-20 mx-auto mb-4 rounded-full"
      />
    ),
    desc: "Technical communication",
  },
];

// split into two exact groups of 9 skills each (if you want exactly 9 por row)
const topRow = skills.slice(0, 9);
const bottomRow = skills.slice(9, 18);

const Skill = () => {
  return (
    <section id="skills" className="py-20 overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-14 text-blue-900">
        My Skills
      </h2>

      {/* Carrusel 1 (izquierda -> derecha visual) */}
      <div className="relative w-full overflow-hidden mb-10">
        <div className="flex gap-10 whitespace-nowrap track track-left">
          {/* duplicamos el array para crear el loop perfecto */}
          {[...topRow, ...topRow].map((skill, index) => (
            <div
              key={index}
              className="skill-card min-w-[220px] bg-white p-6 rounded-xl shadow-md transition-all duration-300 text-center"
            >
              {skill.icon}
              <h3 className="text-lg font-semibold mt-2">{skill.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Carrusel 2 (derecha -> izquierda visual) */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-10 whitespace-nowrap track track-right">
          {[...bottomRow, ...bottomRow].map((skill, index) => (
            <div
              key={index}
              className="skill-card min-w-[220px] bg-white p-6 rounded-xl shadow-md transition-all duration-300 text-center"
            >
              {skill.icon}
              <h3 className="text-lg font-semibold mt-2">{skill.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CSS in-component: puedes mover esto a index.css si prefieres */}
      <style>{`
        /* VELOCIDADES: ajusta aquí (más pequeño = más rápido) */
        :root {
          --speed-top: 10s;   /* tiempo para el primer carrusel */
          --speed-bottom: 12s;/* tiempo para el segundo carrusel */
        }

        /* El contenedor track (es el ancho duplicado). Importante: translate -50% para loop perfecto */
        .track {
          display: inline-flex;
          width: max-content;
        }

        /* Aplicar animación */
        .track-left {
          animation: scroll-left var(--speed-top) linear infinite;
        }
        .track-right {
          animation: scroll-right var(--speed-bottom) linear infinite;
        }

        /* keyframes usan -50% porque duplicamos los items. Esto evita saltos. */
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        /* Opcional: pausa al hover (quita si quieres que nunca pare) */
        .track-left:hover,
        .track-right:hover {
          animation-play-state: paused;
        }

        /* Mejor soporte móvil: reduce velocidad y gap */
        @media (max-width: 768px) {
          :root {
            --speed-top: 8s;
            --speed-bottom: 9s;
          }
          .track > div { min-width: 180px; }
        }
        /* EFECTO DE RESALTADO AL HOVER */
        .skill-card {
          transform: scale(1);
        }

        .skill-card:hover {
          transform: scale(1.15);
          z-index: 10;
          box-shadow: 0 0 25px rgba(15, 30, 90, 0.45);
        }

        /* Aumentar ligeramente tamaño del icono */
        .skill-card:hover img,
        .skill-card:hover svg {
          transform: scale(1.15);
          transition: transform 0.3s ease;
        }

      `}</style>
    </section>
  );
};

export default Skill;

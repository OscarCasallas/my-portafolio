import { useRef } from "react";
import { useInView, motion } from "framer-motion";

export const useScrollAnimation = (animation) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
  });

  return {
    ref,
    motionProps: {
      initial: "hidden",
      animate: isInView ? "visible" : "hidden",
      variants: animation,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };
};

// Animaciones listas para usar 👇
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 2.5, ease: "easeOut" } }
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 2.5, ease: "easeOut" } }
};

export const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 2.5, ease: "easeOut" } }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2.5, ease: "easeOut" } }
};

// Bounce entrance
export const bounceUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.7, duration: 2.5 } }
};

// Zoom entrance
export const zoomIn = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.5, duration: 2.5 } }
};

// Back entrance (slide from left with overshoot)
export const backInLeft = {
  hidden: { opacity: 0, x: -80, scale: 0.8 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", bounce: 0.4, duration: 2.5 } }
};

// Back entrance (slide from right with overshoot)
export const backInRight = {
  hidden: { opacity: 0, x: 80, scale: 0.8 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", bounce: 0.4, duration: 2.5 } }
};

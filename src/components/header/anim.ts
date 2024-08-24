import { Variants } from "framer-motion";

export const sizeVariants: Variants = {
  closed: {
    width: 100,
    height: 40,
    top: 0,
    right: 0,
    transition: {
      delay: 0.5,
      ease: [0.76, 0, 0.24, 1],
      duration: 0.75,
    },
  },
  open: {
    width: 450,
    height: 650,
    top: -25,
    right: -25,
    transition: {
      ease: [0.76, 0, 0.24, 1],
      duration: 0.75,
    },
  },
};

export const menuVariants: Variants = {
  initial: {
    opacity: 0,
    rotateX: 90,
    skewX: -45,
    translateY: "100%",
    translateX: "-4vw",
  },
  animate: (i: number) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    skewX: 0,
    transition: {
      duration: 0.65,
      delay: 0.35 + i * 0.07,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.35 },
    },
  }),
  exit: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};

export const slideInVariants: Variants = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5 + i * 0.1,
      duration: 0.75,
      ease: [0.76, 0, 0.24, 1],
    },
  }),
  exit: {
    y: 20,
    opacity: 0,
  },
};

import { Variants } from "framer-motion";

export const slideIn: Variants = {
  hidden: {
    opacity: 0,
    x: "-50px",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.5, duration: 1 },
  },
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
    transition: { when: "afterChildren" },
  },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.5, duration: 1 },
  },
};

export const contact: Variants = {
  hidden: (i: number) =>
    i == 2
      ? { opacity: 0, translateX: "-50px", translateY: "-35px" }
      : { opacity: 0, translateX: "-50px", translateY: "35px" },
  rest: (i: number) =>
    i == 2
      ? {
          translateY: "-35px",
          opacity: 1,
          translateX: 0,
        }
      : {
          translateY: "35px",
          opacity: 1,
          translateX: 0,
        },
  hover: {
    translateX: 0,
    translateY: "0px",
    transition: {
      duration: 0.4,
    },
  },
};

export const hoverBackdrop: Variants = {
  hidden: { height: "0%", opacity: 0 },
  rest: {
    height: "0%",
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  hover: {
    opacity: 1,
    height: "100%",
    transition: {
      duration: 0.4,
    },
  },
};

export const text: Variants = {
  hidden: { opacity: 0 },
  rest: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};

import { Variants } from "framer-motion";

export const layoutVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const dataTableRowVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
    rotateY: 50,
    transformOrigin: "0% 100%",
  },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transformOrigin: "0% 100%",
    transition: {
      delay: 0,
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export const filtersBarVariants: Variants = {
  hidden: {
    x: -100,
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: "anticipate",
    },
  },
};

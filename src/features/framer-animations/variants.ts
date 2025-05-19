import { easeIn, Variants } from "framer-motion";

export const layoutVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.35,
      ease: "easeInOut",
      filter: {
        duration: 1,
      },
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

export const NavBarVariants: Variants = {
  hidden: {
    opacity: 0.6,
    filter: "blur(7px)",
  },
  visible: {
    filter: "blur(0px)",
    opacity: 1,
    scale: 1,
    transition: {
      type: "easeIn",
      duration: 0.2,
    },
  },
  out: {
    opacity: 0.6,
    filter: "blur(7px)",
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

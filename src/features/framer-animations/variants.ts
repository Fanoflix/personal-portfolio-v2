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
    x: -40,
    rotateY: 50,
    transformOrigin: "0% 50%",
  },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transformOrigin: "0% 50%",
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

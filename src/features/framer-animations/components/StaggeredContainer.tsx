import { motion, Variants } from "framer-motion";
import React, { PropsWithChildren } from "react";

export const StaggeredContainer = ({
  children,
  stagger = 0.11, // time between staggered animations
  delayChildren = 0.15, // initial delay before children animate
  containerClassName,
  childClassName,
}: {
  stagger?: number;
  delayChildren?: number;
  containerClassName?: string;
  childClassName?: string;
} & PropsWithChildren) => {
  // Parent container variants
  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delayChildren,
      },
    },
  };

  // Child animation variants
  const childVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={containerClassName}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {React.Children.map(children, (child) => (
        <motion.div className={childClassName} variants={childVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

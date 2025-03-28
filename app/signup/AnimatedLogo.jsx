"use client";

import { motion } from "framer-motion";

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -90 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

export default function AnimatedLogo() {
  return (
    <motion.div
      className="flex space-x-1 items-center justify-center md:justify-start"
      variants={logoVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <motion.span className="text-red-500 text-4xl sm:text-5xl md:text-6xl font-extrabold">X</motion.span>
      <motion.span className="text-blue-500 text-4xl sm:text-5xl md:text-6xl font-extrabold">W</motion.span>
      <motion.span className="text-green-500 text-4xl sm:text-5xl md:text-6xl font-extrabold">E</motion.span>
      <motion.span className="text-yellow-500 text-4xl sm:text-5xl md:text-6xl font-extrabold">B</motion.span>
      <motion.span className="text-indigo-500 text-4xl sm:text-5xl md:text-6xl font-extrabold">H</motion.span>
      <motion.span className="text-purple-500 text-4xl sm:text-5xl md:text-6xl font-extrabold">U</motion.span>
      <motion.span className="text-pink-500 text-4xl sm:text-5xl md:text-6xl font-extrabold">B</motion.span>
      <motion.span className="text-orange-500 text-4xl sm:text-5xl md:text-6xl font-extrabold">™</motion.span>
    </motion.div>
  );
}

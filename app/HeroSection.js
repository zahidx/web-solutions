"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="h-screen flex items-center justify-center text-center px-6 bg-white dark:bg-gradient-to-r from-[#0E1628] to-[#380643] text-black dark:text-white">
      <div className="max-w-4xl">
        <motion.h1
          className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight font-sans"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 1.2 }}
        >
          Build Your Dream Website with{" "}
          <span className="text-[#E69A10]">XWebSolution</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-8 leading-relaxed opacity-80"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.3, duration: 1.2 }}
        >
          We specialize in crafting stunning, high-performance websites that not only attract but convert visitors into loyal clients.
        </motion.p>
        <motion.a
          href="#services"
          whileHover={{
            scale: 1.03,  // Slightly scale up on hover for a subtle effect
            transition: { duration: 0.2, ease: "easeInOut" },
          }}
          className="inline-flex items-center gap-1 px-2 py-2 bg-gradient-to-r from-[#FF6A00] to-[#FF6A00] text-black text-2xl font-semibold rounded-md shadow-lg transform transition-all duration-300 ease-in-out"
        >
          Get Started <ArrowRight size={22} />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;

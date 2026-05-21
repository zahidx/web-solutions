"use client";

import { motion } from "framer-motion";
import NextLevelTabs from "../compo/NextLevelTabs";
import Footer from "../compo/Footer";
import CallToActionSection from "../CallToActionSection";

export default function ShowcasePage() {
  return (
    <div className="min-h-screen pt-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      {/* Header Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-gradient-to-b from-orange-400/10 to-transparent blur-3xl rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
          >
            Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Showcase</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Experience next-level UI interactions designed with fluid animations and premium aesthetics.
          </motion.p>
        </div>
      </section>

      {/* Tabs Component Section */}
      <section className="py-12 relative z-10">
        <NextLevelTabs />
      </section>
      
      {/* We can reuse the CallToAction here to keep it cohesive */}
      <div className="mt-12">
        <CallToActionSection />
      </div>

      <Footer />
    </div>
  );
}

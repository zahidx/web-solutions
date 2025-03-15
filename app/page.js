"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, CheckCircle, ArrowRight } from "lucide-react";
import HeroSection from "./HeroSection";
import Footer from "./compo/Footer";
import ServicesSection from "./ServicesSection";
import TestimonialsSection from "./TestimonialsSection"; 
import CallToActionSection from "./CallToActionSection"; 
import RecentProjects from "./RecentProjects";
const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Common animation variant
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="transition-colors duration-500 dark:bg-gray-900 dark:text-gray-100 bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <CallToActionSection />
      <RecentProjects />
      <Footer />
    </div>
  );
};

export default HomePage;

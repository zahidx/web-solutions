"use client";
import { useState, useEffect } from "react";
import HeroSection from "./HeroSection";
import Footer from "./compo/Footer";
import ServicesSection from "./ServicesSection";
import TestimonialsSection from "./TestimonialsSection"; 
import CallToActionSection from "./CallToActionSection"; 
import RecentProjects from "./RecentProjects";

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Load dark mode preference from localStorage using "theme" key
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        setDarkMode(storedTheme === "dark");
      } else {
        setDarkMode(false);
      }
      setMounted(true);
    }
  }, []);

  // Update dark mode class and save preference to localStorage
  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle("dark", darkMode);
      localStorage.setItem("theme", darkMode ? "dark" : "light");
    }
  }, [darkMode, mounted]);

  if (!mounted) return null; // Wait until component is mounted

  return (
    <div className="transition-colors duration-500 dark:bg-gray-900 dark:text-gray-100 bg-gray-50 text-gray-900">
      <button 
        onClick={() => setDarkMode(!darkMode)} 
        className="p-2 bg-gray-200 dark:bg-gray-800 rounded"
      >
        Toggle Dark Mode
      </button>
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

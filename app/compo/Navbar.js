"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(null); // Start with null to avoid SSR mismatch
  const [portfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  // Fetch saved theme from local storage and apply it on first render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setDarkMode(savedTheme === "dark");
  }, []);

  // Apply the dark mode to the document based on state
  useEffect(() => {
    if (darkMode !== null) { // Ensure we only apply the effect once darkMode is set
      if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  }, [darkMode]);

  // Track scroll to adjust navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePortfolioDropdownToggle = () => {
    setPortfolioDropdownOpen(!portfolioDropdownOpen);
    setMoreDropdownOpen(false); // Close the "More" dropdown if it's open
  };

  const handleMoreDropdownToggle = () => {
    setMoreDropdownOpen(!moreDropdownOpen);
    setPortfolioDropdownOpen(false); // Close the "Portfolio" dropdown if it's open
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all backdrop-blur-3xl ${
        isScrolled ? "border-b-2 border-orange-500" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-wider cursor-pointer transition-all hover:text-orange-400"
        >
          X
        </motion.div>

        {/* Desktop Navigation */}
        <DesktopNav
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          portfolioDropdownOpen={portfolioDropdownOpen}
          handlePortfolioDropdownToggle={handlePortfolioDropdownToggle}
          moreDropdownOpen={moreDropdownOpen}
          handleMoreDropdownToggle={handleMoreDropdownToggle}
        />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-900 dark:text-gray-100 transition-all duration-300"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <MobileNav darkMode={darkMode} setDarkMode={setDarkMode} setMenuOpen={setMenuOpen} />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { Moon, Sun, Menu, X } from "lucide-react";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(null);
  const [portfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setDarkMode(savedTheme === "dark");
  }, []);

  useEffect(() => {
    if (darkMode !== null) {
      if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all backdrop-blur-3xl ${
        isScrolled ? "border-b-2 border-orange-500" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 flex justify-between items-center">
        {/* Logo + Text */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="cursor-pointer flex items-center gap-2"
        >
          <Image src="/logo.png" alt="Logo" width={50} height={40} priority />
          <span className="text-3xl font-semibold mt-2 -ml-3 text-gray-900 dark:text-white font-premium">
    xwebHub
  </span>
        </motion.div>

        {/* Desktop Navigation */}
        <DesktopNav
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          portfolioDropdownOpen={portfolioDropdownOpen}
          handlePortfolioDropdownToggle={() => {
            setPortfolioDropdownOpen(!portfolioDropdownOpen);
            setMoreDropdownOpen(false);
          }}
          moreDropdownOpen={moreDropdownOpen}
          handleMoreDropdownToggle={() => {
            setMoreDropdownOpen(!moreDropdownOpen);
            setPortfolioDropdownOpen(false);
          }}
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

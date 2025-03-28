"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import DarkModeToggler from "./DarkModeToggler";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [portfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  
  // Ref for dropdowns
  const dropdownRef = useRef(null);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setPortfolioDropdownOpen(false);
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all backdrop-blur-3xl ${
        isScrolled ? "border-b-2 border-orange-500" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 flex justify-between items-center">
        {/* Logo + Text Link */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="cursor-pointer flex items-center gap-2"
        >
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={50} height={40} priority />
            <span className="text-3xl font-semibold mt-2 -ml-3 text-gray-900 dark:text-white font-premium">
              webHub
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div ref={dropdownRef}>
          <DesktopNav
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
        </div>

        {/* Dark Mode Toggler */}
        <DarkModeToggler />

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
        {menuOpen && <MobileNav setMenuOpen={setMenuOpen} />}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

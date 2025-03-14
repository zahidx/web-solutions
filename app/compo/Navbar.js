"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Moon,
  Sun,
  Menu,
  X,
  ChevronDown,
  Info,
  Edit,
  Home,
  Briefcase,
  Folder,
  Phone,
  Monitor,
  Image,
  Smartphone,
  MoreHorizontal,
} from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });
  const [portfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

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
        <div className="hidden md:flex space-x-8 items-center text-lg">
          <a
            className="hover:text-orange-400 transition-all duration-300 text-gray-900 dark:text-gray-100 flex items-center"
            href="/"
          >
            <Home size={16} className="mr-2 inline" />
            Home
          </a>
          <a
            className="hover:text-orange-400 transition-all duration-300 text-gray-900 dark:text-gray-100 flex items-center"
            href="/services"
          >
            <Briefcase size={16} className="mr-2 inline" />
            Services
          </a>

          {/* Portfolio Dropdown */}
          <div className="relative group">
            <button
              onClick={handlePortfolioDropdownToggle}
              className="flex items-center space-x-1 hover:text-orange-400 transition-all duration-300 text-gray-900 dark:text-gray-100"
            >
              <Folder size={16} className="mr-2 inline" />
              <span>Portfolio</span>
              <ChevronDown size={16} />
            </button>

            <AnimatePresence>
              {portfolioDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 z-10 ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  <a
                    className="block p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-all flex items-center"
                    href="/portfolio1"
                  >
                    <Monitor size={16} className="mr-2 inline" />
                    Web Design
                  </a>
                  <a
                    className="block p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-all flex items-center"
                    href="/portfolio2"
                  >
                    <Image size={16} className="mr-2 inline" />
                    UI/UX Projects
                  </a>
                  <a
                    className="block p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-all flex items-center"
                    href="/portfolio3"
                  >
                    <Smartphone size={16} className="mr-2 inline" />
                    Mobile Apps
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* More Dropdown */}
          <div className="relative group">
            <button
              onClick={handleMoreDropdownToggle}
              className="flex items-center space-x-1 hover:text-orange-400 transition-all duration-300 text-gray-900 dark:text-gray-100"
            >
              <MoreHorizontal size={16} className="mr-2 inline" />
              <span>More</span>
              <ChevronDown size={16} />
            </button>

            <AnimatePresence>
              {moreDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 z-10 ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  <a
                    className="block p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-all flex items-center"
                    href="/blog"
                  >
                    <Edit size={16} className="mr-2 inline" />
                    Blog
                  </a>
                  <a
                    className="block p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-all flex items-center"
                    href="/about"
                  >
                    <Info size={16} className="mr-2 inline" />
                    About Us
                  </a>


                  <a
                    className="block p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-all flex items-center"
                    href="/process"
                  >
                    <Info size={16} className="mr-2 inline" />
                    Process
                  </a>








                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            className="hover:text-orange-400 transition-all duration-300 text-gray-900 dark:text-gray-100 flex items-center"
            href="/contact"
          >
            <Phone size={16} className="mr-2 inline" />
            Contact
          </a>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-3 rounded-full bg-gray-800 dark:bg-white text-white dark:text-black transition-all duration-300 hover:bg-orange-500"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white dark:text-gray-100 transition-all duration-300"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 h-screen w-3/4 bg-gray-900 dark:bg-gray-800 text-white dark:text-gray-100 shadow-xl p-6 flex flex-col space-y-6"
          >
            <a
              className="text-lg hover:text-orange-400 transition-all duration-300 flex items-center"
              href="/"
            >
              <Home size={16} className="mr-2 inline" />
              Home
            </a>
            <a
              className="text-lg hover:text-orange-400 transition-all duration-300 flex items-center"
              href="/services"
            >
              <Briefcase size={16} className="mr-2 inline" />
              Services
            </a>
            <a
              className="text-lg hover:text-orange-400 transition-all duration-300 flex items-center"
              href="/portfolio"
            >
              <Folder size={16} className="mr-2 inline" />
              Portfolio
            </a>
            <a
              className="text-lg hover:text-orange-400 transition-all duration-300 flex items-center"
              href="/contact"
            >
              <Phone size={16} className="mr-2 inline" />
              Contact
            </a>
            <a
              className="text-lg hover:text-orange-400 transition-all duration-300 flex items-center"
              href="/blog"
            >
              <Edit size={16} className="mr-2 inline" />
              Blog
            </a>
            <a
              className="text-lg hover:text-orange-400 transition-all duration-300 flex items-center"
              href="/about"
            >
              <Info size={16} className="mr-2 inline" />
              About Us
            </a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 bg-gray-700 dark:bg-white text-white dark:text-black rounded-lg transition-all duration-300 hover:bg-orange-500"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

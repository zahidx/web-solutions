"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Home,
  Briefcase,
  Folder,
  ChevronDown,
  Monitor,
  Image,
  Smartphone,
  MoreHorizontal,
  Edit,
  Workflow,
  Info,
  Phone,
  LogIn,
} from "lucide-react";
import { useState, useEffect } from "react";

const DesktopNav = ({
  portfolioDropdownOpen,
  handlePortfolioDropdownToggle,
  moreDropdownOpen,
  handleMoreDropdownToggle,
}) => {
  const [navbarBgColor, setNavbarBgColor] = useState("");

  // Dynamically set navbar background color based on content background
  useEffect(() => {
    const contentElement = document.querySelector("main"); // Assuming the content page has a <main> tag
    if (contentElement) {
      const contentBgColor = window.getComputedStyle(contentElement).backgroundColor;
      setNavbarBgColor(contentBgColor); // Update navbar background color dynamically
    }
  }, []);

  return (
    <div
      className="hidden md:flex space-x-8 items-center text-lg mt-3"
      style={{ backgroundColor: navbarBgColor }} // Apply dynamic background color
    >
      <Link
        className="hover:text-orange-400 transition-all duration-300 text-gray-900 dark:text-gray-100 flex items-center"
        href="/"
      >
        <Home size={16} className="mr-2 inline" />
        Home
      </Link>
      <Link
        className="hover:text-orange-400 transition-all duration-300 text-gray-900 dark:text-gray-100 flex items-center"
        href="/services"
      >
        <Briefcase size={16} className="mr-2 inline" />
        Services
      </Link>

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
              className="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 z-10 text-gray-900 dark:text-gray-100"
            >
              <Link
                className="block p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-all flex items-center"
                href="/portfolio1"
              >
                <Monitor size={16} className="mr-2 inline" />
                Web Design
              </Link>
              <Link
                className="block p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-all flex items-center"
                href="/portfolio2"
              >
                <Image size={16} className="mr-2 inline" />
                UI/UX Projects
              </Link>
              <Link
                className="block p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-all flex items-center"
                href="/portfolio3"
              >
                <Smartphone size={16} className="mr-2 inline" />
                Mobile Apps
              </Link>
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
              className="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 z-10 text-gray-900 dark:text-gray-100"
            >
              <Link
                className="block p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-all flex items-center"
                href="/blog"
              >
                <Edit size={16} className="mr-2 inline" />
                Blog
              </Link>

              <Link
                className="block p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-all flex items-center"
                href="/process"
              >
                <Workflow size={16} className="mr-2 inline" />
                Process
              </Link>

              <Link
                className="block p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-all flex items-center"
                href="/about"
              >
                <Info size={16} className="mr-2 inline" />
                About Us
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Link
        className="hover:text-orange-400 transition-all duration-300 text-gray-900 dark:text-gray-100 flex items-center"
        href="/contact"
      >
        <Phone size={16} className="mr-2 inline" />
        Contact
      </Link>

      {/* Login Button */}
      <Link
        className="ml-4 px-4 py-2 border border-orange-400 text-orange-400 rounded-lg hover:bg-orange-400 hover:text-white transition-all duration-300 flex items-center"
        href="/login"
      >
        <LogIn size={16} className="mr-2 inline" />
        Login
      </Link>
    </div>
  );
};

export default DesktopNav;

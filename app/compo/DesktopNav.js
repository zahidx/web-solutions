"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  Briefcase,
  Folder,
  ChevronDown,
  Monitor,
  Smartphone,
  MoreHorizontal,
  Edit,
  Layout,
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
  const [isClient, setIsClient] = useState(false); // Track if we are on the client side

  // Dynamically set navbar background color based on content background
  useEffect(() => {
    setIsClient(true); // Update state when the component is mounted on the client side
  }, []);

  useEffect(() => {
    const contentElement = document.querySelector("main"); // Assuming the content page has a <main> tag
    if (contentElement) {
      const contentBgColor = window.getComputedStyle(contentElement).backgroundColor;
      setNavbarBgColor(contentBgColor); // Update navbar background color dynamically
    }
  }, []);

  // Close dropdowns when the route changes (only client-side)
  useEffect(() => {
    if (!isClient) return; // Only run this effect on the client side

    const handleRouteChange = () => {
      if (portfolioDropdownOpen) {
        handlePortfolioDropdownToggle();
      }
      if (moreDropdownOpen) {
        handleMoreDropdownToggle();
      }
    };

    // Use the Next.js router
    const router = require('next/router');
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [isClient, portfolioDropdownOpen, moreDropdownOpen, handlePortfolioDropdownToggle, handleMoreDropdownToggle]);

  return (
    <div
      className="hidden md:flex space-x-8 items-center text-lg mt-3"
      style={{ backgroundColor: navbarBgColor }} // Apply dynamic background color
    >
      <Link
        className="hover:text-orange-400 transition-all duration-300 text-gray-100 dark:text-gray-100 flex items-center"
        href="/"
      >
        <Home size={16} className="mr-2 inline" />
        Home
      </Link>
      <Link
        className="hover:text-orange-400 transition-all duration-300 text-gray-100 dark:text-gray-100 flex items-center"
        href="/services"
      >
        <Briefcase size={16} className="mr-2 inline" />
        Services
      </Link>

      {/* Portfolio Dropdown */}
      <div className="relative group">
        <button
          onClick={handlePortfolioDropdownToggle}
          className="flex items-center space-x-1 hover:text-orange-400 transition-all duration-300 text-gray-100 dark:text-gray-100"
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
              className="absolute left-0 mt-2 w-64 bg-[#1C3D3D] dark:bg-gray-800 shadow-lg rounded-lg p-4 z-10 text-gray-100 dark:text-gray-100"
            >
              <Link
                onClick={handlePortfolioDropdownToggle}
                className="p-2 hover:bg-gray-900 dark:hover:bg-gray-700 rounded transition-all flex items-center"
                href="/portfolio1"
              >
                <Monitor size={16} className="mr-2 inline" />
                Web Design
              </Link>
              <Link
                onClick={handlePortfolioDropdownToggle}
                className="p-2 hover:bg-gray-900 dark:hover:bg-gray-700 rounded transition-all flex items-center"
                href="/portfolio2"
              >
                <Layout size={16} className="mr-2 inline" />
                UI/UX Projects
              </Link>
              <Link
                onClick={handlePortfolioDropdownToggle}
                className="p-2 hover:bg-gray-900 dark:hover:bg-gray-700 rounded transition-all flex items-center"
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
          className="flex items-center space-x-1 hover:text-orange-400 transition-all duration-300 text-gray-100 dark:text-gray-100"
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
              className="absolute left-0 mt-2 w-64 bg-[#1C3D3D] dark:bg-gray-800 shadow-lg rounded-lg p-4 z-10 text-gray-100 dark:text-gray-100"
            >
              <Link
                onClick={handleMoreDropdownToggle}
                className="p-2 hover:bg-gray-900 dark:hover:bg-gray-700 rounded transition-all flex items-center"
                href="/blog"
              >
                <Edit size={16} className="mr-2 inline" />
                Blog
              </Link>
              <Link
                onClick={handleMoreDropdownToggle}
                className="p-2 hover:bg-gray-900 dark:hover:bg-gray-700 rounded transition-all flex items-center"
                href="/process"
              >
                <Workflow size={16} className="mr-2 inline" />
                Process
              </Link>
              <Link
                onClick={handleMoreDropdownToggle}
                className="p-2 hover:bg-gray-900 dark:hover:bg-gray-700 rounded transition-all flex items-center"
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
        className="hover:text-orange-400 transition-all duration-300 text-gray-100 dark:text-gray-100 flex items-center"
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

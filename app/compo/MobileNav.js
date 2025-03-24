"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Home, Briefcase, Folder, Phone, Edit, Info, X, Sun, Moon } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/services", label: "Services", icon: Briefcase },
  { href: "/portfolio", label: "Portfolio", icon: Folder },
  { href: "/contact", label: "Contact", icon: Phone },
  { href: "/blog", label: "Blog", icon: Edit },
  { href: "/about", label: "About Us", icon: Info },
];

// Define different colors for icons in dark mode
const darkIconColors = [
  "text-blue-400",   // Home
  "text-green-400",  // Services
  "text-purple-400", // Portfolio
  "text-red-400",    // Contact
  "text-yellow-400", // Blog
  "text-teal-400",   // About Us
];

const MobileNav = ({ setMenuOpen }) => {
  const [darkMode, setDarkMode] = useState(false);
  const menuRef = useRef(null);

  // Load theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [setMenuOpen]);

  return (
    <motion.div
      ref={menuRef}
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
      className="fixed top-0 right-0 h-screen w-4/5 max-w-sm bg-white dark:bg-gray-900 
                 text-black dark:text-white shadow-2xl border border-gray-300 dark:border-gray-700 
                 backdrop-blur-lg bg-opacity-90 dark:bg-opacity-80 
                 p-6 flex flex-col space-y-6 rounded-l-2xl"
    >
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-4 right-4 text-black dark:text-white hover:text-orange-400 transition-all"
        aria-label="Close Menu"
      >
        <X size={32} />
      </button>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-4 mt-12">
        {navItems.map(({ href, label, icon: Icon }, index) => (
          <motion.a
            key={href}
            href={href}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05 * index, duration: 0.3 }}
            className="text-lg flex items-center gap-4 p-3 rounded-lg transition-all 
                       hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-orange-400 border border-transparent 
                       dark:border-gray-700 shadow-md dark:shadow-lg"
          >
            <Icon size={22} className={darkMode ? darkIconColors[index] : "text-current"} />
            {label}
          </motion.a>
        ))}
      </nav>

      {/* Dark Mode Toggle */}
      <motion.button
  onClick={toggleDarkMode}
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.3 }}
  className="mt-auto sm:mt-6 flex items-center justify-center gap-3 p-3 w-full 
             bg-gray-200 dark:bg-gray-700 text-black dark:text-white 
             rounded-lg transition-all border border-gray-300 dark:border-gray-700 
             shadow-lg hover:bg-orange-500 hover:text-white"
>
  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
  {darkMode ? "Light Mode" : "Dark Mode"}
</motion.button>

    </motion.div>
  );
};

export default MobileNav;

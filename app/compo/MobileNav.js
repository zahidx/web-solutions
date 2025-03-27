"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Home, Briefcase, Folder, Phone, Edit, Info, X, LogIn } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/services", label: "Services", icon: Briefcase },
  { href: "/portfolio", label: "Portfolio", icon: Folder },
  { href: "/contact", label: "Contact", icon: Phone },
  { href: "/blog", label: "Blog", icon: Edit },
  { href: "/about", label: "About Us", icon: Info },
  { href: "/login", label: "Login", icon: LogIn }, // Updated to use LogIn icon
];

// Define different colors for icons in dark mode
const darkIconColors = [
  "text-blue-400",   // Home
  "text-green-400",  // Services
  "text-purple-400", // Portfolio
  "text-red-400",    // Contact
  "text-yellow-400", // Blog
  "text-teal-400",   // About Us
  "text-orange-400", // Login (New Color)
];

const MobileNav = ({ setMenuOpen }) => {
  const menuRef = useRef(null);

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
            <Icon
              size={22}
              className={`${
                darkIconColors[index] // Use the index to select the color
              } text-current`}
            />
            {label}
          </motion.a>
        ))}
      </nav>
    </motion.div>
  );
};

export default MobileNav;

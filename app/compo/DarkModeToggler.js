"use client";
import { useState, useEffect, useLayoutEffect } from "react";
import { Moon, Sun } from "lucide-react";

const DarkModeToggler = () => {
  const [darkMode, setDarkMode] = useState(null);

  // Check dark mode preference on initial page load
  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Update localStorage and apply the theme whenever darkMode state changes
  useEffect(() => {
    if (darkMode !== null) {
      localStorage.setItem("theme", darkMode ? "dark" : "light");
      document.documentElement.classList.toggle("dark", darkMode);
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="text-gray-900 dark:text-gray-100 transition-all duration-300"
    >
      {darkMode ? <Sun size={30} /> : <Moon size={30} />}
    </button>
  );
};

export default DarkModeToggler;

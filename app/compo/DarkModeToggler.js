"use client";
import { useState, useEffect, useLayoutEffect } from "react";
import { Moon, Sun } from "lucide-react";

const DarkModeToggler = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Check dark mode preference on initial page load
  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const isDark = savedTheme ? savedTheme === "dark" : prefersDark;
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  // Update localStorage and apply the theme whenever darkMode state changes
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", darkMode);
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

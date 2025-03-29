"use client";

import { Toaster } from "react-hot-toast";

const CustomToaster = () => {
  // Function to get dynamic style based on theme
  const getThemeStyle = (isDarkMode) => ({
    backgroundColor: isDarkMode ? "#1F2937" : "#FFFFFF",
    color: isDarkMode ? "#FFFFFF" : "#000000",
  });

  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        style: {
          marginTop: "5rem",
        },
        success: {
          style: getThemeStyle(isDarkMode),
        },
        error: {
          style: {
            backgroundColor: isDarkMode ? "#7F1D1D" : "#F87171",
            color: "#FFFFFF",
          },
        },
      }}
    />
  );
};

export default CustomToaster;

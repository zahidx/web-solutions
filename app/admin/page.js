"use client";
import { useEffect, useState } from 'react';
import { getMessages, deleteMessage } from '../Api/firebase'; // Import the deleteMessage function

export default function AdminPage() {
  const [projectDetails, setProjectDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false); // Manage dark mode state

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Apply dark or light theme based on state
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      getMessages(setProjectDetails); // Listen for real-time updates from Firestore
    };
    fetchData();
    setLoading(false);
  }, []);

  // Delete project function
  const handleDelete = async (projectId) => {
    try {
      await deleteMessage(projectId); // Delete the project by ID from Firestore
      setProjectDetails((prev) => prev.filter((project) => project.id !== projectId));
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <svg
          className="animate-spin h-5 w-5 text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path
            fill="currentColor"
            d="M4 12c0-4.418 3.582-8 8-8v2c-3.314 0-6 2.686-6 6s2.686 6 6 6v2c-4.418 0-8-3.582-8-8z"
          />
        </svg>
        <span className="ml-2">Loading...</span>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8 mt-20">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
          Admin Panel
        </h1>
      </div>

      {/* Message Display Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectDetails.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 shadow-2xl rounded-lg p-6 transform hover:scale-105 transition-all duration-500 ease-in-out"
          >
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {project.firstName} {project.lastName}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">{project.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{project.phone}</p>
              </div>
            </div>

            {/* Project Details Section */}
            <div className="mb-4">
              <p className="text-gray-700 dark:text-gray-400">
                <strong>Project Details:</strong> {project.projectDetails}
              </p>
            </div>

            {/* Timestamp and Country */}
            <div className="flex justify-between items-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                <strong>Country:</strong> {project.countryCode}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {new Date(project.timestamp.seconds * 1000).toLocaleString()}
              </p>
            </div>

            {/* Hover/Expand Interaction */}
            <div className="mt-4 text-center">
              <button
                className="px-6 py-2 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out"
              >
                View More
              </button>
            </div>

            {/* Delete Button */}
            <div className="flex justify-end mt-4">
              <button
                onClick={() => handleDelete(project.id)}
                className="text-red-600 hover:text-red-800 transition-all duration-300 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

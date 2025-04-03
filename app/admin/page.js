"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getMessages, deleteMessage } from "../Api/firebase";

export default function AdminPage() {
  // State Management
  const [projectDetails, setProjectDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  // Fetch Data from Firestore
  useEffect(() => {
    const fetchData = async () => {
      await getMessages(setProjectDetails);
      setLoading(false);
    };
    fetchData();
  }, []);

  // Delete Project Function
  const handleDelete = async (projectId) => {
    try {
      await deleteMessage(projectId);
      setProjectDetails((prev) => prev.filter((project) => project.id !== projectId));
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  // Modal Toggle
  const handleView = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  // Loading State
  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <svg className="animate-spin h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path
            fill="currentColor"
            d="M4 12c0-4.418 3.582-8 8-8v2c-3.314 0-6 2.686-6 6s2.686 6 6 6v2c-4.418 0-8-3.582-8-8z"
          />
        </svg>
        <span className="ml-2">Loading...</span>
      </div>
    );

  return (
    <div className="container mx-auto p-8 mt-20">
      <h1 className="text-4xl font-bold text-center text-gray-100 dark:text-white mb-8">Admin Panel</h1>

      {/* Project Data Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Project Details</th>
              <th className="px-4 py-2">Country</th>
              <th className="px-4 py-2">Timestamp</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projectDetails.map((project) => (
              <tr key={project.id} className="border-t border-gray-300 dark:border-gray-700">
                <td className="px-4 py-2 text-gray-800 dark:text-gray-300">
                  {project.firstName} {project.lastName}
                </td>
                <td className="px-4 py-2 text-gray-800 dark:text-gray-300">{project.email}</td>
                <td className="px-4 py-2 text-gray-800 dark:text-gray-300">{project.phone}</td>
                <td className="px-4 py-2 text-gray-800 dark:text-gray-300">{project.projectDetails}</td>
                <td className="px-4 py-2 text-gray-800 dark:text-gray-300">{project.countryCode}</td>
                <td className="px-4 py-2 text-gray-800 dark:text-gray-300">
                  {new Date(project.timestamp.seconds * 1000).toLocaleString()}
                </td>
                <td className="px-4 py-2 flex gap-2 justify-center">
                  <button
                    onClick={() => handleView(project)}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Advanced Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Project Details</h2>
              <p className="text-gray-800 dark:text-gray-300 mb-2">
                <strong>Name:</strong> {selectedProject.firstName} {selectedProject.lastName}
              </p>
              <p className="text-gray-800 dark:text-gray-300">
                <strong>Message:</strong> {selectedProject.projectDetails}
              </p>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

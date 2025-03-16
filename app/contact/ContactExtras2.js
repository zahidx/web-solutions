"use client";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1, y: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
};

export default function ContactDetails() {
  return (
    <motion.div
      className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Details</h1>
        <div className="max-w-4xl mx-auto">
          {/* Office Location & Google Map */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-6">
              Office Location
            </h2>
            <div className="w-full h-64 bg-gray-300 dark:bg-gray-700 rounded-xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?v=3&address=Your+Office+Address"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          {/* Quick Contact & Office Details */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-6">
              Quick Contact
            </h2>
            <div className="space-y-4 text-center">
              <p className="text-lg font-medium">Phone: +123 456 7890</p>
              <p className="text-lg font-medium">Email: contact@example.com</p>
              <p className="text-lg font-medium">Address: 123 Main St, City, Country</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

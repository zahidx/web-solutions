"use client";
import { useState } from "react";
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
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 flex items-center justify-center px-6"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <motion.div
        className="max-w-3xl w-full bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12"
        variants={itemVariants}
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-6">
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Two Column Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "name", placeholder: "Your Name", type: "text" },
              { name: "email", placeholder: "Your Email", type: "email" },
            ].map((field) => (
              <div key={field.name} className="relative">
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                  className="peer w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
                <label
                  htmlFor={field.name}
                  className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-blue-500"
                >
                  {field.placeholder}
                </label>
              </div>
            ))}
          </div>

          {/* Phone Number Input */}
          <div className="relative">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="peer w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <label
              htmlFor="phone"
              className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-blue-500"
            >
              Your Phone
            </label>
          </div>

          {/* Message Textarea */}
          <div className="relative">
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="peer w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
              placeholder="Your Message"
            />
            <label
              htmlFor="message"
              className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-blue-500"
            >
              Your Message
            </label>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition transform focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
}

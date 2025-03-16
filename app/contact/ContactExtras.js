"use client";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
};

export default function ContactExtras() {
  return (
    <motion.div className="container mx-auto p-6" initial="hidden" animate="show">
      {/* CTA Section */}
      <motion.div className="bg-blue-600 text-white text-center py-12 rounded-3xl shadow-lg" variants={itemVariants}>
        <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
        <p className="text-lg mb-6">Get in touch today and let's bring your ideas to life.</p>
        <a href="/contact" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition">
          Contact Us
        </a>
      </motion.div>

      {/* Social Media Section */}
      <motion.div className="mt-12 text-center" variants={itemVariants}>
        <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
        <div className="flex justify-center gap-6">
          <a href="#" className="text-blue-500 text-3xl hover:text-blue-700 transition">🌐</a>
          <a href="#" className="text-blue-500 text-3xl hover:text-blue-700 transition">📘</a>
          <a href="#" className="text-blue-500 text-3xl hover:text-blue-700 transition">🐦</a>
        </div>
      </motion.div>
    </motion.div>
  );
}

"use client";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <motion.footer
      className="bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400"
      initial="initial"
      animate="animate"
      variants={fadeIn}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Brand Info */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              ZahidWebSolution
            </h3>
            <p className="mt-2 text-sm">
              Building digital experiences that empower your business.
            </p>
          </div>
          {/* Navigation Links */}
          <div className="flex space-x-6">
            <a
              href="/about"
              className="hover:text-blue-500 transition-colors text-sm"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="hover:text-blue-500 transition-colors text-sm"
            >
              Contact
            </a>
            <a
              href="/privacy"
              className="hover:text-blue-500 transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="hover:text-blue-500 transition-colors text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
        {/* Social Media Icons */}
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-600 transition-colors"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-blue-400 transition-colors"
          >
            <Twitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500 transition-colors"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-700 transition-colors"
          >
            <Linkedin size={24} />
          </a>
        </div>
        {/* Copyright */}
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-4">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} ZahidWebSolution. All Rights Reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

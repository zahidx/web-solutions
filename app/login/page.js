"use client"; // This makes sure the file is treated as a client component

import { Mail, ArrowLeft, Facebook } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-black to-gray-900 text-white px-6 relative overflow-hidden">
      {/* Optional Animated Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/path/to/animated-pattern.svg')] opacity-20 animate-pulse"></div>


      {/* Back Button */}
      <button className="absolute top-4 left-4 text-white hover:text-gray-300 transition-colors duration-300 z-10">
        <ArrowLeft size={28} />
      </button>

      {/* Logo */}
      <div className="mb-20 mt-44 z-10">
        <h1 className="text-4xl font-extrabold tracking-widest mb-4">XWEBHUB™</h1>
      </div>

      {/* Login Card with Glassmorphism */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 bg-black bg-opacity-60 backdrop-blur-lg rounded-xl shadow-xl p-8 max-w-md w-full"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Log In for the Full Experience</h2>
          <p className="text-gray-300 text-sm mb-6">
            Get exclusive access to the latest features—all your downloads and credits in one secure place.
          </p>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-4">
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 bg-gray-100 text-black py-3 rounded-md transition-all duration-200"
          >
            <FcGoogle size={24} className="-ml-2" />
            Continue with Google
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-md transition-all duration-200"
          >
            <Facebook size={24} />
            Continue with Facebook
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 bg-gray-800 text-white py-3 rounded-md transition-all duration-200"
          >
            <Mail size={24} />
            Continue with Email
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

"use client";  // Ensuring the component is rendered on the client side

import { Mail, ArrowLeft, Facebook } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";  // Use the correct hook from "next/navigation"

export default function Login() {
  const router = useRouter();  // Initialize the router

  const handleEmailLogin = () => {
    router.push("/signup");  // Navigate to the signup page when "Continue with Email" is clicked
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-700 via-gray-900 to-black dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-800 text-white dark:text-gray-200 px-6 relative overflow-hidden sm:overflow-hidden">

      {/* Optional Animated Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/path/to/animated-pattern.svg')] opacity-20 animate-pulse"></div>

      {/* Back Button */}
      <button className="absolute top-4 left-4 text-white hover:text-gray-300 dark:text-gray-200 dark:hover:text-gray-400 transition-colors duration-300 z-10">
        <ArrowLeft size={28} />
      </button>

      {/* Logo */}
      <div className="mb-20 mt-32 z-10">
  <h1 className="text-4xl font-extrabold tracking-widest mb-4 text-white dark:text-gray-200">
    <span className="text-red-500">X</span>
    <span className="text-blue-500">W</span>
    <span className="text-green-500">E</span>
    <span className="text-yellow-500">B</span>
    <span className="text-purple-500">H</span>
    <span className="text-pink-500">U</span>
    <span className="text-orange-500">B</span>
    <span className="text-gray-400">™</span>
  </h1>
</div>


      {/* Login Card with Glassmorphism */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 bg-cyan-900 dark:bg-black bg-opacity-60 backdrop-blur-lg rounded-xl shadow-xl p-8 max-w-md w-full"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2 text-white dark:text-gray-200">Log In for the Full Experience</h2>
          <p className="text-gray-300 dark:text-gray-400 text-sm mb-6">
            Get exclusive access to the latest features—all your downloads and credits in one secure place.
          </p>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-4">
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 text-black dark:text-white py-3 rounded-md transition-all duration-200"
          >
            <FcGoogle size={24} className="-ml-2" />
            Continue with Google
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 dark:bg-blue-700 text-white py-3 rounded-md transition-all duration-200"
          >
            <Facebook size={24} />
            Continue with Facebook
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleEmailLogin}  // Add click handler here
            className="w-full flex items-center justify-center gap-2 bg-gray-800 dark:bg-gray-900 text-white py-3 rounded-md transition-all duration-200"
          >
            <Mail size={24} />
            Continue with Email
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

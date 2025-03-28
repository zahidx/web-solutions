"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Lock, User, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Replace with your actual API call
      // const response = await fetch('/api/signup', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // });
      // if (!response.ok) throw new Error('Signup failed');
      
      toast.success("Signup successful! Redirecting...");
      setTimeout(() => router.push("/dashboard"), 2000);
    } catch (error) {
      toast.error("Signup failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 via-black to-gray-900 text-white px-6 sm:px-12 md:px-24 relative overflow-hidden">
      {/* Include ToastContainer once */}
      <ToastContainer />

      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/animated-pattern.svg')] opacity-10 animate-pulse"></div>

      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="absolute top-6 left-6 text-white hover:text-gray-300 transition-colors duration-300 z-10"
      >
        <ArrowLeft size={28} />
      </button>

      {/* Logo */}
      <div className="mb-10  mt-40z-10 w-full text-center">
      <h1 className="text-4xl font-extrabold tracking-widest sm:text-5xl">
  <span className="text-red-500">X</span>
  <span className="text-blue-500">W</span>
  <span className="text-green-500">E</span>
  <span className="text-yellow-500">B</span>
  <span className="text-indigo-500">H</span>
  <span className="text-purple-500">U</span>
  <span className="text-pink-500">B</span>
  <span className="text-orange-500">™</span>
</h1>

        <p className="text-blue-400 text-sm mt-2">Join the future of web technology</p>
      </div>

      {/* Signup Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 bg-black bg-opacity-60 backdrop-blur-xl rounded-xl shadow-2xl p-6 sm:p-10 w-full max-w-lg sm:max-w-md md:max-w-lg"
      >
        <h2 className="text-3xl mt-10 font-bold text-center mb-6 sm:text-4xl">Create Your Account</h2>

        {/* Signup Form */}
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name Input */}
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              {...register("name", { required: "Full name is required" })}
              className={`w-full bg-transparent border ${
                errors.name ? "border-red-500" : "border-gray-600"
              } focus:border-blue-500 outline-none rounded-lg py-4 pl-10 pr-4 text-white placeholder-gray-400`}
              placeholder="Full Name"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Input */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email address",
                },
              })}
              className={`w-full bg-transparent border ${
                errors.email ? "border-red-500" : "border-gray-600"
              } focus:border-blue-500 outline-none rounded-lg py-4 pl-10 pr-4 text-white placeholder-gray-400`}
              placeholder="Email Address"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Input */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className={`w-full bg-transparent border ${
                errors.password ? "border-red-500" : "border-gray-600"
              } focus:border-blue-500 outline-none rounded-lg py-4 pl-10 pr-4 text-white placeholder-gray-400`}
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 text-white py-4 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50"
          >
            {isSubmitting ? "Signing Up..." : "Sign Up"}
          </motion.button>
        </form>

        {/* Divider */}
        <div className="relative flex items-center my-5">
          <span className="w-full border-t border-gray-600"></span>
          <span className="mx-4 text-gray-400 text-sm">or</span>
          <span className="w-full border-t border-gray-600"></span>
        </div>

        {/* Already have an account? */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-blue-400 hover:underline">
            Log in
          </a>
        </p>
      </motion.div>
    </div>
  );
}

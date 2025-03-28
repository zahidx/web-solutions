"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Lock, User, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import { TextField } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import AnimatedLogo from "./AnimatedLogo"; // Adjust the path as needed

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
      toast.success("Signup successful! Redirecting...");
      setTimeout(() => router.push("/dashboard"), 2000);
    } catch (error) {
      toast.error("Signup failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-gray-800 via-black to-gray-900 text-white px-6 sm:px-12 md:px-24 relative overflow-hidden">
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

      {/* Logo on the left for PC view */}
      <div className="mb-10 mt-40 z-10 w-full text-center md:w-1/2 md:text-left">
        <AnimatedLogo />
        <p className="text-blue-400 text-xl mt-2">Join the future of web technology</p>
      </div>

      {/* Signup Card on the right for PC view */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 bg-black bg-opacity-60 backdrop-blur-xl rounded-xl shadow-2xl p-6 sm:p-10 w-full max-w-lg sm:max-w-md md:max-w-lg md:w-1/2"
      >
        <h2 className="text-3xl mt-10 font-bold text-center mb-6 sm:text-4xl">
          Create Your Account
        </h2>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name Input */}
          <TextField
            label="Full Name"
            placeholder="Enter your full name"
            variant="outlined"
            fullWidth
            {...register("name", { required: "Full name is required" })}
            error={!!errors.name}
            helperText={errors.name?.message}
            InputProps={{
              startAdornment: <User className="mr-2 text-gray-400" size={20} />,
              style: { color: "white" },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "white",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                "& fieldset": { borderColor: "gray" },
                "&:hover fieldset": { borderColor: "white" },
                "&.Mui-focused fieldset": { borderColor: "blue" },
              },
              "& .MuiInputLabel-root": { color: "gray" },
              "& .MuiInputLabel-root.Mui-focused": { color: "white" },
            }}
          />

          {/* Email Input */}
          <TextField
            label="Email Address"
            placeholder="Enter your email address"
            variant="outlined"
            fullWidth
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Invalid email address",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
            InputProps={{
              startAdornment: <Mail className="mr-2 text-gray-400" size={20} />,
              style: { color: "white" },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "white",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                "& fieldset": { borderColor: "gray" },
                "&:hover fieldset": { borderColor: "white" },
                "&.Mui-focused fieldset": { borderColor: "blue" },
              },
              "& .MuiInputLabel-root": { color: "gray" },
              "& .MuiInputLabel-root.Mui-focused": { color: "white" },
            }}
          />

          {/* Password Input */}
          <TextField
            label="Password"
            placeholder="Enter your password"
            variant="outlined"
            fullWidth
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
            InputProps={{
              startAdornment: <Lock className="mr-2 text-gray-400" size={20} />,
              style: { color: "white" },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "white",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                "& fieldset": { borderColor: "gray" },
                "&:hover fieldset": { borderColor: "white" },
                "&.Mui-focused fieldset": { borderColor: "blue" },
              },
              "& .MuiInputLabel-root": { color: "gray" },
              "& .MuiInputLabel-root.Mui-focused": { color: "white" },
            }}
          />

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

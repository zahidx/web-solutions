"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import ContactExtras from "./ContactExtras";
import ContactExtras2 from "./ContactExtras2";
import Faq from "../compo/Faq";

// Dynamically import PreferencesDetails (disable SSR if needed)
const PreferencesDetails = dynamic(() => import('./PreferencesDetails'), { ssr: false });

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
};

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      serviceInterest: [],
      budgetRange: "",
      preferredContactMethod: "",
      file: null,
    },
  });

  const [submissionStatus, setSubmissionStatus] = useState("");
  const services = [
    "Web Design",
    "SEO Services",
    "CMS Development",
    "E-Commerce Solutions",
    "Mobile App Development",
    "Maintenance & Support",
  ];

  const onSubmit = async (data) => {
    try {
      setSubmissionStatus("loading");
      // Simulate asynchronous API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted:", data);
      setSubmissionStatus("success");
      reset();
    } catch (error) {
      console.error("Submission error:", error);
      setSubmissionStatus("error");
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-700 dark:text-gray-300"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-center mb-10">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2 bg-white dark:bg-gray-800 shadow-2xl rounded-3xl p-10"
            variants={cardVariants}
          >
            <h2 className="text-3xl font-bold text-center mb-8">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Personal Info */}
              <fieldset className="border-t border-b border-gray-300 dark:border-gray-700 py-6">
                <legend className="text-xl font-semibold px-2 text-center">
                  Personal Information
                </legend>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Your Name"
                      {...register("name", { required: "Name is required" })}
                      className="peer w-full px-5 py-4 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    />
                    <label className="absolute left-5 top-4 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-indigo-500">
                      Your Name
                    </label>
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Your Email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className="peer w-full px-5 py-4 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    />
                    <label className="absolute left-5 top-4 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-indigo-500">
                      Your Email
                    </label>
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="relative mt-6">
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                    className="peer w-full px-5 py-4 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  />
                  <label className="absolute left-5 top-4 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-indigo-500">
                    Your Phone
                  </label>
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </fieldset>

              {/* Message Section */}
              <fieldset className="border-t border-b border-gray-300 dark:border-gray-700 py-6">
                <legend className="text-xl font-semibold px-2 text-center">
                  Your Message
                </legend>
                <div className="relative mt-4">
                  <textarea
                    rows="5"
                    placeholder="Your Message"
                    {...register("message", { required: "Message is required" })}
                    className="peer w-full px-5 py-4 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
                  />
                  <label className="absolute left-5 top-4 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-indigo-500">
                    Your Message
                  </label>
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>
              </fieldset>

              {/* Dynamically Loaded Preferences & Details */}
              <PreferencesDetails
                register={register}
                errors={errors}
                services={services}
              />

              {/* File Upload and reCAPTCHA */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block mb-2 font-medium">
                    Attach File (Optional)
                  </label>
                  <input
                    type="file"
                    {...register("file")}
                    className="w-full text-gray-900 border border-gray-300 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="flex flex-col justify-end">
                  <p className="text-sm text-gray-500">
                    [reCAPTCHA placeholder]
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-xl transition transform focus:outline-none focus:ring-2 focus:ring-indigo-500"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
              {submissionStatus === "success" && (
                <div className="mt-4 text-green-600 font-medium text-center">
                  Your message has been sent successfully!
                </div>
              )}
              {submissionStatus === "error" && (
                <div className="mt-4 text-red-600 font-medium text-center">
                  There was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </motion.div>

          <ContactExtras2 />
        </div>
        <ContactExtras />
        <Faq />
      </div>
    </motion.div>
  );
}

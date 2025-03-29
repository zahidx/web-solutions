"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { steps } from "./StepsData";
import { useRouter } from "next/navigation";
export default function ProcessPage() {
  const timelineVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const timelineItem = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0 },
  };

  const router = useRouter();


  return (
    <div className="min-h-screen relative bg-gradient-to-br from-white to-gray-100 dark:from-[#0F172A] dark:to-[#1E293B] py-20 overflow-hidden mt-14 ">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-[-150px] left-[-150px] w-96 h-96 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full opacity-25 blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-[-150px] right-[-150px] w-96 h-96 bg-gradient-to-br from-yellow-500 to-red-500 rounded-full opacity-25 blur-3xl"
          animate={{ rotate: -360 }}
          transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Header Section */}
        <div className="text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-600 drop-shadow-2xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            Our Proven Process
          </motion.h1>
          <motion.p
            className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-800 dark:text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Discover how we transform ideas into reality through a transparent, step-by-step journey.
            Our process combines creativity with cutting-edge technology to deliver exceptional results.
          </motion.p>
        </div>

        {/* Timeline Section */}
        <div className="relative mt-20">
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 dark:bg-gray-600 -translate-x-1/2" />

          <motion.div
            className="space-y-20 md:space-y-16"
            variants={timelineVariants}
            initial="hidden"
            animate="show"
          >
            {steps.map((step, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  className={`relative w-full md:w-1/2 ${
                    isLeft ? "md:pr-10 md:text-right" : "md:pl-10 md:ml-auto"
                  }`}
                  variants={timelineItem}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="relative inline-block bg-gray-50 dark:bg-[#1E293B] p-6 md:p-8 rounded-xl border border-gray-300 dark:border-gray-700 shadow-2xl">
                    <div className="absolute -top-3 -right-3 md:-right-8 w-14 h-14 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center shadow-lg">
                      {step.icon || <CheckCircle className="text-blue-600 dark:text-yellow-300" size={14} />}
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-yellow-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-4 leading-relaxed">
                      {step.description}
                    </p>
                    {step.details && (
                      <p className="mt-2 text-gray-500 dark:text-gray-500 text-sm italic">
                        {step.details}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Call-to-Action Section */}
        <motion.div
          className="mt-24 text-center bg-gray-50 dark:bg-gray-800 p-10 md:p-16 rounded-xl border border-gray-300 dark:border-gray-700 shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-600">
            Ready to Start?
          </h2>
          <p className="mt-4 text-gray-800 dark:text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            Let’s work together to bring your vision to life. Contact us for a consultation and see how our process can transform your ideas.
          </p>
          <motion.button
  onClick={() => router.push("/contact")}
  className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-500 dark:to-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-all"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Get in Touch
</motion.button>
        </motion.div>
      </div>
    </div>
  );
}

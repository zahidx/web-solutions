"use client";
import { motion } from "framer-motion";
import { CheckCircle, Code, Layout, Rocket, Search, Users } from "lucide-react";

export default function ProcessPage() {
  const steps = [
    {
      title: "Discovery & Consultation",
      description:
        "We start by understanding your needs, goals, and audience to craft the perfect solution.",
      icon: <Users size={40} className="text-blue-400" />,
    },
    {
      title: "Design & Prototyping",
      description:
        "We create wireframes and interactive prototypes, refining based on your feedback.",
      icon: <Layout size={40} className="text-green-400" />,
    },
    {
      title: "Development",
      description:
        "Our team builds a scalable, full-stack solution, integrating frontend and backend seamlessly.",
      icon: <Code size={40} className="text-yellow-400" />,
    },
    {
      title: "Launch & Testing",
      description:
        "We deploy your project with rigorous quality assurance to ensure a smooth launch.",
      icon: <Rocket size={40} className="text-purple-400" />,
    },
    {
      title: "Ongoing Support & SEO",
      description:
        "We provide maintenance, SEO optimization, and performance monitoring for long-term success.",
      icon: <Search size={40} className="text-red-400" />,
    },
    // Additional steps added
    {
      title: "Post-Launch Optimization",
      description:
        "After launch, we focus on gathering user feedback and optimizing the product based on real-world usage.",
      icon: <Rocket size={40} className="text-orange-400" />,
    },
    {
      title: "Continuous Improvement",
      description:
        "We ensure your project remains ahead of the curve by implementing continuous improvements and upgrades.",
      icon: <Code size={40} className="text-teal-400" />,
    }
  ];

  const timelineVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const timelineItem = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <div className="min-h-screen mt-14 relative bg-gradient-to-br from-[#0F172A] to-[#1E293B] py-16 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-[-100px] left-[-100px] w-80 h-80 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full opacity-20 blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-[-100px] right-[-100px] w-80 h-80 bg-gradient-to-br from-yellow-500 to-red-500 rounded-full opacity-20 blur-3xl"
          animate={{ rotate: -360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Page Title */}
        <motion.h1
          className="text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Process
        </motion.h1>

        <motion.p
          className="text-center mt-4 max-w-3xl mx-auto text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          A transparent, step-by-step journey with visual storytelling and smooth animations.
        </motion.p>

        {/* Advanced Two-Column Layout */}
        <div className="mt-16 flex flex-col md:flex-row gap-12">
          {/* Left Column: Vertical Timeline */}
          <motion.div
            className="relative flex-1 pl-8"
            variants={timelineVariants}
            initial="hidden"
            animate="show"
          >
            {/* Timeline Vertical Line */}
            <div className="absolute top-0 left-4 h-full border-l-2 border-gray-600" />
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                className={`mb-12 relative pl-8 bg-[#1E293B] p-6 rounded-xl border border-gray-700 shadow-xl ${
                  idx % 2 === 0 ? "lg:ml-12" : "lg:mr-12"
                }`}
                variants={timelineItem}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                {/* Icon in a circle */}
                <div className="absolute -left-12 top-2 w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center border-2 border-gray-600">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-yellow-300">
                  {step.title}
                </h3>
                <p className="text-gray-400 mt-2">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column: Testimonials & Call-to-Action */}
          <div className="flex-1 flex flex-col justify-between">
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <h2 className="text-3xl font-semibold text-blue-400 text-center">
                What Our Clients Say
              </h2>
              <div className="mt-8 space-y-8">
                {/* Testimonial 1 */}
                <motion.div
                  className="bg-[#1E293B] p-6 rounded-xl border border-gray-700 shadow-2xl"
                  whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                >
                  <p className="text-gray-300 italic">
                    “The team was amazing! They guided us through every phase of development, and the final product exceeded our expectations.”
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <CheckCircle className="text-green-400" />
                    <span className="text-yellow-300 font-semibold">
                      Sarah J., CEO of TechGrow
                    </span>
                  </div>
                </motion.div>
                {/* Testimonial 2 */}
                <motion.div
                  className="bg-[#1E293B] p-6 rounded-xl border border-gray-700 shadow-2xl"
                  whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                >
                  <p className="text-gray-300 italic">
                    “Their methodical approach and innovative design really set them apart. We felt supported every step of the way.”
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <CheckCircle className="text-green-400" />
                    <span className="text-yellow-300 font-semibold">
                      Michael T., Founder of DigitalBoost
                    </span>
                  </div>
                </motion.div>
                {/* Testimonial 3 */}
                <motion.div
                  className="bg-[#1E293B] p-6 rounded-xl border border-gray-700 shadow-2xl"
                  whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                >
                  <p className="text-gray-300 italic">
                    “They were transparent and communicative throughout the process. Our project was a success because of their team.”
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <CheckCircle className="text-green-400" />
                    <span className="text-yellow-300 font-semibold">
                      Linda H., Director of GlobalTech
                    </span>
                  </div>
                </motion.div>
                {/* Testimonial 4 */}
                <motion.div
                  className="bg-[#1E293B] p-6 rounded-xl border border-gray-700 shadow-2xl"
                  whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                >
                  <p className="text-gray-300 italic">
                    “Exceptional service from start to finish. They delivered on time, with great results, and we&apos;re extremely happy with the outcome.”
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <CheckCircle className="text-green-400" />
                    <span className="text-yellow-300 font-semibold">
                      James L., Head of Operations at WebNova
                    </span>
                  </div>
                </motion.div>

                {/* Duplicate Testimonial */}
                <motion.div
                  className="bg-[#1E293B] p-6 rounded-xl border border-gray-700 shadow-2xl"
                  whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                >
                  <p className="text-gray-300 italic">
                    “Exceptional service from start to finish. They delivered on time, with great results, and we&apos;re extremely happy with the outcome.”
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <CheckCircle className="text-green-400" />
                    <span className="text-yellow-300 font-semibold">
                      James L., Head of Operations at WebNova
                    </span>
                  </div>
                </motion.div>

                {/* Duplicate Testimonial */}
                <motion.div
                  className="bg-[#1E293B] p-6 rounded-xl border border-gray-700 shadow-2xl"
                  whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                >
                  <p className="text-gray-300 italic">
                    “Exceptional service from start to finish. They delivered on time, with great results, and we&apos;re extremely happy with the outcome.”
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <CheckCircle className="text-green-400" />
                    <span className="text-yellow-300 font-semibold">
                      James L., Head of Operations at WebNova
                    </span>
                  </div>
                </motion.div>

                {/* Duplicate Testimonial */}
                <motion.div
                  className="bg-[#1E293B] p-6 rounded-xl border border-gray-700 shadow-2xl"
                  whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                >
                  <p className="text-gray-300 italic">
                    “Exceptional service from start to finish. They delivered on time, with great results, and we&apos;re extremely happy with the outcome.”
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <CheckCircle className="text-green-400" />
                    <span className="text-yellow-300 font-semibold">
                      James L., Head of Operations at WebNova
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.section>

            {/* Call-to-Action */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <a href="/contact">
                <span className="inline-block bg-blue-500 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-blue-400 transition shadow-xl">
                  🚀 Let&apos;s Work Together
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

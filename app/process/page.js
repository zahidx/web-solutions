"use client";
import { motion } from "framer-motion";
import { CheckCircle, Code, Layout, Rocket, Search, Users } from "lucide-react";

export default function ProcessPage() {
  const steps = [
    {
      title: "Discovery & Consultation",
      description: "We start by understanding your needs, goals, and audience to craft the perfect solution.",
      icon: <Users size={50} className="text-blue-400" />,
    },
    {
      title: "Design & Prototyping",
      description: "We create wireframes and interactive prototypes, refining based on your feedback.",
      icon: <Layout size={50} className="text-green-400" />,
    },
    {
      title: "Development",
      description: "Our team builds a scalable, full-stack solution, integrating frontend and backend seamlessly.",
      icon: <Code size={50} className="text-yellow-400" />,
    },
    {
      title: "Launch & Testing",
      description: "We deploy your project with rigorous quality assurance to ensure a smooth launch.",
      icon: <Rocket size={50} className="text-purple-400" />,
    },
    {
      title: "Ongoing Support & SEO",
      description: "We provide maintenance, SEO optimization, and performance monitoring for long-term success.",
      icon: <Search size={50} className="text-red-400" />,
    },
  ];

  return (
    <div className="min-h-screen mt-20 bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Page Title */}
        <motion.h1
          className="text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Process
        </motion.h1>

        <p className="text-center text-lg text-gray-300 max-w-3xl mx-auto mt-4">
          We believe in a transparent, step-by-step process that ensures efficiency, collaboration, and success.
        </p>

        {/* Process Steps */}
        <div className="mt-16 space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col sm:flex-row items-center gap-6 bg-[#1E293B] p-6 rounded-xl shadow-lg border border-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex-shrink-0">{step.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-yellow-300">{step.title}</h3>
                <p className="text-gray-400 mt-2">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-blue-400 text-center">What Our Clients Say</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <motion.div
              className="bg-[#1E293B] p-6 rounded-xl shadow-lg border border-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-300 italic">
                “The team was amazing! They guided us through every step, and the final product exceeded our expectations.”
              </p>
              <div className="mt-4 flex items-center gap-3">
                <CheckCircle className="text-green-400" />
                <span className="text-yellow-300 font-semibold">Sarah J., CEO of TechGrow</span>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              className="bg-[#1E293B] p-6 rounded-xl shadow-lg border border-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-300 italic">
                “Their structured process and ongoing support gave us confidence. Highly recommend their services!”
              </p>
              <div className="mt-4 flex items-center gap-3">
                <CheckCircle className="text-green-400" />
                <span className="text-yellow-300 font-semibold">Michael T., Founder of DigitalBoost</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call-to-Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <a href="/contact">
            <span className="inline-block bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-400 transition cursor-pointer shadow-lg">
              🚀 Let’s Work Together
            </span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}

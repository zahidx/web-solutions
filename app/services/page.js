"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useSelected } from "../hooks/useSelected"; // Import the custom hook
import { services, projects, testimonials } from "./data"; // Import the data

export default function AdvancedLightPage() {
  const { selected, handleMouseEnter, handleMouseLeave } = useSelected(); 

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-white dark:bg-gradient-to-r dark:from-[#0E1628] dark:to-[#380643] text-gray-900 dark:text-gray-100 overflow-hidden mt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500 mb-8"
        >
          Elevate Your Digital Experience
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="max-w-2xl mx-auto text-xl text-gray-700 dark:text-gray-300"
        >
          From state-of-the-art web design to robust development solutions, we deliver next-level digital experiences.
        </motion.p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
            Our Services
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Cutting-edge solutions to drive your business forward.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className={`bg-white dark:bg-[#1F2937] rounded-2xl p-8 text-center shadow-lg cursor-pointer transition-all border-2 border-transparent ${
                selected === index ? "border-blue-500" : "hover:border-blue-300"
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="mb-6 flex justify-center items-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">{service.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{service.description}</p>
              <Link href={service.link || "#"}>
                <button className="mt-4 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-3 rounded-full font-medium transition">
                  {service.cta}
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-500">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Explore our portfolio of innovative projects that combine aesthetics with functionality.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition"
            >
              <div className="relative w-full h-56">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 bg-white dark:bg-[#1F2937]">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-red-500">
            What Clients Say
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Hear from our satisfied clients who have experienced our exceptional services.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-[#1F2937] rounded-2xl p-6 text-center shadow-md"
            >
              <div className="relative w-16 h-16 mx-auto mb-4 border-2 border-gray-300 rounded-full overflow-hidden">
                <Image
                  src={test.avatar}
                  alt={test.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                &quot;{test.feedback}&quot;
              </p>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{test.name}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{test.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

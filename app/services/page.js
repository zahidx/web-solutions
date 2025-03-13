"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaSearch,
  FaWordpress,
  FaShoppingCart,
  FaCogs,
} from "react-icons/fa";

const services = [
  {
    title: "Web Design & Development",
    description:
      "We craft responsive, user-friendly websites using Figma, Adobe XD, and Webflow. Our tech stack includes HTML5, CSS3, JavaScript, React, and Node.js.",
    icon: <FaLaptopCode className="text-6xl text-blue-500" />,
    cta: "Get a Custom Design",
  },
  {
    title: "SEO Services",
    description:
      "Boost your rankings with On-Page & Off-Page SEO, Content Optimization, and in-depth analytics using Google Analytics, SEMrush, and Ahrefs.",
    icon: <FaSearch className="text-6xl text-green-500" />,
    cta: "Boost Your Rankings",
  },
  {
    title: "CMS Solutions (WordPress & Custom CMS)",
    description:
      "Leverage WordPress for easy management or get a custom CMS tailored to your unique needs for maximum flexibility.",
    icon: <FaWordpress className="text-6xl text-purple-500" />,
    cta: "Start Your CMS Project",
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Create powerful online stores with Shopify, WooCommerce, and Magento, featuring secure payments and inventory management.",
    icon: <FaShoppingCart className="text-6xl text-yellow-500" />,
    cta: "Launch Your Store Today",
  },
  {
    title: "Custom Development",
    description:
      "Build scalable solutions like CRM systems, business applications, and database integrations, tailored to your business needs.",
    icon: <FaCogs className="text-6xl text-red-500" />,
    cta: "Build Your Custom Solution",
  },
];

const projects = [
  {
    title: "Innovative Portfolio",
    description:
      "A dynamic showcase of our latest design and development projects, featuring interactive demos and cutting-edge tech.",
    imageUrl: "/images/project1.jpg",
  },
  {
    title: "E-Commerce Revolution",
    description:
      "A comprehensive online store that blends stunning design with powerful backend technology for a seamless shopping experience.",
    imageUrl: "/images/project2.jpg",
  },
  {
    title: "SEO Mastery",
    description:
      "A project highlighting our SEO strategies in action—optimizing content, driving organic traffic, and increasing conversions.",
    imageUrl: "/images/project3.jpg",
  },
];

const testimonials = [
  {
    name: "Jane Doe",
    role: "CEO, Tech Innovators",
    feedback:
      "Their innovative design and seamless development process transformed our digital presence. Highly recommended!",
    avatar: "/images/avatar1.jpg",
  },
  {
    name: "John Smith",
    role: "Marketing Director, BrandBoost",
    feedback:
      "The SEO and digital solutions provided were exceptional. Our traffic and conversions have never been higher.",
    avatar: "/images/avatar2.jpg",
  },
  {
    name: "Sara Lee",
    role: "Founder, E-Com Hub",
    feedback:
      "A reliable partner in bringing our online store vision to life with excellent support and technical expertise.",
    avatar: "/images/avatar3.jpg",
  },
];

export default function AdvancedLightPage() {
  const [selected, setSelected] = useState(-1);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-white dark:bg-gradient-to-r dark:from-[#0E1628] dark:to-[#380643] text-gray-900 dark:text-gray-100 overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500 mb-6"
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
              onMouseEnter={() => setSelected(index)}
              onMouseLeave={() => setSelected(-1)}
            >
              <div className="mb-6 flex justify-center items-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">{service.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{service.description}</p>
              <button className="mt-4 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-3 rounded-full font-medium transition">
                {service.cta}
              </button>
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
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 bg-white dark:bg-[#1F2937]">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">{project.title}</h3>
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
              <img
                src={test.avatar}
                alt={test.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-gray-300"
              />
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">"{test.feedback}"</p>
              <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">{test.name}</h4>
              <span className="text-sm text-gray-500 dark:text-gray-400">{test.role}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final Call-to-Action Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-indigo-500 to-blue-500 dark:from-[#1E2A47] dark:to-[#1E3C5A]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold mb-6 text-white">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Connect with us today and let our expert team elevate your business to new heights.
          </p>
          <button className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-xl shadow-lg hover:shadow-2xl transition">
            Contact Us Now
          </button>
        </div>
      </section>
    </div>
  );
}

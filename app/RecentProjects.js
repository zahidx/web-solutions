'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaLaptopCode, FaRocket, FaDatabase, FaShoppingCart, FaTrophy } from 'react-icons/fa';

const projects = [
  {
    title: 'Blog',
    description: 'A personal blog platform where users can post and manage their content.',
    link: '/project1',
    icon: <FaLaptopCode className="text-6xl text-[#FF6A00]" />,
  },
  {
    title: 'Portfolio',
    description: 'A showcase of professional work and projects, with a personal touch.',
    link: '/project2',
    icon: <FaRocket className="text-6xl text-[#FF6A00]" />,
  },
  {
    title: 'E-commerce',
    description: 'An e-commerce platform with product listings, shopping cart, and checkout.',
    link: '/project3',
    icon: <FaShoppingCart className="text-6xl text-[#FF6A00]" />,
  },
  {
    title: 'Trivia Quiz',
    description: 'An interactive quiz app with multiple categories and real-time leaderboards.',
    link: '/project4',
    icon: <FaTrophy className="text-6xl text-[#FF6A00]" />,
  },
  {
    title: 'Social Media App',
    description: 'A social media platform with real-time messaging, posts, and user profiles.',
    link: '/project5',
    icon: <FaRocket className="text-6xl text-[#FF6A00]" />,
  },
  {
    title: 'Analytics Dashboard',
    description: 'A business intelligence dashboard for tracking metrics and KPIs.',
    link: '/project6',
    icon: <FaDatabase className="text-6xl text-[#FF6A00]" />,
  },
];

const RecentProjects = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-[#0A0F1D] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold mb-12 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Recent Projects Showcase
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Explore some of our recent works that blend creativity, functionality, and performance.
        </motion.p>

        {/* Project Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-xl transform transition duration-300 sm:hover:scale-105 sm:hover:shadow-2xl sm:hover:shadow-[#FF6A00]/90 border-4 border-[#FF6A00] sm:border-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="bg-gradient-to-t from-black/60 via-black/40 to-transparent p-6 rounded-2xl">
                <div className="flex flex-col items-center justify-center mb-4 relative">
                  <motion.div whileHover={{ scale: 1.2 }} className="text-center">
                    {project.icon}
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-white mt-4">{project.title}</h3>
                </div>
                <p className="text-lg text-gray-300 mb-4">{project.description}</p>
                <Link
                  href={project.link}
                  aria-label={`View ${project.title}`}
                  className="inline-block mt-4 text-lg text-[#FF6A00] font-semibold hover:text-white transition-all duration-300"
                >
                  View Project
                </Link>
              </div>

              {/* Border only for desktop hover */}
              <div className="absolute inset-0 border-4 border-transparent sm:hover:border-[#FF6A00] rounded-2xl transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;

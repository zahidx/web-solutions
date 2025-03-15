'use client';

import { motion } from 'framer-motion';
import { FaCode, FaUsers, FaRocket, FaChartLine, FaClock, FaCog } from 'react-icons/fa';
import Link from 'next/link';

const features = [
  { text: 'AI-Powered Solutions', icon: <FaCog /> },
  { text: 'Elite Design Team', icon: <FaUsers /> },
  { text: 'Growth-Driven SEO', icon: <FaChartLine /> },
  { text: 'Custom Scalable Platforms', icon: <FaCode /> },
  { text: 'Lightning-Fast Execution', icon: <FaClock /> },
  { text: 'Innovative Strategies', icon: <FaRocket /> },
];

const WhyChooseUs = () => {
  return (
    <section className="relative bg-[#0A0F1D] text-white py-24 px-6 md:px-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E1628] to-[#380643] opacity-50 blur-3xl"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Title Section */}
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold mb-6 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Partner With Us?
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          We craft <span className="text-blue-400 font-semibold">intelligent</span> and <span className="text-green-400 font-semibold">high-performance</span> solutions, leveraging AI, data analytics, and futuristic design.
        </motion.p>

        {/* Feature Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative flex items-center bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="bg-blue-500 p-4 rounded-full text-white text-2xl">
                {feature.icon}
              </div>
              <span className="text-lg font-semibold ml-4">{feature.text}</span>
              {/* Dynamic Neon Effect */}
              <div className="absolute inset-0 rounded-2xl border border-transparent hover:border-blue-500 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Call To Action */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
<Link
  href="/about"
  aria-label="Explore Our Vision"
  role="button"
  className="inline-block bg-gradient-to-r from-[#c55302] to-[#910000] hover:from-[#741700] hover:to-[#db5c01] text-white text-xl px-12 py-3 font-extrabold rounded-lg shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-[#f5ff66]"
>
  Explore Our Vision
</Link>



        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

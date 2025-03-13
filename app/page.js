"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, CheckCircle, ArrowRight } from "lucide-react";
import HeroSection from "./HeroSection";
import Footer from "./compo/Footer";

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Common animation variant
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="transition-colors duration-500 dark:bg-gray-900 dark:text-gray-100 bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                title: "Web Design",
                desc: "Modern UI/UX focused design",
                icon: <Star size={40} className="text-blue-500" />,
              },
              {
                title: "Development",
                desc: "Scalable web solutions",
                icon: <CheckCircle size={40} className="text-blue-500" />,
              },
              {
                title: "SEO & Marketing",
                desc: "Boost your online presence",
                icon: <ArrowRight size={40} className="text-blue-500" />,
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="p-8 bg-white dark:bg-gray-700 rounded-2xl shadow-xl text-center transition-transform"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.div
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-700 dark:text-gray-300 italic text-lg">
              "ZahidWebSolution transformed our business with an incredible website! Highly recommend."
            </p>
            <p className="mt-6 font-semibold text-lg">- John Doe, CEO</p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-blue-500 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Grow Your Business?
          </motion.h2>
          <motion.p
            className="mb-8 text-lg md:text-xl"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Let’s build something amazing together.
          </motion.p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 transition-colors text-blue-500 font-semibold rounded-lg shadow-lg"
          >
            Contact Us <ArrowRight size={18} />
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;

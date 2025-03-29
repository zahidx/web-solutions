"use client";

import Image from "next/image";
import { FaClipboard, FaPaintBrush, FaRocket } from "react-icons/fa";
import { FaUserCheck, FaSearch, FaClock } from "react-icons/fa";
import { FaBullseye, FaLightbulb } from 'react-icons/fa';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-700 mt-16">
      <div className="container mx-auto py-16 sm:py-20 lg:py-24 px-4 sm:px-8 md:px-16 lg:px-32">
        
        {/* About Section */}
        <section className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 mb-6 sm:mb-8">
            About Me
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 sm:mb-10 px-4">
            I am a passionate developer dedicated to providing high-quality web solutions,
            including web design, development, and CMS services. My goal is to empower businesses
            with impactful digital experiences.
          </p>
          <div className="flex justify-center mb-10">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-110">
              <Image
                src="/profile.png"
                alt="My Profile"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
<section className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16 sm:mb-20">
  <div className="flex-1 px-4">
    <div className="flex items-center gap-2">
      <FaBullseye className="w-8 h-8 text-yellow-500" />
      <h3 className="text-2xl sm:text-3xl font-semibold text-yellow-500 mb-3">My Mission</h3>
    </div>
    <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
      My mission is to deliver cutting-edge web solutions that transform the digital presence of my clients,
      focusing on quality, creativity, and efficiency.
    </p>
  </div>
  <div className="flex-1 px-4">
    <div className="flex items-center gap-2">
      <FaLightbulb className="w-8 h-8 text-yellow-500" />
      <h3 className="text-2xl sm:text-3xl font-semibold text-yellow-500 mb-3">My Vision</h3>
    </div>
    <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
      I envision becoming a leading provider of custom digital solutions by embracing innovation and excellence
      in everything I do.
    </p>
  </div>
</section>

        {/* Approach Section */}
        <section className="bg-white dark:bg-gray-700 py-12 sm:py-16 px-6 sm:px-10 rounded-2xl shadow-2xl mb-16 transform hover:shadow-3xl transition-all duration-500">
          <h3 className="text-3xl sm:text-4xl font-bold text-center text-[#b15c1f] dark:text-yellow-500 mb-8">
            My Approach
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaClipboard className="text-blue-500 text-4xl sm:text-5xl" />,
                title: "Consultation & Discovery",
                description:
                  "I start by understanding your goals, challenges, and vision to craft a personalized strategy for success.",
              },
              {
                icon: <FaPaintBrush className="text-green-500 text-4xl sm:text-5xl" />,
                title: "Design & Prototyping",
                description:
                  "I create stunning visuals and functional prototypes to ensure your vision comes to life beautifully.",
              },
              {
                icon: <FaRocket className="text-red-500 text-4xl sm:text-5xl" />,
                title: "Development & Launch",
                description:
                  "Using the latest technologies, I bring your website to life, ensuring it’s fast, responsive, and user-friendly.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-gray-100 dark:bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl transform transition-transform duration-500 hover:scale-105"
              >
                <div className="bg-[#dbe3f0] dark:bg-[#364153] rounded-full p-6 mb-4">
                  {item.icon}
                </div>
                <h4 className="text-xl sm:text-2xl font-semibold text-blue-600 dark:text-yellow-400  mb-2">
                  {item.title}
                </h4>
                <p className="  text-base sm:text-lg text-amber-900 dark:text-gray-200">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Me Section */}
        <section className="text-center mb-16 sm:mb-20">
          <h3 className="text-3xl sm:text-4xl font-bold text-yellow-500 mb-8">
            Why Choose Me?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Personalized Solutions",
                description:
                  "I offer customized digital solutions that meet the unique needs of your business, ensuring maximum impact.",
                icon: <FaUserCheck className="text-teal-500 text-4xl sm:text-5xl mb-3" />,
              },
              {
                title: "Attention to Detail",
                description:
                  "My attention to detail ensures that every aspect of your project is meticulously planned and executed to perfection.",
                icon: <FaSearch className="text-purple-500 text-4xl sm:text-5xl mb-3" />,
              },
              {
                title: "Timely Delivery",
                description:
                  "I respect your time and am committed to delivering projects on time without compromising on quality.",
                icon: <FaClock className="text-orange-500 text-4xl sm:text-5xl mb-3" />,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg transition-transform duration-500 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex justify-center mb-3">
                  {feature.icon}
                </div>
                <h4 className="text-xl sm:text-2xl font-semibold text-yellow-500 mb-2">
                  {feature.title}
                </h4>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        
      </div>
    </div>
  );
}

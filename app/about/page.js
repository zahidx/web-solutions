"use client";

import Image from "next/image";
import { FaClipboard, FaPaintBrush, FaRocket } from 'react-icons/fa'; // Importing the icons

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-700">
      {/* About Section */}
      <div className="container mx-auto py-20 px-6 lg:px-24">
        <section className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#E69A10] to-[#E5970F] mb-6 tracking-wide">
            About Me
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 px-6 md:px-16">
            I am a passionate developer dedicated to providing high-quality web
            solutions, including web design, development, and CMS services. My
            goal is to empower businesses with impactful digital experiences.
          </p>

          <div className="flex justify-center mb-12">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <Image
                src="/profile-photo.jpg"
                alt="My Profile"
                layout="fill"
                objectFit="cover"
                className="rounded-full shadow-lg transition-all duration-500 transform hover:scale-110"
              />
            </div>
          </div>
        </section>

        {/* Mission and Vision Section */}
        <section className="flex justify-between items-start space-x-6 mb-16">
          <div className="w-1/2">
            <h3 className="text-3xl font-semibold text-[#E69A10] mb-4">My Mission</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              My mission is to deliver cutting-edge web solutions that transform
              the digital presence of my clients, focusing on quality, creativity,
              and efficiency.
            </p>
          </div>

          <div className="w-1/2">
            <h3 className="text-3xl font-semibold text-[#E69A10] mb-4">My Vision</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I envision becoming a leading provider of custom digital solutions
              by embracing innovation and excellence in everything I do.
            </p>
          </div>
        </section>

        {/* Approach Section */}
        <section className="bg-gradient-to-br from-[#F9F9F9] to-[#F1F5F9] dark:bg-gradient-to-br dark:from-[#2D3748] dark:to-[#1A202C] py-20 px-6 rounded-xl shadow-2xl mb-20">
          <h3 className="text-4xl font-bold text-center text-[#E69A10] mb-12">
            My Approach
          </h3>
          <div className="grid lg:grid-cols-3 gap-12 md:px-16">
            <div className="space-y-6 transform hover:scale-105 transition-all text-center">
              <div className="bg-gradient-to-r from-[#101828] to-[#101828] rounded-full p-5 mb-6 inline-block">
                <FaClipboard className="text-white text-3xl" /> {/* Use FaClipboard Icon */}
              </div>
              <h4 className="text-2xl font-semibold text-[#E69A10]">Consultation & Discovery</h4>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                I start by understanding your goals, challenges, and vision to
                craft a personalized strategy for success.
              </p>
            </div>
            <div className="space-y-6 transform hover:scale-105 transition-all text-center">
              <div className="bg-gradient-to-r from-[#101828] to-[#101828] rounded-full p-5 mb-6 inline-block">
                <FaPaintBrush className="text-white text-3xl" /> {/* Use FaPaintBrush Icon */}
              </div>
              <h4 className="text-2xl font-semibold text-[#E69A10]">Design & Prototyping</h4>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                I create stunning visuals and functional prototypes to ensure
                your vision comes to life beautifully.
              </p>
            </div>
            <div className="space-y-6 transform hover:scale-105 transition-all text-center">
              <div className="bg-gradient-to-r from-[#101828] to-[#101828] rounded-full p-5 mb-6 inline-block">
                <FaRocket className="text-white text-3xl" /> {/* Use FaRocket Icon */}
              </div>
              <h4 className="text-2xl font-semibold text-[#E69A10]">Development & Launch</h4>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Using the latest technologies, I bring your website to life,
                ensuring it’s fast, responsive, and user-friendly.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Me Section */}
        <section className="text-center mb-20">
          <h3 className="text-4xl font-bold text-[#E69A10] mb-12">Why Choose Me?</h3>

          <div className="grid md:grid-cols-3 gap-10 px-6 lg:px-24">
            <div className="p-10 bg-[#F9FAFB] dark:bg-[#2e3a4e] rounded-xl shadow-2xl hover:scale-105 transition-all">
              <h4 className="text-xl font-semibold text-[#E69A10] mb-4">
                Personalized Solutions
              </h4>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I offer customized digital solutions that meet the unique needs
                of your business, ensuring maximum impact.
              </p>
            </div>
            <div className="p-10 bg-[#F9FAFB] dark:bg-[#2e3a4e]  rounded-xl shadow-2xl hover:scale-105 transition-all">
              <h4 className="text-xl font-semibold text-[#E69A10] mb-4">
                Attention to Detail
              </h4>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                My attention to detail ensures that every aspect of your project
                is meticulously planned and executed to perfection.
              </p>
            </div>
            <div className="p-10 bg-[#F9FAFB] dark:bg-[#2e3a4e]  rounded-xl shadow-2xl hover:scale-105 transition-all">
              <h4 className="text-xl font-semibold text-[#E69A10] mb-4">
                Timely Delivery
              </h4>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I respect your time and am committed to delivering projects on
                time without compromising on quality.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

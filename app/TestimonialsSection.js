"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Play, Pause } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: '"ZahidWebSolution transformed our business with an incredible website!"',
    author: "John Doe, CEO",
    image: "/profile.png",
    metrics: "35% increase in traffic",
  },
  {
    id: 2,
    quote: '"We saw a 50% boost in sales after our website redesign!"',
    author: "Jane Smith, Founder",
    image: "/profile.png",
    metrics: "50% increase in sales",
  },
  {
    id: 3,
    quote: '"Our engagement skyrocketed, thanks to ZahidWebSolution!"',
    author: "Alice Johnson, Marketing Director",
    image: "/profile.png",
    metrics: "60% increase in engagement",
  },
  {
    id: 4,
    quote: '"The redesign significantly improved usability and aesthetics."',
    author: "Michael Brown, COO",
    image: "/profile.png",
    metrics: "40% increase in leads",
  },
  {
    id: 5,
    quote: '"Their attention to detail sets them apart from other agencies!"',
    author: "Emily Davis, CMO",
    image: "/profile.png",
    metrics: "30% increase in conversion rate",
  },
  {
    id: 6,
    quote: '"Working with ZahidWebSolution was a game-changer!"',
    author: "Robert Wilson, Entrepreneur",
    image: "/profile.png",
    metrics: "45% increase in overall engagement",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TestimonialsSection = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [sliderInstance, setSliderInstance] = useState(null);

  // Initialize Keen Slider and capture the instance when created.
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 2, spacing: 15 },
    breakpoints: {
      "(max-width: 768px)": { slides: { perView: 1 } },
      "(min-width: 1024px)": { slides: { perView: 3 } },
    },
    created: (instance) => setSliderInstance(instance),
  });

  // Autoplay effect using the captured instance.
  useEffect(() => {
    if (!sliderInstance || !autoPlay) return;
    const interval = setInterval(() => {
      // Call next() on the slider instance.
      sliderInstance.next();
    }, 1500);
    return () => clearInterval(interval);
  }, [sliderInstance, autoPlay]);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 relative">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-gray-800 dark:text-white"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h2>

       {/* AutoPlay Toggle Button */}
<motion.button
  onClick={() => setAutoPlay((prev) => !prev)}
  className="mb-6 inline-block bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
  variants={fadeInUp}
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
>
  {autoPlay ? (
    <Pause size={26} /> // Pause icon when autoplay is enabled
  ) : (
    <Play size={26} /> // Play icon when autoplay is disabled
  )}
</motion.button>

   {/* Navigation Buttons */}
<div className="absolute top-2/4 left-26 transform -translate-y-1/2 z-40">
  <button
    onClick={() => sliderInstance && sliderInstance.prev()}
    className="p-4 rounded-full bg-transparent border-4 border-gradient-to-r from-cyan-900 to-blue-800 shadow-xl transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:border-8 focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-opacity-50"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />

    </svg>
  </button>
</div>

<div className="absolute top-1/2 right-26 transform -translate-y-1/2 z-40">
  <button
    onClick={() => sliderInstance && sliderInstance.next()}
    className="p-4 rounded-full bg-transparent border-4 border-gradient-to-r from-pink-500 to-red-500 shadow-xl transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:border-8 focus:outline-none focus:ring-4 focus:ring-pink-400 focus:ring-opacity-50"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />

    </svg>
  </button>
</div>


        {/* Testimonial Slider */}
        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="keen-slider__slide px-3">
              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl flex flex-col items-center h-full transform transition-transform duration-500 hover:scale-105"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mb-4 border-2 border-blue-500"
                />
                <p className="text-gray-700 dark:text-gray-300 italic mb-2 text-lg">
                  {testimonial.quote}
                </p>
                <p className="font-semibold text-lg text-gray-800 dark:text-white">
                  {testimonial.author}
                </p>
                <p className="mt-2 text-sm text-green-600 dark:text-green-400">
                  {testimonial.metrics}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="mt-12"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Link
            href="/portfolio"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            See More Success Stories
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

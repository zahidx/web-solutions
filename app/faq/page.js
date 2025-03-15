"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Code, Server, Smartphone, Clock, RefreshCw, Shield, Search, CreditCard, DollarSign } from "lucide-react";

export default function FAQPage() {
  const [openIndexes, setOpenIndexes] = useState({});

  const toggleFAQ = (uniqueKey) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [uniqueKey]: !prev[uniqueKey],
    }));
  };

  const faqs = [
    { q: "What web development services do you offer?", a: "We provide full-stack web development, UI/UX design, e-commerce solutions, SEO optimization, and website maintenance.", icon: <Globe size={22} className="text-blue-400" /> },
    { q: "Do you create custom websites or use templates?", a: "We specialize in custom-built websites tailored to your brand's needs but can also work with premium templates if required.", icon: <Code size={22} className="text-green-400" /> },
    { q: "What technologies do you use?", a: "Our tech stack includes Next.js, React, Tailwind CSS, Node.js, Firebase, and Webflow for no-code solutions.", icon: <Server size={22} className="text-purple-400" /> },
    { q: "Will my website be mobile-friendly?", a: "Yes, all our websites are fully responsive and optimized for mobile, tablet, and desktop views.", icon: <Smartphone size={22} className="text-pink-400" /> },
    { q: "How long does it take to build a website?", a: "Project timelines vary based on complexity, but a standard website takes around 2-6 weeks.", icon: <Clock size={22} className="text-yellow-400" /> },
    { q: "Can you redesign my existing website?", a: "Yes, we can revamp and modernize your current website while improving performance and user experience.", icon: <RefreshCw size={22} className="text-orange-400" /> },
    { q: "Do you offer website maintenance and updates?", a: "Yes, we provide ongoing support, security updates, and performance optimizations for all websites we build.", icon: <Shield size={22} className="text-red-400" /> },
    { q: "Will my website be SEO-friendly?", a: "Yes, we implement SEO best practices, including fast loading times, structured data, and mobile-first design.", icon: <Search size={22} className="text-teal-400" /> },
    { q: "Do you integrate third-party services like payment gateways?", a: "Absolutely! We integrate Stripe, PayPal, Firebase Auth, and other third-party APIs as needed.", icon: <CreditCard size={22} className="text-indigo-400" /> },
    { q: "How much does a website cost?", a: "Pricing depends on project scope and features. Contact us for a custom quote.", icon: <DollarSign size={22} className="text-lime-400" /> },
  ];

  const leftColumn = faqs.filter((_, index) => index % 2 === 0);
  const rightColumn = faqs.filter((_, index) => index % 2 !== 0);

  return (
    <div className="min-h-screen py-16 mt-14 px-6 bg-white dark:bg-gradient-to-br dark:from-[#0F172A] dark:to-[#1E293B] text-black dark:text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-center text-5xl font-extrabold text-black dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-green-400 dark:to-blue-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Frequently Asked Questions
        </motion.h1>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            {leftColumn.map((faq, index) => {
              const uniqueKey = `left-${index}`;
              return (
                <motion.div
                  key={uniqueKey}
                  className="cursor-pointer bg-gray-100 dark:bg-[#1E293B] p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => toggleFAQ(uniqueKey)}
                >
                  <div className="w-full flex justify-between items-center text-left text-lg font-semibold text-black dark:text-green-300">
                    <div className="flex items-center gap-2">
                      {faq.icon} {faq.q}
                    </div>
                    <motion.span
                      initial={{ rotate: 0 }}
                      animate={{ rotate: openIndexes[uniqueKey] ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      ▼
                    </motion.span>
                  </div>

                  <AnimatePresence>
                    {openIndexes[uniqueKey] && (
                      <motion.p
                        className="mt-3 text-black dark:text-gray-300"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {faq.a}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          <div className="space-y-6">
            {rightColumn.map((faq, index) => {
              const uniqueKey = `right-${index}`;
              return (
                <motion.div
                  key={uniqueKey}
                  className="cursor-pointer bg-gray-100 dark:bg-[#1E293B] p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => toggleFAQ(uniqueKey)}
                >
                  <div className="w-full flex justify-between items-center text-left text-lg font-semibold text-black dark:text-green-300">
                    <div className="flex items-center gap-2">
                      {faq.icon} {faq.q}
                    </div>
                    <motion.span
                      initial={{ rotate: 0 }}
                      animate={{ rotate: openIndexes[uniqueKey] ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      ▼
                    </motion.span>
                  </div>

                  <AnimatePresence>
                    {openIndexes[uniqueKey] && (
                      <motion.p
                        className="mt-3 text-black dark:text-gray-300"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {faq.a}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { q: "What web development services do you offer?", a: "We provide full-stack web development, UI/UX design, e-commerce solutions, SEO optimization, and website maintenance." },
    { q: "Do you create custom websites or use templates?", a: "We specialize in custom-built websites tailored to your brand's needs but can also work with premium templates if required." },
    { q: "What technologies do you use?", a: "Our tech stack includes Next.js, React, Tailwind CSS, Node.js, Firebase, and Webflow for no-code solutions." },
    { q: "Will my website be mobile-friendly?", a: "Yes, all our websites are fully responsive and optimized for mobile, tablet, and desktop views." },
    { q: "How long does it take to build a website?", a: "Project timelines vary based on complexity, but a standard website takes around 2-6 weeks." },
    { q: "Can you redesign my existing website?", a: "Yes, we can revamp and modernize your current website while improving performance and user experience." },
    { q: "Do you offer website maintenance and updates?", a: "Yes, we provide ongoing support, security updates, and performance optimizations for all websites we build." },
    { q: "Will my website be SEO-friendly?", a: "Yes, we implement SEO best practices, including fast loading times, structured data, and mobile-first design." },
    { q: "Do you integrate third-party services like payment gateways?", a: "Absolutely! We integrate Stripe, PayPal, Firebase Auth, and other third-party APIs as needed." },
    { q: "How much does a website cost?", a: "Pricing depends on project scope and features. Contact us for a custom quote." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br mt-14 from-[#0F172A] to-[#1E293B] text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Frequently Asked Questions
        </motion.h1>

        <div className="mt-10 space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-[#1E293B] p-6 rounded-lg shadow-lg border border-gray-700"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <button className="w-full flex justify-between items-center text-left text-lg font-semibold text-green-300" onClick={() => toggleFAQ(index)}>
                {faq.q}
                <motion.span
                  initial={{ rotate: 0 }}
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    className="mt-3 text-gray-300"
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
          ))}
        </div>
      </div>
    </div>
  );
}

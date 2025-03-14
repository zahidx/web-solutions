"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SEOServicesPage() {
  return (
    <div className="relative min-h-screen mt-20 bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white">
      {/* Background Light Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_0%,_rgba(0,0,0,0)_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Page Title */}
        <motion.h1
          className="text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          SEO Services to Boost Your Online Presence
        </motion.h1>

        {/* Intro Section */}
        <motion.p
          className="text-center text-lg text-gray-300 max-w-3xl mx-auto mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Unlock the full potential of your website with our expert SEO strategies. We deliver measurable results through on-page, off-page, and content optimization.
        </motion.p>

        {/* SEO Services Breakdown */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-blue-400 mb-4">
            📈 Our SEO Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "On-Page SEO",
                desc: "Optimizing website structure, content, and meta tags to improve rankings and user experience.",
              },
              {
                title: "Off-Page SEO",
                desc: "Building backlinks and improving domain authority to drive traffic and enhance search engine credibility.",
              },
              {
                title: "Content Optimization",
                desc: "Crafting high-quality, keyword-optimized content that resonates with both search engines and your audience.",
              },
            ].map(({ title, desc }) => (
              <motion.div
                key={title}
                className="bg-[#1E293B] p-6 rounded-xl shadow-lg border border-gray-700"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-yellow-300">{title}</h3>
                <p className="text-gray-400 mt-2">{desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tools We Use */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-purple-400 mb-4">
            🛠️ Tools We Use
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Google Analytics", "SEMrush", "Ahrefs", "Google Search Console"].map((tool) => (
              <motion.div
                key={tool}
                className="bg-gray-800 p-4 rounded-lg text-center text-gray-200 shadow-lg border border-gray-700"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Measurable Results */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-red-400 mb-4">
            📊 Measurable Results
          </h2>
          <p className="text-gray-300">
            We focus on delivering tangible results for your website. With our tailored SEO strategies, we've helped businesses achieve:
          </p>
          <ul className="list-disc list-inside text-gray-300 mt-4">
            <li>Increased organic traffic by up to 300%</li>
            <li>Improved keyword rankings by over 50 positions</li>
            <li>Enhanced conversion rates through optimized user experiences</li>
          </ul>
        </section>

        {/* Call-to-Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link href="/contact">
            <span className="inline-block bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition cursor-pointer shadow-lg">
              🚀 Boost Your Rankings
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

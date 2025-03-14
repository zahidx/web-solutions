"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CustomDevelopmentPage() {
  return (
    <div className="relative min-h-screen mt-20 bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white">
      {/* Background Light Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_0%,_rgba(0,0,0,0)_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Page Title */}
        <motion.h1
          className="text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Custom Development Solutions
        </motion.h1>

        {/* Intro Section */}
        <motion.p
          className="text-center text-lg text-gray-300 max-w-3xl mx-auto mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          We build tailored digital solutions that drive business growth. Whether you need a custom CRM, a business application, or database integrations, we ensure scalability, flexibility, and high performance.
        </motion.p>

        {/* Custom Solutions Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-green-400 mb-4">
            🔧 Custom Solutions We Offer
          </h2>
          <p className="text-gray-300 mb-4">
            Our custom-built solutions are designed to fit your business needs precisely. Here’s what we specialize in:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CRM Systems */}
            <motion.div
              className="bg-[#1E293B] p-6 rounded-xl shadow-lg border border-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src="https://via.placeholder.com/400x250" alt="CRM System" className="w-full h-48 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold text-yellow-300 mt-4">CRM Systems</h3>
              <p className="text-gray-400 mt-2">
                Empower your business with a custom-built CRM that streamlines customer interactions, automates tasks, and improves efficiency.
              </p>
            </motion.div>

            {/* Business Applications */}
            <motion.div
              className="bg-[#1E293B] p-6 rounded-xl shadow-lg border border-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src="https://via.placeholder.com/400x250" alt="Business Applications" className="w-full h-48 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold text-yellow-300 mt-4">Business Applications</h3>
              <p className="text-gray-400 mt-2">
                From workflow automation to ERP solutions, we develop custom business applications that fit your unique processes.
              </p>
            </motion.div>

            {/* Database Integrations */}
            <motion.div
              className="bg-[#1E293B] p-6 rounded-xl shadow-lg border border-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src="https://via.placeholder.com/400x250" alt="Database Integrations" className="w-full h-48 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold text-yellow-300 mt-4">Database Integrations</h3>
              <p className="text-gray-400 mt-2">
                We integrate secure and scalable database solutions that enhance your data management and business intelligence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Custom Solutions? */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-blue-400 mb-4">
            🔥 Why Choose Custom Development?
          </h2>
          <p className="text-gray-300 mb-4">
            Custom-built solutions offer unmatched flexibility, scalability, and efficiency. Here’s why businesses opt for custom development:
          </p>
          <ul className="list-disc list-inside text-gray-300">
            <li><strong>Tailored to Your Needs:</strong> Unlike off-the-shelf software, custom solutions are designed specifically for your business operations.</li>
            <li><strong>Scalability:</strong> As your business grows, our custom software adapts and scales with you.</li>
            <li><strong>Better Security:</strong> Custom applications reduce security vulnerabilities compared to widely used third-party software.</li>
            <li><strong>Seamless Integration:</strong> We ensure smooth integration with your existing tools and software for uninterrupted workflow.</li>
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
            <span className="inline-block bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-400 transition cursor-pointer shadow-lg">
              🚀 Build Your Custom Solution
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

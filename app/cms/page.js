"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CMSPage() {
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
          CMS Solutions (WordPress & Custom CMS)
        </motion.h1>

        {/* Intro Section */}
        <motion.p
          className="text-center text-lg text-gray-300 max-w-3xl mx-auto mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          We specialize in building scalable, user-friendly CMS websites. Whether you need the versatility of WordPress or a custom CMS built to your unique needs, we've got you covered.
        </motion.p>

        {/* WordPress CMS Advantages */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-blue-400 mb-4">
            📝 WordPress CMS Advantages
          </h2>
          <p className="text-gray-300 mb-4">
            WordPress is one of the most popular CMS platforms due to its ease of use, flexibility, and extensive plugin ecosystem. Here are some key benefits:
          </p>
          <ul className="list-disc list-inside text-gray-300">
            <li><strong>Easy to Manage:</strong> WordPress provides a user-friendly interface, making it simple for non-technical users to manage their content.</li>
            <li><strong>Plugins:</strong> With thousands of plugins available, you can easily extend the functionality of your website—whether it's adding SEO tools, social media integrations, or e-commerce capabilities.</li>
            <li><strong>SEO-Friendly:</strong> WordPress is built with SEO in mind, with built-in tools and plugins that help you optimize your site for search engines.</li>
          </ul>
        </section>

        {/* Custom CMS Advantages */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-purple-400 mb-4">
            ⚙️ Custom CMS Solutions
          </h2>
          <p className="text-gray-300 mb-4">
            A custom CMS allows for greater flexibility, providing a tailored solution to your unique business needs. Here’s why you might choose a custom CMS:
          </p>
          <ul className="list-disc list-inside text-gray-300">
            <li><strong>Tailored to Your Needs:</strong> Custom-built to meet your exact requirements, ensuring your CMS is optimized for your workflow.</li>
            <li><strong>Better Flexibility:</strong> Unlike pre-built platforms, custom CMS solutions give you full control over the design, functionality, and scalability of your website.</li>
            <li><strong>Scalability:</strong> As your business grows, your custom CMS can be expanded and adapted to handle increased traffic and features, giving you long-term sustainability.</li>
          </ul>
        </section>

        {/* Showcase Client CMS Websites */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-red-400 mb-4">
            🌐 Client CMS Websites We've Built
          </h2>
          <p className="text-gray-300">
            Check out some of the CMS websites we've developed for our clients:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {/* Example 1 */}
            <motion.div
              className="bg-[#1E293B] p-6 rounded-xl shadow-lg border border-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src="https://via.placeholder.com/400x250" alt="Client Website 1" className="w-full h-48 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold text-yellow-300 mt-4">Client Website 1</h3>
              <p className="text-gray-400 mt-2">A custom CMS designed to meet the client's unique requirements and streamline their content management process.</p>
            </motion.div>

            {/* Example 2 */}
            <motion.div
              className="bg-[#1E293B] p-6 rounded-xl shadow-lg border border-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src="https://via.placeholder.com/400x250" alt="Client Website 2" className="w-full h-48 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold text-yellow-300 mt-4">Client Website 2</h3>
              <p className="text-gray-400 mt-2">A WordPress site built with SEO-friendly tools, designed to boost organic search rankings and attract more visitors.</p>
            </motion.div>

            {/* Example 3 */}
            <motion.div
              className="bg-[#1E293B] p-6 rounded-xl shadow-lg border border-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src="https://via.placeholder.com/400x250" alt="Client Website 3" className="w-full h-48 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold text-yellow-300 mt-4">Client Website 3</h3>
              <p className="text-gray-400 mt-2">A custom CMS solution designed for scalability and flexibility, ensuring long-term growth and performance.</p>
            </motion.div>
          </div>
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
              🚀 Start Your CMS Project
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

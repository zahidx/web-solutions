"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function EcommercePage() {
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
          E-Commerce Solutions
        </motion.h1>

        {/* Intro Section */}
        <motion.p
          className="text-center text-lg text-gray-300 max-w-3xl mx-auto mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          We provide complete e-commerce solutions to launch, manage, and grow your online store. Whether you choose Shopify, WooCommerce, or Magento, we ensure seamless integration and optimized performance for your e-commerce platform.
        </motion.p>

        {/* E-Commerce Platforms Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-blue-400 mb-4">
            🛒 E-Commerce Platforms
          </h2>
          <p className="text-gray-300 mb-4">
            Choose the best platform that fits your business needs. We specialize in setting up and customizing the most popular e-commerce platforms to help you sell online with ease.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Shopify */}
            <motion.div
              className="bg-[#1E293B] p-6 rounded-xl shadow-lg border border-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src="https://via.placeholder.com/400x250" alt="Shopify Platform" className="w-full h-48 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold text-yellow-300 mt-4">Shopify</h3>
              <p className="text-gray-400 mt-2">
                Shopify is a powerful, all-in-one e-commerce platform that allows you to create, manage, and scale your store effortlessly. Perfect for entrepreneurs and businesses of all sizes.
              </p>
            </motion.div>

            {/* WooCommerce */}
            <motion.div
              className="bg-[#1E293B] p-6 rounded-xl shadow-lg border border-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src="https://via.placeholder.com/400x250" alt="WooCommerce Platform" className="w-full h-48 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold text-yellow-300 mt-4">WooCommerce</h3>
              <p className="text-gray-400 mt-2">
                WooCommerce is an open-source WordPress plugin that transforms your website into a fully functioning e-commerce store. It's highly customizable, ideal for businesses with specific needs.
              </p>
            </motion.div>

            {/* Magento */}
            <motion.div
              className="bg-[#1E293B] p-6 rounded-xl shadow-lg border border-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src="https://via.placeholder.com/400x250" alt="Magento Platform" className="w-full h-48 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold text-yellow-300 mt-4">Magento</h3>
              <p className="text-gray-400 mt-2">
                Magento is a robust, enterprise-level platform that offers advanced features, scalability, and flexibility. Ideal for businesses with high-volume sales and complex requirements.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-green-400 mb-4">
            🔑 Key E-Commerce Features
          </h2>
          <p className="text-gray-300 mb-4">
            We integrate essential features to ensure your online store is secure, efficient, and user-friendly. Here are some key features that will help you succeed:
          </p>
          <ul className="list-disc list-inside text-gray-300">
            <li><strong>Secure Payments:</strong> We integrate trusted payment gateways like PayPal, Stripe, and more, ensuring safe transactions for you and your customers.</li>
            <li><strong>Inventory Management:</strong> Efficiently manage and track your products, stock levels, and order fulfillment with built-in inventory tools.</li>
            <li><strong>Custom Shopping Carts:</strong> Provide a personalized shopping experience with customizable shopping carts, designed for ease of use and to reduce cart abandonment.</li>
            <li><strong>Mobile Optimization:</strong> Ensure that your store is mobile-friendly, providing a seamless experience for customers shopping on smartphones and tablets.</li>
            <li><strong>SEO-Friendly:</strong> We optimize your e-commerce store for search engines, helping you attract organic traffic and increase sales.</li>
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
              🚀 Launch Your Store Today
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

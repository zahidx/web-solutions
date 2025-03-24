"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      className="relative bg-gray-900 text-gray-300 py-20 px-6 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Subtle Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 opacity-30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
        {/* Brand & Company Overview */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold text-white">ZahidWebSolution</h3>
          <p className="text-gray-400">
            Delivering exceptional digital solutions that drive innovation, efficiency, and growth.
          </p>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          className="space-y-3 md:ml-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4 className="text-white font-semibold">Quick Links</h4>
          <div className="flex flex-col space-y-2">
            {["Home", "Services", "Portfolio", "Case Studies", "Blog", "FAQ"].map((link) => (
              <Link key={link} href={`/${link.toLowerCase().replace(" ", "-")}`} className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-105">
                {link}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Support & Legal */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h4 className="text-white font-semibold">Support & Legal</h4>
          <div className="flex flex-col space-y-2">
            {["Help Center", "Contact Us", "Privacy Policy", "Terms of Service", "Security"].map(
              (link) => (
                <Link key={link} href={`/${link.toLowerCase().replace(" ", "-")}`} className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-105">
                  {link}
                </Link>
              )
            )}
          </div>
        </motion.div>

        {/* Newsletter & Socials */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h4 className="text-white font-semibold">Stay Updated</h4>
          <p className="text-gray-400">Subscribe for industry insights, exclusive resources, and product updates.</p>
          <div className="flex items-center bg-gray-800/50 backdrop-blur-md rounded-full overflow-hidden border border-gray-700 focus-within:border-blue-500 transition-all duration-300">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-gray-300 px-4 py-2 outline-none w-full placeholder-gray-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white rounded-r-full transition-all duration-300 flex items-center">
              Subscribe <Send size={18} className="ml-2" />
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">
            {[
              { Icon: Facebook, href: "https://facebook.com", color: "hover:text-blue-600" },
              { Icon: Twitter, href: "https://twitter.com", color: "hover:text-blue-400" },
              { Icon: Instagram, href: "https://instagram.com", color: "hover:text-pink-500" },
              { Icon: Linkedin, href: "https://linkedin.com", color: "hover:text-blue-700" },
            ].map(({ Icon, href, color }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 ${color} transition-all duration-300 transform hover:scale-110`}
              >
                <Icon size={26} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div
        className="mt-12 text-center text-gray-500 text-sm border-t border-gray-700 pt-6 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <p>
          &copy; {new Date().getFullYear()} ZahidWebSolution. All Rights Reserved. |{" "}
          <Link href="/privacy" className="text-blue-400 hover:text-blue-300 transition-all">Privacy Policy</Link>
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;

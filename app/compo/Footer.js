"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Send, ArrowRight } from "lucide-react";
import { useState, useRef } from "react";

// Magnetic Social Icon Component for a premium tactile feel
const MagneticIcon = ({ children, href, color }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-gray-800/50 backdrop-blur-sm text-gray-400 overflow-hidden group ${color}`}
    >
      <div className="absolute inset-0 w-full h-full bg-current opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">{children}</span>
    </motion.a>
  );
};

// Premium Underline Link Component with Left-To-Right Slide Animation
const PremiumLink = ({ href, children }) => {
  return (
    <Link 
      href={href}
      className="group relative inline-flex w-fit text-sm text-gray-400 hover:text-white transition-colors duration-300 py-1"
    >
      {children}
      <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-orange-500 origin-right scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 group-hover:origin-left" />
    </Link>
  );
};

const Footer = () => {
  return (
    <footer className="relative bg-[#050505] text-white pt-16 pb-6 overflow-hidden selection:bg-orange-500/30">
      {/* Ambient Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[40%] bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12 relative z-20">
          
          {/* Brand & CTA (Takes up 2 columns) */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-3">
                Let's build something <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">extraordinary.</span>
              </h2>
              <p className="text-sm text-gray-400 max-w-sm mb-6 leading-relaxed">
                Delivering exceptional digital solutions that drive innovation and growth for forward-thinking brands.
              </p>
              
              <Link href="/contact" className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm bg-white text-black font-semibold rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,106,0,0.2)]">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400 to-red-500 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out" />
                <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                  Start a Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white uppercase text-xs tracking-widest">Navigation</h4>
            <div className="flex flex-col space-y-2">
              {["Home", "Services", "Portfolio", "Case Studies", "Blog"].map((link) => (
                <PremiumLink key={link} href={`/${link.toLowerCase().replace(" ", "-")}`}>
                  {link}
                </PremiumLink>
              ))}
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white uppercase text-xs tracking-widest">Support</h4>
            <div className="flex flex-col space-y-2">
              {["Help Center", "Contact Us", "Privacy Policy", "Terms of Service", "FAQ"].map((link) => (
                <PremiumLink key={link} href={`/${link.toLowerCase().replace(" ", "-")}`}>
                  {link}
                </PremiumLink>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4 lg:col-span-1">
            <h4 className="font-semibold text-white uppercase text-xs tracking-widest">Stay Updated</h4>
            <div className="relative group max-w-[280px]">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl blur opacity-0 group-focus-within:opacity-30 transition duration-500"></div>
              <div className="relative flex flex-col gap-2 bg-white/5 backdrop-blur-md rounded-xl p-1.5 border border-white/10 shadow-xl">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-transparent text-sm text-white px-3 py-2 outline-none w-full placeholder-gray-500 focus:placeholder-gray-300 transition-colors"
                />
                <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-sm px-4 py-2.5 rounded-lg font-medium transition-all shadow-md flex items-center justify-center gap-2 group/btn">
                  Subscribe <Send size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-6 border-t border-gray-800/60 gap-4 relative z-20">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} xweb. All Rights Reserved.
          </p>
          
          <div className="flex space-x-3">
            <MagneticIcon href="#" color="hover:text-blue-500 hover:border-blue-500"><Facebook size={16} /></MagneticIcon>
            <MagneticIcon href="#" color="hover:text-sky-400 hover:border-sky-400"><Twitter size={16} /></MagneticIcon>
            <MagneticIcon href="#" color="hover:text-pink-500 hover:border-pink-500"><Instagram size={16} /></MagneticIcon>
            <MagneticIcon href="#" color="hover:text-blue-600 hover:border-blue-600"><Linkedin size={16} /></MagneticIcon>
          </div>
        </div>

      </div>
      
      {/* Subtle Background Text */}
      <div className="absolute bottom-[-1vw] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none overflow-hidden flex justify-center opacity-[0.02] select-none z-0">
        <span className="text-[12vw] font-black tracking-tighter whitespace-nowrap text-white leading-none">
          XWEB
        </span>
      </div>
    </footer>
  );
};

export default Footer;

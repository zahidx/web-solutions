"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Layers, Zap, Infinity, Hexagon } from "lucide-react";

const tabs = [
  {
    id: "innovation",
    label: "Innovation",
    icon: Zap,
    content: (
      <div className="space-y-4">
        <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">
          Pushing Boundaries
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          We leverage bleeding-edge web technologies to build interfaces that don't just work, but feel alive. Our innovation-first approach ensures your digital presence stands out.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="p-4 bg-orange-100 dark:bg-orange-900/30 rounded-xl border border-orange-200 dark:border-orange-800">
            <span className="block text-2xl font-bold text-orange-600 dark:text-orange-400">10x</span>
            <span className="text-sm text-gray-700 dark:text-gray-400">Faster Workflows</span>
          </div>
          <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-800">
            <span className="block text-2xl font-bold text-blue-600 dark:text-blue-400">99%</span>
            <span className="text-sm text-gray-700 dark:text-gray-400">Client Satisfaction</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "architecture",
    label: "Architecture",
    icon: Layers,
    content: (
      <div className="space-y-4">
        <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
          Solid Foundation
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          Behind every beautiful interface is a robust, scalable architecture. We engineer systems designed to grow with your business without compromising performance.
        </p>
        <ul className="mt-4 space-y-3">
          {["Micro-frontends ready", "Edge computing deployed", "Zero-downtime scalability"].map((item, i) => (
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
            >
              <Hexagon className="text-blue-500" size={20} />
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "synergy",
    label: "Synergy",
    icon: Infinity,
    content: (
      <div className="space-y-4">
        <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          Seamless Integration
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          Your tools should work together harmoniously. We create a synergy between design, development, and user experience that feels completely unified.
        </p>
        <div className="relative h-32 mt-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl overflow-hidden border border-purple-200 dark:border-purple-800/50 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles size={48} className="text-purple-500" />
          </motion.div>
        </div>
      </div>
    ),
  }
];

const NextLevelTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-8">
      {/* Tabs Header */}
      <div className="flex space-x-2 sm:space-x-4 p-2 bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl shadow-inner overflow-x-auto hide-scrollbar">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center gap-2 px-4 py-3 sm:px-6 sm:py-4 rounded-xl text-sm sm:text-base font-medium transition-colors duration-300 whitespace-nowrap ${
                isActive
                  ? "text-white"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl shadow-lg"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Icon size={18} className={isActive ? "text-white" : "text-gray-500 dark:text-gray-400"} />
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Tab Content Area */}
      <div className="mt-8 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-3xl p-6 sm:p-10 shadow-2xl min-h-[350px] relative overflow-hidden">
        {/* Decorative background blur */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-400/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-400/20 blur-[100px] rounded-full pointer-events-none" />
        
        <AnimatePresence mode="wait">
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative z-10 h-full flex flex-col justify-center"
                >
                  {tab.content}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NextLevelTabs;

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "How to Optimize Your Site for Speed",
    category: "How-To",
    description: "Improve website performance with expert techniques.",
    image: "/blog-speed.jpg",
    link: "/blog/optimize-site-speed",
  },
  {
    id: 2,
    title: "Best CMS for Startups in 2025",
    category: "How-To",
    description: "Explore the top CMS platforms for new businesses.",
    image: "/blog-cms.jpg",
    link: "/blog/best-cms-for-startups",
  },
  {
    id: 3,
    title: "Case Study: SEO Boost for E-commerce",
    category: "Case Study",
    description: "How we increased traffic by 200% for an online store.",
    image: "/blog-seo-case.jpg",
    link: "/blog/seo-case-study",
  },
  {
    id: 4,
    title: "Web Design Trends for 2025",
    category: "Industry Insights",
    description: "Discover cutting-edge design trends shaping the web.",
    image: "/blog-trends.jpg",
    link: "/blog/web-design-trends-2025",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
};

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = blogPosts.filter(
    (post) =>
      (selectedCategory === "All" || post.category === selectedCategory) &&
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section with Animated Gradient */}
      <motion.div
        className="relative overflow-hidden"
        animate={{
          background: ["#6a11cb", "#2575fc", "#6a11cb"],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-5xl font-extrabold text-white">
            Blog & Insights
          </h1>
          <p className="mt-4 text-2xl text-white/90">
            Stay updated with the latest trends, case studies, and tutorials.
          </p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
          {/* Category Filter */}
          <div className="flex space-x-4">
            {["All", "Industry Insights", "Case Study", "How-To"].map(
              (category) => {
                const isActive = selectedCategory === category;
                return (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition 
                      ${
                        isActive
                          ? "bg-purple-600 text-white shadow-lg"
                          : "bg-gray-200 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                      }`}
                  >
                    {category}
                  </motion.button>
                );
              }
            )}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
            <Search
              className="absolute right-5 top-3 text-gray-500 dark:text-gray-400"
              size={20}
            />
          </div>
        </div>

        {/* Blog Cards with Staggered Animations */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <AnimatePresence>
            {filteredBlogs.map((post) => (
              <motion.a
                key={post.id}
                href={post.link}
                className="relative block rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-transform"
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                exit={{ opacity: 0, y: 50 }}
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover"
                  />
                  {/* Animated overlay on hover */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0"
                    whileHover={{ opacity: 1, backgroundColor: "rgba(0,0,0,0.5)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-white text-lg font-semibold">
                      Read More
                    </span>
                  </motion.div>
                </div>
                <div className="p-6">
                  <span className="text-xs uppercase tracking-wider text-purple-500 font-semibold">
                    {post.category}
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                    {post.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}

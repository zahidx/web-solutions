// app/web-design/page.tsx (Next.js 14 - Advanced UI)

"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function WebDesignPage() {
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
          Elite Web Design & Development
        </motion.h1>

        {/* Intro Section */}
        <motion.p
          className="text-center text-lg text-gray-300 max-w-3xl mx-auto mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Transforming ideas into reality with next-level UI/UX, performance-driven web applications, and seamless interactivity.
        </motion.p>

        {/* Design Philosophy */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-blue-400 mb-4">
            🎨 Our Design Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "User-Centric Design", desc: "Every design decision is made with user experience in mind." },
              { title: "Futuristic Aesthetics", desc: "Blending modern trends with timeless elegance." },
              { title: "Performance & Accessibility", desc: "Ensuring lightning-fast speed and inclusive usability." },
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

        {/* Technologies */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-purple-400 mb-4">
            🛠️ Technologies We Use
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Node.js", "Tailwind CSS", "TypeScript"].map((tech) => (
              <motion.div
                key={tech}
                className="bg-gray-800 p-4 rounded-lg text-center text-gray-200 shadow-lg border border-gray-700"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Before & After Showcase */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-red-400 mb-4">
            🔄 Before & After: Transformations
          </h2>
          <p className="text-gray-300">
            Witness the difference as we turn outdated websites into modern masterpieces.
          </p>
          <div className="flex justify-center gap-6 mt-8">
            <motion.div
              className="w-52 h-52 bg-gray-700 flex items-center justify-center rounded-lg text-gray-400 text-lg"
            >
              Before
            </motion.div>
            <motion.div
              className="w-52 h-52 bg-yellow-500 flex items-center justify-center rounded-lg text-black font-bold text-lg"
            >
              After
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
              🚀 Get a Custom Design
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

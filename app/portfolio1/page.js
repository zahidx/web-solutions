"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Monitor, ArrowUpRight, Sparkles } from "lucide-react";

const webDesignProjects = [
  {
    title: "Corporate Brand Website",
    description: "Clean, responsive corporate site with custom typography and modern layout.",
    imageUrl: "/b1.png",
    tags: ["React", "Tailwind", "Responsive"],
    size: "large", // bento: one large
  },
  {
    title: "E-Commerce Storefront",
    description: "High-converting store with intuitive navigation and seamless checkout.",
    imageUrl: "/b2.png",
    tags: ["E-Commerce", "UI", "Webflow"],
    size: "medium",
  },
  {
    title: "Landing Page Suite",
    description: "Conversion-focused pages with clear CTAs and mobile-first design.",
    imageUrl: "/b3.png",
    tags: ["Landing", "SEO", "Figma"],
    size: "medium",
  },
];

export default function WebDesignPortfolio() {
  return (
    <main className="min-h-screen bg-[#0c0c0f] dark:bg-[#0c0c0f] text-gray-100 overflow-hidden mt-20">
      {/* Subtle grid background */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Hero – full bleed, left-aligned */}
      <section className="relative px-6 sm:px-8 lg:px-16 pt-16 lg:pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 mb-6">
            <Monitor className="w-4 h-4" />
            Web Design
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
            We craft digital
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              experiences
            </span>
            .
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-xl">
            Responsive, accessible websites that look great on every device and drive results.
          </p>
        </motion.div>
      </section>

      {/* Bento grid */}
      <section className="relative px-6 sm:px-8 lg:px-16 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-3 sm:gap-4">
            {/* Large featured card */}
            <motion.article
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="col-span-12 lg:col-span-8 row-span-2 rounded-3xl overflow-hidden group"
            >
              <div className="relative h-[320px] sm:h-[400px] lg:h-[480px] bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm">
                <Image
                  src={webDesignProjects[0].imageUrl}
                  alt={webDesignProjects[0].title}
                  fill
                  className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {webDesignProjects[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/15 text-white/90 backdrop-blur"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    {webDesignProjects[0].title}
                  </h2>
                  <p className="text-gray-300 text-sm sm:text-base mt-1 max-w-lg">
                    {webDesignProjects[0].description}
                  </p>
                </div>
              </div>
            </motion.article>

            {/* Two smaller cards */}
            {webDesignProjects.slice(1).map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="col-span-12 lg:col-span-4 rounded-3xl overflow-hidden group"
              >
                <div className="relative h-[240px] sm:h-[280px] bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-white/15 text-white/90"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                    <p className="text-gray-400 text-xs mt-0.5 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA – pill style */}
      <section className="relative px-6 sm:px-8 lg:px-16 pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-blue-500/20">
              <Sparkles className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Need a custom web design?</h3>
              <p className="text-gray-400 text-sm mt-0.5">
                Unique, responsive sites tailored to your brand.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors"
          >
            Get in touch
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

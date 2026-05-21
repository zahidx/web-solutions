"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Layout, ArrowRight, MousePointer2 } from "lucide-react";

const uiuxProjects = [
  {
    title: "SaaS Dashboard Redesign",
    description:
      "User research and wireframes led to a streamlined dashboard that reduced task completion time by 40%.",
    imageUrl: "/b1.png",
    tags: ["Figma", "User Research", "Prototyping"],
    stat: "40%",
    statLabel: "faster task completion",
  },
  {
    title: "Mobile-First Banking App",
    description:
      "End-to-end UI/UX for a fintech app: flows, design system, and accessibility compliance.",
    imageUrl: "/b2.png",
    tags: ["UX", "Design System", "WCAG"],
    stat: "WCAG 2.1",
    statLabel: "AA compliant",
  },
  {
    title: "Healthcare Patient Portal",
    description:
      "Intuitive patient journey from onboarding to appointments, with clear information hierarchy.",
    imageUrl: "/b3.png",
    tags: ["User Flows", "Wireframes", "Usability"],
    stat: "5.0",
    statLabel: "usability score",
  },
];

export default function UIUXPortfolio() {
  return (
    <main className="min-h-screen bg-[#fafaf9] dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 overflow-hidden mt-20">
      {/* Hero – centered, minimal */}
      <section className="px-6 sm:px-8 pt-20 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-4">
            <Layout className="w-4 h-4" />
            UI/UX Projects
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white max-w-3xl mx-auto">
            User-centered design that
            <span className="text-emerald-600 dark:text-emerald-400"> converts</span>.
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto">
            Research, wireframes, and design systems that improve engagement and clarity.
          </p>
        </motion.div>
      </section>

      {/* Alternating full-width case study strips */}
      <section className="pb-24">
        {uiuxProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className={`border-y border-gray-200 dark:border-gray-800 ${
              index % 2 === 0 ? "bg-white dark:bg-[#111]" : "bg-gray-50/50 dark:bg-[#0a0a0a]"
            }`}
          >
            <div
              className={`max-w-7xl mx-auto px-6 sm:px-8 py-12 lg:py-16 flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-16 items-center`}
            >
              {/* Image side */}
              <div className="w-full lg:w-[55%] shrink-0">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content side */}
              <div className="w-full lg:w-[45%]">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-4xl sm:text-5xl font-bold text-emerald-500/80 dark:text-emerald-400/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Case study
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.stat && (
                  <div className="inline-block px-4 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/50 dark:border-emerald-800/50">
                    <span className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">
                      {project.stat}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                      {project.statLabel}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="px-6 sm:px-8 pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="p-4 inline-flex rounded-2xl bg-emerald-100 dark:bg-emerald-900/20 mb-6">
            <MousePointer2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Ready to improve your product experience?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            From wireframes to design systems, we help you build interfaces users love.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition-colors"
          >
            Start a project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

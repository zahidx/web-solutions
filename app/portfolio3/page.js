"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Smartphone, ArrowRight, AppWindow } from "lucide-react";

const mobileAppsProjects = [
  {
    title: "Fitness & Wellness App",
    description:
      "Cross-platform app with workout tracking, nutrition logs, and progress dashboards. React Native.",
    imageUrl: "/b1.png",
    tags: ["React Native", "iOS", "Android"],
  },
  {
    title: "On-Demand Delivery",
    description:
      "Driver and customer apps with real-time tracking, push notifications, and secure payments.",
    imageUrl: "/b2.png",
    tags: ["Flutter", "Maps", "Push"],
  },
  {
    title: "Community & Events",
    description:
      "Event discovery, ticketing, and social features with offline support and dark mode.",
    imageUrl: "/b3.png",
    tags: ["PWA", "Offline", "Notifications"],
  },
];

export default function MobileAppsPortfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-[#0f0f14] dark:to-[#18181f] text-gray-900 dark:text-gray-100 overflow-hidden mt-20">
      {/* Hero with device hint */}
      <section className="relative px-6 sm:px-8 lg:px-16 pt-16 lg:pt-20 pb-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-violet-500/15 dark:bg-violet-500/20 mb-8"
          >
            <Smartphone className="w-10 h-10 text-violet-500 dark:text-violet-400" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Mobile Apps
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto"
          >
            Native and cross-platform apps that perform beautifully on every device.
          </motion.p>
        </div>
      </section>

      {/* App-store style cards inside phone mockups */}
      <section className="px-6 sm:px-8 lg:px-16 py-12 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {mobileAppsProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                {/* Phone frame (CSS mockup) */}
                <div className="relative w-full max-w-[280px] mx-auto">
                  <div className="aspect-[9/19] rounded-[2.5rem] border-[10px] border-gray-800 dark:border-gray-700 bg-gray-900 dark:bg-black shadow-2xl overflow-hidden">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 dark:bg-black rounded-b-2xl z-10" />
                    {/* Screen content */}
                    <div className="absolute inset-[6px] rounded-[2rem] overflow-hidden bg-gray-100 dark:bg-gray-900">
                      <div className="relative w-full h-full">
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-white font-bold text-sm drop-shadow">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card below device */}
                <div className="mt-6 w-full max-w-[320px] rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-5 shadow-lg dark:shadow-none">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[10px] font-medium rounded-lg bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA – app-store style bar */}
      <section className="px-6 sm:px-8 lg:px-16 pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-violet-500 to-purple-700 dark:from-violet-600 dark:to-purple-800 p-8 sm:p-10 text-center shadow-xl"
        >
          <AppWindow className="w-12 h-12 mx-auto mb-4 text-white/90" />
          <h3 className="text-2xl font-bold text-white mb-2">
            Have a mobile app idea?
          </h3>
          <p className="text-white/80 mb-8 max-w-md mx-auto">
            We build fast, reliable apps for iOS and Android with React Native, Flutter, or PWA.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-violet-600 font-semibold hover:bg-gray-100 transition-colors"
          >
            Discuss your app
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

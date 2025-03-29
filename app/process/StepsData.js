// StepsData.js
import { Users, Layout, Code, Rocket, Search, CheckCircle } from "lucide-react";

export const steps = [
  {
    title: "Discovery & Consultation",
    description:
      "We start by understanding your needs, goals, and audience to craft the perfect solution.",
    icon: <Users size={40} className="text-blue-400" />,
  },
  {
    title: "Design & Prototyping",
    description:
      "We create wireframes and interactive prototypes, refining based on your feedback.",
    icon: <Layout size={40} className="text-green-400" />,
  },
  {
    title: "Development",
    description:
      "Our team builds a scalable, full-stack solution, integrating frontend and backend seamlessly.",
    icon: <Code size={40} className="text-yellow-400" />,
  },
  {
    title: "Launch & Testing",
    description:
      "We deploy your project with rigorous quality assurance to ensure a smooth launch.",
    icon: <Rocket size={40} className="text-purple-400" />,
  },
  {
    title: "Ongoing Support & SEO",
    description:
      "We provide maintenance, SEO optimization, and performance monitoring for long-term success.",
    icon: <Search size={40} className="text-red-400" />,
  },
  {
    title: "Post-Launch Optimization",
    description:
      "After launch, we focus on gathering user feedback and optimizing the product based on real-world usage.",
    icon: <Rocket size={40} className="text-orange-400" />,
  },
  {
    title: "Continuous Improvement",
    description:
      "We ensure your project remains ahead of the curve by implementing continuous improvements and upgrades.",
    icon: <Code size={40} className="text-teal-400" />,
  },
];

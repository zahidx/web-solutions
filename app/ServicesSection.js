import { motion } from "framer-motion";
import { Star, CheckCircle, ArrowRight, ShoppingCart, Wrench } from "lucide-react";

const ServicesSection = () => {
  // Common animation variant
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            {
              title: "Web Design & Development",
              desc: "Modern UI/UX focused design with responsive functionality.",
              icon: <Star size={40} className="text-blue-500" />,
              link: "/web-design", // Add link to detailed page
            },
            {
              title: "SEO Services",
              desc: "Boost your online presence and drive more traffic.",
              icon: <CheckCircle size={40} className="text-blue-500" />,
              link: "/seo", // Add link to detailed page
            },
            {
              title: "Custom CMS Solutions",
              desc: "Tailored CMS solutions like WordPress and others.",
              icon: <ShoppingCart size={40} className="text-blue-500" />,
              link: "/cms-solutions", // Add link to detailed page
            },
            {
              title: "E-Commerce Solutions",
              desc: "Scalable and secure e-commerce platforms.",
              icon: <ArrowRight size={40} className="text-blue-500" />,
              link: "/ecommerce", // Add link to detailed page
            },
            {
              title: "Maintenance & Support",
              desc: "Ongoing support and maintenance for your digital assets.",
              icon: <Wrench size={40} className="text-blue-500" />,
              link: "/maintenance", // Add link to detailed page
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="p-8 bg-white dark:bg-gray-700 rounded-2xl shadow-xl text-center transition-transform"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.desc}</p>
              <a
                href={service.link}
                className="text-blue-500 mt-4 inline-block hover:text-blue-700"
              >
                Learn More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

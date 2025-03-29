import {
    FaLaptopCode,
    FaSearch,
    FaWordpress,
    FaShoppingCart,
    FaCogs,
  } from "react-icons/fa";
  
  export const services = [
    {
      title: "Web Design & Development",
      description:
        "We craft responsive, user-friendly websites using Figma, Adobe XD, and Webflow. Our tech stack includes HTML5, CSS3, JavaScript, React, and Node.js.",
      icon: <FaLaptopCode className="text-6xl text-blue-500" />,
      cta: "Get a Custom Design",
      link: "/custom",
    },
    {
      title: "SEO Services",
      description:
        "Boost your rankings with On-Page & Off-Page SEO, Content Optimization, and in-depth analytics using Google Analytics, SEMrush, and Ahrefs.",
      icon: <FaSearch className="text-6xl text-green-500" />,
      cta: "Boost Your Rankings",
      link: "/seo",
    },
    {
      title: "CMS Solutions (WordPress & Custom CMS)",
      description:
        "Leverage WordPress for easy management or get a custom CMS tailored to your unique needs for maximum flexibility.",
      icon: <FaWordpress className="text-6xl text-purple-500" />,
      cta: "Start Your CMS Project",
      link: "/cms",
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Create powerful online stores with Shopify, WooCommerce, and Magento, featuring secure payments and inventory management.",
      icon: <FaShoppingCart className="text-6xl text-yellow-500" />,
      cta: "Launch Your Store Today",
      link: "/ecommerce",
    },
    {
      title: "Custom Development",
      description:
        "Build scalable solutions like CRM systems, business applications, and database integrations, tailored to your business needs.",
      icon: <FaCogs className="text-6xl text-red-500" />,
      cta: "Build Your Custom Solution",
      link: "/custom-web",
    },
  ];
  
  export const projects = [
    {
      title: "Innovative Portfolio",
      description:
        "A dynamic showcase of our latest design and development projects, featuring interactive demos and cutting-edge tech.",
      imageUrl: "/b1.png",
    },
    {
      title: "E-Commerce Revolution",
      description:
        "A comprehensive online store that blends stunning design with powerful backend technology for a seamless shopping experience.",
      imageUrl: "/b2.png",
    },
    {
      title: "SEO Mastery",
      description:
        "A project highlighting our SEO strategies in action—optimizing content, driving organic traffic, and increasing conversions.",
      imageUrl: "/b3.png",
    },
  ];
  
  export const testimonials = [
    {
      name: "Jane Doe",
      role: "CEO, Tech Innovators",
      feedback:
        "Their innovative design and seamless development process transformed our digital presence. Highly recommended!",
      avatar: "/profile.png",
    },
    {
      name: "John Smith",
      role: "Marketing Director, BrandBoost",
      feedback:
        "The SEO and digital solutions provided were exceptional. Our traffic and conversions have never been higher.",
      avatar: "/profile.png",
    },
    {
      name: "Sara Lee",
      role: "Founder, E-Com Hub",
      feedback:
        "A reliable partner in bringing our online store vision to life with excellent support and technical expertise.",
      avatar: "/profile.png",
    },
  ];
  
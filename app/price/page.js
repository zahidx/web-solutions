'use client';

import { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const pricingPlans = [
  {
    name: "Basic",
    price: "$499",
    features: [
      "Custom Website (Up to 5 Pages)",
      "Responsive Design (Mobile-Friendly)",
      "Basic SEO Setup",
      "Contact Form Integration",
      "Social Media Links",
    ],
    missingFeatures: [
      "E-Commerce Features",
      "Advanced SEO & Analytics",
      "CMS or WordPress Customization",
      "Ongoing Support",
    ],
    cta: "Get Started",
  },
  {
    name: "Standard",
    price: "$999",
    features: [
      "Everything in Basic Plan",
      "Up to 10 Pages",
      "Custom CMS or WordPress Setup",
      "Advanced SEO Optimization",
      "Google Analytics Integration",
      "Blog Setup",
      "Basic E-Commerce (Up to 10 Products)",
    ],
    missingFeatures: ["Priority Support"],
    cta: "Choose Standard",
  },
  {
    name: "Premium",
    price: "$1,999",
    features: [
      "Everything in Standard Plan",
      "Unlimited Pages",
      "Full E-Commerce Setup",
      "Premium SEO Strategy",
      "Custom Web Application Features",
      "Speed & Security Optimization",
      "Ongoing Support (6 Months)",
      "Custom API Integrations",
      "AI Chatbot Integration",
    ],
    missingFeatures: [],
    cta: "Go Premium",
  },
  {
    name: "Custom Plan",
    price: "Custom Pricing",
    features: [
      "Large-scale e-commerce projects",
      "Custom SaaS applications",
      "Enterprise CMS solutions",
      "Advanced AI integrations",
    ],
    missingFeatures: [],
    cta: "Request a Quote",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Flexible Pricing for Every Business Need</h1>
        <p className="text-gray-400">
        <p className="text-gray-400">
  We offer flexible pricing plans designed to suit businesses of all sizes. Whether you&#39;re starting small or
  need an advanced solution, we have the right package for you.
</p>


        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <h2 className="text-2xl font-semibold">{plan.name}</h2>
            <p className="text-xl font-bold mt-2">{plan.price}</p>

            {/* Features List */}
            <ul className="mt-4 text-left space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-green-400">
                  <FaCheck className="text-green-500" />
                  {feature}
                </li>
              ))}
              {plan.missingFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-red-400 line-through">
                  <FaTimes className="text-red-500" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button className="mt-6 w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition">
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

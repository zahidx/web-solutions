"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ContactExtras from "./ContactExtras";
import ContactExtras2 from "./ContactExtras2";
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    serviceInterest: [],
    budgetRange: "",
    preferredContactMethod: "",
    file: null,
  });

  // Handle text, email, select, and radio inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle checkboxes for service interests
  const handleServiceChange = (e) => {
    const { value, checked } = e.target;
    let newServices = [...formData.serviceInterest];
    if (checked) {
      newServices.push(value);
    } else {
      newServices = newServices.filter((item) => item !== value);
    }
    setFormData({ ...formData, serviceInterest: newServices });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you can add logic to send an auto-response email or show a confirmation message
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form Section */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-6">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: "name", placeholder: "Your Name", type: "text" },
                  { name: "email", placeholder: "Your Email", type: "email" },
                ].map((field) => (
                  <div key={field.name} className="relative">
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required
                      className="peer w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                    <label
                      htmlFor={field.name}
                      className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-blue-500"
                    >
                      {field.placeholder}
                    </label>
                  </div>
                ))}
              </div>

              {/* Phone Number */}
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="peer w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
                <label
                  htmlFor="phone"
                  className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-blue-500"
                >
                  Your Phone
                </label>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="peer w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                  placeholder="Your Message"
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-blue-500"
                >
                  Your Message
                </label>
              </div>

              {/* Service Interest */}
              <div>
                <p className="mb-2 font-medium">Service Interest</p>
                <div className="flex flex-wrap gap-4">
                  {[
                    "Web Design",
                    "SEO Services",
                    "CMS Development",
                    "E-Commerce Solutions",
                    "Mobile App Development",
                    "Maintenance & Support",
                  ].map((service) => (
                    <label key={service} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name="serviceInterest"
                        value={service}
                        onChange={handleServiceChange}
                        className="h-4 w-4"
                      />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label htmlFor="budgetRange" className="block mb-2 font-medium">
                  Budget Range
                </label>
                <select
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Budget</option>
                  <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                  <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                  <option value="$10,000+">$10,000+</option>
                </select>
              </div>

              {/* Preferred Contact Method */}
              <div>
                <p className="mb-2 font-medium">Preferred Contact Method</p>
                <div className="flex items-center space-x-4">
                  {["Phone", "Email", "WhatsApp", "Video Call"].map((method) => (
                    <label key={method} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="preferredContactMethod"
                        value={method}
                        onChange={handleChange}
                        checked={formData.preferredContactMethod === method}
                        className="h-4 w-4"
                      />
                      <span>{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* File Upload */}
              <div>
                <label htmlFor="file" className="block mb-2 font-medium">
                  Attach File (Optional)
                </label>
                <input
                  type="file"
                  name="file"
                  onChange={handleFileChange}
                  className="w-full text-gray-900 border border-gray-300 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* reCAPTCHA Placeholder */}
              <div>
                {/* Integrate reCAPTCHA here */}
                <p className="text-sm text-gray-500">[reCAPTCHA would be here]</p>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition transform focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <ContactExtras2 />
        </div>
        <ContactExtras />
       
        
        {/* FAQ */}
      </div>
    </motion.div>
  );
}

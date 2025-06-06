"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { HiMail, HiPhone, HiUser } from "react-icons/hi";
import { FaSpinner } from "react-icons/fa";
import ContactInfo from "../compo/ContactInfo";
import CountryCodeSelect from "../compo/CountryCodeSelect";
import { sendMessage } from "../Api/firebase";
import CustomToaster from "../compo/CustomToaster";
import QRCode from "../compo/QRCode";
import { toast } from "react-hot-toast";


// InputField Component
const InputField = ({ id, name, type, value, onChange, placeholder, Icon, prefix, ...rest }) => (
  <div className="relative">
    {Icon && (
      <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700 dark:text-gray-400" />
    )}
    {prefix && (
      <span className="absolute left-12 top-1/2 transform -translate-y-1/2 bg-gray-200 dark:bg-gray-600 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-l-lg">
        {prefix}
      </span>
    )}
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      className={`peer w-full p-3 ${prefix ? 'pl-28' : 'pl-12'} border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
      placeholder={placeholder}
      required
      {...rest}
    />
  </div>
);

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectDetails: "",
    countryCode: "+1",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCountryCodeChange = (code) => {
    setFormData((prev) => ({
      ...prev,
      countryCode: code,
      phone: "",
    }));
    toast.success(`Selected country code: ${code}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendMessage(formData);
      toast.success("Project details submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        projectDetails: "",
        countryCode: "+1",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("There was an error submitting your project details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gray-100 dark:bg-gray-900 mt-20">
      <CustomToaster />

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black dark:text-white">
        Let&apos;s Craft Your <span className="text-red-500">Vision</span>
      </h2>
      <p className="text-center text-xl text-gray-600 dark:text-gray-300 mb-8">
        Share your project ideas, and we&apos;ll transform them into reality.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <ContactInfo />

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full"
        >
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                Icon={HiUser}
              />
              <InputField
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                Icon={HiUser}
              />
            </div>

            <InputField
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              Icon={HiMail}
            />

            <div>
              <CountryCodeSelect
                value={formData.countryCode}
                onChange={handleCountryCodeChange}
              />
            </div>

            <div>
              <InputField
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone (WhatsApp)"
                Icon={HiPhone}
                prefix={formData.countryCode}
              />
            </div>

            <div className="relative">
              <textarea
                id="projectDetails"
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleChange}
                className="peer w-full p-3 pl-12 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Project Details"
                rows="4"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all focus:outline-none"
              disabled={loading}
            >
              {loading ? (
                <div className="flex justify-center items-center">
                  <FaSpinner className="animate-spin h-5 w-5 mr-3" />
                  Submitting...
                </div>
              ) : (
                "Send Project Details"
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Dynamically loaded QRCode component (client only) */}
      <div className="mt-6">
        <QRCode />
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ContactPage), { ssr: false });

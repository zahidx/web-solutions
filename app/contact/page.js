"use client";
import { useState } from 'react';
import { HiMail, HiPhone, HiUser } from 'react-icons/hi';
import ContactInfo from '../compo/ContactInfo';
import CountryCodeSelect from '../compo/CountryCodeSelect';
import QRCode from '../compo/QRCode'; // Import the QRCode component

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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectDetails: '',
    countryCode: '+1',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Update country code and clear phone input when changing the code
  const handleCountryCodeChange = (code) => {
    setFormData((prev) => ({
      ...prev,
      countryCode: code,
      phone: '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Project details submitted!');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gray-100 dark:bg-gray-900 mt-20">
      <h2 className="text-5xl font-bold text-center text-black dark:text-white">
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

            {/* Country Code Selector */}
            <div>
              <CountryCodeSelect
                value={formData.countryCode}
                onChange={handleCountryCodeChange}
              />
            </div>

            {/* Phone Number Field */}
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
            >
              Send Project Details
            </button>
          </div>
        </form>
      </div>

      {/* Use the QRCode component here */}
      <QRCode />
    </div>
  );
}

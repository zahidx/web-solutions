"use client";
import React from "react";

export default function PreferencesDetails({ register, errors, services }) {
  return (
    <fieldset className="border-t border-b border-gray-300 dark:border-gray-700 py-6">
      <legend className="text-xl font-semibold px-2 text-center">
        Preferences & Details
      </legend>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {/* Service Interest */}
        <div>
          <p className="mb-2 font-medium">Service Interest</p>
          <div className="flex flex-wrap gap-3">
            {services.map((service) => (
              <label
                key={service}
                className="flex items-center space-x-2 text-sm"
              >
                <input
                  type="checkbox"
                  value={service}
                  {...register("serviceInterest")}
                  className="h-4 w-4 accent-indigo-500"
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
            {...register("budgetRange", {
              required: "Please select a budget range",
            })}
            className="w-full px-5 py-4 border border-gray-300 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select Budget</option>
            <option value="$1,000 - $5,000">$1,000 - $5,000</option>
            <option value="$5,000 - $10,000">$5,000 - $10,000</option>
            <option value="$10,000+">$10,000+</option>
          </select>
          {errors.budgetRange && (
            <p className="text-red-500 text-xs mt-1">
              {errors.budgetRange.message}
            </p>
          )}
        </div>
      </div>

      {/* Preferred Contact Method */}
      <div className="mt-6">
        <p className="mb-2 font-medium">Preferred Contact Method</p>
        <div className="flex flex-wrap items-center gap-6">
          {["Phone", "Email", "WhatsApp", "Video Call"].map((method) => (
            <label key={method} className="flex items-center space-x-2 text-sm">
              <input
                type="radio"
                value={method}
                {...register("preferredContactMethod", {
                  required: "Select a contact method",
                })}
                className="h-4 w-4 accent-indigo-500"
              />
              <span>{method}</span>
            </label>
          ))}
        </div>
        {errors.preferredContactMethod && (
          <p className="text-red-500 text-xs mt-1">
            {errors.preferredContactMethod.message}
          </p>
        )}
      </div>
    </fieldset>
  );
}

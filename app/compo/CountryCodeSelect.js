"use client";

import { useState, useEffect, useRef } from "react";
import { countryCodes } from "./countryCodes"; // Ensure correct path
import { FaCaretDown, FaCaretUp } from "react-icons/fa"; // Importing dropdown icons

export default function CountryCodeSelect({ value, onChange }) {
    const [selected, setSelected] = useState(value || "+1");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleDropdown = (e) => {
        e.stopPropagation(); // Prevent focus from shifting
        setIsDropdownOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target) && 
                buttonRef.current && !buttonRef.current.contains(e.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (code) => {
        setSelected(code);
        onChange(code);
        setTimeout(() => setIsDropdownOpen(false), 0); // Prevent focus shift
        buttonRef.current?.focus(); // Keep focus on button
    };

    return (
        <div className="relative w-32 mr-14 z-10">
            <button
                ref={buttonRef}
                onClick={toggleDropdown}
                className="flex items-center w-full border p-3 rounded-md bg-white text-black dark:bg-gray-800 dark:text-white"
            >
                <span>{countryCodes.find((item) => item.code === selected)?.flag}</span>
                <span className="ml-2">({selected})</span>
                <span className="ml-2">
                    {isDropdownOpen ? <FaCaretUp size={14} /> : <FaCaretDown size={14} />}
                </span>
            </button>

            {isDropdownOpen && (
                <ul
                    ref={dropdownRef}
                    tabIndex={-1} // Prevent focus shift
                    className="absolute left-0 w-[300px] mt-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg max-h-60 overflow-y-auto z-20"
                >
{countryCodes.map((item, index) => (
    <li
        key={`${item.code}-${item.country}-${index}`}  // Add index to guarantee uniqueness
        className="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
        onClick={() => handleSelect(item.code)}
    >
        <span>{item.flag}</span>
        <span className="ml-2">{item.country} ({item.code})</span>
    </li>
))}

                </ul>
            )}
        </div>
    );
}

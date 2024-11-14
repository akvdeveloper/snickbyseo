import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FaqAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="mb-4 overflow-hidden rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-102"
        >
          <button
            className={`flex items-center justify-between w-full p-6 bg-gradient-to-r from-blue-900 to-gray-700 text-white focus:outline-none transition-all duration-300 ${
              openIndex === index ? "rounded-t-xl" : "rounded-xl"
            }`}
            onClick={() => handleToggle(index)}
          >
            <div className="flex items-center">
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
            <FaChevronDown
              className={`w-6 h-6 transition-transform duration-300 ${
                openIndex === index ? "transform rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`bg-white px-6 overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? "max-h-48 py-6" : "max-h-0"
            }`}
          >
            <p className="text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;

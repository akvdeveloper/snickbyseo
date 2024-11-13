"use client";
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const AccordionItem = ({ icon, title, description, isOpen, onClick }) => (
  <div className="mb-4 overflow-hidden rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-102">
    <button
      className={`flex items-center justify-between w-full p-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white focus:outline-none transition-all duration-300 ${
        isOpen ? 'rounded-t-xl' : 'rounded-xl'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center">
        <div className="bg-white rounded-full p-3 mr-4">
          {React.cloneElement(icon, { className: "w-6 h-6 text-indigo-600" })}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <FaChevronDown className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
    </button>
    <div
      className={`bg-white px-6 overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-48 py-6' : 'max-h-0'
      }`}
    >
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          {...item}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};

export default Accordion;

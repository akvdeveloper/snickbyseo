"use client";
import React, { useState } from 'react';
import { FaArrowRight, FaCode, FaPalette, FaBullhorn, FaStar } from 'react-icons/fa'; // Replacing lucide-react icons with react-icons

const Introduction = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    { icon: FaCode, name: 'IT Solutions', color: 'bg-blue-500' },
    { icon: FaPalette, name: 'Web Design', color: 'bg-pink-500' },
    { icon: FaBullhorn, name: 'Digital Marketing', color: 'bg-green-500' },
  ];

  return (
    <div className="w-full mx-auto">
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 shadow-2xl">
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <div className="w-full h-full bg-white dark:bg-gray-800 opacity-10 transform -skew-x-12"></div>
        </div>
        <div className="relative z-10 p-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-5xl font-extrabold mb-6 text-gray-900 dark:text-white leading-tight">
              Innovate. <br />
              Create. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                Dominate.
              </span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            At our agency, we offer a comprehensive range of IT and digital marketing services designed to help businesses thrive in the digital landscape. Our expert team combines technical knowledge with creative strategies to deliver innovative solutions tailored to your unique needs.
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={service.name}
                className={`${service.color} p-6 rounded-xl ${index === 2 ? 'md:col-span-2' : ''}`}
                onMouseEnter={() => setHoveredService(service.name)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <service.icon className="w-12 h-12 text-white mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4">
          <FaStar className="w-64 h-64 text-indigo-300 dark:text-blue-600 opacity-20" />
        </div>
      </div>
    </div>
  );
};

export default Introduction;

"use client";
import React, { useState } from 'react';
import { FaCode, FaLaptop, FaShieldAlt, FaCloud, FaChartLine, FaSearch, FaDollarSign, FaShareAlt, FaChartBar, FaEnvelope } from 'react-icons/fa';
import ServiceCard from '@/components/ui/ServiceCard2';

const OurService = () => {
  const [activeTab, setActiveTab] = useState('it');

  const services = {
    it: [
      { icon: <FaCode className="h-8 w-8 text-indigo-600" />, title: "Web Development & Design", description: "Custom website solutions that are responsive, user-friendly, and optimized for performance.", url: "/" },
      { icon: <FaLaptop className="h-8 w-8 text-indigo-600" />, title: "Software Development", description: "Tailored software solutions that meet specific business needs, including web and mobile applications.", url: "/" },
      { icon: <FaCloud className="h-8 w-8 text-indigo-600" />, title: "Cloud Services", description: "Cloud computing solutions that enhance collaboration, scalability, and data security.", url: "/" },
      { icon: <FaShieldAlt className="h-8 w-8 text-indigo-600" />, title: "Cybersecurity", description: "Comprehensive cybersecurity services to protect your business from online threats.", url: "/" },
      { icon: <FaChartLine className="h-8 w-8 text-indigo-600" />, title: "IT Consulting", description: "Expert consulting to align your technology with your business goals and drive digital transformation.", url: "/" },
    ],
    marketing: [
      { icon: <FaSearch className="h-8 w-8 text-indigo-600" />, title: "Search Engine Optimization (SEO)", description: "Strategies to improve your website's visibility and organic traffic through on-page and off-page SEO techniques.", url: "/" },
      { icon: <FaDollarSign className="h-8 w-8 text-indigo-600" />, title: "Pay-Per-Click (PPC) Advertising", description: "Targeted ad campaigns that drive immediate traffic and generate leads through platforms like Google Ads and social media.", url: "/" },
      { icon: <FaShareAlt className="h-8 w-8 text-indigo-600" />, title: "Social Media Marketing", description: "Building brand awareness and engaging with customers through strategic social media campaigns.", url: "/" },
      { icon: <FaChartBar className="h-8 w-8 text-indigo-600" />, title: "Content Marketing", description: "Creating and distributing valuable content to attract and engage your target audience.", url: "/" },
      { icon: <FaEnvelope className="h-8 w-8 text-indigo-600" />, title: "Email Marketing", description: "Personalized email campaigns designed to nurture leads and convert them into customers.", url: "/" },
    ],
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
      <div className="flex border-b border-gray-200">
        <button
          className={`flex-1 py-4 px-6 text-lg font-semibold transition-colors duration-200 ${
            activeTab === 'it' ? 'bg-blue-900 text-white' : 'text-gray-600 hover:bg-indigo-50'
          }`}
          onClick={() => setActiveTab('it')}
        >
          IT Services
        </button>
        <button
          className={`flex-1 py-4 px-6 text-lg font-semibold transition-colors duration-200 ${
            activeTab === 'marketing' ? 'bg-blue-900 text-white' : 'text-gray-600 hover:bg-indigo-50'
          }`}
          onClick={() => setActiveTab('marketing')}
        >
          Digital Marketing Services
        </button>
      </div>

      <div className="p-8">
        <h3 className="text-center text-3xl font-bold mb-4 text-indigo-800">
          Our {activeTab === 'it' ? 'IT' : 'Digital Marketing'} Services
        </h3>
        <p className="text-center text-gray-600 mb-8 text-lg">
          {activeTab === 'it' 
            ? "Our IT services guide you to acquire a business identity, enhance productivity, and secure your digital assets. We offer the latest technologies to deliver the best IT Solution to you which will help you to win outstanding performance in the online world."
            : "Our digital marketing services help businesses increase their online presence, attract targeted traffic, and convert leads into customers. We employ a strategic approach tailored to your audience and business objectives."}
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services[activeTab].map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              url={service.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurService;

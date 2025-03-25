"use client";
import React from 'react';
import { FaSearch, FaChartBar, FaBolt, FaSyncAlt, FaFileAlt } from 'react-icons/fa';
import Accordion from '@/components/ui/Accrodian';

const Process = () => {
  const steps = [
    { icon: <FaSearch />, title: "Discovery Phase", description: "We start by understanding your business, goals, and target audience through in-depth consultations and market research." },
    { icon: <FaChartBar />, title: "Strategy Development", description: "Based on the discovery phase, we develop a custom strategy tailored to your specific needs, outlining key objectives and actionable steps." },
    { icon: <FaBolt />, title: "Implementation", description: "Our team of IT specialists and marketing experts work together to execute the strategy, leveraging cutting-edge technologies and best practices." },
    { icon: <FaSyncAlt />, title: "Optimization", description: "We continuously monitor and optimize your campaigns or solutions to ensure the best possible performance, making data-driven adjustments as needed." },
    { icon: <FaFileAlt />, title: "Reporting", description: "We provide detailed reports and analytics to track the success of our efforts and identify opportunities for further improvement, ensuring transparency and measurable results." },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-indigo-900 text-white rounded-3xl shadow-inner my-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-indigo-800">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Process</span>
        </h2>
        <Accordion items={steps} />
      </div>
    </section>
  );
};

export default Process;

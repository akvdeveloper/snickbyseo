import React from 'react';
import { FaSearch, FaChartBar, FaBolt, FaSyncAlt, FaFileAlt } from 'react-icons/fa'; // Import react-icons

const ProcessStep = ({ icon: Icon, title, description, index }) => (
  <div className="flex items-start mb-12 group relative">
    <div className="absolute left-0 top-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
      {index + 1}
    </div>
    <div className="ml-16 bg-white rounded-lg shadow-xl p-6 transform transition-all duration-300 hover:scale-105 hover:rotate-1">
      <Icon size={32} className="text-blue-500 mb-4" />
      <h3 className="text-2xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const OurProcess = () => {  // Removed React.FC type annotation
  const steps = [
    { icon: FaSearch, title: "Discovery", description: "We start by understanding your business, goals, and target audience." },
    { icon: FaChartBar, title: "Strategy Development", description: "Based on the discovery phase, we develop a custom strategy tailored to your specific needs." },
    { icon: FaBolt, title: "Implementation", description: "Our team of IT specialists and marketing experts work together to execute the strategy." },
    { icon: FaSyncAlt, title: "Optimization", description: "We continuously monitor and optimize your campaigns or solutions to ensure the best possible performance." },
    { icon: FaFileAlt, title: "Reporting", description: "We provide detailed reports and analytics to track the success of our efforts and identify opportunities for further improvement." },
  ];

  return (
    <div className="mt-32 relative">
      <h3 className="text-4xl font-semibold mb-16 text-center text-gray-800 relative">
        Our Process
        <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500"></span>
      </h3>
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-blue-200 rounded-full"></div>
        {steps.map((step, index) => (
          <ProcessStep key={index} {...step} index={index} />
        ))}
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100 rounded-full opacity-20 filter blur-3xl animate-pulse"></div>
    </div>
  );
};

export default OurProcess;

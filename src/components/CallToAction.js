import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Use react-icons for the arrow

const CallToAction = ({title, content}) => {
  const bgColor = "bg-blue-600"; // Define constants for colors and styles
  const textColor = "text-white";
  const hoverColor = "hover:bg-blue-100";

  return (
    <section className={`py-20 ${bgColor} ${textColor}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">{title}</h2>
        <p className="text-xl mb-8">
          {content}
        </p>
        <a
          href="#"
          className={`inline-flex items-center bg-white text-blue-600 font-bold py-3 px-6 rounded-full ${hoverColor} transition duration-300`}
        >
          Get Started
          <FaArrowRight size={20} className="ml-2" />
        </a>
      </div>
    </section>
  );
};

export default CallToAction;

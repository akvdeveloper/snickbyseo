import React from 'react';
import { FaUsers, FaAward, FaSlidersH, FaBullseye } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <FaUsers size={48} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p>Our team is made up of IT experts, creative designers, digital marketing specialists, and strategists who are passionate about what they do.</p>
          </div>
          <div className="text-center">
            <FaAward size={48} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
            <p>We have helped businesses across various industries grow their online presence and increase their revenue.</p>
          </div>
          <div className="text-center">
            <FaSlidersH size={48} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tailored Solutions</h3>
            <p>We create tailored strategies that align with your specific goals, industry, and target audience.</p>
          </div>
          <div className="text-center">
            <FaBullseye size={48} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Results-Driven Approach</h3>
            <p>We focus on delivering outcomes that drive growth, improve customer engagement, and increase revenue.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

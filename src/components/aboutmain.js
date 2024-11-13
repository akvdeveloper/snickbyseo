import React, { useState } from 'react';
import { FaUsers, FaRocket, FaBullseye, FaLightbulb } from 'react-icons/fa'; // Import react-icons
import Image from 'next/image';

const AboutMain = () => {
  const [activeTab, setActiveTab] = useState('story');

  const tabs = [
    { id: 'story', label: 'Our Story' },
    { id: 'mission', label: 'Our Mission' },
    { id: 'vision', label: 'Our Vision' },
  ];

  const values = [
    { icon: <FaLightbulb />, text: "Innovation: We stay ahead by adopting the latest trends in digital marketing and IT solutions." },
    { icon: <FaUsers />, text: "Client-Centric: We focus on understanding our clients' needs to provide personalized services." },
    { icon: <FaBullseye />, text: "Transparency: We maintain open communication, ensuring clarity in every project we undertake." },
    { icon: <FaRocket />, text: "Results-Driven: We are committed to achieving measurable success for our clients." }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg shadow-2xl transform rotate-3"></div>
            <Image 
              src="/img/features/about-5.jpg" 
              alt="Team collaboration" 
              width={550}
              height={400}
              className="absolute inset-0 w-full h-96 object-cover rounded-lg shadow-2xl transform -rotate-3 transition-transform hover:rotate-0 duration-300"
            />
          </div>
          <div className="space-y-8">
            <p className="text-xl leading-relaxed text-gray-700">
              At <span className="font-semibold text-blue-600">SnickBySEO</span>, we are a full-service digital marketing and IT agency dedicated to driving online success. Our team of experts specializes in delivering innovative strategies that align with your business goals, ensuring a strong and impactful digital presence.
            </p>
            <div className="bg-white rounded-lg shadow-xl p-6 space-y-4">
              <div className="flex space-x-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="text-gray-700">
                {activeTab === 'story' && (
                  <p>SnickBySEO was founded with a goal to transform how businesses leverage digital platforms. Over the years, we have grown from a small startup to a leading agency known for our effective and comprehensive digital marketing solutions.</p>
                )}
                {activeTab === 'mission' && (
                  <p>Our mission is to empower businesses to grow their online presence through tailored digital marketing strategies and innovative IT solutions, ensuring our clients thrive in a competitive market.</p>
                )}
                {activeTab === 'vision' && (
                  <p>Our vision is to become a globally recognized digital marketing and IT agency, renowned for driving successful digital transformations and impactful online strategies.</p>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-4xl font-semibold mb-12 text-center text-gray-800">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-xl p-6 transform transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 text-blue-500 mr-4">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800">{item.text.split(':')[0]}</h4>
                </div>
                <p className="text-gray-700">{item.text.split(':')[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMain;

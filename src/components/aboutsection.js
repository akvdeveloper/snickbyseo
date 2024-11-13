"use client";

import Image from 'next/image';
import { FaDesktop, FaGlobe, FaBolt } from 'react-icons/fa'; // Using react-icons for icons

const features = [
  { icon: FaDesktop, title: 'Comprehensive Digital Solutions', description: 'Delivering all-in-one marketing and tech support' },
  { icon: FaGlobe, title: 'Global Strategy', description: 'Creating impactful strategies for clients worldwide' },
  { icon: FaBolt, title: 'Swift Implementation', description: 'Ensuring efficient and timely results' },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-lg overflow-hidden shadow-2xl group hidden md:hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-75 group-hover:opacity-90 transition-opacity duration-300"></div>
            <Image
              src="/img/features/about-4.jpg"
              alt="Digital Marketing and IT Solutions"
              width={600}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-500 transform group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-blue-900 text-2xl font-bold text-shadow-lg" style={{ textShadow: '2px 2px 0 #FFFF00, -2px 2px 0 #FFFF00, 2px -2px 0 #FFFF00' }}>
                Drive • Connect • Succeed
              </span>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">About SnickBySEO</h3>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">Empowering Digital Growth</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              At SnickBySEO, we excel in creating tailored digital marketing and IT strategies to help businesses thrive online. With a commitment to innovation, we offer web development, SEO, and social media management services, adapting to each client’s needs to achieve sustainable growth and engagement in today’s digital landscape.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <feature.icon className="w-10 h-10 text-blue-500" />
                    <h4 className="font-semibold text-gray-900 dark:text-white ml-3">{feature.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:rotate-1">
              Discover Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

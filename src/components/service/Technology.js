"use client";
import React from 'react';
import { FaCode, FaServer, FaCloud, FaDatabase, FaLayerGroup, FaPalette, FaVial } from 'react-icons/fa';

const technologyCategories = [
  {
    name: 'Frontend Development',
    icon: <FaCode className="w-8 h-8 text-blue-400" />,
    technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Vue.js', 'Angular', 'TypeScript', 'Next.js']
  },
  {
    name: 'Backend & APIs',
    icon: <FaServer className="w-8 h-8 text-green-400" />,
    technologies: ['PHP', 'Laravel', 'CodeIgniter', 'Node.js', 'Express.js', 'GraphQL', 'REST APIs', 'MongoDB', 'PostgreSQL', 'MySQL']
  },
  {
    name: 'DevOps & Cloud',
    icon: <FaCloud className="w-8 h-8 text-indigo-400" />,
    technologies: ['Docker', 'Kubernetes', 'NGINX', 'Firebase', 'Netlify', 'Vercel', 'Heroku', 'AWS', 'DigitalOcean']
  },
  {
    name: 'Testing & Automation',
    icon: <FaVial className="w-8 h-8 text-yellow-400" />,
    technologies: ['Jest', 'Cypress', 'Puppeteer']
  },
  {
    name: 'CMS & Databases',
    icon: <FaDatabase className="w-8 h-8 text-red-400" />,
    technologies: ['WordPress', 'Sanity', 'Contentful', 'Strapi', 'Prisma', 'Firebase']
  },
  {
    name: 'UI/UX Design',
    icon: <FaPalette className="w-8 h-8 text-purple-400" />,
    technologies: ['Tailwind CSS', 'Bootstrap', 'Material-UI (MUI)']
  }
];

const Technology= () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-indigo-900 text-white py-16 px-4 sm:px-6 lg:px-8 rounded-3xl shadow-2xl mt-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-4">
          Technologies We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Master</span>
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          We utilize a wide array of cutting-edge technologies to deliver high-quality web development solutions. Our expertise spans across various domains, ensuring we can tackle any project with the most suitable tools.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologyCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-filter backdrop-blur-lg hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full p-3 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {category.technologies.map((tech, techIndex) => (
                  <li key={techIndex}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-300 mt-12 max-w-3xl mx-auto">
          Whether you need a responsive website, scalable cloud services, dynamic PHP applications, or powerful web solutions, we have the tools and skills to make it happen.
        </p>
      </div>
    </div>
  );
};

export default Technology;

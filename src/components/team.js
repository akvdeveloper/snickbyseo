"use client";
import Image from 'next/image';
import { teamMembers } from '@/data/team-data';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";

// Settings for the carousel
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Team = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">Our Team</h1>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Explore the talented individuals who make our mission possible.
        </p>
        <Slider {...sliderSettings} className="gap-4"> {/* Add gap between slides */}
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="p-4"  // Add padding to each card
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: 20 }}
              transition={{ duration: 0.3 }}
            >
              <TeamMember {...member} />
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const TeamMember = ({ name, role, image, bio }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <Image
        src={image}
        alt={name}
        width={400}
        height={400}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-1">{name}</h2>
        <p className="text-gray-400 text-sm mb-3">{role}</p>
        <p className="text-gray-300 text-sm mb-4">{bio}</p>
        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook">
            <FaFacebookF className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
          </a>
          <a href="#" aria-label="Twitter">
            <FaXTwitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
          </a>
          <a href="#" aria-label="Linkedin">
            <FaLinkedinIn className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
          </a>
          <a href="#" aria-label="Github">
            <FaGithub className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team;

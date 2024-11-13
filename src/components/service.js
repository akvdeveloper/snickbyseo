// components/ServicesSection.js
"use client";

import { motion } from "framer-motion";
import { FaLaptopCode, FaCode, FaMobileAlt, FaCog, FaChartLine, FaBullhorn } from 'react-icons/fa';
import ServiceCard from "@/components/ui/ServiceCard";
import OurService from "./service/ourservice";

const services = [
  { Icon: FaLaptopCode, title: "Website Development", description: "Build dynamic, responsive websites optimized for user experience and performance." },
  { Icon: FaCode, title: "Software Development", description: "Deliver custom software solutions that align with your business goals." },
  { Icon: FaMobileAlt, title: "Mobile App Development", description: "Create powerful, user-friendly mobile applications for iOS and Android platforms." },
  { Icon: FaCog, title: "CRM/ERP Development", description: "Streamline your operations with tailored CRM and ERP systems for your business." },
  { Icon: FaChartLine, title: "Digital Marketing", description: "Increase your online presence and drive sales with strategic digital marketing solutions." },
  { Icon: FaBullhorn, title: "Branding & Promotion", description: "Create a strong brand identity and promote your business to reach the right audience." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-700 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-700 max-w-2xl mx-auto">
            Discover a range of solutions designed to grow your business and drive digital innovation.
          </p>
        </div>
{/*         
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              Icon={service.Icon} 
              title={service.title} 
              description={service.description} 
            />
          ))}
        </motion.div> */}

        <OurService />
      </div>
    </section>
  );
}

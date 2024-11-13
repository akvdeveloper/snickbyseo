"use client";

import { motion } from "framer-motion";

export default function ServiceCard({ Icon, title, description }) {
  return (
    <motion.div
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
    >
      <div className="group h-full bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all duration-300 p-6 rounded-lg overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        <Icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
          {description}
        </p>
        <button className="mt-2 px-4 py-2 border-2 border-blue-600 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 rounded-lg">
          Learn More
        </button>
      </div>
    </motion.div>
  );
}

"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa'; // Using react-icons for icons

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail(''); // Clear the input after submission
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-lg border-none shadow-xl p-8 rounded-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-extrabold mb-2">Stay Informed</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">Subscribe to our newsletter for the latest tech insights and updates.</p>
            </div>
            <form onSubmit={handleSubmit} className="flex-1 w-full max-w-md">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-white/20 border-white/30 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-300 focus:border-transparent w-full p-3 rounded-lg"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300 py-3 px-6 rounded-lg flex items-center"
                >
                  Subscribe
                  <FaPaperPlane className="ml-2 h-4 w-4" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

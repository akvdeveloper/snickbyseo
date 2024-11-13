"use client";
import React, { useState, useEffect } from 'react';

import Link from 'next/link';

const Breadcrumb = ({subtitle, content}) => {
  const [animatedText, setAnimatedText] = useState('');
  const fullText = subtitle;

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i <= fullText.length) {
        setAnimatedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  return (
      <section className="py-20 bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-800 dark:to-blue-900 text-center">
        <h1 className="relative text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          {animatedText}
          <span className="absolute top-14 left-1/2 transform -translate-x-1/2 w-60 h-1 bg-gray-300"></span>
        </h1>
        <nav className="p-3 w-full">
          <ol className="list-reset flex justify-center text-gray-600 dark:text-gray-300">
            <li>
              <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-500 dark:text-gray-400">{subtitle}</li>
          </ol>
        </nav>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
          {content}
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
          Contact Us
        </button>
      </section>
  );
};

export default Breadcrumb;



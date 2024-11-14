"use client";

import React from 'react';

export default function ServiceCard({ icon, title, description, url }) {
  return (
    <div className="bg-gradient-to-br from-white to-indigo-50 p-6 rounded-xl shadow-md transition-transform duration-300 group">
      <div className="inline-flex items-center">
        <div className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4 transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
        <h4 className="ml-4 text-xl font-semibold mb-8 text-indigo-800">{title}</h4>
      </div>
      <p className="text-gray-600">{description}</p>
      <button
        className="mt-6 px-4 py-2 border-2 border-blue-900 text-blue-900 transition-colors duration-300 rounded-lg group-hover:bg-blue-900 group-hover:text-white"
        onClick={() => window.location.href = url}
      >
        Learn More
      </button>
    </div>
  );
}

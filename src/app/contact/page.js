// src/app/contact/page.js
"use client"; // Ensure this is a Client Component

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Breadcrumb from '@/components/breadcrumb';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log('Form Data Submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  useEffect(() => {
    document.title = "Contact Us"; // Fallback for title
  }, []);

  return (
    <div className=" mx-auto">
        <Breadcrumb 
            subtitle={"Contact Us"} 
            content={"We create digital solutions that empower businesses to grow and thrive."}
        />
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact us page for inquiries" />
      </Head>
        <div className="p-6 md:p-8 lg:p-10">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Get in Touch</h1>
            <div className="flex flex-col lg:flex-row justify-between mb-8">
            {/* Contact Form */}
            <div className="lg:w-1/2 bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                    </label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="shadow border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Your Name"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                    </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="shadow border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Your Email"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                    Message
                    </label>
                    <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="shadow border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Your Message"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
                >
                    Send Message
                </button>
                </form>
            </div>

            {/* Contact Information */}
            <div className="lg:w-1/2 lg:pl-8 mt-6 lg:mt-0">
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <div className="bg-white shadow-lg rounded-lg p-6">
                <p className="text-gray-700 mb-2">Feel free to reach us at:</p>
                <p className="text-gray-700 font-semibold">Email: <a href="mailto:info@example.com" className="text-blue-600 hover:underline">info@example.com</a></p>
                <p className="text-gray-700 font-semibold">Phone: <a href="tel:+1234567890" className="text-blue-600 hover:underline">(123) 456-7890</a></p>
                <p className="text-gray-700 mt-4">Our team is here to assist you with any inquiries you may have!</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
}

export default Contact;

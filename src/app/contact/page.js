"use client"; // Ensure this is a Client Component

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Breadcrumb from "@/components/breadcrumb";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "", // New field for contact number
    message: "",
    contactReason: "", // New field for reason of contact
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.contactNo.trim()) {
      newErrors.contactNo = "Contact number is required.";
    } else if (!/^\d{10}$/.test(formData.contactNo)) {
      newErrors.contactNo = "Please enter a valid 10-digit phone number.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    }

    if (!formData.contactReason) {
      newErrors.contactReason = "Please select the reason for contacting.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
  
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      console.log('Form Data:', formData);  
      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData), 
        });
  
        const result = await response.json();
        if (response.ok) {
          setIsSubmitted(true); // Set form submission success
          setFormData({ name: "", email: "", contactNo: "", message: "", contactReason: "" });
        } else {
          alert("Failed to send the message.");
        }
      } catch (error) {
        console.error('Error:', error);
        alert("An error occurred. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(errors);
    }
    
  };
  
  useEffect(() => {
    document.title = "Contact Us"; 
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Breadcrumb
        subtitle={"Contact Us"}
        content={"We create digital solutions that empower businesses to grow and thrive."}
      />
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact us page for inquiries" />
      </Head>
      <div className="container mx-auto p-6 md:p-8 lg:p-10">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Get in Touch
        </h1>
        <div className="flex flex-col lg:flex-row justify-between gap-8">
  
          <div className="lg:w-1/2 bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-blue-600">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full py-3 px-4 rounded-lg border ${
                    errors.name
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  } focus:outline-none`}
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-2">{errors.name}</p>
                )}
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full py-3 px-4 rounded-lg border ${
                    errors.email
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  } focus:outline-none`}
                  placeholder="Your Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                )}
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="contactNo"
                >
                  Contact Number
                </label>
                <input
                  type="text"
                  id="contactNo"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  className={`w-full py-3 px-4 rounded-lg border ${
                    errors.contactNo
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  } focus:outline-none`}
                  placeholder="Your Contact Number"
                />
                {errors.contactNo && (
                  <p className="text-red-500 text-sm mt-2">{errors.contactNo}</p>
                )}
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="contactReason"
                >
                  Reason for Contact
                </label>
                <select
                  id="contactReason"
                  name="contactReason"
                  value={formData.contactReason}
                  onChange={handleChange}
                  className={`w-full py-3 px-4 rounded-lg border ${
                    errors.contactReason
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  } focus:outline-none`}
                >
                  <option value="">Select a reason</option>
                  <option value="Website Design & Development (WordPress, React JS, HTML, CSS)">
                    Website Design & Development (WordPress, React JS, HTML, CSS)
                  </option>
                  <option value="Social Media Marketing (Facebook, Instagram, LinkedIn)">
                    Social Media Marketing (Facebook, Instagram, LinkedIn)
                  </option>
                  <option value="Search Engine Optimization (On-Page, Off-Page, Technical SEO)">
                    Search Engine Optimization (On-Page, Off-Page, Technical SEO)
                  </option>
                  <option value="Paid Advertising (Meta Ads, Google Ads)">
                    Paid Advertising (Meta Ads, Google Ads)
                  </option>
                  <option value="Content Creation & Link Building Campaigns">
                    Content Creation & Link Building Campaigns
                  </option>
                  <option value="Video Editing Services for Enhanced Engagement">
                    Video Editing Services for Enhanced Engagement
                  </option>
                  <option value="Lead Generation">
                    Lead Generation
                  </option>
                  <option value="Other">Other</option>
                </select>
                {errors.contactReason && (
                  <p className="text-red-500 text-sm mt-2">{errors.contactReason}</p>
                )}
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full py-3 px-4 rounded-lg border ${
                    errors.message
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  } focus:outline-none`}
                  placeholder="Your Message"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-2">{errors.message}</p>
                )}
              </div>
                  {/* Display Thank You message after successful submission */}
                  {isSubmitted && (
                                  <p className="mt-4 text-green-600">
                                    Thank you for your message! We will get back to you soon.
                                  </p>
                                )}

              <button
                type="submit"
                className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:w-1/2 flex flex-col bg-white shadow-lg rounded-lg p-8">
             <div className="lg:w-full lg:pl-8 mt-6 lg:mt-0">
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <div className="bg-white shadow-lg rounded-lg p-6">
                <p className="text-gray-700 mb-2">Feel free to reach us at:</p>
                <p className="text-gray-700 font-semibold">Email: <a href="mailto:info@snickbyseo.com" className="text-blue-600 hover:underline">info@snickbyseo.com</a></p>
                <p className="text-gray-700 font-semibold">Email: <a href="mailto:snickbyseo@gmail.com" className="text-blue-600 hover:underline">snickbyseo@gmail.com</a></p>
                <p className="text-gray-700 font-semibold">Phone: <a href="tel:+91-8271520348" className="text-blue-600 hover:underline">+91-8271520348</a></p>
                <p className="text-gray-700 mt-4">Our team is here to assist you with any inquiries you may have!</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

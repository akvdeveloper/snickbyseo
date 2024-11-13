"use client";
import React, { useState } from "react";
import FaqAccordion from "@/components/ui/FaqAccordion";

const FAQ = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  const servicesData = [
    {
      title: "Services",
      description:
        "Our agency offers a wide range of digital marketing services designed to help your business succeed online.",
      faqs: [
        {
          question: "What types of digital marketing services are available?",
          answer:
            "We provide services such as SEO, PPC advertising, social media marketing, content creation, and website design.",
        },
      ],
    },
    {
      title: "SEO",
      description:
        "Search Engine Optimization (SEO) is essential for improving your website's visibility on search engines.",
      faqs: [
        {
          question: "What is SEO, and why is it important?",
          answer:
            "SEO helps improve your website's visibility on search engines like Google, increasing organic traffic.",
        },
        {
          question: "How long does it take to see results from SEO?",
          answer:
            "Typically, it can take 3 to 6 months to see significant results, depending on various factors.",
        },
      ],
    },
    {
      title: "PPC Advertising",
      description:
        "Pay-Per-Click (PPC) advertising allows you to drive targeted traffic to your website quickly.",
      faqs: [
        {
          question: "What is PPC advertising?",
          answer:
            "PPC is an online advertising model where advertisers pay a fee each time their ad is clicked.",
        },
        {
          question: "How do you optimize PPC campaigns?",
          answer:
            "We optimize PPC campaigns through keyword research, compelling ad copy, and continuous monitoring.",
        },
      ],
    },
    {
      title: "Social Media",
      description:
        "Social media marketing enables you to engage with your audience and build brand loyalty.",
      faqs: [
        {
          question: "How can social media benefit my business?",
          answer:
            "Social media allows for direct engagement with your audience and increases brand visibility.",
        },
        {
          question: "What platforms do you recommend for social media marketing?",
          answer:
            "Platforms like Facebook, Instagram, LinkedIn, and Twitter can be effective, depending on your audience.",
        },
      ],
    },
    {
      title: "Results & ROI",
      description:
        "Tracking results and ROI is crucial for understanding the effectiveness of your marketing efforts.",
      faqs: [
        {
          question: "What metrics should I track to measure ROI?",
          answer:
            "Important metrics include conversion rates, customer acquisition cost, and overall sales growth.",
        },
        {
          question: "How do you report on marketing performance?",
          answer:
            "We provide detailed reports on KPIs, including traffic data and conversion rates.",
        },
      ],
    },
  ];

  const handleServiceClick = (index) => {
    setActiveServiceIndex(activeServiceIndex === index ? null : index);
  };

  return (
    <section className="bg-white dark:bg-gray-900 px-4 md:px-8 lg:px-28">
      <div className="container px-6 py-12 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">
          Frequently Asked Questions
        </h1>
        <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
          <div className="lg:mx-12">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
              Table of Content
            </h1>
            <div className="mt-4 space-y-4 lg:mt-8">
              {servicesData.map((service, index) => (
                <button
                  key={index}
                  onClick={() => handleServiceClick(index)}
                  className={`block ${
                    activeServiceIndex === index
                      ? "text-blue-500 dark:text-blue-400"
                      : "text-gray-500 dark:text-gray-300"
                  } hover:underline`}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
            {activeServiceIndex !== null && (
              <FaqAccordion
                items={servicesData[activeServiceIndex].faqs.map((faq) => ({
                  title: faq.question,
                  description: faq.answer,
                }))}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

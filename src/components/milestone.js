"use client";
import React, { useRef, useEffect, useState } from "react";
import CountUp from "react-countup";
import { FaStar, FaGlobe, FaMapMarkerAlt, FaCheck } from "react-icons/fa";

const Milestone = () => {
  const data = [
    { icon: FaStar, count: 6, description: "YEARS EXPERIENCE" },
    { icon: FaGlobe, count: 100, description: "WEBSITE BUILT" },
    { icon: FaMapMarkerAlt, count: 15, description: "SERVICE LOCATIONS" },
    { icon: FaCheck, count: 35, description: "HAPPY CUSTOMERS" },
  ];

  const [startCounting, setStartCounting] = useState(false);
  const milestoneRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCounting(true);
          observer.disconnect(); // Stop observing after the first trigger
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
      }
    );

    const currentRef = milestoneRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={milestoneRef} className="flex flex-col items-center justify-center min-h-72 px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold my-10 sm:my-16 md:my-20">
        MILESTONES
      </h1>
      <div className="text-sm lg:text-3x grid grid-cols-2 gap-8 w-full max-w-4xl md:grid-cols-2 lg:grid-cols-4">
        {data.map(({ icon: Icon, count, description }, index) => (
          <div key={description} className="flex flex-col items-center">
            <Icon className="text-blue-500 text-4xl mb-2" aria-label={description} />
            <p className="text-2xl font-semibold">
              {startCounting ? <CountUp end={count} duration={2} /> : "0"}+
            </p>
            <p className="text-gray-500">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Milestone;

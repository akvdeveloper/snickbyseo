"use client";
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';

// Slide data
const slides = [
  {
    image: '/img/hero/hero-1.jpg',
    title: 'Boost Your Businesses with Digital Solutions in India',
    subtitle: 'Innovative strategies to transform ideas into digital success stories',
  },
  {
    image: '/img/hero/hero-2.jpg',
    title: 'Modern, Responsive, and SEO Friendly Web App',
    subtitle: 'Build modern, responsive, and SEO-friendly web apps to grow your online presence.',
  },
  {
    image: '/img/hero/hero-3.jpg',
    title: 'Best & Top Digital Marketing Services in India',
    subtitle: 'Increase online visibility and connect with your audience effectively',
  },
];



// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  appendDots: dots => (
    <ul className="flex justify-center mt-4 z-10">{dots}</ul> // Center the dots and ensure they are above other content
  ),
  customPaging: i => (
    <button className="w-3 h-3 mx-1 rounded-full bg-gray-500 focus:outline-none" />
  ), // Custom styles for dots
};

const HeroSlider = () => (
  <div className="hero-slider relative h-[600px] overflow-hidden mt-[4rem]">
    <Slider {...sliderSettings}>
      {slides.map(({ image, title, subtitle }, index) => (
        <div key={index} className="relative w-full h-[600px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20"> {/* Added z-20 to ensure it's above the image */}
            <div className="text-center text-white">
              <h2 className="text-5xl font-bold mb-4">{title}</h2>
              <p className="text-xl mb-8">{subtitle}</p>
              <Link href="/contact">
                <button className="px-4 py-2 border-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors duration-300">
                  Get a Free Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);

export default HeroSlider;

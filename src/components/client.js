"use client";
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const ClientsCarousel = () => {
  const clients = [
    { id: 1, src: '/img/client/ssintsch.png', alt: 'SSIS ARA' },
    { id: 2, src: '/img/client/times.jpg', alt: 'Times International School, Patna' },
    { id: 3, src: '/img/client/rsis.jpg', alt: 'Rameshwar Singh International School, Gaya' },
    { id: 4, src: '/img/client/jp-hospital.png', alt: 'JP Multi Specialist Hospital, Bhagalpur' },
    { id: 5, src: '/img/client/Govind-Metabolic.png', alt: 'Govind Metabolic Hospital, Purnia' },
    { id: 6, src: '/img/client/divya-infotech.jpg', alt: 'Divya Infratech' },
    { id: 6, src: '/img/client/divya-fun-park.jpg', alt: 'Divya Fun Park' },
  ];

  const settings = {
    dots: false, // Disable pagination dots
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Hide left and right navigation arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="py-8 bg-gray-900 px-4 lg:px-28">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-100">Our Clients</h2>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        {/* Content Section */}
        <div className="md:w-1/2 p-4 text-gray-100">
          <p className="text-xl mb-8 font-bold">Trusted by Over 100+ Clients.</p>
          <p className="text-gray-100 mb-12">
            As a Best Digital Marketing Company in India, we bring solutions to make business easier
            for small, medium, and startup business owners.
          </p>
        </div>
        {/* Slider Section */}
        <div className="md:w-1/2">
          <Slider {...settings}>
            {clients.map(client => (
              <div key={client.id} className="flex justify-center items-center p-4">
                <Image
                  src={client.src}
                  alt={client.alt}
                  className="h-26 w-auto object-contain mx-auto" // Center the image
                  height={400}
                  width={600}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ClientsCarousel;

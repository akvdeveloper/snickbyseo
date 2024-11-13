"use client";
import React from 'react';
import Image from 'next/image';
const OurClients = () => {
  const clients = [
    "/img/client/client-1.png",
    "/img/client/client-1.png",
    "/img/client/client-1.png",
    "/img/client/client-1.png",
    "/img/client/client-1.png",
    "/img/client/client-1.png",
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Clients</h2>
        <p className="text-center mb-8">
          We are proud to have worked with a diverse range of clients, from small businesses to large enterprises, across various industries.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image src={client} alt={`Client ${index + 1}`} className="max-w-full h-auto" width={200} height={100} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;

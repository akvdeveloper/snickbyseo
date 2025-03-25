"use client";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
export default function Portfolio()  {
    const data = [
      { src: '/img/portfollio/swing.jpeg', alt: 'Project 1' },
      { src: '/img/portfollio/swing.jpeg', alt: 'Project 2' },
      { src: '/img/portfollio/ssisara.jpeg', alt: 'Project 3' },
      { src: '/img/portfollio/ssisara.jpeg', alt: 'Project 4' },
      { src: '/img/portfollio/compc.jpeg', alt: 'Project 5' },
      { src: '/img/portfollio/compc.jpeg', alt: 'Project 6' },
    ];
  
    return (
      <div className="flex flex-col items-center justify-center py-10 lg:-py-16 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold my-10 sm:my-16 md:my-20">
          Portfolio
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {data.map(({ src, alt }, index) => (
            <div key={index} className="relative">
              <Image src={src} alt={alt} width={300} height={200} className="object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg">
                {alt}
              </div>
            </div>
          ))}
        </div>
        <button className="mt-8 px-4 py-2 bg-blue-500 text-white flex items-center">
          VIEW ALL
          <FaArrowRight className="ml-2" />
        </button>
      </div>
    )
};

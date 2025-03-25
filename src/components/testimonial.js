"use client";
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import Image from 'next/image';
const testimonials = [
  {
    name: "Ravi Kumar",
    role: "SEO Specialist",
    avatar: "/img/testimonial/testi-1.jpg",
    message: "Thanks to their exceptional SEO services, my website's traffic has doubled in just three months. Highly recommend their team!",
    twitterLink: "https://twitter.com/ravikumar/status/1234567890",
  },
  {
    name: "Anjali Sharma",
    role: "Content Marketer",
    avatar: "/img/testimonial/testi-2.jpg",
    message: "Their content marketing strategies are top-notch! My engagement rates have skyrocketed since I started working with them.",
    instagramLink: "https://www.instagram.com/p/1234567890",
  },
  {
    name: "Vijay Singh",
    role: "PPC Manager",
    avatar: "/img/testimonial/testi-3.jpg",
    message: "The PPC campaigns they created brought incredible ROI! I couldn't be happier with the results.",
    facebookLink: "https://www.facebook.com/vijaysingh/posts/1234567890",
  },
  {
    name: "Priya Patel",
    role: "Social Media Influencer",
    avatar: "/img/testimonial/testi-4.jpg",
    message: "The social media strategies they implemented have helped me grow my follower base significantly. Their insights are invaluable!",
    twitterLink: "https://twitter.com/priyapatel/status/1234567890",
  },
  {
    name: "Arjun Mehta",
    role: "Brand Strategist",
    avatar: "/img/testimonial/testi-5.jpg",
    message: "Their branding services helped me clarify my message and connect better with my audience. Highly effective!",
    instagramLink: "https://www.instagram.com/p/1234567890",
  },
  {
    name: "Sneha Rao",
    role: "Digital Marketing Consultant",
    avatar: "/img/testimonial/testi-6.jpg",
    message: "I am thrilled with the results from their comprehensive digital marketing services. They truly understand how to drive results!",
    facebookLink: "https://www.facebook.com/sneharao/posts/1234567890",
  },
];

const Testimonial = () => {
  return (
    <section className="pb-12 mx-auto md:pb-20 max-w-7xl">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold my-10 sm:my-16 md:my-20">
          What our clients say.
        </h1>
      <div className="gap-8 space-y-8 md:columns-2 lg:columns-3">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl shadow-gray-600/10">
            <div className="flex gap-4 items-start">
              <Image className="w-12 h-12 rounded-full" src={testimonial.avatar} alt={`${testimonial.name} avatar`} width="400" height="400" loading="lazy" />
              <div className="flex-1 flex justify-between items-start">
                <div>
                  <h6 className="text-lg font-medium text-gray-700">{testimonial.name}</h6>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
                <div className="flex gap-4">
                  {testimonial.twitterLink && (
                    <a href={testimonial.twitterLink} className="text-blue-500 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                      <FaTwitter />
                    </a>
                  )}
                  {testimonial.instagramLink && (
                    <a href={testimonial.instagramLink} className="text-blue-500 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                      <FaInstagram />
                    </a>
                  )}
                  {testimonial.facebookLink && (
                    <a href={testimonial.facebookLink} className="text-blue-500 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                      <FaFacebook />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <p className="mt-8">{testimonial.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;

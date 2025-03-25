import Breadcrumb from '@/components/breadcrumb';
import CallToAction from '@/components/CallToAction';
import ClientsCarousel from '@/components/client';
import Introduction from '@/components/service/introduction';
import OurService from '@/components/service/ourservice';
import Process from '@/components/service/Process';
import Technology from '@/components/service/Technology';
import Testimonial from '@/components/testimonial';
import React from 'react';

export const metadata = {
  title: "Best Website & Digital Marketing Services in India | SnickBySEO",
  description: "SnickBySEO is a top-rated digital marketing company in India, specializing in SEO, social media marketing, content strategy, and paid ads. Boost your online presence with our expert services for higher traffic, conversions, and ROI."
};
const ServicePage = () => {
  return (
    <>
      {/* Breadcrumb */}
        <Breadcrumb 
            subtitle="Services" 
            content="Empowering Your Business with Tailored IT and Digital Marketing Solutions"
        />
        <Introduction />
        <div className="max-w-7xl mx-auto mt-16 ">
          <h1 className="text-5xl font-extrabold text-center text-indigo-800 mb-12">
            Empowering Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Digital Journey</span>
          </h1>
          <OurService />
          <Technology />
          <Process />
        </div>
        
        <ClientsCarousel />
        <Testimonial />
        <CallToAction
          title={"Get Started Today!"}
          content={"Ready to elevate your business with our IT and digital marketing services? Contact us today to discuss how we can help you achieve your goals. Let's transform your vision into reality!"}
        />
      {/* Additional content sections for the About page */}
    </>
  );
};

export default ServicePage;

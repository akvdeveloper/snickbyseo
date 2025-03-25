"use client";
import Head from 'next/head';
import Breadcrumb from '@/components/breadcrumb';
import AboutMain from '@/components/aboutmain';
import CallToAction from '@/components/CallToAction';
import ClientTestimonials from '@/components/ClientTestimonial';
import OurProcess from '@/components/OurProcess';
import WhyChooseUs from '@/components/WhyChooseUs';
import Portfolio from '@/components/portfolio';

export default function About() {
  return (
    <div className="mx-auto">
      <Breadcrumb 
        subtitle="About Us" 
        content="Welcome to our institution, where we strive for excellence in education and research."
      />
      <AboutMain />
      <WhyChooseUs />
      <OurProcess />
      <Portfolio />
      <ClientTestimonials />
      <CallToAction
        title={"Ready to Grow Your Business?"}
        content={"Let's work together to create innovative solutions that drive real results."}
      />
    </div>
  );
}



import AboutSection from "@/components/aboutsection";
import Blogsection from "@/components/blogsection";
import ClientsCarousel from "@/components/client";
import FAQ from "@/components/faq";
import HeroSlider from "@/components/hero";
import IndustriesSection from "@/components/industry";
import Milestone from "@/components/milestone";
import Newsletter from "@/components/newslatter";
import Portfolio from "@/components/portfolio";
import OurService from "@/components/service/ourservice";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
   <>
      <HeroSlider />
      <AboutSection />
      <section className="container mx-auto  lg:px-4 py-16">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-700 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-700 max-w-2xl mx-auto">
            Find the best IT and Digital Marketing solutions to grow your business into the world.
            </p>
          </div>
          <OurService />
      </section>
      <IndustriesSection />
      <Milestone />
      <Portfolio />
      <ClientsCarousel />
      <Testimonial />
      <FAQ />
      <Blogsection />
      <Newsletter />
   </>
  );
}

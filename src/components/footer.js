"use client";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaHome,
} from "react-icons/fa";


function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-r from-blue-900 to-gray-700 text-white py-10">
        <div className="flex items-center justify-center border-b-2 border-white/20 pb-6">
          <div className="me-12 hidden lg:block">
            <span className="text-lg font-semibold">Connect with us:</span>
          </div>
          <SocialIcons />
        </div>
        <div className="mx-10 lg:mx-16 py-10 text-center md:text-left">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <FooterSection title="We Are Serving">
              <FooterLink text="India" />
              <FooterLink text="UK" />
              <FooterLink text="Australia" />
              <FooterLink text="USA" />
              <div className="flex justify-center md:justify-start mt-4 space-x-4">
                <a href="#" className="text-white hover:text-yellow-300 transition duration-300">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-white hover:text-yellow-300 transition duration-300">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="text-white hover:text-yellow-300 transition duration-300">
                  <FaTwitter />
                </a>
                <a href="#" className="text-white hover:text-yellow-300 transition duration-300">
                  <FaInstagram />
                </a>
              </div>
            </FooterSection>
            
            <FooterSection title="Services">
              <FooterLink text="SEO for Small Business" />
              <FooterLink text="Social Media Optimization" />
              <FooterLink text="Web Portal Development" />
              <FooterLink text="Mobile Application Development" />
              <FooterLink text="Google My Business" />
            </FooterSection>
            
            <FooterSection title="Packages">
              <FooterLink text="SEO Packages" />
              <FooterLink text="One Time SEO Packages" />
              <FooterLink text="SMO Packages" />
              <FooterLink text="Web Designing Packages" />
              <FooterLink text="Content Writing Packages" />
              <FooterLink text="Bad Link Removal Packages" />
            </FooterSection>
            
            <FooterSection title="Contact Info">
              <ContactInfo />
              <div className="mt-4">
              <Image 
  src="/img/logo/channel-partner.png" 
  alt="Google Partner" 
  width={250} 
  height={50} 
  className="mb-2" 
  style={{ width: "auto", height: "auto" }}
/>
<Image 
  src="/img/logo/meta-partner.png" 
  alt="Meta Ads"  
  width={200}       
  height={80}         
  style={{ width: "auto", height: "auto" }} 
/>


              </div>
            </FooterSection>
          </div>
        </div>
        <div className="bg-gray-900 text-white py-4 text-center border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6">
            <Link href="/about" className="text-sm hover:underline">
              About
            </Link>
            <Link href="/services" className="text-sm hover:underline">
              IT Services
            </Link>
            <Link href="/outsourcing" className="text-sm hover:underline">
              Out Sourcing
            </Link>
            <Link href="/support" className="text-sm hover:underline">
              Customer Support
            </Link>
            <Link href="/accessibility" className="text-sm hover:underline">
              Accessibility
            </Link>
            <Link href="/disclaimer" className="text-sm hover:underline">
              Disclaimer
            </Link>
            <Link href="/privacy-policy" className="text-sm hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="text-sm hover:underline">
              Terms & Conditions
            </Link>
          </div>
          <div className="mt-4 text-sm">
            <span>Copyright © 2019 All Rights Reserved | </span>
            <Link href="/" className="font-semibold hover:underline">
              SnickBySEO
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

function SocialIcons() {
  const icons = [
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FaTwitter />, href: "#" },
    { icon: <FaLinkedinIn />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
  ];

  return (
    <div className="flex justify-center">
      {icons.map((social, index) => (
        <a key={index} href={social.href} className="me-6 text-white hover:text-yellow-300 transition duration-300">
          {social.icon}
        </a>
      ))}
    </div>
  );
}

function FooterSection({ title, children }) {
  return (
    <div>
      <h6 className="mb-4 text-lg font-semibold uppercase">{title}</h6>
      {children}
    </div>
  );
}

function FooterLink({ text }) {
  return (
    <p className="mb-4 hover:underline">
      <a href="#!">{text}</a>
    </p>
  );
}

function ContactInfo() {
  const contacts = [
    { icon: <FaPhoneAlt />, text: "+91-8271520348, +91-7903108388" },
    { icon: <FaEnvelope />, text: "info@snickbyseo.com" },
    { icon: <FaHome />, text: "Gandhi Chowk, Bari Path, Mahendru, Thatheri Bazar, Lalbagh, Patna, Bihar 800006" },
  ];

  return (
    <div>
      {contacts.map((contact, index) => (
        <p key={index} className="mb-4 flex items-center justify-center md:justify-start">
          <span className="me-3">{contact.icon}</span>
          {contact.text}
        </p>
      ))}
    </div>
  );
}

export default Footer;

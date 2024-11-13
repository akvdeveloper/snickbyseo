"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaHome,
  FaEnvelope,
  FaPhoneAlt,
  FaMobileAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      {/* Footer container */}
      <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-10">
        {/* Top section with social media links */}
        <div className="flex items-center justify-center border-b-2 border-white/20 pb-6">
          <div className="me-12 hidden lg:block">
            <span className="text-lg font-semibold">Connect with us:</span>
          </div>
          <SocialIcons />
        </div>

        {/* Main content of the footer */}
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <FooterSection title="SnickBySEO">
              <p className="text-sm">
                SnickBySEO is a comprehensive IT company offering a range of services, including digital marketing solutions. 
                We help businesses establish a strong online presence through website development, SEO, and social media management. 
                Our integrated digital strategies drive growth and engagement, focusing on tailored marketing plans to meet each client’s unique needs, 
                ensuring impactful results in the ever-evolving digital landscape.
              </p>
            </FooterSection>
            <FooterSection title="Products">
              <FooterLink text="Angular" />
              <FooterLink text="React" />
              <FooterLink text="Vue" />
              <FooterLink text="Laravel" />
            </FooterSection>
            <FooterSection title="Useful links">
              <FooterLink text="Pricing" />
              <FooterLink text="Settings" />
              <FooterLink text="Orders" />
              <FooterLink text="Help" />
            </FooterSection>
            <FooterSection title="Contact">
              <ContactInfo />
            </FooterSection>
          </div>
        </div>

        {/* Copyright section */}
        <div className="bg-gray-800 p-4 text-center">
          <span>© 2023 Copyright:</span>
          <a className="font-semibold hover:underline" href="https://tw-elements.com/">
            SnickBySEO
          </a>
        </div>
      </footer>
    </>
  );
}

// Component for social icons
function SocialIcons() {
  const icons = [
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FaTwitter />, href: "#" },
    { icon: <FaLinkedinIn />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaGithub />, href: "#" },
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

// Component for footer section
function FooterSection({ title, children }) {
  return (
    <div>
      <h6 className="mb-4 text-lg font-semibold uppercase">{title}</h6>
      {children}
    </div>
  );
}

// Component for footer links
function FooterLink({ text }) {
  return (
    <p className="mb-4 hover:underline">
      <a href="#!">{text}</a>
    </p>
  );
}

// Component for contact information
function ContactInfo() {
  const contacts = [
    { icon: <FaHome />, text: "New York, NY 10012, US" },
    { icon: <FaEnvelope />, text: "info@example.com" },
    { icon: <FaPhoneAlt />, text: "+01 234 567 88" },
    { icon: <FaMobileAlt />, text: "+01 234 567 89" },
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
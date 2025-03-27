"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-200 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3" onClick={closeMenu}>
          <Image src="/img/logo/logo.png" alt="SnickBySEO" width={160} height={80} style={{ height: "auto" }} />
        </Link>

        {/* Mobile Menu Button */}
        <div className="flex md:order-2 space-x-3 md:space-x-0">
          <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2">
            Get Quotes
          </button>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-blue-950 rounded-lg md:hidden hover:bg-gray-100"
            aria-controls="navbar-sticky"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        {/* Dropdown Menu with Tailwind Animation */}
        <div
          className={`absolute top-full left-0 w-full md:hidden bg-white border-t border-gray-200 shadow-md transition-all duration-300 ease-in-out transform ${
            menuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
          } origin-top`}
        >
          <ul className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "block py-2 px-3 rounded text-lg transition-all",
                    pathname === item.href
                      ? "text-orange-500 font-semibold"
                      : "text-blue-950 hover:text-orange-500 hover:font-semibold"
                  )}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-lg transition-all",
                pathname === item.href ? "text-orange-500 font-semibold" : "text-blue-950 hover:text-orange-500 hover:font-semibold"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Header;

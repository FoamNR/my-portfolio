"use client";

import { useState } from "react";
import { CodeBracketIcon } from "@/components/icons";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#131418]/90 border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo: </> Nonthawat.dev */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="text-blue-500 font-bold group-hover:scale-110 transition-transform">
            <CodeBracketIcon className="w-6 h-6 stroke-[3]" />
          </div>
          <span className="text-white font-extrabold text-xl tracking-tight">
            Nonthawat <span className="text-blue-500">.dev</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Hire Me CTA Button */}
          <a
            href="mailto:Foamnonthawat@gmail.com"
            className="px-4 py-2 rounded-full text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/20 transition-all hover:scale-105"
          >
            Hire Me
          </a>

          {/* Hamburger Icon Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors"
            aria-label="Toggle menu"
          >
            <span className="w-6 h-[2px] bg-white rounded-full"></span>
            <span className="w-6 h-[2px] bg-white rounded-full"></span>
          </button>
        </nav>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 cursor-pointer"
          aria-label="Mobile menu"
        >
          <span className="w-6 h-[2px] bg-white rounded-full"></span>
          <span className="w-6 h-[2px] bg-white rounded-full"></span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#181a20] border-b border-white/10 px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-300 font-medium py-2 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:Foamnonthawat@gmail.com"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center py-2.5 rounded-lg bg-blue-600 text-white font-bold text-sm"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}


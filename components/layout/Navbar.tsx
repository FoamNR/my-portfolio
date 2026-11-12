"use client";

import { useState } from "react";
import { CodeBracketIcon } from "@/components/icons";
import { profileData } from "@/data/portfolio";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const email = `mailto:${profileData.contact.email}`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#131418]/90 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <CodeBracketIcon className="w-6 h-6 stroke-[3] text-blue-500" />
          <span className="text-white font-extrabold text-xl tracking-tight">
            Nonthawat <span className="text-blue-500">.dev</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={email}
            className="px-4 py-2 rounded-lg text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors"
          >
            Email me
          </a>
        </nav>

        <button
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 cursor-pointer"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className="w-6 h-[2px] bg-white rounded-full" />
          <span className="w-6 h-[2px] bg-white rounded-full" />
        </button>
      </div>

      {mobileMenuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="md:hidden bg-[#181a20] border-b border-white/10 px-6 py-4 flex flex-col gap-1"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-300 font-medium py-2.5 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={email}
            onClick={() => setMobileMenuOpen(false)}
            className="mt-3 text-center py-2.5 rounded-lg bg-blue-600 text-white font-semibold text-sm"
          >
            Email me
          </a>
        </nav>
      )}
    </header>
  );
}

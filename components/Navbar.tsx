// components/Navbar.tsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isProjectsPage = pathname === "/projects";

  return (
    <header className="sticky top-0 z-50 bg-canvas/80 backdrop-blur-md border-b border-borderSubtle/40">
      <nav className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[116px] h-24 flex items-center justify-between">
        
        {/* 1. Left: Logo / Name */}
        <Link 
          href="/" 
          className="font-heading font-bold text-xl tracking-tight text-heading hover:opacity-80 transition"
        >
          Deemantha Gunasekara<span className="text-accent">.</span>
        </Link>

        {/* 2. Middle: Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          <Link 
            href="/projects" 
            className={`text-[15px] transition relative pb-1 ${
              isProjectsPage 
                ? "text-accent font-medium" 
                : "text-muted hover:text-heading"
            }`}
          >
            Projects
            {/* Active neon underline matching your Figma design */}
            {isProjectsPage && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent" />
            )}
          </Link>

          {/* Links back to the home page's About section */}
          <Link 
            href="/#about" 
            className="text-[15px] text-muted hover:text-heading transition"
          >
            About
          </Link>

          {/* Scrolls to the contact footer on the current page */}
          <Link 
            href="#contact" 
            className="text-[15px] text-muted hover:text-heading transition"
          >
            Contact
          </Link>
        </div>

        {/* 3. Right: Download CV Pill Button */}
        <a
          href="/cv.pdf"
          download
          className="bg-accent text-black font-medium text-[15px] px-6 py-2.5 rounded-full hover:opacity-90 active:scale-95 transition"
        >
          Download CV &darr;
        </a>

      </nav>
    </header>
  );
}
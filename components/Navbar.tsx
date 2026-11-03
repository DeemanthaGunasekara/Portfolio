import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-canvas/80 backdrop-blur-md border-b border-borderSubtle/40">
      <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* 1. Left: Logo / Name */}
        <Link 
          href="/" 
          className="font-heading font-bold text-xl tracking-tight text-heading hover:opacity-80 transition"
        >
          Deemantha Gunasekara.
        </Link>

        {/* 2. Middle: Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="#projects" 
            className="text-[15px] text-muted hover:text-heading transition"
          >
            Projects
          </Link>
          <Link 
            href="#about" 
            className="text-[15px] text-muted hover:text-heading transition"
          >
            About
          </Link>
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
          className="bg-accent text-black font-medium text-[15px] px-5 py-2 rounded-full hover:opacity-90 active:scale-95 transition"
        >
          Download CV &darr;
        </a>

      </nav>
    </header>
  );
}
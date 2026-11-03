import React from "react";

export default function Hero() {
  return (
    <section className="pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="flex flex-col gap-8">
        
        {/* 1. Small Caps Kicker */}
        <p className="text-[12px] tracking-[0.14em] uppercase text-accent font-medium">
          IT UNDERGRADUATE &middot; SOFTWARE ENGINEERING &middot; CLOUD &amp; DEVOPS &middot;
        </p>

        {/* 2. Main Display Headline */}
        <h1 className="font-heading font-medium tracking-tight leading-[0.95] text-heading text-5xl sm:text-7xl md:text-8xl lg:text-[112px]">
          I learn <span className="text-accent">by building</span> <br className="hidden sm:inline" />
          things that <br className="hidden sm:inline" />
          actually work.
        </h1>

        {/* 3. Subtitle Paragraph */}
        <p className="text-base sm:text-lg md:text-[18px] text-muted leading-relaxed max-w-2xl font-normal">
          IT undergraduate passionate about Full-Stack development and Cloud &amp; DevOps. 
          Building responsive frontends and resilient backends with React, Node.js, and Java, 
          while actively exploring Docker containerization and AWS pipelines.
        </p>

        {/* 4. Action Row (Buttons & Socials) */}
        <div className="flex flex-wrap items-center gap-6 pt-4">
          {/* Download CV Button */}
          <a
            href="/cv.pdf"
            download
            className="bg-accent text-black font-medium text-[15px] px-6 py-3 rounded-full hover:opacity-90 active:scale-95 transition"
          >
            Download CV &darr;
          </a>

          {/* Social Links */}
          <a
            href="https://www.linkedin.com/in/deemantha-gunasekara"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] text-muted hover:text-heading transition flex items-center gap-1"
          >
            LinkedIn &#x2197;
          </a>

          <a
            href="https://github.com/DeemanthaGunasekara"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] text-muted hover:text-heading transition flex items-center gap-1"
          >
            GitHub &#x2197;
          </a>
        </div>

      </div>
    </section>
  );
}
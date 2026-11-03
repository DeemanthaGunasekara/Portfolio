import React from "react";

export default function Hero() {
  return (
    <section className="pt-16 pb-24 md:pt-28 md:pb-36">
      <div className="flex flex-col gap-10">
        
        {/* 1. Small Caps Kicker */}
        <p className="text-[12px] tracking-[0.14em] uppercase text-accent font-medium">
          IT UNDERGRADUATE &middot; SOFTWARE ENGINEERING &middot; CLOUD &amp; DEVOPS &middot;
        </p>

        {/* 2. Main Display Headline */}
        <h1 className="font-heading font-medium tracking-tight leading-[0.95] text-heading text-5xl sm:text-7xl md:text-8xl lg:text-[116px] xl:text-[124px]">
          I learn <span className="text-accent">by building</span> <br className="hidden sm:inline" />
          things that <br className="hidden sm:inline" />
          actually work.
        </h1>

        {/* 3. 2-Column Row: Paragraph on Left, Action Links on Right */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pt-4">
          
          {/* Left Column: Subtitle */}
          <p className="text-base sm:text-lg md:text-[18px] text-muted leading-relaxed max-w-xl font-normal">
            IT undergraduate passionate about Full-Stack development and Cloud &amp; DevOps. 
            Building responsive frontends and resilient backends with React, Node.js, and Java, 
            while actively exploring Docker containerization and AWS pipelines.
          </p>

          {/* Right Column: Buttons & Socials aligned to right */}
          <div className="flex flex-wrap items-center gap-6 shrink-0 md:justify-end">
            <a
              href="/cv.pdf"
              download
              className="bg-accent text-black font-medium text-[15px] px-6 py-3 rounded-full hover:opacity-90 active:scale-95 transition"
            >
              Download CV &darr;
            </a>

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

      </div>
    </section>
  );
}

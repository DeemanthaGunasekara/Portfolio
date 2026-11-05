import React from "react";

const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/deemantha-gunasekara" },
  { name: "GitHub", url: "https://github.com/DeemanthaGunasekara" },
  { name: "Instagram", url: "https://www.instagram.com/deemantha._/" },
  
];

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-accent text-black pt-20 pb-12 mt-20">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[116px]">
        
        {/* Top 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20">
          
          {/* Left Column: Get my CV */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="text-[12px] tracking-[0.14em] uppercase text-black/80 font-medium">
                LET&apos;S CONNECT
              </span>
              
              <h2 className="font-heading font-medium text-6xl sm:text-7xl lg:text-[88px] tracking-tight leading-[0.95] text-black my-6">
                Get my CV.
              </h2>

              <div className="pt-2">
                <a
                  href="/cv.pdf"
                  download
                  className="inline-flex items-center gap-2 bg-black text-accent font-medium text-[16px] px-8 py-4 rounded-full hover:bg-black/90 active:scale-95 transition"
                >
                  Download CV (PDF) &darr;
                </a>
              </div>
            </div>

            {/* Email Contact Line */}
            <p className="text-base sm:text-lg md:text-[20px] text-black font-normal pt-10">
              Or email me:{" "}
              <a
                href="mailto:gunasekarapdvp@email.com"
                className="underline font-medium hover:opacity-80 transition"
              >
                gunasekarapdvp@email.com
              </a>
            </p>
          </div>

          {/* Right Column: Find Me On (Socials List) */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <span className="text-[12px] tracking-[0.14em] uppercase text-black/80 font-medium mb-4">
              FIND ME ON
            </span>

            <div className="flex flex-col border-b border-black/20">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-5 border-t border-black/20 text-black hover:opacity-75 transition group text-lg sm:text-[20px]"
                >
                  <span className="font-normal">{social.name}</span>
                  <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    &#x2197;
                  </span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Sub-bar: Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-black/15 text-[14px] text-black/80">
          <p>© 2026 Deemantha Gunasekara. All rights reserved.</p>
          <a
            href="#top"
            className="flex items-center gap-1 hover:text-black transition font-medium"
          >
            Back to top &uarr;
          </a>
        </div>

      </div>
    </footer>
  );
}
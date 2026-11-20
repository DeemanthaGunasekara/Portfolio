import React from "react";

const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/deemantha-gunasekara" },
  { name: "GitHub", url: "https://github.com/DeemanthaGunasekara" },
  { name: "Instagram", url: "https://www.instagram.com/deemantha._/" },
  
];

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-accent text-black pt-10 sm:pt-12 pb-6 sm:pb-8 mt-16 sm:mt-20">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[116px]">
        
        {/* Top 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 pb-8 sm:pb-10">
          
          {/* Left Column: Get my CV */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="text-[11px] tracking-[0.14em] uppercase text-black/80 font-medium">
                LET&apos;S CONNECT
              </span>
              
              <h2 className="font-heading font-medium text-3xl sm:text-4xl lg:text-[46px] tracking-tight leading-[1] text-black my-3.5">
                Get my CV.
              </h2>

              <div className="pt-1">
                <a
                  href="/cv.pdf"
                  download
                  className="inline-flex items-center gap-2 bg-black text-accent font-medium text-[14px] px-6 py-2.5 rounded-full hover:bg-black/90 active:scale-95 transition"
                >
                  Download CV (PDF) &darr;
                </a>
              </div>
            </div>

            {/* Email Contact Line */}
            <p className="text-[14px] text-black font-normal pt-5">
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
            <span className="text-[11px] tracking-[0.14em] uppercase text-black/80 font-medium mb-3">
              FIND ME ON
            </span>

            <div className="flex flex-col border-b border-black/20">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-3 border-t border-black/20 text-black hover:opacity-75 transition group text-[15px]"
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
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5 border-t border-black/15 text-[12px] text-black/80">
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
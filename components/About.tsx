import React from "react";
import Image from "next/image";

const skills = [
  "Java",
  "React",
  "Node.js",
  "Docker",
  "TypeScript",
  "AWS",
  "Tailwind CSS",
  "Git",
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-borderSubtle/40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* 1. Left Column: Portrait Photo */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-2xl overflow-hidden border border-borderSubtle/60 bg-surface shadow-2xl">
            <Image
              src="/profile.jpg"
              alt="Deemantha Gunasekara"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* 2. Right Column: About Narrative & Skills */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          {/* Small Caps Kicker */}
          <span className="text-[12px] tracking-[0.14em] uppercase text-accent font-medium mb-6">
            ABOUT
          </span>

          {/* Decorative Quote Mark & Narrative */}
          <div className="relative mb-10">
            <span className="text-4xl text-accent font-serif leading-none select-none mr-2">
              &ldquo;
            </span>
            <div className="space-y-4 text-base sm:text-lg text-heading/90 leading-relaxed font-normal">
              <p>
               I&apos;m an IT undergraduate currently pursuing Software Engineering, 
                driven by a deep curiosity for Full-Stack development, Cloud architecture, 
                and DevOps. Starting with core programming in Java, my journey has steadily 
                evolved into crafting modern React frontends and building full-stack web applications.
 
                <br />
                <br />
                I view myself as an active learner first. I love the process of experimenting, 
                breaking things to understand how they actually work under the hood, and leveling 
                up my engineering skills with every single commit.
              </p>
              
            </div>
            <div className="flex justify-end mt-2">
              <span className="text-4xl text-accent font-serif leading-none select-none">
                &rdquo;
              </span>
            </div>
            
          </div>

          {/* Core Skills Pills */}
          <div>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-surface border border-borderSubtle text-muted text-[13px] px-4 py-1.5 rounded-full hover:border-slate-700 hover:text-heading transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
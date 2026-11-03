import React from "react";

interface Project {
  number: string;
  title: string;
  description: string;
  tools: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
}

const projects: Project[] = [
  {
    number: "01",
    title: "SiteTrace - Cloud SaaS Platform",
    description:
      "Architecting an end-to-end multi-tenant SaaS application designed to streamline workflows with automated background jobs, secure authentication, and responsive dashboards. Built with modern web standards and scalable cloud architecture.",
    tools: ["Nest.js", "TypeScript", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/orgs/BitSync-Level-II-Project/repositories",
    caseStudyUrl: "https://dms.uom.lk/s/Y6YjreExnzTb7H8",
  },
  {
    number: "02",
    title: "Kickbots Arena \u2014 Microcontroller Hardware System",
    description:
      "Engineered an embedded hardware project featuring microcontroller programming, motor controls, and sensor integration for an arena-based robotic system.",
    tools: ["C / Embedded", "Microcontrollers", "Hardware Design"],
    githubUrl: "https://github.com/DeemanthaGunasekara/Kickbots-Arena",
  },
  {
    number: "03",
    title: "React Movie Hub",
    description:
      "A responsive single-page web app built with React that interfaces with external movie APIs. Features real-time search queries, dynamic catalog filtering, and clean state-driven component architecture.",
    tools: ["React", "REST APIs", "JavaScript"],
    githubUrl: "https://github.com/DeemanthaGunasekara/React-Movie-App",
  },
  {
    number: "04",
    title: "Developer Portfolio Website",
    description:
      "Designed in Figma and built completely from scratch using Next.js App Router, TypeScript, and Tailwind CSS. Features custom editorial dark mode styling, responsive typography, and static build optimization.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Figma"],
    liveUrl: "#",
    githubUrl: "https://github.com/DeemanthaGunasekara/Portfolio",
    
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-borderSubtle/50">
      
      {/* 1. Section Header: Title on Left, Count on Right */}
      <div className="flex items-baseline justify-between mb-12">
        <h2 className="font-heading font-medium text-3xl sm:text-4xl md:text-[48px] tracking-tight text-heading">
          Selected projects
        </h2>
        <span className="text-[15px] text-muted font-normal">
          [04] projects
        </span>
      </div>

      {/* 2. Responsive 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.number}
            className="bg-surface border border-borderSubtle rounded-2xl p-8 flex flex-col justify-between hover:border-slate-700 transition group"
          >
            {/* Top row inside card: Number and Arrow */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-heading font-normal text-xl tracking-tight text-accent">
                  {project.number}
                </span>
                <span className="w-8 h-8 rounded-full border border-borderSubtle flex items-center justify-center text-muted group-hover:text-heading group-hover:border-slate-600 transition text-sm">
                  &#x2197;
                </span>
              </div>

              {/* Title */}
              <h3 className="font-heading font-medium text-2xl sm:text-[32px] tracking-tight leading-[1.1] text-heading mb-4">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-[15px] text-muted leading-relaxed mb-8">
                {project.description}
              </p>
            </div>

            {/* Bottom: Tool Chips & Accent Links */}
            <div>
              {/* Tool Chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="bg-canvas border border-borderSubtle text-muted text-[13px] px-3 py-1 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Project Action Links (Lime accent from your Figma!) */}
              <div className="flex flex-wrap items-center gap-5 text-[14px] text-accent font-medium">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center gap-1"
                  >
                    Live demo &#x2197;
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center gap-1"
                  >
                    GitHub &#x2197;
                  </a>
                )}
                {project.caseStudyUrl && (
                  <a
                    href={project.caseStudyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center gap-1"
                  >
                    Case study &#x2197;
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
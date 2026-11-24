// components/Projects.tsx
import React from "react";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  // Only display the 4 featured projects on the landing page
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="py-20 border-t border-borderSubtle/50">
      
      {/* 1. Section Header: Title on Left, "View all projects" Link on Right */}
      <div className="flex items-baseline justify-between mb-12">
        <h2 className="font-heading font-medium text-3xl sm:text-4xl md:text-[48px] tracking-tight text-heading">
          Selected projects
        </h2>

        {/* Clickable link to your new projects page */}
        <Link
          href="/projects"
          className="group flex items-center gap-1.5 text-[14px] sm:text-[15px] text-muted hover:text-accent transition font-normal"
        >
          <span>View all projects [{projects.length.toString().padStart(2, "0")}]</span>
          <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
            ↗
          </span>
        </Link>
      </div>

      {/* 2. Responsive 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredProjects.map((project) => (
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

            {/* Bottom: Tool Chips & Action Links */}
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

              {/* Action Links */}
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
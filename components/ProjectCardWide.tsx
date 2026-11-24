// components/ProjectCardWide.tsx
import React from "react";
import { Project } from "@/data/projects";

interface ProjectCardWideProps {
  project: Project;
}

export default function ProjectCardWide({ project }: ProjectCardWideProps) {
  // Use primary action link for the card's top-right arrow button
  const primaryUrl = project.liveUrl || project.githubUrl || project.caseStudyUrl || "#";

  return (
    <article className="bg-surface border border-borderSubtle rounded-[20px] p-6 sm:p-8 lg:p-10 hover:border-slate-700 transition duration-200 group">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        
        {/* 1. Left Column: Number & Year */}
        <div className="lg:col-span-2 flex lg:flex-col items-baseline lg:items-start justify-between lg:justify-start gap-1">
          <span className="font-heading font-normal text-xl sm:text-2xl text-accent tracking-tight">
            {project.number}
          </span>
          <span className="text-sm font-sans text-muted">
            {project.year}
          </span>
        </div>

        {/* 2. Middle Column: Title, Description & Tool Pills */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            {/* Title stays clean text-heading (no neon hover) just like homepage cards */}
            <h3 className="font-heading font-medium text-2xl sm:text-3xl lg:text-[34px] tracking-tight leading-[1.15] text-heading mb-3">
              {project.title}
            </h3>

            <p className="text-[15px] text-[#a9adb5] leading-relaxed mb-6 max-w-2xl">
              {project.description}
            </p>
          </div>

          {/* Tool Pills */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="bg-transparent border border-[#3d4048] text-[#cfd1d6] text-[13px] px-3.5 py-1 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* 3. Right Column: Arrow Button, TYPE Metadata & Action Links */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full pt-4 lg:pt-0 border-t lg:border-t-0 border-borderSubtle/50 lg:pl-6">
          
          {/* Top-right corner circular arrow icon (subtle white/slate hover matching homepage) */}
          <div className="hidden lg:flex justify-end mb-6">
            <a
              href={primaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title}`}
              className="w-11 h-11 rounded-full border border-borderSubtle flex items-center justify-center text-muted group-hover:text-heading group-hover:border-slate-600 transition duration-150 text-lg"
            >
              &#x2197;
            </a>
          </div>

          {/* Metadata Block (TYPE only) */}
          <div className="flex items-baseline gap-4 text-sm mb-6">
            <span className="text-[12px] tracking-[0.14em] uppercase text-muted font-medium w-12 shrink-0">
              TYPE
            </span>
            <span className="text-[15px] text-heading font-normal">
              {project.type}
            </span>
          </div>

          {/* Bottom Action Links */}
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
    </article>
  );
}
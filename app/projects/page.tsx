// app/projects/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCardWide from "@/components/ProjectCardWide";
import { projects, ProjectCategory } from "@/data/projects";

// The exact filter categories from your Figma
const filterCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Full-Stack",
  "Cloud & DevOps",
  "Academic",
  "Embedded",
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>("All");

  // Filter projects dynamically based on the selected category
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.categories.includes(activeCategory));

  return (
    <div className="min-h-screen bg-canvas text-heading selection:bg-accent selection:text-black">
      {/* 1. Reused Top Navigation */}
      <Navbar />

      <main className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[116px] pt-12 pb-24">
        
        {/* 2. Breadcrumb Navigation */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[15px] text-[#a9adb5] hover:text-heading transition group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">&larr;</span>
            <span>Back to portfolio</span>
          </Link>
        </div>

        {/* 3. Page Header Section */}
        <div className="mb-16">
          <span className="block text-[12px] tracking-[0.14em] uppercase text-accent font-medium mb-4">
            ALL PROJECTS
          </span>

          <h1 className="font-heading font-medium text-5xl sm:text-7xl lg:text-[100px] tracking-tight leading-[0.95] text-heading mb-6">
            All my <span className="text-accent">work.</span>
          </h1>

          <p className="text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
            A catalog of personal engineering builds, full-stack platforms, and hardware prototypes exploring modern cloud architectures and DevOps.
          </p>
        </div>

        {/* 4. Interactive Filters Strip & Project Count */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-borderSubtle/60 mb-12">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5">
            {filterCategories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-[14px] font-sans transition-all duration-150 ${
                    isActive
                      ? "bg-accent text-black font-medium shadow-sm"
                      : "bg-transparent border border-[#3d4048] text-[#cfd1d6] hover:border-slate-500 font-normal"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Real-time Project Counter */}
          <span className="text-[15px] text-muted font-normal shrink-0">
            Showing [{filteredProjects.length.toString().padStart(2, "0")}] projects
          </span>
        </div>

        {/* 5. The List of Wide Horizontal Project Cards */}
        <div className="space-y-6">
          {filteredProjects.map((project) => (
            <ProjectCardWide key={project.number} project={project} />
          ))}
        </div>

      </main>

      {/* 6. Reused Compact Neon Footer */}
      <Footer />
    </div>
  );
}
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas text-heading selection:bg-accent selection:text-black">
      <Navbar />
      <main className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[116px]">
        <Hero />
        <Projects />
      </main>
    </div>
  );
}
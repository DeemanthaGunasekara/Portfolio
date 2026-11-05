import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Academics from "@/components/Academics";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas text-heading selection:bg-accent selection:text-black">
      <Navbar />
      <main className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[116px]">
        <Hero />
        <Projects />
        <Academics />
        <About />
      </main>
      <Footer />
    </div>
  );
}
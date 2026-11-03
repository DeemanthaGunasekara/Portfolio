import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas text-heading">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <Hero />
      </main>
    </div>
  );
}
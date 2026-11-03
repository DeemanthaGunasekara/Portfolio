import React from "react";
import { Terminal, Code2, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 p-4">
      {/* Centered Profile Card */}
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-xl p-8 text-center shadow-lg">
        
        {/* Status Badge */}
        <span className="inline-block bg-emerald-950/60 text-emerald-400 text-xs font-mono px-3 py-1 rounded-full border border-emerald-800/50 mb-4">
          ● Ready to Build
        </span>

        {/* Title & Subtitle */}
        <h1 className="text-2xl font-bold text-white mb-1">
          Deemantha Gunasekara
        </h1>
        <p className="text-sm font-mono text-cyan-400 mb-4">
          Full-Stack Software Engineer
        </p>

        {/* Short Bio */}
        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
          Building my personal portfolio step-by-step from a blank canvas.
        </p>

        {/* Tech Stack Badges */}
        <div className="flex justify-center gap-2 text-xs font-mono">
          <span className="flex items-center gap-1 bg-slate-800 text-slate-300 px-3 py-1.5 rounded-md border border-slate-700">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" /> Next.js
          </span>
          <span className="flex items-center gap-1 bg-slate-800 text-slate-300 px-3 py-1.5 rounded-md border border-slate-700">
            <Code2 className="w-3.5 h-3.5 text-violet-400" /> React
          </span>
          <span className="flex items-center gap-1 bg-slate-800 text-slate-300 px-3 py-1.5 rounded-md border border-slate-700">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Tailwind
          </span>
        </div>

      </div>
    </main>
  );
}

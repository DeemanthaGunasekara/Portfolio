import React from "react";

const courses = [
  "OOP (Java)",
  "Database Systems",
  "Data Structures and Algorithms",
    "Software Engineering",
    "Active Citizens",
    "Consumer Solutions Design",
    "C Programming",
    "Web Development",
    
];

export default function Academics() {
  return (
    <section className="py-8 my-12 border-y border-borderSubtle/60">
      <div className="flex flex-wrap items-center gap-6 sm:gap-8">
        
        {/* 1. Kicker */}
        <span className="text-[12px] tracking-[0.14em] uppercase text-accent font-medium">
          ACADEMICS
        </span>

        {/* 2. GPA Display */}
        <div className="flex items-baseline gap-1.5">
          <span className="font-heading font-medium text-xl sm:text-[22px] tracking-tight text-heading">
            GPA 3.80
          </span>
          <span className="text-[15px] text-muted font-normal">
            / 4.0
          </span>
        </div>

        {/* 3. Subtle Vertical Divider */}
        <span className="hidden sm:inline-block h-4 w-[1px] bg-borderSubtle" />

        {/* 4. Coursework Pills */}
        <div className="flex flex-wrap items-center gap-2.5">
          {courses.map((course) => (
            <span
              key={course}
              className="bg-transparent border border-borderSubtle text-muted text-[13px] px-3.5 py-1.5 rounded-full hover:border-slate-700 transition"
            >
              {course}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
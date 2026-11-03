import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        tight: "-0.03em", // Your exact -3% from Figma!
      },
      colors: {
        canvas: "#0F1012",       // Figma: 0F1012 (Deep Page Dark)
        surface: "#14151A",      // Figma: 14151A (Card background)
        accent: "#D4FF4F",       // Figma: D4FF4F (Neon Lime)
        borderSubtle: "#2A2C33",  // Figma: 2A2C33 (Card borders)
        heading: "#F2F2EE",      // Figma: F2F2EE (Headings white)
        muted: "#8D919A",        // Figma: 8D919A (Body text)
      },
    },
  },
  plugins: [],
};

export default config;
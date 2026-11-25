// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deemanthagunasekara.vercel.app"),
  title: {
    default: "Deemantha Gunasekara | Portfolio",
    template: "%s | Deemantha Gunasekara",
  },
  description:
    "IT Undergraduate at the University of Moratuwa passionate about Software Engineering, Cloud & DevOps, and Full-Stack Development.",
  keywords: [
    "Deemantha Gunasekara",
    "Software Engineer",
    "Cloud & DevOps",
    "Full-Stack Developer",
    "University of Moratuwa",
    "SiteTrace",
    "Cloud-Native Microservices",
    "Portfolio",
  ],
  authors: [{ name: "Deemantha Gunasekara" }],
  creator: "Deemantha Gunasekara",
  verification: {
    google: "Hgmq36uW9PbwNa9OodWqOT0aIqeKbwyh8I2lwwpjwvc",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://deemanthagunasekara.vercel.app",
    title: "Deemantha Gunasekara | Portfolio",
    description:
      "IT Undergraduate at the University of Moratuwa passionate about Software Engineering, Cloud & DevOps, and Full-Stack Development.",
    siteName: "Deemantha Gunasekara Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-canvas text-muted antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
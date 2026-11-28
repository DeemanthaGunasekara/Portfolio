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
  metadataBase: new URL("https://deemantha.is-a.dev"),
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
    google: "s9Q50xFBIIDlhlNI8x6_5t6HYVCdiMdNdVu3lyzcQzQ",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://deemantha.is-a.dev",
    title: "Deemantha Gunasekara | Portfolio",
    description:
      "IT Undergraduate at the University of Moratuwa passionate about Software Engineering, Cloud & DevOps, and Full-Stack Development.",
    siteName: "Deemantha Gunasekara",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Deemantha Gunasekara",
    alternateName: ["Deemantha Portfolio", "Deemantha Gunasekara Portfolio"],
    url: "https://deemantha.is-a.dev",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-canvas text-muted antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
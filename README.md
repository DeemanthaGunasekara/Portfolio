# ⚡ Deemantha Gunasekara — Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Custom Domain](https://img.shields.io/badge/Domain-deemantha.is--a.dev-D4FF4F?style=flat&logo=cloudflare&logoColor=black&labelColor=14151A)](https://deemantha.is-a.dev)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=flat&logo=vercel)](https://vercel.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

> A high-contrast, editorial dark-mode personal developer portfolio designed in **Figma** and engineered with **Next.js 14 App Router**, **TypeScript**, and **Tailwind CSS**.

🔗 **Live Website**: [https://deemantha.is-a.dev](https://deemantha.is-a.dev)  
🎨 **Figma Design**: Custom 1440px dark-mode design system with neon-lime accents (`#D4FF4F`)

---

## 📸 Overview

A modern personal portfolio designed from scratch in **Figma** and built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. 

This site serves as a central hub showcasing my technical projects, software engineering background, cloud & microservices platforms, and embedded robotics work as an Information Technology undergraduate at the **University of Moratuwa, Sri Lanka**.

### ✨ Key Features

- **Editorial Typography & Dark Theme**: Deep midnight canvas (`#0F1012`), elevated card surfaces (`#14151A`), crisp white headings in `Space Grotesk` (with tight `-0.03em` tracking), readable `Inter` body text, and sharp neon lime accents (`#D4FF4F`).
- **Dedicated All Projects Page (`/projects`)**: A full-width archive featuring all 6 projects with interactive category filter pills (`All`, `Full-Stack`, `Cloud & DevOps`, `Academic`, `Embedded`) and live project count badges.
- **Featured Homepage Grid (2x2)**: Curated showcase of top flagship projects directly on the landing page with seamless navigation to the complete archive.
- **Centralized Data Layer (`data/projects.ts`)**: Single source of truth supporting multi-category tagging, external demo/GitHub links, tool pill generation, and metadata tags.
- **Native Next.js SEO & Indexing Engine**: Dynamic `sitemap.ts` and `robots.ts` generation, Google Search Console site verification, and rich OpenGraph/Twitter social cards.
- **Smart Sticky Navigation**: Pathname-aware header with neon active-link indicators, back-to-section anchor links, and instant CV download CTA.
- **Direct CV Download**: Instant access to an ATS-friendly, single-page professional resume (`/cv.pdf`).
- **Full-Width Inverted Contact Banner**: High-impact footer with social reach-outs, custom aesthetic, and back-to-top interaction.
- **Privacy-Friendly Analytics**: Integrated `@vercel/analytics` for zero-cookie visitor insights and performance tracking.

---

## 🛠️ Tech Stack & Design System

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | **Next.js 14 (App Router)** | Static site generation, server components, and dynamic routing |
| **UI Library** | **React 18** | Modular, reusable component architecture |
| **Language** | **TypeScript 5** | Strict end-to-end type safety |
| **Styling** | **Tailwind CSS** | Utility-first styling with custom Figma design tokens |
| **Fonts** | `Space Grotesk` & `Inter` | Zero-CLS typography loaded via `next/font/google` |
| **SEO & Discovery** | Native App Router Metadata | Dynamic sitemaps (`sitemap.xml`) & robots directives (`robots.txt`) |
| **Analytics** | **@vercel/analytics** | Real-time page view and visitor tracking |
| **Deployment** | **Vercel** + Cloudflare DNS | Automated CI/CD pipelines connected to `deemantha.is-a.dev` |

---

## 📁 Project Architecture

```text
portfolio-website/
├── app/
│   ├── globals.css              # CSS resets, custom scrollbars & base tokens
│   ├── layout.tsx               # Root layout, Google Fonts, SEO metadata & Vercel Analytics
│   ├── page.tsx                 # Main landing page (Hero, Featured Projects, Academics, About, Footer)
│   ├── robots.ts                # Dynamic robots.txt configuration
│   ├── sitemap.ts               # Dynamic sitemap.xml generator (priority & frequency)
│   └── projects/
│       └── page.tsx             # Dedicated /projects page with interactive category filters
├── components/
│   ├── Navbar.tsx               # Sticky nav with active route highlight & CV download CTA
│   ├── Hero.tsx                 # Editorial 2-column display headline & social quick-links
│   ├── Projects.tsx             # Homepage featured projects section (top 4 cards)
│   ├── ProjectCardWide.tsx      # Full-width horizontal project cards with metadata & tool pills
│   ├── Academics.tsx            # Academic highlights strip (GPA 3.80 / 4.0, Moratuwa)
│   ├── About.tsx                # Narrative bio, portrait headshot & core technical competencies
│   └── Footer.tsx               # Full-width neon lime inverted contact banner
├── data/
│   └── projects.ts              # Central typed project catalog supporting multi-category tagging
├── public/
│   ├── cv.pdf                   # Downloadable professional ATS-friendly resume
│   └── profile.jpg              # Optimized portrait headshot
├── tailwind.config.ts           # Custom color tokens, letter-spacing & surfaces
├── tsconfig.json                # Strict TypeScript configuration
└── package.json
```

---

## 🚀 Local Development Setup

To run this project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DeemanthaGunasekara/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**  
   Navigate to [http://localhost:3000](http://localhost:3000) to view the live app with Fast Refresh.

5. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📬 Contact & Connect

**Deemantha Gunasekara**  
*IT Undergraduate | Software Engineering, Cloud & DevOps*  
*University of Moratuwa, Sri Lanka*

- **Website**: [deemantha.is-a.dev](https://deemantha.is-a.dev)
- **LinkedIn**: [linkedin.com/in/deemantha-gunasekara](https://www.linkedin.com/in/deemantha-gunasekara)
- **GitHub**: [DeemanthaGunasekara](https://github.com/DeemanthaGunasekara)
- **Email**: [gunasekarapdvp@gmail.com](mailto:gunasekarapdvp@gmail.com)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

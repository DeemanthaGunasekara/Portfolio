# ⚡ Deemantha Gunasekara — Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=flat&logo=vercel)](https://vercel.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

> A modern, high-contrast, editorial personal portfolio website designed from scratch in **Figma** and engineered with **Next.js App Router**, **TypeScript**, and **Tailwind CSS**.

🔗 **Live Website**: [https://deemanthagunasekara.vercel.app](https://deemanthagunasekara.vercel.app)   
🎨 **Figma Design**: Custom 1440px dark-mode layout with neon-lime accents (`#D4FF4F`)

---

## 📸 Overview

A modern personal developer portfolio designed in **Figma** and built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. 

This site serves as a central hub to showcase my technical projects, software engineering background, and practical experience with full-stack development and cloud technologies as an IT undergraduate at the **University of Moratuwa**.

### ✨ Key Features
- **Editorial Typography**: Styled with `Space Grotesk` (display headlines, -3% tracking) and `Inter` (readable UI body text).
- **High-Contrast Dark Theme**: Deep midnight canvas (`#0F1012`), elevated card surfaces (`#14151A`), and high-voltage neon lime accents (`#D4FF4F`).
- **Showcase Grid (2x2)**: Data-mapped project cards featuring my upcoming flagship SaaS (**SiteTrace**), microcontroller robotics (**KickBots**), and web apps.
- **Direct CV Download**: Instant access to an ATS-friendly, single-page professional resume (`/cv.pdf`).
- **Full-Width Inverted Contact Banner**: High-impact footer with social reach-outs and smooth back-to-top navigation.
- **Vercel Analytics**: Privacy-friendly, real-time visitor and page-view tracking.
- **Git Etiquette**: Developed entirely using feature branches, conventional commits, and Pull Requests (PRs).

---

## 🛠️ Tech Stack & Design System

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | **Next.js 14 (App Router)** | Static site generation, routing, and fast load times |
| **UI Library** | **React 18** | Modular, reusable component architecture |
| **Language** | **TypeScript 5** | Strict type safety and maintainable code |
| **Styling** | **Tailwind CSS** | Utility-first CSS with custom design tokens |
| **Fonts** | `Space Grotesk` & `Inter` | Loaded with zero CLS via `next/font/google` |
| **Analytics** | **@vercel/analytics** | Performance and visitor analytics |
| **Deployment** | **Vercel** | Automated CI/CD pipeline linked to GitHub |

---

## 📁 Project Architecture

```text
portfolio-website/
├── app/
│   ├── globals.css          # Base CSS reset & scrollbar styling
│   ├── layout.tsx           # Root layout with Google Fonts & Vercel Analytics
│   └── page.tsx             # Main page container (1440px desktop grid)
├── components/
│   ├── Navbar.tsx           # Sticky navigation with Space Grotesk logo & CV CTA
│   ├── Hero.tsx             # 2-column display headline & right-aligned links
│   ├── Projects.tsx         # Data-mapped 2x2 projects showcase
│   ├── Academics.tsx        # Horizontal highlights strip (GPA 3.80 / 4.0)
│   ├── About.tsx            # Narrative bio, portrait photo, & core skills
│   └── Footer.tsx           # Full-width neon lime inverted contact banner
├── public/
│   ├── cv.pdf               # Downloadable resume PDF
│   └── profile.jpg          # Optimized portrait headshot
├── tailwind.config.ts       # Custom design tokens, colors & letter-spacing
└── tsconfig.json            # Strict TypeScript configuration
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
*IT Undergraduate | Pursuing Software Engineering & Cloud / DevOps*  
*University of Moratuwa, Sri Lanka*

- **LinkedIn**: [linkedin.com/in/deemantha-gunasekara](https://www.linkedin.com/in/deemantha-gunasekara)
- **GitHub**: [@DeemanthaGunasekara](https://github.com/DeemanthaGunasekara)
- **Email**: [gunasekarapdvp@email.com](mailto:gunasekarapdvp@email.com)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

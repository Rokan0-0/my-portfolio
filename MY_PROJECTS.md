# My Projects — Portfolio Inventory

All projects found in `c:\Users\Rokan\Documents\Project`. Each one lists its **name**, **what it does**, its **tech stack**, and a suggested **portfolio category**.

> **Not included as projects:** `flutter/` (a copy of Google's Flutter SDK), `my-portfolio/` (this portfolio template) and `pswd.txt`. `rokan-portfolio/` is an older version of your portfolio, listed at the bottom.

---

## 🤖 AI & Agents

### 1. AI Co-Founder ("The Crucible" + "Mission Control") — `ai-cofounder/`
**What it does:** A product-lifecycle engine for solo builders, pitched as a "Cursor for Product Managers". In **The Crucible**, a "Ruthless VC" AI uses a RAG pipeline to stress-test your startup idea. If the idea passes (PROCEED), it generates build specs: a DB schema, a component tree and agent prompts. **Mission Control** turns those specs into a living roadmap/kanban board, with a "Strategic Co-Founder" AI that adapts the plan as you build.
**Tech:** Next.js, TypeScript, Supabase, Google Gemini (AI SDK), Anthropic Claude, LangChain, Paystack, React Email, dnd-kit
**Category:** Full Stack · AI

### 2. PayWhatsApp — `paywhatsapp/`
**What it does:** A WhatsApp payments and bills agent, built for the **APIConf Lagos 2026 Hackathon**. Nigerian merchants and freelancers type plain-language requests like *"Send Tunde a payment link for ₦5,000"*. The agent then creates invoice links, checks payment status, buys airtime, splits bills and sends transfers, all inside WhatsApp.
**Tech:** Node.js, Express, Claude AI (Anthropic SDK), Monnify APIs, WhatsApp webhooks
**Category:** Backend · AI · Fintech

### 3. AgentBond — `agentbond/`
**What it does:** An on-chain trust and accountability protocol for AI agents on **Arbitrum**, built for the Arbitrum Open House Singapore Hackathon. Before an AI agent can act on-chain, it must stake an ETH bond. A Rule Engine checks every transaction against the agent's declared rules: spending limits, contract whitelists and time windows. If the agent breaks a rule, its bond is slashed: 80% goes to the harmed user and 20% to the treasury. Includes a TypeScript SDK and a dashboard.
**Tech:** Solidity, Hardhat, OpenZeppelin, TypeScript SDK, React, Vite, Tailwind CSS
**Category:** Web3 · Full Stack · AI

### 4. ZeroHero Bot — `#/ZeroHero_Bot/`
**What it does:** An ML-powered algorithmic **Forex trading bot**. It has a data lake, a strategy lab for backtesting, a live execution engine connected to the OANDA broker, and SHAP-based explanations of trades (a "Tutor" mode). A Streamlit dashboard works as the control panel.
**Tech:** Python, pandas, scikit-learn, SHAP, Backtrader, OANDA API, Streamlit, Plotly
**Category:** Data / ML · Fintech

---

## 💸 Fintech & Web3

### 5. Blaze Escrow-Link — `Blazehold/`
**What it does:** A P2P micro-escrow trust engine for social commerce (Instagram, WhatsApp, campus traders), built for **Ecobank Blaze InnovateX 2026** (Inclusive Finance & Fraud Prevention track). Sellers create a shareable escrow link or QR code. Buyers pay into a holding wallet. Money is released after a 48-hour inspection window, with AI-assisted dispute triage and a USSD fallback. A Trust Score turns trade history into credit for nano-loans.
**Tech:** React 19, TypeScript, Vite, QR code generation
**Category:** Frontend · Fintech

### 6. PredictNaija — `PredictNaija/`
**What it does:** A mobile-first, decentralized **social prediction market** on the Somnia Testnet. Nigerians predict and stake on AFCON football, BBNaija and Naira economics, with no crypto jargon. The smart contract is deployed, and there's a live demo at [predictnaija-three.vercel.app](https://predictnaija-three.vercel.app/).
**Tech:** Next.js 14, Solidity 0.8.20, Hardhat, Wagmi v2, Viem, RainbowKit, Tailwind CSS
**Category:** Web3 · Full Stack

---

## 🏢 Business / SaaS Platforms

### 7. StoreOS — `Tech Hub/StoreOS/`
**What it does:** A business management platform for Nigerian SME supermarkets and provision stores that **works offline**. It replaces pen-and-notebook bookkeeping with digital sales, inventory, credit/debtor tracking and reports. It also builds the financial records shop owners need to qualify for loans. Installable as a PWA, with PDF reports.
**Tech:** Next.js 16, React 19, Supabase, Dexie (IndexedDB offline storage), PWA, React-PDF, Tailwind CSS
**Category:** Full Stack · SaaS

### 8. Workforcely — `Workforcely/`
**What it does:** A complete **HR management and employee self-service platform**. It covers employee directory and org chart, attendance clock-in/out, leave approvals, payroll with Nigerian PAYE tax and pension calculations, performance reviews, recruitment and onboarding, training courses with certificates, an AI HR assistant and an analytics dashboard.
**Tech:** Next.js 14, TypeScript, Tailwind CSS, Recharts, Supabase/PostgreSQL
**Category:** Full Stack · SaaS

### 9. WorkforceMS — `WorkforceMS-App/`
**What it does:** An enterprise platform combining an **AI-powered LMS** (Learning Management System) with **digital HMO health-benefits management**. It includes a course-studio wizard, a Gemini AI course generator, a video course player with lesson locking, quizzes and certificates, plus HMO plans, dependants, membership cards and claims.
**Tech:** Next.js 14, TypeScript, Google Gemini AI, Recharts, PostgreSQL
**Category:** Full Stack · AI · SaaS

---

## 🎓 Education & Campus

### 10. Caleb University Staff School Portal (CUSS) — `caleb-staff-school/`
**What it does:** A production school management and learning portal for Nursery, Primary and Secondary levels. It covers admin setup (school structure, terms, user accounts), fee-payment gating with proof-of-payment checks, study-material uploads, assignment submissions and academic results. An AI assistant (LLaMA 3.3 via Groq) is planned.
**Tech:** Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, Supabase (Auth, Postgres + RLS, Storage, Realtime), Zustand, Groq, Resend
**Category:** Full Stack · EdTech

### 11. OASCS — Online Automated Student Clearance System — `oascs/`
**What it does:** A web app that digitizes final-year **student clearance**. Students upload documents for each department (e.g. Bursary, Library). Officers approve or reject them with comments. Admins manage the whole process, and certificates/PDFs are generated and sent by email.
**Tech:** PHP, Supabase (PostgreSQL), PHPMailer, TCPDF
**Category:** Full Stack · EdTech

### 12. Digital Student Clearance System — `digital student clearance system/`
**What it does:** A Caleb University version of the clearance system, with student, officer and admin portals plus digital stamps. Deployed serverless on Vercel (vercel-php), using the Supabase REST and Storage APIs.
**Tech:** PHP, Supabase (Postgres, Storage), Vercel serverless
**Category:** Full Stack · EdTech
> 💡 Projects 11 and 12 are closely related. You could merge them into one portfolio entry.

### 13. HireReady — `HireReady/`
**What it does:** An **AI career toolkit for Nigerian graduates**. Users practise mock aptitude/assessment tests, plan their NYSC service year, and explore live insights on the Nigerian job market to speed up their job search.
**Tech:** React 19, Vite, Tailwind CSS v4
**Category:** Frontend · AI

### 14. UNICON (University Connect) — `unicon/`
**What it does:** A social network PWA just for **verified university students**. Users sign up with Google or email, choose their university, department and level, and upload a student ID to get verified. Profiles show academic info and interest tags. Includes push notifications, offline support and shareable profile cards.
**Tech:** Next.js 15, Supabase, TanStack Query, Serwist (PWA), Web Push, Vercel OG, Playwright tests
**Category:** Full Stack · Social

---

## 🤝 Social & Events

### 15. PRXX V2 — `prxx-v2/`
**What it does:** A mobile-first PWA that creates a **temporary social lobby for any event**. Organizers get a shareable link and QR code. Attendees join with one tap, chat in a group, browse other attendees and connect 1-on-1. Each lobby closes automatically 24 hours after it starts.
**Tech:** Next.js 16, React 19, Supabase, Framer Motion, Serwist (PWA), Recharts
**Category:** Full Stack · Social

### 16. PRXX V1 (LinkUp) — `linkup-web/`
**What it does:** The first version of PRXX, "The Event Networking OS". It uses proximity-based matching to connect people at tech events, conferences and meetups, with QR scanning, chat and markdown support. It was load- and stress-tested and monitored with Sentry.
**Tech:** React 19, Vite, Supabase, Framer Motion, Sentry, QR scanner, Vercel serverless API
**Category:** Full Stack · Social
> 💡 Consider showing V1 → V2 as one project with an "evolution" story.

---

## 🛠️ Developer Tools & Utilities

### 17. CodeReplay — `CodeReplay/`
**What it does:** A **VS Code extension** that records your coding session, including mistakes, and plays it back as a clean, typed-out timelapse for tutorials. Supports multiple files, has record/stop/play buttons in the status bar, and cleans up playback files in one click. Packaged as a `.vsix` (publisher: `rokan0-0`).
**Tech:** TypeScript, VS Code Extension API
**Links:** [GitHub](https://github.com/Rokan0-0/CodeReplay)
**Category:** Developer Tools

### 18. Download Autobot — `download_autobot/`
**What it does:** A desktop "command center" that **automates downloading anime and TV shows**. Scrapers built on Playwright handle sites like AnimePahe, WCO and MobileTVShows, controlled from a local web dashboard. Packaged as a Windows app with an installer (`DownloadAutobot_Setup.exe`).
**Tech:** Python, FastAPI, Uvicorn, Playwright, PyInstaller
**Category:** Automation · Desktop

### 19. Project Ronin — `project ronin/`
**What it does:** A local-first **offline manhwa (comic) system** with two parts. The **Vault** is a PC scraper and dashboard that downloads chapters and organizes them into a library, each chapter with a `manifest.json`. The **Viewer** is a Flutter mobile reader for fast offline reading.
**Tech:** Python (Playwright, Pydantic, FastAPI, Pillow), Flutter/Dart
**Category:** Automation · Mobile

### 20. YouTube Downloader — `youtube-downloader/`
**What it does:** A simple web app for downloading YouTube videos in different qualities (720p, 1080p, etc.) or extracting audio as MP3. You can preview the video details first, and everything runs locally for privacy.
**Tech:** Python, Flask, yt-dlp, FFmpeg
**Category:** Web Dev · Utility

---

## 📱 Mobile

### 21. BuildBoard — `flutter todo app/`
**What it does:** A real-time **project and task manager** for mobile, web and Windows. It has email and Google sign-in, project workspaces with progress bars, and a Kanban board (To Do / In Progress / Done) with task priorities. Built with Clean Architecture, and Firebase Cloud Functions handle background events.
**Tech:** Flutter, Dart, Firebase (Auth, Firestore, Storage, Cloud Functions), Riverpod, GoRouter
**Category:** Mobile Dev

---

## 🗂️ Other

### 22. Rokan Portfolio (old) — `rokan-portfolio/`
**What it does:** Your earlier personal portfolio site.
**Tech:** React, TypeScript, Vite, Radix UI
**Category:** Frontend
> Probably skip it now that `my-portfolio` is replacing it.

---

## Suggested Featured Projects (top 3 on home page)
1. **AgentBond**: Web3 + AI, built for a hackathon, with a complete protocol design
2. **PayWhatsApp** or **AI Co-Founder**: strong AI + fintech story
3. **StoreOS** or **PredictNaija**: real-world Nigerian market impact (PredictNaija has a live demo)

## Extra tech names to add to `config/constants.ts`
Solidity, Hardhat, Wagmi, Arbitrum, Claude AI, Gemini AI, LangChain, Groq, Riverpod, Streamlit, Playwright, Monnify, Paystack, Zustand, shadcn/ui, Vite, PWA, VS Code API, scikit-learn

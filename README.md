# Goon — AI Stock Predictions with Explainable Reasoning

A marketing landing page for Goon: an AI-powered stock prediction platform built for retail traders. Every prediction comes with plain English explanations of the reasoning behind it.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Icons:** lucide-react

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Project Structure

```
app/
  layout.tsx      # Root layout with metadata + font loading
  page.tsx        # Landing page (nav, Hero, Features, CTA, footer)
  globals.css     # Tailwind layers + custom utilities
components/
  Hero.tsx        # Hero section with headline + CTA
  Features.tsx    # Feature cards grid
  CTA.tsx         # Email waitlist signup form
```

## Build

```bash
npm run build
npm start
```

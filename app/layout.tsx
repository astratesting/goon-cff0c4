import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Goon - AI Stock Predictions with Explainable Reasoning',
  description: 'AI-powered stock predictions for retail traders. Get predictions with plain English explanations of the reasoning behind every signal.',
  keywords: ['AI trading', 'stock predictions', 'retail traders', 'explainable AI', 'stock analysis'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <main className="min-h-screen bg-grid">
          {children}
        </main>
      </body>
    </html>
  )
}

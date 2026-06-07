"use client";

import { Mail, ArrowRight, Check } from 'lucide-react'
import { useState } from 'react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      // In production, this would send to your API
    }
  }

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Ready to Trade with{' '}
          <span className="text-gradient">Confidence</span>?
        </h2>

        <p className="font-['Space_Grotesk'] text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join thousands of retail traders who use Goon to make smarter, data-driven decisions. Get early access to our AI prediction engine.
        </p>

        {/* Pricing teaser */}
        <div className="mb-12 inline-block">
          <div className="data-card px-8 py-4 glow-border">
            <div className="flex items-center gap-4">
              <div>
                <p className="font-mono text-sm text-gray-500 uppercase tracking-wider">Early Access</p>
                <p className="font-['Space_Grotesk'] text-3xl font-bold text-white">
                  Free<span className="text-lg text-gray-400 font-normal"> during beta</span>
                </p>
              </div>
              <div className="h-12 w-px bg-gray-700" />
              <div className="text-left">
                <p className="font-mono text-sm text-cyan-400">✓ Full access to AI predictions</p>
                <p className="font-mono text-sm text-cyan-400">✓ Plain English explanations</p>
                <p className="font-mono text-sm text-cyan-400">✓ Real-time signals</p>
              </div>
            </div>
          </div>
        </div>

        {/* Email signup form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 font-mono text-sm"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 whitespace-nowrap glow-border"
              >
                Get Early Access
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <p className="font-mono text-xs text-gray-600 mt-4">
              No spam. No credit card required. Unsubscribe anytime.
            </p>
          </form>
        ) : (
          <div className="max-w-md mx-auto data-card glow-border">
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-cyan-400/10 flex items-center justify-center">
                <Check className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-left">
                <p className="font-['Space_Grotesk'] text-lg font-semibold text-white">You're on the list!</p>
                <p className="font-mono text-sm text-gray-400">We'll notify you when early access opens.</p>
              </div>
            </div>
          </div>
        )}

        {/* Social proof */}
        <div className="mt-16 pt-16 border-t border-gray-800">
          <p className="font-mono text-sm text-gray-500 mb-6">Join 2,400+ traders already on the waitlist</p>
          <div className="flex justify-center items-center gap-8 opacity-40">
            <div className="font-mono text-lg text-gray-500">⭐⭐⭐⭐⭐</div>
            <div className="font-mono text-sm text-gray-500">"Finally, AI that explains itself"</div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { ArrowRight, TrendingUp, Bot } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8">
          <Bot className="w-4 h-4 text-cyan-400" />
          <span className="text-sm font-mono text-cyan-400">AI-Powered Stock Predictions</span>
        </div>

        {/* Main headline */}
        <h1 className="font-['Space_Grotesk'] text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          AI That Explains
          <br />
          <span className="text-gradient">Every Trade</span>
        </h1>

        {/* Value prop */}
        <p className="font-['Space_Grotesk'] text-xl sm:text-2xl text-gray-400 mb-4 max-w-3xl mx-auto leading-relaxed">
          Get stock predictions with plain English explanations of the reasoning behind every signal.
        </p>
        <p className="font-mono text-lg text-cyan-400/80 mb-12 max-w-2xl mx-auto">
          No black boxes. No mysterious algorithms. Just transparent AI that shows its work.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 glow-border">
            Join the Waitlist
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg border border-gray-700 transition-all duration-300 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            See How It Works
          </button>
        </div>

        {/* Social proof */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <p className="font-mono text-sm text-gray-500 uppercase tracking-wider">Trusted by retail traders who value transparency</p>
          <div className="flex items-center gap-8 opacity-50">
            <div className="font-mono text-2xl font-bold text-gray-600">NYSE</div>
            <div className="font-mono text-2xl font-bold text-gray-600">NASDAQ</div>
            <div className="font-mono text-2xl font-bold text-gray-600">TSX</div>
          </div>
        </div>
      </div>

      {/* Ledger line decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
    </section>
  )
}

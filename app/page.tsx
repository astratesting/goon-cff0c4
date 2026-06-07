import Hero from '../components/Hero'
import Features from '../components/Features'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <div className="min-h-screen bg-ink">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-ink/80 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="font-mono font-bold text-white text-sm">G</span>
              </div>
              <span className="font-['Space_Grotesk'] font-bold text-white text-lg">Goon</span>
            </div>

            {/* Nav links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="font-mono text-sm text-gray-400 hover:text-white transition-colors">
                Features
              </a>
              <a href="#pricing" className="font-mono text-sm text-gray-400 hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#waitlist" className="font-mono text-sm text-gray-400 hover:text-white transition-colors">
                Waitlist
              </a>
            </div>

            {/* CTA button */}
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-lg transition-all duration-300">
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main>
        <Hero />
        <div id="features">
          <Features />
        </div>
        <div id="waitlist">
          <CTA />
        </div>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-gray-800/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="font-mono font-bold text-white text-sm">G</span>
                </div>
                <span className="font-['Space_Grotesk'] font-bold text-white text-lg">Goon</span>
              </div>
              <p className="font-['Space_Grotesk'] text-sm text-gray-500">
                AI-powered stock predictions with explainable reasoning for retail traders.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-['Space_Grotesk'] font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="font-mono text-sm text-gray-500 hover:text-cyan-400 transition-colors">Features</a></li>
                <li><a href="#" className="font-mono text-sm text-gray-500 hover:text-cyan-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="font-mono text-sm text-gray-500 hover:text-cyan-400 transition-colors">Waitlist</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-['Space_Grotesk'] font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="font-mono text-sm text-gray-500 hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="font-mono text-sm text-gray-500 hover:text-cyan-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="font-mono text-sm text-gray-500 hover:text-cyan-400 transition-colors">Disclaimer</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-gray-800/50 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-mono text-xs text-gray-600">
              © 2026 Goon. All rights reserved.
            </p>
            <p className="font-mono text-xs text-gray-600">
              Not financial advice. Trade at your own risk.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

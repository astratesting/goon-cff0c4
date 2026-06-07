import { Brain, MessageSquare, TrendingUp, Shield, Zap, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Explainable AI',
    description: 'Every prediction comes with a plain English explanation of the reasoning, data points, and logic used to reach the conclusion.',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-400/10',
  },
  {
    icon: MessageSquare,
    title: 'Plain English Reasoning',
    description: 'No technical jargon or complex formulas. Just clear, conversational explanations you can understand and trust.',
    color: 'text-electric-teal',
    bgColor: 'bg-electric-teal/10',
  },
  {
    icon: TrendingUp,
    title: 'Real-Time Predictions',
    description: 'Get AI-powered predictions as market data flows in. Stay ahead of trends with millisecond-latency signal generation.',
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-400/10',
  },
  {
    icon: Shield,
    title: 'Transparent Methodology',
    description: 'See exactly which data sources, indicators, and models influenced each prediction. Full transparency, no black boxes.',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-400/10',
  },
  {
    icon: Zap,
    title: 'Lightning Fast Signals',
    description: 'Proprietary algorithms process thousands of data points in real-time to deliver actionable signals before the market moves.',
    color: 'text-electric-teal',
    bgColor: 'bg-electric-teal/10',
  },
  {
    icon: BarChart3,
    title: 'Performance Tracking',
    description: 'Track prediction accuracy over time with detailed analytics. See exactly how our AI performs across different market conditions.',
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-400/10',
  },
]

export default function Features() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 ledger-line">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-['Space_Grotesk'] text-4xl sm:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-gradient">Goon</span>?
          </h2>
          <p className="font-['Space_Grotesk'] text-xl text-gray-400 max-w-3xl mx-auto">
            Built for traders who demand transparency, speed, and results.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="data-card group cursor-default"
            >
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-lg ${feature.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>

              {/* Title */}
              <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-['Space_Grotesk'] text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover line effect */}
              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Data motif decoration */}
        <div className="mt-20 flex justify-center">
          <div className="font-mono text-xs text-gray-700 flex items-center gap-2">
            <span className="inline-block w-16 h-px bg-gray-800" />
            <span>DATA_MOTIF</span>
            <span className="inline-block w-16 h-px bg-gray-800" />
          </div>
        </div>
      </div>
    </section>
  )
}

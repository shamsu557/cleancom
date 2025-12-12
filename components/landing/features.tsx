import { Sparkles, Shield, Clock, Users, TrendingUp, Zap } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Quality Assured",
    description: "All cleaners are verified and rated. We guarantee professional service every time.",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Your home and data are protected. Secure payment processing with buyer protection.",
  },
  {
    icon: Clock,
    title: "On-Time Service",
    description: "Reliable scheduling with real-time tracking. Know exactly when your service arrives.",
  },
  {
    icon: Users,
    title: "Customer Support",
    description: "24/7 dedicated support team ready to help with any questions or concerns.",
  },
  {
    icon: TrendingUp,
    title: "Flexible Pricing",
    description: "Competitive rates with options for one-time, weekly, or monthly contracts.",
  },
  {
    icon: Zap,
    title: "Quick Booking",
    description: "Book in minutes. Choose your service, time, and cleaner preferences easily.",
  },
]

export function LandingFeatures() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Why Choose Cleancom?</h2>
          <p className="text-lg text-muted">
            We make professional cleaning services accessible, affordable, and reliable for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-6 sm:p-8 rounded-2xl border border-border bg-white hover:border-accent/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors mb-4">
                  <Icon className="text-accent" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

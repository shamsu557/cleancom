"use client"

import { Button } from "@/components/ui/button"
import { PageNavbar } from "@/components/navigation/page-navbar"
import { Footer } from "@/components/navigation/footer"
import { Briefcase, Users, TrendingUp, BarChart3, ChevronRight, Check } from "lucide-react"

export default function ProviderManagementPage() {
  const pricingModels = [
    {
      id: 1,
      name: "Fixed Fee Per Worker",
      description: "Pay a fixed monthly fee for each worker managed",
      formula: "workers_count × fee_per_worker",
      example: "3 workers × 50 BHD = 150 BHD/month",
      features: ["Perfect for small teams", "Simple & predictable", "No revenue sharing"],
    },
    {
      id: 2,
      name: "Commission from Revenue",
      description: "Pay based on a percentage of your monthly revenue",
      formula: "total_revenue × commission_rate",
      example: "5000 BHD revenue × 5% = 250 BHD/month",
      features: ["Scales with your business", "Pay only when earning", "Higher upside"],
    },
    {
      id: 3,
      name: "Combined Fixed + Commission",
      description: "Hybrid model with base fee and revenue share",
      formula: "(workers × fee) + (revenue × rate)",
      example: "(2 × 40 BHD) + (4000 × 3%) = 200 BHD",
      features: ["Best of both worlds", "Balanced approach", "Flexible & scalable"],
    },
    {
      id: 4,
      name: "Comprehensive Packages",
      description: "All-in-one management with flexible pricing",
      formula: "base_fee + (workers × additional_fee)",
      example: "100 BHD base + (3 workers × 25 BHD) = 175 BHD",
      features: ["Complete management", "Full support included", "Premium service"],
    },
  ]

  const services = [
    {
      icon: "📅",
      title: "Booking Management",
      description: "Receive, confirm, and track all customer requests with automated scheduling",
    },
    {
      icon: "👥",
      title: "Employee Management",
      description: "Schedule workers, assign tasks by location, monitor attendance and performance",
    },
    {
      icon: "💬",
      title: "Customer Communication",
      description: "Respond to inquiries, handle complaints, and request reviews on your behalf",
    },
    {
      icon: "📊",
      title: "Financial Reports",
      description: "Calculate dues, track commissions, and receive detailed weekly/monthly reports",
    },
    {
      icon: "📢",
      title: "Marketing Support",
      description: "Improve visibility, send targeted offers, and manage your provider profile",
    },
    {
      icon: "🎯",
      title: "Performance Analytics",
      description: "Track bookings, revenue, cancellation rates, and customer satisfaction metrics",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <PageNavbar />

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">Provider Management Service</h1>
            <p className="text-xl text-muted mb-6">
              Let Cleancom handle your operations so you can focus on growing your business
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg border border-border p-6">
                <Users size={32} className="text-primary mb-3" />
                <h3 className="font-bold text-foreground mb-2">Employee Management</h3>
                <p className="text-sm text-muted">Schedule and manage your workers efficiently</p>
              </div>
              <div className="bg-white rounded-lg border border-border p-6">
                <Briefcase size={32} className="text-primary mb-3" />
                <h3 className="font-bold text-foreground mb-2">Booking Handling</h3>
                <p className="text-sm text-muted">Automated booking management 24/7</p>
              </div>
              <div className="bg-white rounded-lg border border-border p-6">
                <TrendingUp size={32} className="text-accent mb-3" />
                <h3 className="font-bold text-foreground mb-2">Growth Support</h3>
                <p className="text-sm text-muted">Marketing and visibility optimization</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">What's Included</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, idx) => (
                <div key={idx} className="bg-white rounded-lg border border-border p-6">
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Models */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Flexible Pricing Models</h2>
            <div className="space-y-4">
              {pricingModels.map((model) => (
                <div
                  key={model.id}
                  className="bg-white rounded-lg border border-border p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{model.name}</h3>
                      <p className="text-muted mb-3">{model.description}</p>
                      <div className="bg-gray-50 rounded-lg p-3 mb-3">
                        <p className="text-xs text-muted mb-1">Formula:</p>
                        <p className="font-mono text-sm text-foreground mb-2">{model.formula}</p>
                        <p className="text-xs text-muted">Example: {model.example}</p>
                      </div>
                    </div>
                    <Button>Choose Plan</Button>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {model.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Check size={16} className="text-green-600" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Your Dashboard</h2>
            <div className="bg-white rounded-lg border border-border p-8">
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-2">24</p>
                  <p className="text-sm text-muted">Bookings This Week</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent mb-2">8,450</p>
                  <p className="text-sm text-muted">BHD Monthly Revenue</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600 mb-2">4.8</p>
                  <p className="text-sm text-muted">Average Rating</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-orange-600 mb-2">2</p>
                  <p className="text-sm text-muted">Pending Reviews</p>
                </div>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <BarChart3 size={20} />
                  Performance Metrics
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted">Booking Acceptance Rate</span>
                      <span className="font-semibold text-foreground">96%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: "96%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted">On-Time Completion</span>
                      <span className="font-semibold text-foreground">98%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: "98%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted">Customer Satisfaction</span>
                      <span className="font-semibold text-foreground">94%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: "94%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary to-primary-light rounded-lg p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Business?</h2>
            <p className="text-lg mb-8 opacity-90">
              Start with our Provider Management Service and focus on what matters
            </p>
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-50">
              Get Started Today <ChevronRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

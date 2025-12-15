"use client"

import { Button } from "@/components/ui/button"
import { PageNavbar } from "@/components/navigation/page-navbar"
import { Footer } from "@/components/navigation/footer"
import Link from "next/link"
import { Check } from "lucide-react"

const serviceOptions = [
  {
    title: "Pool Cleaning",
    description: "Professional pool maintenance and cleaning",
    price: "From 25 BHD/session",
    features: ["Water testing", "Filter cleaning", "Chemical treatment", "Surface scrubbing"],
  },
  {
    title: "Window Cleaning",
    description: "Interior and exterior window cleaning",
    price: "From 20 BHD/service",
    features: ["High-reach cleaning", "Frame scrubbing", "Streak-free finish", "Safety equipped"],
  },
  {
    title: "Garden Care",
    description: "Landscaping and garden maintenance",
    price: "From 30 BHD/session",
    features: ["Lawn care", "Hedge trimming", "Leaf removal", "Weed management"],
  },
  {
    title: "Deep Sanitization",
    description: "Hospital-grade deep cleaning and disinfection",
    price: "From 40 BHD/session",
    features: ["Medical-grade products", "Bacterial elimination", "Odor removal", "Eco-friendly options"],
  },
]

export default function SpecializedCleaningPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageNavbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Specialized Cleaning Services
          </h1>
          <p className="text-lg text-muted max-w-2xl">
            Targeted cleaning solutions for specific needs including pools, windows, gardens, and medical-grade
            sanitization.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {serviceOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-border p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-foreground mb-2">{option.title}</h3>
                <p className="text-muted mb-4 text-sm">{option.description}</p>
                <p className="text-2xl font-bold text-primary mb-6">{option.price}</p>
                <ul className="space-y-3 mb-6">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-foreground text-sm">
                      <Check size={16} className="text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/auth/register?role=customer">
                  <Button className="w-full">Book Now</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

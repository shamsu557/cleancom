"use client"

import { Button } from "@/components/ui/button"
import { PageNavbar } from "@/components/navigation/page-navbar"
import { Footer } from "@/components/navigation/footer"
import Link from "next/link"
import { Check } from "lucide-react"

const serviceOptions = [
  {
    title: "Pre-Event Setup",
    description: "Complete preparation before your event",
    price: "From 40 BHD/session",
    features: ["Deep cleaning", "Setup coordination", "Decoration support", "Final inspections"],
  },
  {
    title: "During-Event Service",
    description: "Live cleaning during your event",
    price: "From 50 BHD/session",
    features: ["Continuous tidying", "Spill management", "Restroom care", "Professional staff"],
  },
  {
    title: "Post-Event Cleanup",
    description: "Complete cleanup after your event",
    price: "From 45 BHD/session",
    features: ["Trash removal", "Deep cleaning", "Furniture reset", "Odor elimination"],
  },
  {
    title: "Custom Packages",
    description: "Tailored event cleaning solutions",
    price: "Custom pricing",
    features: ["Flexible timing", "Team coordination", "Special requests", "Competitive rates"],
  },
]

export default function EventCleaningPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageNavbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Event Cleaning Services</h1>
          <p className="text-lg text-muted max-w-2xl">
            Professional cleaning services for weddings, conferences, parties, and all special occasions. Pre-event,
            during, and post-event solutions.
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

"use client"

import { Button } from "@/components/ui/button"
import { PageNavbar } from "@/components/navigation/page-navbar"
import { Footer } from "@/components/navigation/footer"
import Link from "next/link"
import { Check } from "lucide-react"

const serviceOptions = [
  {
    title: "Standard Cleaning",
    description: "Regular cleaning for homes and offices",
    price: "From 15 BHD/hour",
    features: ["Dusting", "Vacuuming", "Mopping", "Bathroom cleaning"],
  },
  {
    title: "Weekly Contract",
    description: "Weekly recurring cleaning service",
    price: "From 50 BHD/week",
    features: ["Consistent schedule", "10% discount", "Dedicated cleaner", "Flexible timing"],
  },
  {
    title: "Monthly Contract",
    description: "Monthly cleaning package",
    price: "From 180 BHD/month",
    features: ["Best value", "5% discount", "Priority booking", "Free one-time extra"],
  },
]

export default function GeneralCleaningPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageNavbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">General Cleaning Services</h1>
          <p className="text-lg text-muted max-w-2xl">
            Professional cleaning for homes, offices, schools, hotels, gyms, and companies. Choose your schedule and
            frequency.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
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

      {/* Process */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { step: 1, title: "Select Service", icon: "📋" },
              { step: 2, title: "Choose Schedule", icon: "📅" },
              { step: 3, title: "Get Matched", icon: "👤" },
              { step: 4, title: "Enjoy Cleaning", icon: "✨" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold mb-4 text-lg">
                  {item.step}
                </div>
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

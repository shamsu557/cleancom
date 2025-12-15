"use client"

import { Button } from "@/components/ui/button"
import { PageNavbar } from "@/components/navigation/page-navbar"
import { Footer } from "@/components/navigation/footer"
import { Tag, Zap, TrendingUp, Gift, AlertCircle } from "lucide-react"

export default function SpecialOffersPage() {
  const offers = [
    {
      id: 1,
      title: "20% Off General Cleaning",
      provider: "Elite Cleaning Services",
      discount: "20% off",
      minOrder: "Minimum 2 hours",
      validTil: "Dec 31, 2025",
      views: 1250,
      bookings: 89,
      icon: "🧹",
    },
    {
      id: 2,
      title: "2×1 Deep Cleaning Offer",
      provider: "Pro Cleaners Ltd",
      discount: "2 services for 1 price",
      minOrder: "Valid for new customers",
      validTil: "Dec 15, 2025",
      views: 892,
      bookings: 56,
      icon: "✨",
    },
    {
      id: 3,
      title: "5 BHD Off Window Cleaning",
      provider: "Shine Specialists",
      discount: "5 BHD discount",
      minOrder: "Minimum 50 BHD order",
      validTil: "Dec 20, 2025",
      views: 643,
      bookings: 34,
      icon: "🪟",
    },
    {
      id: 4,
      title: "Monthly Cleaning Package Deal",
      provider: "Home Care Express",
      discount: "15% off monthly contracts",
      minOrder: "12-month contract",
      validTil: "Dec 25, 2025",
      views: 1856,
      bookings: 142,
      icon: "📅",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <PageNavbar />

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Special Offers & Discounts</h1>
            <p className="text-lg text-muted">
              Save big on premium cleaning services with exclusive offers from verified providers
            </p>
          </div>

          {/* Featured Offers */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Zap size={24} className="text-accent" />
              Featured Offers
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {offers.slice(0, 2).map((offer) => (
                <div
                  key={offer.id}
                  className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-primary/20 p-8"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl">{offer.icon}</div>
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-bold">
                      {offer.discount}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{offer.title}</h3>
                  <p className="text-sm text-muted mb-4">{offer.provider}</p>
                  <div className="mb-6">
                    <p className="text-sm font-medium text-foreground mb-2">Conditions:</p>
                    <p className="text-sm text-muted">{offer.minOrder}</p>
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-sm text-muted">Valid until {offer.validTil}</span>
                  </div>
                  <Button className="w-full">Book Now</Button>
                </div>
              ))}
            </div>
          </div>

          {/* All Offers */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Gift size={24} />
              All Offers
            </h2>
            <div className="space-y-4">
              {offers.map((offer) => (
                <div
                  key={offer.id}
                  className="bg-white rounded-lg border border-border p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-3xl">{offer.icon}</div>
                        <div>
                          <h3 className="text-lg font-bold text-foreground">{offer.title}</h3>
                          <p className="text-sm text-muted">{offer.provider}</p>
                        </div>
                      </div>
                      <div className="flex gap-4 text-sm text-muted mb-3">
                        <span className="flex items-center gap-1">
                          <TrendingUp size={14} />
                          {offer.views} views
                        </span>
                        <span className="flex items-center gap-1">
                          <Tag size={14} />
                          {offer.bookings} bookings
                        </span>
                      </div>
                      <p className="text-sm font-medium text-muted">{offer.minOrder}</p>
                    </div>
                    <div className="text-right flex flex-col items-end gap-3">
                      <span className="bg-accent text-white px-4 py-2 rounded-full font-bold text-sm">
                        {offer.discount}
                      </span>
                      <div className="text-xs text-muted flex items-center gap-1">
                        <AlertCircle size={14} />
                        Until {offer.validTil}
                      </div>
                      <Button size="sm">View Offer</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Info Box */}
          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-sm text-blue-900">
              <span className="font-semibold">💡 Tip:</span> Create a Cleancom account to save your favorite offers and
              receive notifications when new deals are posted!
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

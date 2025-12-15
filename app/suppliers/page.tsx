"use client"

import { Button } from "@/components/ui/button"
import { PageNavbar } from "@/components/navigation/page-navbar"
import { Footer } from "@/components/navigation/footer"
import Link from "next/link"
import { Package, TrendingUp, Users, ShieldCheck } from "lucide-react"

export default function SuppliersPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageNavbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Partner With Cleancom</h1>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
            Supply cleaning products and services to thousands of active cleaners across Bahrain.
          </p>
          <Link href="/auth/register?role=supplier">
            <Button size="lg">Become a Supplier</Button>
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Why Join Cleancom Suppliers?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Users,
                title: "Large Customer Base",
                description: "Access thousands of active cleaners and cleaning businesses",
              },
              {
                icon: TrendingUp,
                title: "Increase Revenue",
                description: "Expand your market reach and grow your business consistently",
              },
              {
                icon: Package,
                title: "Easy Management",
                description: "Simple inventory and order management through our platform",
              },
              {
                icon: ShieldCheck,
                title: "Secure Payments",
                description: "Fast and secure payment processing for all transactions",
              },
            ].map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="bg-white rounded-xl border border-border p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 mb-4">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Grow Your Business?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful suppliers already partnering with Cleancom
          </p>
          <Link href="/auth/register?role=supplier">
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100">
              Sign Up as Supplier
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

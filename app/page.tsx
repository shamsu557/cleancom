import { PageNavbar } from "@/components/navigation/page-navbar"
import { LandingHero } from "@/components/landing/hero"
import { LandingFeatures } from "@/components/landing/features"
import { LandingServices } from "@/components/landing/services"
import { LandingCTA } from "@/components/landing/cta"
import { Footer } from "@/components/navigation/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <PageNavbar />
      <LandingHero />
      <LandingFeatures />
      <LandingServices />
      <LandingCTA />
      <Footer />
    </div>
  )
}

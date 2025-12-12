import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function LandingCTA() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-r from-primary via-primary-light to-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
          Ready to Experience Professional Cleaning?
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers who trust Cleancom for their cleaning needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/auth/register?role=customer">
            <Button size="lg" variant="secondary" className="gap-2 w-full sm:w-auto">
              Book Now
              <ArrowRight size={20} />
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 w-full sm:w-auto bg-transparent"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

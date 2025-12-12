import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"

export function LandingHero() {
  return (
    <section className="relative min-h-[500px] sm:min-h-[600px] flex items-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                <span className="text-sm font-medium text-accent">Trusted by 50,000+ Customers</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-primary">Professional Cleaning</span>
                <span className="block text-accent">Made Simple</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted max-w-lg leading-relaxed">
                Connect with verified cleaning service providers for your home, office, or specialized cleaning needs.
                Book, track, and pay - all in one place.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/auth/register?role=customer">
                <Button size="lg" className="w-full sm:w-auto gap-2">
                  Book a Cleaning
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <Link href="/auth/register?role=provider">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                  Become a Provider
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Verified Cleaners</p>
                  <p className="text-sm text-muted">Background checked & rated</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Real-time Tracking</p>
                  <p className="text-sm text-muted">Know when cleaners arrive</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Secure Payments</p>
                  <p className="text-sm text-muted">Protected transactions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">24/7 Support</p>
                  <p className="text-sm text-muted">Always here to help</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image with "Expert Cleaning Solutions" Overlay */}
          <div className="relative h-[300px] sm:h-[380px] lg:h-[450px]">
            {/* Subtle blurred background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 to-accent/20 rounded-3xl blur-3xl" />
            
            {/* Image container */}
            <div className="relative h-full rounded-3xl overflow-hidden">
              <Image
                src="/landHero.png"
                alt="Expert Cleaning Solutions"
                fill
                className="object-cover object-center"
                priority
              />
              
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/30" />
              
              {/* Centered Text Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl text-center px-8 drop-shadow-lg">
                  Expert Cleaning Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

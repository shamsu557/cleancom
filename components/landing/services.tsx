import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"  // Required for images

const services = [
  {
    image: "/generalCleaning.png",
    title: "General Cleaning",
    description: "Regular cleaning for homes, offices, schools, gyms, hotels, and companies.",
    features: ["Dusting & Vacuuming", "Floor Cleaning", "Bathroom & Kitchen", "Flexible Schedules"],
    href: "/services/general",
  },
  {
    image: "/specialiseClean.png",  // Corrected spelling as requested
    title: "Specialized Cleaning",
    description: "Targeted cleaning for specific needs and challenging areas.",
    features: ["Pool Cleaning", "Window Cleaning", "Garden Care", "Deep Sanitization"],
    href: "/services/specialized",
  },
  {
    image: "/professionalClean.png",
    title: "Professional Cleaning",
    description: "High-grade intensive cleaning for demanding requirements.",
    features: ["Deep Cleaning", "Carpet Cleaning", "Post-Construction", "Marble Polishing"],
    href: "/services/professional",
  },
  {
    image: "/event.png",
    title: "Cleaning Events",
    description: "Professional cleaning services for special events and occasions.",
    features: ["Pre-Event Setup", "During-Event Service", "Post-Event Cleanup", "Custom Packages"],
    href: "/services/events",
  },
]

export function LandingServices() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted">
            From routine cleaning to specialized services, we've got everything covered.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group p-6 sm:p-8 hover:shadow-lg transition-all duration-300 flex flex-col">
              {/* Service Image - Main visual */}
              <div className="mb-6 -mt-12 sm:-mt-16 shadow-xl rounded-xl overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} Service`}
                  width={800}
                  height={400}
                  className="w-full h-48 sm:h-56 object-cover object-center"
                  priority={index < 2}  // Faster load for first two cards
                />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-foreground mb-2 mt-4">{service.title}</h3>  {/* Added mt-4 for spacing after image */}
              <p className="text-muted mb-4 flex-grow">{service.description}</p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-sm text-foreground flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <Link href={service.href}>
                <Button
                  variant="outline"
                  className="w-full group-hover:border-accent group-hover:text-accent bg-transparent"
                >
                  Learn More
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

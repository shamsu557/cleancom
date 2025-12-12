import Link from "next/link"
import Image from "next/image"  // Added
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-3">
              <Image
                src="/cleancom logo2-06.jpg"
                alt="Cleancom Logo"
                width={180}
                height={50}
                className="h-12 w-auto object-contain"  // Nice visible size in footer
                priority={false}  // No need for priority in footer
              />
              <span>
                <span className="text-white">Clean</span>
                <span className="text-accent">com</span>
              </span>
            </h3>
            <p className="text-white/70 text-sm">
              Professional cleaning services connecting verified cleaners with customers.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/general" className="text-white/70 hover:text-white transition-colors">
                  General Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/specialized" className="text-white/70 hover:text-white transition-colors">
                  Specialized
                </Link>
              </li>
              <li>
                <Link href="/services/professional" className="text-white/70 hover:text-white transition-colors">
                  Professional
                </Link>
              </li>
              <li>
                <Link href="/services/events" className="text-white/70 hover:text-white transition-colors">
                  Event Cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-white/70 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-white/70 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/70 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-white/70">
                <Phone size={16} />
                +973 1234 5678
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <Mail size={16} />
                support@cleancom.bh
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <MapPin size={16} className="mt-1" />
                Manama, Bahrain
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>&copy; 2025 Cleancom. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-white/70 hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/cookies" className="text-white/70 hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PageNavbar } from "@/components/navigation/page-navbar"
import { Mail, Lock, User, Phone, Eye, EyeOff } from "lucide-react"

const roleOptions = [
  { value: "customer", label: "I need cleaning services", icon: "🏠" },
  { value: "provider", label: "I provide cleaning services", icon: "🧹" },
  { value: "supplier", label: "I sell cleaning supplies", icon: "📦" },
]

export default function RegisterPage() {
  const searchParams = useSearchParams()
  const initialRole = searchParams.get("role") || "customer"

  const [role, setRole] = useState(initialRole)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  })

  return (
    <div className="min-h-screen bg-background">
      <PageNavbar />
      <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Join Cleancom</h1>
            <p className="text-muted">Choose your role and get started in minutes</p>
          </div>

          {/* Role Selection */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {roleOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setRole(option.value)}
                className={`p-6 rounded-lg border-2 transition-all ${
                  role === option.value ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                }`}
              >
                <div className="text-3xl mb-2">{option.icon}</div>
                <p className="font-semibold text-foreground text-sm">{option.label}</p>
              </button>
            ))}
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl border border-border p-8 sm:p-10 shadow-sm">
            <form className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={20} />
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder-muted"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={20} />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder-muted"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={20} />
                  <input
                    type="tel"
                    placeholder="+973 3366 6633"
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder-muted"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={20} />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-12 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder-muted"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-foreground"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <label className="flex items-start gap-3 text-sm">
                <input type="checkbox" className="w-4 h-4 border border-border rounded cursor-pointer mt-1" />
                <span className="text-foreground">
                  I agree to the{" "}
                  <Link href="/terms" className="text-primary hover:text-primary-light font-semibold">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary hover:text-primary-light font-semibold">
                    Privacy Policy
                  </Link>
                </span>
              </label>

              {/* Submit */}
              <Button className="w-full" size="lg">
                Create Account
              </Button>

              {/* Sign In Link */}
              <p className="text-center text-sm text-muted">
                Already have an account?{" "}
                <Link href="/auth/login" className="text-primary font-semibold hover:text-primary-light">
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

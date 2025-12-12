"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PageNavbar } from "@/components/navigation/page-navbar"
import { Mail, Lock, Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({ email: "", password: "" })

  return (
    <div className="min-h-screen bg-background">
      <PageNavbar />
      <div className="flex min-h-[calc(100vh-64px)]">
        {/* Left - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 py-12 sm:py-0">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
              <p className="text-muted">Sign in to your Cleancom account</p>
            </div>

            <form className="space-y-6">
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

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 border border-border rounded cursor-pointer" />
                  <span className="text-foreground">Remember me</span>
                </label>
                <Link href="/auth/forgot-password" className="text-primary hover:text-primary-light">
                  Forgot password?
                </Link>
              </div>

              {/* Submit */}
              <Button className="w-full" size="lg">
                Sign In
              </Button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-background text-muted">Or continue with</span>
                </div>
              </div>

              {/* Social */}
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" size="lg">
                  Google
                </Button>
                <Button variant="outline" size="lg">
                  Apple
                </Button>
              </div>

              {/* Sign Up Link */}
              <p className="text-center text-sm text-muted">
                Don't have an account?{" "}
                <Link href="/auth/register" className="text-primary font-semibold hover:text-primary-light">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>

        {/* Right - Visual */}
        <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-primary to-primary-light items-center justify-center p-8">
          <div className="text-center max-w-md">
            <div className="mb-6 inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-full backdrop-blur-sm">
              <span className="text-5xl">🔐</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Secure Access</h2>
            <p className="text-white/80">Your account is protected with industry-standard security measures.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

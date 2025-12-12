"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, LogOut, Settings, User, Home, Calendar, ShoppingBag, Briefcase, BarChart3 } from "lucide-react"

const navigationByRole = {
  customer: [
    { label: "Home", href: "/dashboard/customer", icon: Home },
    { label: "Bookings", href: "/dashboard/customer/bookings", icon: Calendar },
    { label: "Wallet", href: "/dashboard/customer/wallet", icon: ShoppingBag },
    { label: "Reviews", href: "/dashboard/customer/reviews", icon: User },
    { label: "Settings", href: "/dashboard/customer/settings", icon: Settings },
  ],
  provider: [
    { label: "Home", href: "/dashboard/provider", icon: Home },
    { label: "Jobs", href: "/dashboard/provider/jobs", icon: Briefcase },
    { label: "Schedule", href: "/dashboard/provider/schedule", icon: Calendar },
    { label: "Earnings", href: "/dashboard/provider/earnings", icon: BarChart3 },
    { label: "Profile", href: "/dashboard/provider/profile", icon: User },
    { label: "Settings", href: "/dashboard/provider/settings", icon: Settings },
  ],
  admin: [
    { label: "Home", href: "/dashboard/admin", icon: Home },
    { label: "Users", href: "/dashboard/admin/users", icon: User },
    { label: "Bookings", href: "/dashboard/admin/bookings", icon: Calendar },
    { label: "Analytics", href: "/dashboard/admin/analytics", icon: BarChart3 },
    { label: "Store", href: "/dashboard/admin/store", icon: ShoppingBag },
    { label: "Settings", href: "/dashboard/admin/settings", icon: Settings },
  ],
}

interface DashboardNavProps {
  role: "customer" | "provider" | "admin"
  userName?: string
}

export function DashboardNav({ role, userName = "User" }: DashboardNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const navigation = navigationByRole[role] || []

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 w-64 h-screen bg-primary text-white border-r border-primary-light shadow-lg">
        {/* Logo */}
        <Link href={`/dashboard/${role}`} className="p-6 border-b border-primary-light flex items-center gap-2">
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center font-bold">C</div>
          <div>
            <div className="font-bold text-white">Clean</div>
            <div className="text-xs text-primary-light">com</div>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-primary-light text-white font-semibold"
                        : "text-white/70 hover:text-white hover:bg-primary-light/20"
                    }`}
                  >
                    <Icon size={20} />
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-primary-light">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-primary-light/20 mb-3">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-bold text-primary">
              {userName.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white truncate">{userName}</p>
              <p className="text-xs text-white/70 capitalize">{role}</p>
            </div>
          </div>
          <button className="w-full flex items-center gap-2 px-4 py-2 rounded-lg text-white/70 hover:text-white hover:bg-primary-light/20 transition-colors text-sm">
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-primary text-white border-b border-primary-light shadow-sm">
        <div className="flex items-center justify-between h-16 px-4">
          <Link href={`/dashboard/${role}`} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded flex items-center justify-center font-bold text-xs">C</div>
            <span className="font-bold">Cleancom</span>
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="bg-primary-light">
            <ul className="divide-y divide-primary">
              {navigation.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                        isActive ? "bg-primary text-white font-semibold" : "text-white/80 hover:bg-primary/50"
                      }`}
                    >
                      <Icon size={20} />
                      {item.label}
                    </Link>
                  </li>
                )
              })}
              <li>
                <button className="w-full text-left flex items-center gap-3 px-4 py-3 text-white/80 hover:bg-primary/50">
                  <LogOut size={20} />
                  Sign Out
                </button>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* Mobile Spacer */}
      <div className="lg:hidden h-16" />
    </>
  )
}

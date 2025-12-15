"use client"

import { Button } from "@/components/ui/button"
import { DashboardNav } from "@/components/navigation/dashboard-nav"
import Link from "next/link"
import { Users, BookOpen, TrendingUp, AlertTriangle, BarChart3 } from "lucide-react"

export default function AdminDashboard() {
  const stats = [
    {
      label: "Total Users",
      value: "12,450",
      change: "+2.5%",
      icon: Users,
      color: "from-blue-500 to-blue-600",
    },
    {
      label: "Active Bookings",
      value: "1,203",
      change: "+15%",
      icon: BookOpen,
      color: "from-green-500 to-green-600",
    },
    {
      label: "Total Revenue",
      value: "85,340 BHD",
      change: "+8.2%",
      icon: TrendingUp,
      color: "from-purple-500 to-purple-600",
    },
    {
      label: "Pending Issues",
      value: "24",
      change: "-5%",
      icon: AlertTriangle,
      color: "from-red-500 to-red-600",
    },
  ]

  const recentBookings = [
    {
      id: 1,
      customer: "Mohammed Ali",
      provider: "Sarah Johnson",
      service: "General Cleaning",
      amount: "45 BHD",
      status: "completed",
      date: "2025-12-14",
    },
    {
      id: 2,
      customer: "Layla Hassan",
      provider: "Mike Chen",
      service: "Deep Cleaning",
      amount: "75 BHD",
      status: "in-progress",
      date: "2025-12-15",
    },
    {
      id: 3,
      customer: "Noor Ahmed",
      provider: "Emily Davis",
      service: "Window Cleaning",
      amount: "35 BHD",
      status: "pending",
      date: "2025-12-15",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav role="admin" userName="Admin Manager" />

      <main className="lg:ml-64">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary-light text-white p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold">Admin Dashboard</h1>
          <p className="text-white/80 mt-2">Platform overview and management</p>
        </div>

        <div className="p-6 sm:p-8">
          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="bg-white rounded-lg p-6 border border-border shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`bg-gradient-to-br ${stat.color} p-3 rounded-lg`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <span className="text-sm font-semibold text-green-600">{stat.change}</span>
                  </div>
                  <p className="text-muted text-sm mb-1">{stat.label}</p>
                  <p className="text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</p>
                </div>
              )
            })}
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap gap-3 mb-8">
            <Link href="/dashboard/admin/users">
              <Button>Manage Users</Button>
            </Link>
            <Link href="/dashboard/admin/bookings">
              <Button variant="outline">View Bookings</Button>
            </Link>
            <Link href="/dashboard/admin/analytics">
              <Button variant="outline">View Analytics</Button>
            </Link>
            <Link href="/dashboard/admin/store">
              <Button variant="outline">Manage Store</Button>
            </Link>
          </div>

          {/* Recent Bookings */}
          <div className="bg-white rounded-lg border border-border shadow-sm">
            <div className="p-6 border-b border-border flex items-center justify-between">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <BarChart3 size={24} className="text-primary" />
                Recent Bookings
              </h2>
              <Link href="/dashboard/admin/bookings">
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-border bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">Customer</th>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">Provider</th>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">Service</th>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">Amount</th>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">Status</th>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {recentBookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-foreground">{booking.customer}</td>
                      <td className="px-6 py-4 text-muted">{booking.provider}</td>
                      <td className="px-6 py-4 text-muted">{booking.service}</td>
                      <td className="px-6 py-4 font-semibold text-foreground">{booking.amount}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            booking.status === "completed"
                              ? "bg-green-100 text-green-800"
                              : booking.status === "in-progress"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-muted">{booking.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

"use client"

import { DashboardNav } from "@/components/navigation/dashboard-nav"
import { BarChart3, TrendingUp, Users, Calendar } from "lucide-react"

export default function AdminAnalyticsPage() {
  const metrics = [
    { label: "Total Revenue (This Month)", value: "125,400 BHD", change: "+18.5%", icon: TrendingUp },
    { label: "New Customers", value: "842", change: "+12.3%", icon: Users },
    { label: "Completed Bookings", value: "3,421", change: "+25.1%", icon: Calendar },
    { label: "Average Rating", value: "4.8/5", change: "+0.2", icon: BarChart3 },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav role="admin" userName="Admin Manager" />

      <main className="lg:ml-64">
        <div className="bg-gradient-to-r from-primary to-primary-light text-white p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold">Analytics & Reports</h1>
          <p className="text-white/80 mt-2">Platform performance metrics and insights</p>
        </div>

        <div className="p-6 sm:p-8">
          {/* Metrics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <div key={index} className="bg-white rounded-lg p-6 border border-border shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <Icon className="text-primary" size={24} />
                    <span className="text-green-600 text-sm font-semibold">{metric.change}</span>
                  </div>
                  <p className="text-muted text-sm mb-1">{metric.label}</p>
                  <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                </div>
              )
            })}
          </div>

          {/* Charts Section */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 border border-border shadow-sm">
              <h2 className="font-bold text-foreground mb-4">Revenue Trend (30 Days)</h2>
              <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                <p className="text-muted">Chart visualization goes here</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-border shadow-sm">
              <h2 className="font-bold text-foreground mb-4">Bookings by Service Type</h2>
              <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                <p className="text-muted">Chart visualization goes here</p>
              </div>
            </div>
          </div>

          {/* Top Providers */}
          <div className="bg-white rounded-lg border border-border shadow-sm">
            <div className="p-6 border-b border-border">
              <h2 className="font-bold text-foreground text-lg">Top Performing Providers</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-border">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">Provider</th>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">Bookings</th>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">Revenue</th>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">Rating</th>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">Completion Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    {
                      name: "Sarah Johnson",
                      bookings: 156,
                      revenue: "8,420 BHD",
                      rating: 4.9,
                      completion: "98%",
                    },
                    {
                      name: "Mike Chen",
                      bookings: 142,
                      revenue: "7,890 BHD",
                      rating: 4.8,
                      completion: "97%",
                    },
                    {
                      name: "Emily Davis",
                      bookings: 128,
                      revenue: "6,740 BHD",
                      rating: 4.7,
                      completion: "96%",
                    },
                  ].map((provider, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-foreground">{provider.name}</td>
                      <td className="px-6 py-4 text-muted">{provider.bookings}</td>
                      <td className="px-6 py-4 text-muted">{provider.revenue}</td>
                      <td className="px-6 py-4">
                        <span className="flex items-center gap-1">
                          {"★".repeat(Math.floor(provider.rating))} {provider.rating}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-muted">{provider.completion}</td>
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

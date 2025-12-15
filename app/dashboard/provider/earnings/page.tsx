"use client"

import { DashboardNav } from "@/components/navigation/dashboard-nav"
import { BarChart3, TrendingUp, DollarSign } from "lucide-react"

export default function EarningsPage() {
  const earnings = [
    { month: "October", amount: 2450 },
    { month: "November", amount: 3120 },
    { month: "December", amount: 3890 },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav role="provider" userName="Ahmed Mohamed" />

      <main className="lg:ml-64">
        <div className="bg-gradient-to-r from-primary to-primary-light text-white p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold">Earnings</h1>
          <p className="text-white/80 mt-2">Track your income and payments</p>
        </div>

        <div className="p-6 sm:p-8">
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 border border-border">
              <div className="flex items-center justify-between mb-3">
                <DollarSign className="text-accent" size={24} />
                <span className="text-green-600 text-sm font-semibold">+15%</span>
              </div>
              <p className="text-muted text-sm mb-1">Total Earnings</p>
              <p className="text-3xl font-bold text-foreground">9,460 BHD</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-border">
              <BarChart3 className="text-primary mb-3" size={24} />
              <p className="text-muted text-sm mb-1">This Month</p>
              <p className="text-3xl font-bold text-foreground">3,890 BHD</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-border">
              <TrendingUp className="text-green-600 mb-3" size={24} />
              <p className="text-muted text-sm mb-1">Pending Payout</p>
              <p className="text-3xl font-bold text-foreground">850 BHD</p>
            </div>
          </div>

          {/* Earnings Chart */}
          <div className="bg-white rounded-lg border border-border p-6 mb-8">
            <h2 className="font-bold text-foreground mb-6">Earnings Trend</h2>
            <div className="h-80 flex items-center justify-center bg-gray-50 rounded-lg">
              <p className="text-muted">Chart visualization goes here</p>
            </div>
          </div>

          {/* Monthly Breakdown */}
          <div className="bg-white rounded-lg border border-border">
            <div className="p-6 border-b border-border">
              <h2 className="font-bold text-foreground text-lg">Monthly Earnings</h2>
            </div>
            <div className="divide-y divide-border">
              {earnings.map((earning, index) => (
                <div key={index} className="p-6 flex items-center justify-between hover:bg-gray-50">
                  <p className="font-medium text-foreground">{earning.month}</p>
                  <p className="text-2xl font-bold text-primary">{earning.amount} BHD</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

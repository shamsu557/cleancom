"use client"

import { Button } from "@/components/ui/button"
import { DashboardNav } from "@/components/navigation/dashboard-nav"
import Link from "next/link"
import { TrendingUp, Clock, Star, AlertCircle, MapPin } from "lucide-react"

export default function ProviderDashboard() {
  const upcomingJobs = [
    {
      id: 1,
      customer: "Ahmed Hassan",
      service: "General Cleaning",
      address: "Building A, Manama",
      date: "2025-12-15",
      time: "10:00 AM",
      duration: "3 hours",
      rate: "45 BHD",
      status: "accepted",
    },
    {
      id: 2,
      customer: "Fatima Al-Dosari",
      service: "Deep Cleaning",
      address: "Villagio Complex",
      date: "2025-12-16",
      time: "2:00 PM",
      duration: "4 hours",
      rate: "60 BHD",
      status: "pending",
    },
  ]

  const stats = [
    { label: "This Month Earnings", value: "850 BHD", icon: TrendingUp, color: "text-green-600" },
    { label: "Upcoming Jobs", value: "2", icon: Clock, color: "text-blue-600" },
    { label: "Average Rating", value: "4.9", icon: Star, color: "text-yellow-600" },
    { label: "Completion Rate", value: "98%", icon: AlertCircle, color: "text-purple-600" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav role="provider" userName="Ahmed Mohamed" />

      <main className="lg:ml-64">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary-light text-white p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold">Service Provider Dashboard</h1>
          <p className="text-white/80 mt-2">Manage your jobs, earnings, and profile</p>
        </div>

        <div className="p-6 sm:p-8">
          {/* Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="bg-white rounded-lg p-6 border border-border shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-muted text-sm font-medium">{stat.label}</p>
                    <Icon className={`${stat.color}`} size={20} />
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</p>
                </div>
              )
            })}
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap gap-3 mb-8">
            <Link href="/dashboard/provider/jobs">
              <Button>View All Jobs</Button>
            </Link>
            <Link href="/dashboard/provider/profile">
              <Button variant="outline">Edit Profile</Button>
            </Link>
            <Link href="/dashboard/provider/schedule">
              <Button variant="outline">Manage Schedule</Button>
            </Link>
          </div>

          {/* Upcoming Jobs */}
          <div className="bg-white rounded-lg border border-border shadow-sm">
            <div className="p-6 border-b border-border">
              <h2 className="text-xl font-bold text-foreground">Upcoming Jobs</h2>
            </div>
            <div className="divide-y divide-border">
              {upcomingJobs.map((job) => (
                <div key={job.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-2">{job.service}</h3>
                      <div className="space-y-2 text-sm text-muted">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-foreground">{job.customer}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          {job.address}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={16} />
                          {job.date} at {job.time} • {job.duration}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end gap-3">
                      <div className="text-right">
                        <p className="text-2xl font-bold text-accent">{job.rate}</p>
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full ${
                            job.status === "accepted" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {job.status}
                        </span>
                      </div>
                      <Button size="sm">View Details</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

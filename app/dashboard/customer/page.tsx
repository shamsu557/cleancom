"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, User, Star, Plus } from "lucide-react"

export default function CustomerDashboard() {
  const upcomingBookings = [
    {
      id: 1,
      service: "General Cleaning",
      date: "2025-12-15",
      time: "10:00 AM",
      cleaner: "Sarah Johnson",
      status: "confirmed",
    },
    { id: 2, service: "Deep Cleaning", date: "2025-12-20", time: "2:00 PM", cleaner: "Mike Chen", status: "pending" },
  ]

  const pastBookings = [
    { id: 3, service: "General Cleaning", date: "2025-12-08", cleaner: "Emily Davis", rating: 5 },
    { id: 4, service: "Window Cleaning", date: "2025-12-01", cleaner: "Alex Rodriguez", rating: 4 },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary-light text-white p-6 sm:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-white/80">Welcome back! Here's your cleaning service overview.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 border border-border shadow-sm">
            <p className="text-muted text-sm mb-2">Total Bookings</p>
            <p className="text-3xl font-bold text-foreground">12</p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-border shadow-sm">
            <p className="text-muted text-sm mb-2">Upcoming Services</p>
            <p className="text-3xl font-bold text-accent">2</p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-border shadow-sm">
            <p className="text-muted text-sm mb-2">Total Spent</p>
            <p className="text-3xl font-bold text-primary">450 BHD</p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-border shadow-sm">
            <p className="text-muted text-sm mb-2">Average Rating</p>
            <p className="text-3xl font-bold text-yellow-500">4.8★</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <Link href="/booking/new">
            <Button size="lg" className="gap-2">
              <Plus size={20} />
              Book New Service
            </Button>
          </Link>
        </div>

        {/* Upcoming Bookings */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Upcoming Services</h2>
          <div className="grid gap-4 sm:gap-6">
            {upcomingBookings.map((booking) => (
              <div key={booking.id} className="bg-white rounded-lg p-6 border border-border shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground mb-3">{booking.service}</h3>
                    <div className="space-y-2 text-sm text-muted">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        {booking.date} at {booking.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <User size={16} />
                        {booking.cleaner}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${booking.status === "confirmed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
                    >
                      {booking.status}
                    </span>
                    <Button variant="outline" size="sm">
                      Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Bookings */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Past Services</h2>
          <div className="grid gap-4 sm:gap-6">
            {pastBookings.map((booking) => (
              <div key={booking.id} className="bg-white rounded-lg p-6 border border-border shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground mb-2">{booking.service}</h3>
                    <p className="text-sm text-muted">
                      {booking.date} • Cleaner: {booking.cleaner}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      {[...Array(booking.rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Button variant="outline" size="sm">
                      Review
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

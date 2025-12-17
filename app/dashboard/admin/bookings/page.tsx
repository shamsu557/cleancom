"use client"

import { DashboardNav } from "@/components/navigation/dashboard-nav"
import { Button } from "@/components/ui/button"
import { BookOpen, Filter, Eye } from "lucide-react"

export default function AdminBookingsPage() {
  const bookings = [
    {
      id: "BO-251214-00001",
      customer: "Mohammed Ali",
      provider: "Sarah Johnson",
      service: "General Cleaning",
      amount: "45 BHD",
      status: "Completed",
      date: "2025-12-14",
    },
    {
      id: "BO-251215-00002",
      customer: "Layla Hassan",
      provider: "Mike Chen",
      service: "Deep Cleaning",
      amount: "75 BHD",
      status: "In Progress",
      date: "2025-12-15",
    },
    {
      id: "BO-251215-00003",
      customer: "Noor Ahmed",
      provider: "Emily Davis",
      service: "Window Cleaning",
      amount: "35 BHD",
      status: "Pending",
      date: "2025-12-15",
    },
    {
      id: "BO-251216-00004",
      customer: "Hassan Ibrahim",
      provider: "David Smith",
      service: "Carpet Cleaning",
      amount: "90 BHD",
      status: "Cancelled",
      date: "2025-12-16",
    },
  ]

  const statusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800"
      case "In Progress":
        return "bg-blue-100 text-blue-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav role="admin" userName="Admin Manager" />

      <main className="lg:ml-64">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary-light text-white p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold flex items-center gap-2">
            <BookOpen size={28} />
            Bookings Management
          </h1>
          <p className="text-white/80 mt-2">
            View, track, and manage all platform bookings
          </p>
        </div>

        <div className="p-6 sm:p-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-6">
            <Button variant="outline" size="sm">
              <Filter size={16} className="mr-2" />
              Filter by Status
            </Button>
            <Button variant="outline" size="sm">
              Filter by Date
            </Button>
            <Button variant="outline" size="sm">
              Filter by Service
            </Button>
          </div>

          {/* Bookings Table */}
          <div className="bg-white rounded-lg border border-border shadow-sm">
            <div className="p-6 border-b border-border">
              <h2 className="text-lg font-bold text-foreground">
                All Bookings
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-border">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">
                      Booking ID
                    </th>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">
                      Provider
                    </th>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">
                      Service
                    </th>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-border">
                  {bookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-foreground">
                        {booking.id}
                      </td>
                      <td className="px-6 py-4 text-muted">
                        {booking.customer}
                      </td>
                      <td className="px-6 py-4 text-muted">
                        {booking.provider}
                      </td>
                      <td className="px-6 py-4 text-muted">
                        {booking.service}
                      </td>
                      <td className="px-6 py-4 font-semibold text-foreground">
                        {booking.amount}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor(
                            booking.status
                          )}`}
                        >
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-muted">
                        {booking.date}
                      </td>
                      <td className="px-6 py-4">
                        <Button variant="outline" size="sm">
                          <Eye size={16} className="mr-1" />
                          View
                        </Button>
                      </td>
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

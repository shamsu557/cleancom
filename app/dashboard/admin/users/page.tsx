"use client"

import { DashboardNav } from "@/components/navigation/dashboard-nav"
import { Search, MoreVertical, Shield, Eye } from "lucide-react"

export default function AdminUsersPage() {
  const users = [
    {
      id: 1,
      name: "Mohammed Ali",
      email: "mohammed@example.com",
      role: "Customer",
      status: "active",
      joinDate: "2025-08-15",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah@example.com",
      role: "Provider",
      status: "active",
      joinDate: "2025-09-20",
    },
    {
      id: 3,
      name: "Ahmed Hassan",
      email: "ahmed@example.com",
      role: "Customer",
      status: "suspended",
      joinDate: "2025-07-10",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav role="admin" userName="Admin Manager" />

      <main className="lg:ml-64">
        <div className="bg-gradient-to-r from-primary to-primary-light text-white p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold">User Management</h1>
          <p className="text-white/80 mt-2">Manage all platform users</p>
        </div>

        <div className="p-6 sm:p-8">
          {/* Search */}
          <div className="mb-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={20} />
              <input
                type="text"
                placeholder="Search users..."
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Users Table */}
          <div className="bg-white rounded-lg border border-border shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-border">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">Name</th>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">Email</th>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">Role</th>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">Status</th>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">Join Date</th>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-foreground">{user.name}</td>
                      <td className="px-6 py-4 text-muted">{user.email}</td>
                      <td className="px-6 py-4 text-muted">
                        <span className="inline-flex items-center gap-1">
                          {user.role === "Customer" ? "👤" : "🔧"} {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            user.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-muted">{user.joinDate}</td>
                      <td className="px-6 py-4 flex gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <Eye size={16} className="text-primary" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <Shield size={16} className="text-orange-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <MoreVertical size={16} className="text-muted" />
                        </button>
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

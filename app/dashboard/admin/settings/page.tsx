"use client"

import { DashboardNav } from "@/components/navigation/dashboard-nav"
import { Button } from "@/components/ui/button"
import { Settings, Bell, Shield, DollarSign, Sliders } from "lucide-react"

export default function AdminSettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav role="admin" userName="Admin Manager" />

      <main className="lg:ml-64">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary-light text-white p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold flex items-center gap-2">
            <Settings size={28} />
            System Settings
          </h1>
          <p className="text-white/80 mt-2">
            Configure platform behavior, pricing, security, and notifications
          </p>
        </div>

        <div className="p-6 sm:p-8 space-y-8">

          {/* Pricing & Financial Settings */}
          <div className="bg-white rounded-lg border border-border shadow-sm">
            <div className="p-6 border-b border-border flex items-center gap-2">
              <DollarSign className="text-primary" />
              <h2 className="text-lg font-bold text-foreground">
                Pricing & Financial Settings
              </h2>
            </div>

            <div className="p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="text-sm font-medium text-foreground">
                  Hourly Rate (BHD)
                </label>
                <input
                  type="number"
                  defaultValue={2}
                  className="w-full mt-1 px-3 py-2 border rounded-md"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground">
                  Delivery Fee (BHD)
                </label>
                <input
                  type="number"
                  defaultValue={1}
                  className="w-full mt-1 px-3 py-2 border rounded-md"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground">
                  Platform Commission (%)
                </label>
                <input
                  type="number"
                  defaultValue={5}
                  className="w-full mt-1 px-3 py-2 border rounded-md"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground">
                  Tax Rate (%)
                </label>
                <input
                  type="number"
                  defaultValue={2}
                  className="w-full mt-1 px-3 py-2 border rounded-md"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground">
                  Payment Gateway Fee (%)
                </label>
                <input
                  type="number"
                  defaultValue={1.5}
                  className="w-full mt-1 px-3 py-2 border rounded-md"
                />
              </div>
            </div>

            <div className="px-6 pb-6">
              <Button>Save Financial Settings</Button>
            </div>
          </div>

          {/* Service Configuration */}
          <div className="bg-white rounded-lg border border-border shadow-sm">
            <div className="p-6 border-b border-border flex items-center gap-2">
              <Sliders className="text-primary" />
              <h2 className="text-lg font-bold text-foreground">
                Service Configuration
              </h2>
            </div>

            <div className="p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "General Cleaning",
                "Specialized Cleaning",
                "Professional Cleaning",
                "Emergency Services",
                "Recurring Services",
                "Contract Services",
              ].map((service, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border rounded-md px-4 py-3"
                >
                  <span className="text-sm text-foreground">{service}</span>
                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                </div>
              ))}
            </div>

            <div className="px-6 pb-6">
              <Button>Update Services</Button>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-white rounded-lg border border-border shadow-sm">
            <div className="p-6 border-b border-border flex items-center gap-2">
              <Bell className="text-primary" />
              <h2 className="text-lg font-bold text-foreground">
                Notification Settings
              </h2>
            </div>

            <div className="p-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "In-App Notifications",
                "Push Notifications",
                "Email Notifications",
                "WhatsApp Notifications",
              ].map((channel, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border rounded-md px-4 py-3"
                >
                  <span className="text-sm text-foreground">{channel}</span>
                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                </div>
              ))}
            </div>

            <div className="px-6 pb-6">
              <Button>Save Notification Settings</Button>
            </div>
          </div>

          {/* Security & Access Control */}
          <div className="bg-white rounded-lg border border-border shadow-sm">
            <div className="p-6 border-b border-border flex items-center gap-2">
              <Shield className="text-primary" />
              <h2 className="text-lg font-bold text-foreground">
                Security & Access Control
              </h2>
            </div>

            <div className="p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="text-sm font-medium text-foreground">
                  JWT Expiration (Hours)
                </label>
                <input
                  type="number"
                  defaultValue={24}
                  className="w-full mt-1 px-3 py-2 border rounded-md"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground">
                  Wallet PIN Threshold (BHD)
                </label>
                <input
                  type="number"
                  defaultValue={50}
                  className="w-full mt-1 px-3 py-2 border rounded-md"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground">
                  Max Failed Login Attempts
                </label>
                <input
                  type="number"
                  defaultValue={5}
                  className="w-full mt-1 px-3 py-2 border rounded-md"
                />
              </div>
            </div>

            <div className="px-6 pb-6">
              <Button variant="destructive">
                Save Security Settings
              </Button>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}

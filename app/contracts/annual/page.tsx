"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { PageNavbar } from "@/components/navigation/page-navbar"
import { Footer } from "@/components/navigation/footer"
import { Calendar, MapPin, DollarSign, CheckCircle, AlertCircle } from "lucide-react"

export default function AnnualContractPage() {
  const [step, setStep] = useState(1)
  const [dailyHours, setDailyHours] = useState("5")
  const [timePeriod, setTimePeriod] = useState("Morning (6 AM - 12 PM)")

  return (
    <div className="min-h-screen bg-background">
      <PageNavbar />

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Annual Cleaning Contract</h1>
            <p className="text-xl text-muted">Professional cleaning services for 12 months with flexible scheduling</p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg border border-border p-6">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold text-foreground mb-2">10% Discount</h3>
              <p className="text-sm text-muted">Save on annual contracts vs monthly pricing</p>
            </div>
            <div className="bg-white rounded-lg border border-border p-6">
              <div className="text-3xl mb-3">📅</div>
              <h3 className="font-bold text-foreground mb-2">Flexible Schedule</h3>
              <p className="text-sm text-muted">Choose 1-7 days per week at your preferred time</p>
            </div>
            <div className="bg-white rounded-lg border border-border p-6">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-bold text-foreground mb-2">30% Upfront</h3>
              <p className="text-sm text-muted">Only 30% advance payment, rest in monthly installments</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-lg border border-border p-8 shadow-sm mb-8">
            <div className="space-y-8">
              {/* Work Schedule */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Calendar size={24} /> Work Schedule
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Select Working Days</label>
                    <div className="grid grid-cols-7 gap-2">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                        <button
                          key={day}
                          className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors font-medium text-sm"
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Daily Hours</label>
                      <select
                        value={dailyHours}
                        onChange={(e) => setDailyHours(e.target.value)}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none bg-white"
                      >
                        <option value="1">1 hour</option>
                        <option value="2">2 hours</option>
                        <option value="3">3 hours</option>
                        <option value="4">4 hours</option>
                        <option value="5">5 hours</option>
                        <option value="6">6 hours</option>
                        <option value="7">7 hours</option>
                        <option value="8">8 hours</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Time Period</label>
                      <select
                        value={timePeriod}
                        onChange={(e) => setTimePeriod(e.target.value)}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none bg-white"
                      >
                        <option>Morning (6 AM - 12 PM)</option>
                        <option>Afternoon (12 PM - 6 PM)</option>
                        <option>Evening (6 PM - 10 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Contract Start Date</label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Contract End Date</label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Details */}
              <div className="border-t border-border pt-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <MapPin size={24} /> Service Details
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Service Location</label>
                    <input
                      type="text"
                      placeholder="Enter your address"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Number of Workers</label>
                      <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none bg-white">
                        <option>1 worker</option>
                        <option>2 workers</option>
                        <option>3 workers</option>
                        <option>4+ workers</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Worker Gender Preference</label>
                      <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none bg-white">
                        <option>No preference</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="border-t border-border pt-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <DollarSign size={24} /> Pricing & Payment
                </h2>
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted">5 days/week × 5 hours × 1 worker × 52 weeks</span>
                      <span className="font-semibold text-foreground">1,300 BHD</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">Administrative fees</span>
                      <span className="font-semibold text-foreground">50 BHD</span>
                    </div>
                    <div className="flex justify-between py-3 border-t border-border">
                      <span className="text-muted">Subtotal</span>
                      <span className="font-semibold text-foreground">1,350 BHD</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>10% Annual Discount</span>
                      <span>-135 BHD</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-primary border-t border-border pt-3">
                      <span>Total Cost</span>
                      <span>1,215 BHD</span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm font-medium text-blue-900 mb-2">30% Advance Payment</p>
                    <p className="text-2xl font-bold text-blue-900">365 BHD</p>
                    <p className="text-xs text-blue-800 mt-1">Due at contract signing</p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-sm font-medium text-green-900 mb-2">Monthly Installments (12×)</p>
                    <p className="text-2xl font-bold text-green-900">71 BHD</p>
                    <p className="text-xs text-green-800 mt-1">Due on the 1st of each month</p>
                  </div>
                </div>
              </div>

              {/* Terms */}
              <div className="border-t border-border pt-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Terms & Conditions</h2>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Schedule Modifications</p>
                      <p className="text-sm text-muted">Client may modify schedule with 48 hours advance notice</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Worker Replacement</p>
                      <p className="text-sm text-muted">
                        Service provider may replace worker with equivalent qualifications
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <AlertCircle size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Cancellation (7 days before start)</p>
                      <p className="text-sm text-muted">90% refund of advance payment</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Cancellation (after start)</p>
                      <p className="text-sm text-muted">Deduction of completed services + 30% penalty</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-4">
            <Button variant="outline" size="lg">
              Save Draft
            </Button>
            <Button size="lg">Continue to Payment</Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

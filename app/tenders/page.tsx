"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { PageNavbar } from "@/components/navigation/page-navbar"
import { Footer } from "@/components/navigation/footer"
import { FileText, Plus, Search, Clock, DollarSign, MapPin, Briefcase } from "lucide-react"

export default function TendersPage() {
  const [activeTab, setActiveTab] = useState<"browse" | "my-tenders">("browse")

  const tenders = [
    {
      id: 1,
      title: "Office Deep Cleaning - Downtown",
      type: "Professional Cleaning",
      location: "Downtown Business District",
      budget: "500 - 800 BHD",
      deadline: "2 days",
      bids: 8,
      status: "open",
    },
    {
      id: 2,
      title: "Post-Construction Cleaning",
      type: "Professional Cleaning",
      location: "Marina District",
      budget: "1000 - 1500 BHD",
      deadline: "3 days",
      bids: 12,
      status: "open",
    },
    {
      id: 3,
      title: "Swimming Pool Seasonal Cleaning",
      type: "Specialized Cleaning",
      location: "West Bay",
      budget: "300 - 400 BHD",
      deadline: "1 day",
      bids: 5,
      status: "closing-soon",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <PageNavbar />

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Tenders & Bids Marketplace</h1>
            <p className="text-lg text-muted mb-6">
              Post your project and receive competitive bids from verified service providers
            </p>

            {/* Tabs */}
            <div className="flex gap-4 border-b border-border">
              <button
                onClick={() => setActiveTab("browse")}
                className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                  activeTab === "browse"
                    ? "border-primary text-primary"
                    : "border-transparent text-muted hover:text-foreground"
                }`}
              >
                Browse Tenders
              </button>
              <button
                onClick={() => setActiveTab("my-tenders")}
                className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                  activeTab === "my-tenders"
                    ? "border-primary text-primary"
                    : "border-transparent text-muted hover:text-foreground"
                }`}
              >
                My Tenders
              </button>
            </div>
          </div>

          {/* Browse Tenders */}
          {activeTab === "browse" && (
            <div className="space-y-6">
              {/* Search & Filter */}
              <div className="bg-white rounded-lg border border-border p-6">
                <div className="flex gap-4 mb-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={20} />
                    <input
                      type="text"
                      placeholder="Search tenders..."
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <Button>Search</Button>
                </div>

                <div className="flex gap-4 flex-wrap">
                  {["All", "Professional", "Specialized", "General"].map((filter) => (
                    <button
                      key={filter}
                      className="px-4 py-2 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-colors text-sm font-medium"
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tender List */}
              <div className="space-y-4">
                {tenders.map((tender) => (
                  <div
                    key={tender.id}
                    className="bg-white rounded-lg border border-border p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-foreground">{tender.title}</h3>
                          <span
                            className={`text-xs font-bold px-3 py-1 rounded-full ${
                              tender.status === "open" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"
                            }`}
                          >
                            {tender.status === "open" ? "OPEN" : "CLOSING SOON"}
                          </span>
                        </div>
                        <p className="text-sm text-muted mb-3">{tender.type}</p>
                      </div>
                      <Button>View & Bid</Button>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="flex items-center gap-2 text-muted">
                        <MapPin size={16} />
                        <span className="text-sm">{tender.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted">
                        <DollarSign size={16} />
                        <span className="text-sm font-medium text-accent">{tender.budget}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted">
                        <Clock size={16} />
                        <span className="text-sm">{tender.deadline} left</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted">
                        <Briefcase size={16} />
                        <span className="text-sm">{tender.bids} bids</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* My Tenders */}
          {activeTab === "my-tenders" && (
            <div className="space-y-6">
              <div className="flex justify-end">
                <Button size="lg" className="gap-2">
                  <Plus size={20} />
                  Post New Tender
                </Button>
              </div>

              <div className="bg-white rounded-lg border border-dashed border-border p-12 text-center">
                <FileText size={48} className="mx-auto text-muted mb-4 opacity-50" />
                <h3 className="text-lg font-semibold text-foreground mb-2">No tenders yet</h3>
                <p className="text-muted mb-6">Post your first tender to receive bids from service providers</p>
                <Button>
                  <Plus size={16} className="mr-2" />
                  Create Tender
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { PageNavbar } from "@/components/navigation/page-navbar"
import { Footer } from "@/components/navigation/footer"
import { MapPin, Briefcase, DollarSign, Filter, Search, Heart, Share2 } from "lucide-react"

export default function JobsPage() {
  const [view, setView] = useState<"seekers" | "listings">("seekers")
  const [savedJobs, setSavedJobs] = useState<number[]>([])

  const jobSeekers = [
    {
      id: 1,
      name: "Fatima Al-Dosari",
      experience: 5,
      specialization: "General & Deep Cleaning",
      location: "Manama",
      availability: "Full-time",
      rating: 4.9,
      reviews: 45,
      hourlyRate: 8,
      image: "👩",
    },
    {
      id: 2,
      name: "Mohammed Khalifa",
      experience: 8,
      specialization: "Professional & Specialized",
      location: "Riffa",
      availability: "Part-time",
      rating: 4.7,
      reviews: 32,
      hourlyRate: 10,
      image: "👨",
    },
    {
      id: 3,
      name: "Sara Ahmed",
      experience: 3,
      specialization: "General Cleaning",
      location: "Muharraq",
      availability: "Hourly",
      rating: 4.8,
      reviews: 28,
      hourlyRate: 7,
      image: "👩",
    },
  ]

  const jobListings = [
    {
      id: 1,
      title: "Residential Cleaning Staff Needed",
      company: "Premium Cleaning Services",
      type: "Full-time",
      salary: "400-500 BHD",
      location: "Manama",
      requirements: "3+ years experience",
      posted: "2 days ago",
      image: "🏢",
    },
    {
      id: 2,
      title: "Deep Cleaning Specialist",
      company: "Commercial Facilities Ltd",
      type: "Contract",
      salary: "15-18 BHD/hour",
      location: "Seef District",
      requirements: "Specialized cleaning certification",
      posted: "1 day ago",
      image: "🏭",
    },
    {
      id: 3,
      title: "Part-time Cleaner (Hotel)",
      company: "Grand Hotel Bahrain",
      type: "Part-time",
      salary: "4-5 BHD/hour",
      location: "City Center",
      requirements: "Hotel cleaning experience",
      posted: "3 hours ago",
      image: "🏨",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <PageNavbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Cleaning Jobs Portal</h1>
          <p className="text-muted">Connect with talented cleaners or find your next opportunity</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-border">
          <button
            onClick={() => setView("seekers")}
            className={`px-4 py-3 font-semibold border-b-2 transition-colors ${
              view === "seekers" ? "border-primary text-primary" : "border-transparent text-muted hover:text-foreground"
            }`}
          >
            Find Cleaners (Job Seekers)
          </button>
          <button
            onClick={() => setView("listings")}
            className={`px-4 py-3 font-semibold border-b-2 transition-colors ${
              view === "listings"
                ? "border-primary text-primary"
                : "border-transparent text-muted hover:text-foreground"
            }`}
          >
            Find Jobs (Job Listings)
          </button>
        </div>

        {view === "seekers" ? (
          <>
            {/* Search & Filter */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="relative md:col-span-2">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={20} />
                <input
                  type="text"
                  placeholder="Search by name or specialization..."
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button variant="outline" className="gap-2 bg-transparent">
                <Filter size={20} />
                Advanced Filter
              </Button>
            </div>

            {/* Job Seekers Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobSeekers.map((seeker) => (
                <Card key={seeker.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="bg-gradient-to-br from-primary-light/20 to-accent/20 h-24 flex items-center justify-center">
                    <span className="text-5xl">{seeker.image}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-foreground text-lg mb-1">{seeker.name}</h3>
                    <p className="text-sm text-accent font-semibold mb-3">{seeker.specialization}</p>

                    <div className="space-y-2 mb-4 text-sm text-muted">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        {seeker.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase size={16} />
                        {seeker.experience} years exp. • {seeker.availability}
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign size={16} />
                        {seeker.hourlyRate} BHD/hour
                      </div>
                    </div>

                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(Math.floor(seeker.rating))].map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          ★
                        </span>
                      ))}
                      <span className="text-sm text-muted ml-2">({seeker.reviews})</span>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1">Send Request</Button>
                      <button
                        onClick={() =>
                          setSavedJobs(
                            savedJobs.includes(seeker.id)
                              ? savedJobs.filter((id) => id !== seeker.id)
                              : [...savedJobs, seeker.id],
                          )
                        }
                        className="px-3 py-2 border border-border rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <Heart size={20} className={savedJobs.includes(seeker.id) ? "fill-red-500 text-red-500" : ""} />
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Search */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="relative md:col-span-2">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={20} />
                <input
                  type="text"
                  placeholder="Search job titles or companies..."
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button variant="outline" className="gap-2 bg-transparent">
                <Filter size={20} />
                Filter
              </Button>
            </div>

            {/* Job Listings */}
            <div className="space-y-4">
              {jobListings.map((job) => (
                <Card key={job.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex gap-6">
                    <div className="text-4xl">{job.image}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground text-lg mb-1">{job.title}</h3>
                      <p className="text-muted text-sm mb-3">{job.company}</p>
                      <div className="grid sm:grid-cols-2 gap-3 mb-4 text-sm text-muted">
                        <div className="flex items-center gap-2">
                          <Briefcase size={16} />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign size={16} />
                          {job.salary}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          {job.location}
                        </div>
                        <p className="text-xs">{job.posted}</p>
                      </div>
                      <p className="text-sm text-foreground mb-4">
                        <span className="font-semibold">Requirements:</span> {job.requirements}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button size="sm">Apply Now</Button>
                      <button className="p-2 border border-border rounded-lg hover:bg-gray-50">
                        <Share2 size={16} className="text-muted" />
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  )
}

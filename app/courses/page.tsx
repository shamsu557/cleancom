"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { PageNavbar } from "@/components/navigation/page-navbar"
import { Footer } from "@/components/navigation/footer"
import { Clock, Users, Star, Filter, BookOpen, Play } from "lucide-react"

export default function CoursesPage() {
  const [selectedLevel, setSelectedLevel] = useState("all")
  const [selectedType, setSelectedType] = useState("all")

  const levels = [
    { id: "all", name: "All Levels" },
    { id: "beginner", name: "Beginner" },
    { id: "intermediate", name: "Intermediate" },
    { id: "advanced", name: "Advanced" },
  ]

  const types = [
    { id: "all", name: "All Types" },
    { id: "individual", name: "Individual Courses" },
    { id: "company", name: "Company Courses" },
  ]

  const courses = [
    {
      id: 1,
      title: "Professional Cleaning Basics",
      type: "individual",
      level: "beginner",
      duration: 16,
      students: 342,
      rating: 4.8,
      reviews: 89,
      price: 45,
      instructor: "Sarah Johnson",
      image: "📚",
      certified: true,
      delivery: "Online",
    },
    {
      id: 2,
      title: "Deep Cleaning & Sanitization",
      type: "individual",
      level: "intermediate",
      duration: 20,
      students: 218,
      rating: 4.7,
      reviews: 64,
      price: 65,
      instructor: "Mike Chen",
      image: "🧪",
      certified: true,
      delivery: "Online",
    },
    {
      id: 3,
      title: "Cleaning Company Management",
      type: "company",
      level: "intermediate",
      duration: 24,
      students: 156,
      rating: 4.9,
      reviews: 42,
      price: 125,
      instructor: "James Wilson",
      image: "📊",
      certified: true,
      delivery: "In-person",
    },
    {
      id: 4,
      title: "Advanced Equipment Operations",
      type: "individual",
      level: "advanced",
      duration: 18,
      students: 87,
      rating: 4.6,
      reviews: 31,
      price: 85,
      instructor: "Emily Davis",
      image: "⚙️",
      certified: true,
      delivery: "Hybrid",
    },
    {
      id: 5,
      title: "Customer Service Excellence",
      type: "company",
      level: "beginner",
      duration: 12,
      students: 256,
      rating: 4.8,
      reviews: 73,
      price: 35,
      instructor: "Alex Rodriguez",
      image: "💬",
      certified: false,
      delivery: "Online",
    },
    {
      id: 6,
      title: "Occupational Health & Safety",
      type: "individual",
      level: "beginner",
      duration: 14,
      students: 412,
      rating: 4.9,
      reviews: 128,
      price: 40,
      instructor: "Dr. Noor Ahmed",
      image: "🛡️",
      certified: true,
      delivery: "Online",
    },
  ]

  const filteredCourses = courses.filter(
    (course) =>
      (selectedLevel === "all" || course.level === selectedLevel) &&
      (selectedType === "all" || course.type === selectedType),
  )

  return (
    <div className="min-h-screen bg-background">
      <PageNavbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Professional Training Courses</h1>
          <p className="text-muted">Improve your skills with certified courses from industry experts</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Level Filter */}
            <div className="bg-white rounded-lg border border-border p-6 mb-6 sticky top-24">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Filter size={20} />
                Level
              </h3>
              <ul className="space-y-2">
                {levels.map((level) => (
                  <li key={level.id}>
                    <button
                      onClick={() => setSelectedLevel(level.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedLevel === level.id
                          ? "bg-primary text-white font-semibold"
                          : "text-foreground hover:bg-gray-50"
                      }`}
                    >
                      {level.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Type Filter */}
            <div className="bg-white rounded-lg border border-border p-6">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <BookOpen size={20} />
                Type
              </h3>
              <ul className="space-y-2">
                {types.map((type) => (
                  <li key={type.id}>
                    <button
                      onClick={() => setSelectedType(type.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedType === type.id
                          ? "bg-accent text-white font-semibold"
                          : "text-foreground hover:bg-gray-50"
                      }`}
                    >
                      {type.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Courses */}
          <div className="lg:col-span-3">
            <p className="text-muted mb-6">
              Showing <span className="font-semibold text-foreground">{filteredCourses.length}</span> courses
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                  <div className="bg-gradient-to-br from-primary-light/20 to-accent/20 h-40 flex items-center justify-center text-5xl relative">
                    {course.image}
                    {course.certified && (
                      <div className="absolute top-3 right-3 bg-accent text-white text-xs font-bold px-2 py-1 rounded-full">
                        Certified
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-bold text-foreground mb-2 line-clamp-2">{course.title}</h3>
                    <p className="text-sm text-muted mb-4">by {course.instructor}</p>

                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(Math.floor(course.rating))].map((_, i) => (
                          <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm text-muted">({course.reviews})</span>
                    </div>

                    <div className="space-y-2 mb-4 text-sm text-muted">
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        {course.duration} hours
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={16} />
                        {course.students} students
                      </div>
                      <div className="flex items-center gap-2">
                        <Play size={16} />
                        {course.delivery}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                      <p className="text-2xl font-bold text-primary">{course.price} BHD</p>
                      <Button size="sm">Enroll</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

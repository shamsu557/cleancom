"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { PageNavbar } from "@/components/navigation/page-navbar"
import { Footer } from "@/components/navigation/footer"
import { Search, ShoppingCart, Star, Filter, Grid3X3, List } from "lucide-react"

export default function StorePage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Products", count: 124 },
    { id: "chemicals", name: "Chemical Materials", count: 28 },
    { id: "tools", name: "Tools & Equipment", count: 45 },
    { id: "appliances", name: "Electrical Appliances", count: 32 },
    { id: "protective", name: "Protective Supplies", count: 19 },
  ]

  const products = [
    {
      id: 1,
      name: "Professional Multi-Purpose Cleaner",
      category: "chemicals",
      price: 8.5,
      rating: 4.8,
      reviews: 234,
      image: "🧪",
      stock: 150,
      bulk: "12+ items",
    },
    {
      id: 2,
      name: "Microfiber Cleaning Mops (Set of 3)",
      category: "tools",
      price: 12.99,
      rating: 4.9,
      reviews: 189,
      image: "🧹",
      stock: 85,
      bulk: "6+ items",
    },
    {
      id: 3,
      name: "Commercial Vacuum Cleaner 2000W",
      category: "appliances",
      price: 249.0,
      rating: 4.7,
      reviews: 56,
      image: "🌪️",
      stock: 12,
      bulk: "3+ items",
    },
    {
      id: 4,
      name: "Disposable Medical Gloves (100 pcs)",
      category: "protective",
      price: 5.99,
      rating: 4.6,
      reviews: 312,
      image: "🧤",
      stock: 500,
      bulk: "10+ packs",
    },
    {
      id: 5,
      name: "Disinfectant Surface Spray 1L",
      category: "chemicals",
      price: 6.5,
      rating: 4.8,
      reviews: 278,
      image: "💨",
      stock: 200,
      bulk: "20+ bottles",
    },
    {
      id: 6,
      name: "Heavy-Duty Cleaning Brush Set",
      category: "tools",
      price: 9.99,
      rating: 4.7,
      reviews: 145,
      image: "🪥",
      stock: 320,
      bulk: "5+ sets",
    },
  ]

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((p) => p.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background">
      <PageNavbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Cleaning Supplies Store</h1>
          <p className="text-muted">Professional cleaning products and equipment for all your needs</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Search */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={20} />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-lg border border-border p-6 mb-8 sticky top-24">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Filter size={20} />
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === cat.id
                          ? "bg-primary text-white font-semibold"
                          : "text-foreground hover:bg-gray-50"
                      }`}
                    >
                      <span className="flex justify-between items-center">
                        {cat.name}
                        <span
                          className={`text-xs font-semibold ${
                            selectedCategory === cat.id ? "text-white/80" : "text-muted"
                          }`}
                        >
                          {cat.count}
                        </span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Filter */}
            <div className="bg-white rounded-lg border border-border p-6">
              <h3 className="font-bold text-foreground mb-4">Price Range</h3>
              <div className="space-y-3">
                <input type="range" min="0" max="500" className="w-full" />
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-1/2 px-3 py-2 border border-border rounded text-sm"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-1/2 px-3 py-2 border border-border rounded text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted">
                Showing <span className="font-semibold text-foreground">{filteredProducts.length}</span> products
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "grid"
                      ? "bg-primary text-white"
                      : "border border-border text-muted hover:text-foreground"
                  }`}
                >
                  <Grid3X3 size={20} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "list"
                      ? "bg-primary text-white"
                      : "border border-border text-muted hover:text-foreground"
                  }`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>

            {/* Products Grid */}
            {viewMode === "grid" && (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="bg-gradient-to-br from-primary-light/20 to-accent/20 h-40 flex items-center justify-center text-5xl">
                      {product.image}
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-foreground mb-2 line-clamp-2">{product.name}</h3>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-1">
                          {[...Array(Math.floor(product.rating))].map((_, i) => (
                            <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-sm text-muted">({product.reviews})</span>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-2xl font-bold text-primary">{product.price} BHD</p>
                          <p className="text-xs text-accent font-semibold">{product.bulk}</p>
                        </div>
                        <span
                          className={`text-xs font-semibold px-2 py-1 rounded ${
                            product.stock > 50
                              ? "bg-green-100 text-green-800"
                              : product.stock > 10
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {product.stock} in stock
                        </span>
                      </div>
                      <Button className="w-full gap-2">
                        <ShoppingCart size={18} />
                        Add to Cart
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {/* Products List */}
            {viewMode === "list" && (
              <div className="space-y-4">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white border border-border rounded-lg p-6 flex gap-6">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary-light/20 to-accent/20 rounded-lg flex items-center justify-center text-4xl flex-shrink-0">
                      {product.image}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground text-lg mb-1">{product.name}</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          {[...Array(Math.floor(product.rating))].map((_, i) => (
                            <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-sm text-muted">({product.reviews} reviews)</span>
                      </div>
                      <p className="text-sm text-muted mb-3">{product.bulk}</p>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary">{product.price} BHD</p>
                        <span
                          className={`text-xs font-semibold px-2 py-1 rounded inline-block ${
                            product.stock > 50 ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {product.stock} in stock
                        </span>
                      </div>
                      <Button size="sm" className="gap-2">
                        <ShoppingCart size={16} />
                        Add
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

"use client"

import { DashboardNav } from "@/components/navigation/dashboard-nav"
import { Button } from "@/components/ui/button"
import { Plus, Edit, Trash2, Package } from "lucide-react"

export default function AdminStorePage() {
  const products = [
    {
      id: 1,
      name: "Professional Multi-Purpose Cleaner",
      category: "Chemicals",
      price: "8.50 BHD",
      stock: 150,
      sales: 342,
      status: "active",
    },
    {
      id: 2,
      name: "Microfiber Mops Set",
      category: "Tools",
      price: "12.99 BHD",
      stock: 85,
      sales: 218,
      status: "active",
    },
    {
      id: 3,
      name: "Vacuum Cleaner 2000W",
      category: "Appliances",
      price: "249.00 BHD",
      stock: 12,
      sales: 42,
      status: "low_stock",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav role="admin" userName="Admin Manager" />

      <main className="lg:ml-64">
        <div className="bg-gradient-to-r from-primary to-primary-light text-white p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold">Store Management</h1>
              <p className="text-white/80 mt-2">Manage products and inventory</p>
            </div>
            <Button variant="secondary" className="gap-2 hidden sm:flex">
              <Plus size={20} />
              Add Product
            </Button>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 border border-border">
              <Package className="text-primary mb-2" size={24} />
              <p className="text-muted text-sm mb-1">Total Products</p>
              <p className="text-3xl font-bold text-foreground">1,247</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-border">
              <p className="text-muted text-sm mb-1">Low Stock Items</p>
              <p className="text-3xl font-bold text-orange-600">28</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-border">
              <p className="text-muted text-sm mb-1">Total Sales</p>
              <p className="text-3xl font-bold text-green-600">18,542 BHD</p>
            </div>
          </div>

          {/* Products Table */}
          <div className="bg-white rounded-lg border border-border shadow-sm overflow-hidden">
            <div className="p-6 border-b border-border flex items-center justify-between">
              <h2 className="font-bold text-foreground text-lg">Products</h2>
              <Button size="sm" className="gap-2 sm:hidden">
                <Plus size={16} />
                Add
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-border">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">Product Name</th>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">Category</th>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">Price</th>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">Stock</th>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">Sales</th>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">Status</th>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {products.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-foreground">{product.name}</td>
                      <td className="px-6 py-4 text-muted">{product.category}</td>
                      <td className="px-6 py-4 text-foreground font-semibold">{product.price}</td>
                      <td className="px-6 py-4 text-muted">{product.stock}</td>
                      <td className="px-6 py-4 text-muted">{product.sales}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            product.status === "active"
                              ? "bg-green-100 text-green-800"
                              : "bg-orange-100 text-orange-800"
                          }`}
                        >
                          {product.status === "active" ? "Active" : "Low Stock"}
                        </span>
                      </td>
                      <td className="px-6 py-4 flex gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <Edit size={16} className="text-primary" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <Trash2 size={16} className="text-red-600" />
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

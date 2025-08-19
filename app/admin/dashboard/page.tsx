"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Package, 
  ShoppingCart, 
  Users, 
  DollarSign,
  Plus,
  Eye,
  Edit,
  Trash2
} from "lucide-react"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data
  const stats = {
    totalProducts: 24,
    totalOrders: 156,
    totalCustomers: 89,
    totalRevenue: 1250000
  }

  const recentOrders = [
    { id: "1", customer: "Ana Marku", total: 15000, status: "PENDING", date: "2024-01-15" },
    { id: "2", customer: "Dritan Hoxha", total: 8500, status: "COMPLETED", date: "2024-01-14" },
    { id: "3", customer: "Elona Demi", total: 12000, status: "PROCESSING", date: "2024-01-14" }
  ]

  const products = [
    { id: "1", title: "Buqetë Elegante Premium", price: 5000, category: "Buqeta", status: "active" },
    { id: "2", title: "Aranzhman Dasme Luksoze", price: 15000, category: "Dasma", status: "active" },
    { id: "3", title: "Buqetë Ditëlindje Festive", price: 3500, category: "Buqeta", status: "active" }
  ]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('sq-AL', {
      style: 'currency',
      currency: 'ALL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const getStatusBadge = (status: string) => {
    const statusStyles = {
      PENDING: "bg-yellow-600 text-yellow-100",
      PROCESSING: "bg-blue-600 text-blue-100", 
      COMPLETED: "bg-green-600 text-green-100",
      CANCELLED: "bg-red-600 text-red-100",
      active: "bg-green-600 text-green-100",
      inactive: "bg-gray-600 text-gray-100"
    }
    return statusStyles[status as keyof typeof statusStyles] || "bg-gray-600 text-gray-100"
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold">Admin Dashboard - Olivia's Flowers</h1>
          <p className="text-gray-400 mt-2">Manage your flower shop</p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-8">
            {[
              { id: "overview", label: "Overview" },
              { id: "products", label: "Products" },
              { id: "orders", label: "Orders" },
              { id: "customers", label: "Customers" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? "border-yellow-400 text-yellow-400"
                    : "border-transparent text-gray-400 hover:text-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6">
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">Total Products</CardTitle>
                  <Package className="h-4 w-4 text-blue-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{stats.totalProducts}</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">Total Orders</CardTitle>
                  <ShoppingCart className="h-4 w-4 text-green-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{stats.totalOrders}</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">Total Customers</CardTitle>
                  <Users className="h-4 w-4 text-purple-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{stats.totalCustomers}</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">Total Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-yellow-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{formatPrice(stats.totalRevenue)}</div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Orders */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">
                      <div>
                        <p className="font-medium text-white">{order.customer}</p>
                        <p className="text-sm text-gray-400">{order.date}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="font-semibold text-white">{formatPrice(order.total)}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(order.status)}`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "products" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Products</h2>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
                <Plus className="h-4 w-4 mr-2" />
                Add Product
              </Button>
            </div>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-700">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Product</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Category</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Price</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {products.map((product) => (
                        <tr key={product.id} className="hover:bg-gray-750">
                          <td className="px-6 py-4 whitespace-nowrap text-white">{product.title}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-300">{product.category}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-white">{formatPrice(product.price)}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(product.status)}`}>
                              {product.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline" className="border-gray-600 text-gray-300">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline" className="border-gray-600 text-gray-300">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:text-red-400">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "orders" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Orders</h2>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent>
                <p className="text-gray-400">Order management functionality coming soon...</p>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "customers" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Customers</h2>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent>
                <p className="text-gray-400">Customer management functionality coming soon...</p>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  )
}
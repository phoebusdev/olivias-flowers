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
  const [showAddProduct, setShowAddProduct] = useState(false)

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
      PENDING: "bg-rose-200 text-rose-800 border border-rose-300",
      PROCESSING: "bg-rose-300 text-rose-900 border border-rose-400", 
      COMPLETED: "bg-green-200 text-green-800 border border-green-300",
      CANCELLED: "bg-rose-400 text-rose-900 border border-rose-500",
      active: "bg-green-200 text-green-800 border border-green-300",
      inactive: "bg-rose-100 text-rose-700 border border-rose-200"
    }
    return statusStyles[status as keyof typeof statusStyles] || "bg-rose-100 text-rose-700 border border-rose-200"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-rose-100">
      {/* Header */}
      <header className="bg-white bg-opacity-90 backdrop-blur-sm border-b border-rose-200 shadow-sm p-4 md:p-6">
        <div className="container mx-auto">
          <h1 className="text-xl md:text-3xl font-bold font-playfair text-rose-900 tracking-tight">Admin Dashboard</h1>
          <p className="text-rose-700 mt-1 md:mt-2 text-sm md:text-base font-medium">Olivia's Flowers Management</p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white bg-opacity-80 backdrop-blur-sm border-b border-rose-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex space-x-4 md:space-x-8 overflow-x-auto">
            {[
              { id: "overview", label: "Overview" },
              { id: "products", label: "Products" },
              { id: "orders", label: "Orders" },
              { id: "customers", label: "Customers" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 md:py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                  activeTab === tab.id
                    ? "border-rose-500 text-rose-800"
                    : "border-transparent text-rose-600 hover:text-rose-800 hover:border-rose-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto p-4 md:p-6">
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
              <Card className="bg-white bg-opacity-80 backdrop-blur-sm border border-rose-200 shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300 hover:shadow-rose-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-rose-700">Total Products</CardTitle>
                  <Package className="h-5 w-5 text-rose-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-rose-900 font-playfair">{stats.totalProducts}</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white bg-opacity-80 backdrop-blur-sm border border-rose-200 shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300 hover:shadow-rose-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-rose-700">Total Orders</CardTitle>
                  <ShoppingCart className="h-5 w-5 text-rose-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-rose-900 font-playfair">{stats.totalOrders}</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white bg-opacity-80 backdrop-blur-sm border border-rose-200 shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300 hover:shadow-rose-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-rose-700">Total Customers</CardTitle>
                  <Users className="h-5 w-5 text-rose-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-rose-900 font-playfair">{stats.totalCustomers}</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white bg-opacity-80 backdrop-blur-sm border border-rose-200 shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300 hover:shadow-rose-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-rose-700">Total Revenue</CardTitle>
                  <DollarSign className="h-5 w-5 text-rose-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-rose-900 font-playfair">{formatPrice(stats.totalRevenue)}</div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Orders */}
            <Card className="bg-white bg-opacity-80 backdrop-blur-sm border border-rose-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:shadow-rose-200">
              <CardHeader>
                <CardTitle className="text-rose-900 font-playfair text-xl">Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-rose-50 to-white rounded-lg border border-rose-100 hover:shadow-md transition-all duration-300">
                      <div>
                        <p className="font-medium text-rose-900">{order.customer}</p>
                        <p className="text-sm text-rose-600">{order.date}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="font-semibold text-rose-900 font-playfair">{formatPrice(order.total)}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(order.status)}`}>
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
          <div className="space-y-4 md:space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h2 className="text-xl md:text-2xl font-bold text-rose-900 font-playfair">Products</h2>
              <Button 
                className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                onClick={() => setShowAddProduct(true)}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Product
              </Button>
            </div>
            
            {/* Desktop Table */}
            <div className="hidden lg:block">
              <Card className="bg-white bg-opacity-90 backdrop-blur-sm border border-rose-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gradient-to-r from-rose-100 to-rose-200">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-rose-800 uppercase tracking-wider">Product</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-rose-800 uppercase tracking-wider">Category</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-rose-800 uppercase tracking-wider">Price</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-rose-800 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-rose-800 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-rose-100">
                        {products.map((product) => (
                          <tr key={product.id} className="hover:bg-rose-50 transition-colors duration-200">
                            <td className="px-6 py-4 text-rose-900 font-medium">{product.title}</td>
                            <td className="px-6 py-4 text-rose-700">{product.category}</td>
                            <td className="px-6 py-4 text-rose-900 font-semibold font-playfair">{formatPrice(product.price)}</td>
                            <td className="px-6 py-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(product.status)}`}>
                                {product.status}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex space-x-2">
                                <Button size="sm" variant="outline" className="border-rose-300 text-rose-600 hover:bg-rose-50 hover:border-rose-400">
                                  <Eye className="h-4 w-4" />
                                </Button>
                                <Button size="sm" variant="outline" className="border-rose-300 text-rose-600 hover:bg-rose-50 hover:border-rose-400">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button size="sm" variant="outline" className="border-rose-300 text-rose-600 hover:bg-rose-100 hover:border-rose-400 hover:text-rose-800">
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

            {/* Mobile Cards */}
            <div className="lg:hidden space-y-4">
              {products.map((product) => (
                <Card key={product.id} className="bg-white bg-opacity-90 backdrop-blur-sm border border-rose-200 shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300 hover:shadow-rose-200">
                  <CardContent className="p-4">
                    <div className="flex flex-col space-y-3">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-rose-900 text-sm">{product.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(product.status)}`}>
                          {product.status}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-rose-700">{product.category}</span>
                        <span className="text-rose-900 font-semibold font-playfair">{formatPrice(product.price)}</span>
                      </div>
                      <div className="flex justify-end space-x-2">
                        <Button size="sm" variant="outline" className="border-rose-300 text-rose-600 hover:bg-rose-50">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="border-rose-300 text-rose-600 hover:bg-rose-50">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="border-rose-300 text-rose-600 hover:bg-rose-100">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Add Product Modal */}
            {showAddProduct && (
              <div className="fixed inset-0 bg-rose-900 bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                <div className="bg-white bg-opacity-95 backdrop-blur-sm border border-rose-200 rounded-lg shadow-2xl p-4 md:p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg md:text-xl font-bold text-rose-900 font-playfair">Add New Product</h3>
                    <button 
                      onClick={() => setShowAddProduct(false)}
                      className="text-rose-600 hover:text-rose-800 text-xl md:text-2xl transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                  
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-rose-800 mb-2">Product Title</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-rose-50 border border-rose-300 rounded-lg text-rose-900 focus:border-rose-500 focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50"
                        placeholder="Enter product title"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-rose-800 mb-2">Description</label>
                      <textarea 
                        className="w-full px-4 py-3 bg-rose-50 border border-rose-300 rounded-lg text-rose-900 focus:border-rose-500 focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50 resize-none"
                        rows={3}
                        placeholder="Enter product description"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-rose-800 mb-2">Price (ALL)</label>
                      <input 
                        type="number" 
                        className="w-full px-4 py-3 bg-rose-50 border border-rose-300 rounded-lg text-rose-900 focus:border-rose-500 focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50"
                        placeholder="0"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-rose-800 mb-2">Category</label>
                      <select className="w-full px-4 py-3 bg-rose-50 border border-rose-300 rounded-lg text-rose-900 focus:border-rose-500 focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50">
                        <option value="">Select category</option>
                        <option value="Buqeta">Buqeta</option>
                        <option value="Dasma">Dasma</option>
                        <option value="Ditëlindje">Ditëlindje</option>
                        <option value="Orkide">Orkide</option>
                      </select>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3 pt-6">
                      <Button 
                        type="button"
                        className="flex-1 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={() => {
                          alert('Product would be saved to database');
                          setShowAddProduct(false);
                        }}
                      >
                        Save Product
                      </Button>
                      <Button 
                        type="button"
                        variant="outline" 
                        className="flex-1 border-rose-300 text-rose-600 hover:bg-rose-50 hover:border-rose-400"
                        onClick={() => setShowAddProduct(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            )}
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
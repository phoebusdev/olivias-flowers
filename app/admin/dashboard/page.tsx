"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

interface Order {
  id: string
  name: string
  email: string
  phone: string
  message: string
  date: string
}

interface Product {
  id: string
  title: string
  price: number
  category: {
    id: string
    name: string
    slug: string
  }
  images: string[]
  description: string
  slug: string
  active: boolean
  featured: boolean
}

interface Category {
  id: string
  name: string
  slug: string
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"orders" | "products">("orders")
  const [orders, setOrders] = useState<Order[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [showAddProduct, setShowAddProduct] = useState(false)
  const [newProduct, setNewProduct] = useState({ 
    title: "", 
    description: "", 
    price: "", 
    categoryId: "", 
    images: [] as string[] 
  })
  const [isDragging, setIsDragging] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const isAuth = localStorage.getItem("adminAuth")
    if (isAuth !== "true") {
      router.push("/admin")
    }

    // Load mock contact form data
    const mockOrders: Order[] = [
      { id: "1", name: "Ana Marku", email: "ana@email.com", phone: "+355 69 123 4567", message: "Need wedding flowers for 50 guests", date: "2024-01-15" },
      { id: "2", name: "Dritan Hoxha", email: "dritan@email.com", phone: "+355 68 234 5678", message: "Birthday bouquet needed", date: "2024-01-14" },
      { id: "3", name: "Elona Demi", email: "elona@email.com", phone: "+355 69 345 6789", message: "Corporate event decoration", date: "2024-01-13" }
    ]
    setOrders(mockOrders)

    // Load real products and categories from database
    loadProducts()
    loadCategories()
  }, [router])

  const loadProducts = async () => {
    try {
      const response = await fetch('/api/products')
      if (response.ok) {
        const data = await response.json()
        setProducts(data)
      }
    } catch (error) {
      console.error('Error loading products:', error)
    }
  }

  const loadCategories = async () => {
    try {
      const response = await fetch('/api/categories')
      if (response.ok) {
        const data = await response.json()
        setCategories(data)
      }
    } catch (error) {
      console.error('Error loading categories:', error)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("adminAuth")
    router.push("/admin")
  }

  const handleAddProduct = async () => {
    if (newProduct.title && newProduct.description && newProduct.price && newProduct.categoryId) {
      setLoading(true)
      try {
        const response = await fetch('/api/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: newProduct.title,
            description: newProduct.description,
            price: parseFloat(newProduct.price),
            categoryId: newProduct.categoryId,
            images: newProduct.images,
            colors: ['Të ndryshme'],
            sizes: ['Standard'],
            occasions: [],
            featured: false
          }),
        })

        if (response.ok) {
          const newProductData = await response.json()
          setProducts([...products, newProductData])
          setNewProduct({ title: "", description: "", price: "", categoryId: "", images: [] })
          setShowAddProduct(false)
        } else {
          console.error('Failed to create product')
        }
      } catch (error) {
        console.error('Error creating product:', error)
      } finally {
        setLoading(false)
      }
    }
  }

  const handleDeleteProduct = async (id: string) => {
    try {
      const response = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        setProducts(products.filter(p => p.id !== id))
      } else {
        console.error('Failed to delete product')
      }
    } catch (error) {
      console.error('Error deleting product:', error)
    }
  }

  const handleImageDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const imageUrl = event.target?.result as string
        setNewProduct({ 
          ...newProduct, 
          images: [...newProduct.images, imageUrl]
        })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const imageUrl = event.target?.result as string
        setNewProduct({ 
          ...newProduct, 
          images: [...newProduct.images, imageUrl]
        })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const removeImage = (index: number) => {
    setNewProduct({
      ...newProduct,
      images: newProduct.images.filter((_, i) => i !== index)
    })
  }

  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#f5f5f5"
    },
    header: {
      backgroundColor: "white",
      borderBottom: "1px solid #ddd",
      padding: "16px 24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },
    title: {
      fontSize: "20px",
      fontWeight: "bold",
      margin: 0
    },
    logoutBtn: {
      padding: "8px 16px",
      backgroundColor: "#666",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "14px"
    },
    nav: {
      backgroundColor: "white",
      borderBottom: "1px solid #ddd",
      padding: "0 24px",
      display: "flex",
      gap: "24px"
    },
    navBtn: (active: boolean) => ({
      padding: "16px 0",
      backgroundColor: "transparent",
      border: "none",
      borderBottom: active ? "2px solid #333" : "2px solid transparent",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: active ? "600" : "400"
    }),
    content: {
      padding: "24px"
    },
    table: {
      width: "100%",
      backgroundColor: "white",
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
    },
    th: {
      textAlign: "left" as const,
      padding: "12px",
      backgroundColor: "#f8f8f8",
      fontWeight: "600",
      fontSize: "14px",
      borderBottom: "1px solid #ddd"
    },
    td: {
      padding: "12px",
      fontSize: "14px",
      borderBottom: "1px solid #eee"
    },
    addBtn: {
      padding: "10px 20px",
      backgroundColor: "#333",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "14px",
      marginBottom: "20px"
    },
    deleteBtn: {
      padding: "6px 12px",
      backgroundColor: "#dc3545",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "12px"
    },
    modal: {
      position: "fixed" as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    modalContent: {
      backgroundColor: "white",
      padding: "24px",
      borderRadius: "8px",
      width: "100%",
      maxWidth: "500px",
      maxHeight: "90vh",
      overflowY: "auto" as const
    },
    input: {
      width: "100%",
      padding: "8px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "14px",
      marginBottom: "12px",
      boxSizing: "border-box" as const
    },
    textarea: {
      width: "100%",
      padding: "8px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "14px",
      marginBottom: "12px",
      minHeight: "80px",
      boxSizing: "border-box" as const,
      resize: "vertical" as const
    },
    select: {
      width: "100%",
      padding: "8px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "14px",
      marginBottom: "12px",
      boxSizing: "border-box" as const
    },
    label: {
      display: "block",
      marginBottom: "4px",
      fontSize: "14px",
      fontWeight: "500"
    }
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Admin Dashboard</h1>
        <button onClick={handleLogout} style={styles.logoutBtn}>
          Logout
        </button>
      </header>

      <nav style={styles.nav}>
        <button
          onClick={() => setActiveTab("orders")}
          style={styles.navBtn(activeTab === "orders")}
        >
          Contact Form Orders
        </button>
        <button
          onClick={() => setActiveTab("products")}
          style={styles.navBtn(activeTab === "products")}
        >
          Products
        </button>
      </nav>

      <div style={styles.content}>
        {activeTab === "orders" && (
          <div>
            <h2 style={{ marginBottom: "20px" }}>Contact Form Submissions</h2>
            <div style={styles.table}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={styles.th}>Date</th>
                    <th style={styles.th}>Name</th>
                    <th style={styles.th}>Email</th>
                    <th style={styles.th}>Phone</th>
                    <th style={styles.th}>Message</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order => (
                    <tr key={order.id}>
                      <td style={styles.td}>{order.date}</td>
                      <td style={styles.td}>{order.name}</td>
                      <td style={styles.td}>{order.email}</td>
                      <td style={styles.td}>{order.phone}</td>
                      <td style={styles.td}>{order.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "products" && (
          <div>
            <button onClick={() => setShowAddProduct(true)} style={styles.addBtn}>
              Add Product
            </button>
            <div style={styles.table}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={styles.th}>Image</th>
                    <th style={styles.th}>Title</th>
                    <th style={styles.th}>Price (ALL)</th>
                    <th style={styles.th}>Category</th>
                    <th style={styles.th}>Status</th>
                    <th style={styles.th}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(product => (
                    <tr key={product.id}>
                      <td style={styles.td}>
                        {product.images && product.images.length > 0 ? (
                          <img 
                            src={product.images[0]} 
                            alt={product.title}
                            style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "4px" }}
                          />
                        ) : (
                          <div style={{ 
                            width: "50px", 
                            height: "50px", 
                            backgroundColor: "#f0f0f0", 
                            borderRadius: "4px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "20px"
                          }}>
                            🌸
                          </div>
                        )}
                      </td>
                      <td style={styles.td}>{product.title}</td>
                      <td style={styles.td}>{product.price.toLocaleString()}</td>
                      <td style={styles.td}>{product.category.name}</td>
                      <td style={styles.td}>
                        <span style={{
                          padding: "2px 8px",
                          borderRadius: "4px",
                          fontSize: "12px",
                          backgroundColor: product.active ? "#d4edda" : "#f8d7da",
                          color: product.active ? "#155724" : "#721c24"
                        }}>
                          {product.active ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td style={styles.td}>
                        <button
                          onClick={() => handleDeleteProduct(product.id)}
                          style={styles.deleteBtn}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {showAddProduct && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h2 style={{ marginBottom: "20px" }}>Add New Product</h2>
            <div>
              <label style={styles.label}>Product Title</label>
              <input
                type="text"
                value={newProduct.title}
                onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
                style={styles.input}
                placeholder="Enter product title"
              />
            </div>
            <div>
              <label style={styles.label}>Description</label>
              <textarea
                value={newProduct.description}
                onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                style={styles.textarea}
                placeholder="Enter product description"
              />
            </div>
            <div>
              <label style={styles.label}>Price (ALL)</label>
              <input
                type="number"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                style={styles.input}
                placeholder="0"
              />
            </div>
            <div>
              <label style={styles.label}>Category</label>
              <select
                value={newProduct.categoryId}
                onChange={(e) => setNewProduct({ ...newProduct, categoryId: e.target.value })}
                style={styles.select}
              >
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label style={styles.label}>Product Images</label>
              
              {/* Display existing images */}
              {newProduct.images.length > 0 && (
                <div style={{ marginBottom: "12px" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {newProduct.images.map((image, index) => (
                      <div key={index} style={{ position: "relative" }}>
                        <img 
                          src={image} 
                          alt={`Preview ${index + 1}`}
                          style={{ 
                            width: "80px", 
                            height: "80px", 
                            objectFit: "cover", 
                            borderRadius: "4px",
                            border: "1px solid #ddd"
                          }}
                        />
                        <button
                          onClick={() => removeImage(index)}
                          style={{
                            position: "absolute",
                            top: "-8px",
                            right: "-8px",
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            backgroundColor: "#dc3545",
                            color: "white",
                            border: "none",
                            fontSize: "12px",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                          }}
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Drag and Drop Area */}
              <div
                onDrop={handleImageDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                style={{
                  border: isDragging ? "2px dashed #333" : "2px dashed #ccc",
                  borderRadius: "4px",
                  padding: "20px",
                  textAlign: "center" as const,
                  backgroundColor: isDragging ? "#f0f0f0" : "#fafafa",
                  marginBottom: "12px",
                  cursor: "pointer",
                  position: "relative" as const
                }}
                onClick={() => document.getElementById('fileInput')?.click()}
              >
                <div>
                  <p style={{ margin: "0 0 8px 0", color: "#666" }}>
                    Drag & drop an image here or click to select
                  </p>
                  <p style={{ margin: 0, fontSize: "12px", color: "#999" }}>
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  onChange={handleImageSelect}
                  style={{ display: "none" }}
                />
              </div>
            </div>
            <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
              <button
                onClick={handleAddProduct}
                disabled={loading}
                style={{ 
                  ...styles.addBtn, 
                  flex: 1, 
                  margin: 0,
                  opacity: loading ? 0.6 : 1,
                  cursor: loading ? "not-allowed" : "pointer"
                }}
              >
                {loading ? "Adding..." : "Add Product"}
              </button>
              <button
                onClick={() => setShowAddProduct(false)}
                style={{ ...styles.logoutBtn, flex: 1 }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
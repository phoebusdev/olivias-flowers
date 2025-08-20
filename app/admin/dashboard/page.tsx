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
  name: string
  price: number
  category: string
  image: string
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"orders" | "products">("orders")
  const [orders, setOrders] = useState<Order[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [showAddProduct, setShowAddProduct] = useState(false)
  const [newProduct, setNewProduct] = useState({ name: "", price: "", category: "", image: "" })
  const [isDragging, setIsDragging] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const isAuth = localStorage.getItem("adminAuth")
    if (isAuth !== "true") {
      router.push("/admin")
    }

    // Load mock data
    const mockOrders: Order[] = [
      { id: "1", name: "Ana Marku", email: "ana@email.com", phone: "+355 69 123 4567", message: "Need wedding flowers for 50 guests", date: "2024-01-15" },
      { id: "2", name: "Dritan Hoxha", email: "dritan@email.com", phone: "+355 68 234 5678", message: "Birthday bouquet needed", date: "2024-01-14" },
      { id: "3", name: "Elona Demi", email: "elona@email.com", phone: "+355 69 345 6789", message: "Corporate event decoration", date: "2024-01-13" }
    ]
    
    const mockProducts: Product[] = [
      { id: "1", name: "Rose Bouquet", price: 5000, category: "Bouquets", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23" },
      { id: "2", name: "Wedding Arrangement", price: 15000, category: "Events", image: "https://images.unsplash.com/photo-1522057384400-681b421cfebc" },
      { id: "3", name: "Birthday Special", price: 3500, category: "Bouquets", image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364" },
      { id: "4", name: "Orchid Plant", price: 8000, category: "Plants", image: "https://images.unsplash.com/photo-1612487439139-c2f2095c7b38" }
    ]

    setOrders(mockOrders)
    setProducts(mockProducts)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("adminAuth")
    router.push("/admin")
  }

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.category && newProduct.image) {
      const product: Product = {
        id: Date.now().toString(),
        name: newProduct.name,
        price: parseFloat(newProduct.price),
        category: newProduct.category,
        image: newProduct.image
      }
      setProducts([...products, product])
      setNewProduct({ name: "", price: "", category: "", image: "" })
      setShowAddProduct(false)
    }
  }

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id))
  }

  const handleImageDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setNewProduct({ ...newProduct, image: event.target?.result as string })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setNewProduct({ ...newProduct, image: event.target?.result as string })
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
      maxWidth: "400px"
    },
    input: {
      width: "100%",
      padding: "8px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "14px",
      marginBottom: "12px"
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
                    <th style={styles.th}>Name</th>
                    <th style={styles.th}>Price (ALL)</th>
                    <th style={styles.th}>Category</th>
                    <th style={styles.th}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(product => (
                    <tr key={product.id}>
                      <td style={styles.td}>
                        <img 
                          src={product.image} 
                          alt={product.name}
                          style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "4px" }}
                        />
                      </td>
                      <td style={styles.td}>{product.name}</td>
                      <td style={styles.td}>{product.price.toLocaleString()}</td>
                      <td style={styles.td}>{product.category}</td>
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
              <label style={styles.label}>Product Name</label>
              <input
                type="text"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                style={styles.input}
              />
            </div>
            <div>
              <label style={styles.label}>Price (ALL)</label>
              <input
                type="number"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                style={styles.input}
              />
            </div>
            <div>
              <label style={styles.label}>Category</label>
              <input
                type="text"
                value={newProduct.category}
                onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                style={styles.input}
              />
            </div>
            <div>
              <label style={styles.label}>Product Image</label>
              
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
                {newProduct.image ? (
                  <div>
                    <img 
                      src={newProduct.image} 
                      alt="Preview" 
                      style={{ 
                        maxWidth: "100%", 
                        maxHeight: "150px", 
                        borderRadius: "4px" 
                      }} 
                    />
                    <p style={{ marginTop: "8px", fontSize: "12px", color: "#666" }}>
                      Click or drag to replace
                    </p>
                  </div>
                ) : (
                  <div>
                    <p style={{ margin: "0 0 8px 0", color: "#666" }}>
                      Drag & drop an image here or click to select
                    </p>
                    <p style={{ margin: 0, fontSize: "12px", color: "#999" }}>
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                )}
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  onChange={handleImageSelect}
                  style={{ display: "none" }}
                />
              </div>
              
              {/* Optional: URL input as alternative */}
              <input
                type="text"
                value={newProduct.image.startsWith('data:') ? '' : newProduct.image}
                onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                style={styles.input}
                placeholder="Or enter image URL"
              />
            </div>
            <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
              <button
                onClick={handleAddProduct}
                style={{ ...styles.addBtn, flex: 1, margin: 0 }}
              >
                Add
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
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Lock } from "lucide-react"

export default function AdminLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (email === "olivias.flowers@gmail.com" && password === "Fl0w3r$$88") {
      sessionStorage.setItem('admin-authenticated', 'true')
      router.push("/admin/dashboard")
    } else {
      setError("Invalid credentials. Use olivias.flowers@gmail.com / Fl0w3r$$88")
    }
    
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-rose-100 p-4">
      <div className="w-full max-w-md bg-white bg-opacity-90 backdrop-blur-sm border border-rose-200 rounded-lg shadow-2xl p-6 animate-fade-in">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-rose-500 to-rose-600 rounded-full shadow-lg animate-pulse-slow">
              <Lock className="h-6 w-6 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-rose-900 font-playfair tracking-tight">Admin Login</h1>
          <p className="text-rose-700 mt-2 text-lg font-medium">
            Enter your credentials to access the admin dashboard
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-4 bg-rose-100 border border-rose-300 rounded-lg text-rose-800 text-sm">
              {error}
            </div>
          )}
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-rose-800 text-sm font-medium block">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 px-4 py-3 bg-rose-50 border border-rose-300 rounded-lg text-rose-900 placeholder:text-rose-500 focus:border-rose-500 focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50"
              placeholder="olivias.flowers@gmail.com"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="password" className="text-rose-800 text-sm font-medium block">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 px-4 py-3 bg-rose-50 border border-rose-300 rounded-lg text-rose-900 placeholder:text-rose-500 focus:border-rose-500 focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50"
              placeholder="Enter your password"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 relative overflow-hidden shadow-lg hover:shadow-xl hover:scale-[1.02]"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>
        
        <div className="mt-6 text-center text-sm text-rose-700 bg-gradient-to-r from-rose-50 to-rose-100 p-4 rounded-lg border border-rose-200">
          <span className="font-medium">Demo credentials:</span><br />
          olivias.flowers@gmail.com / Fl0w3r$$88
        </div>
      </div>
    </div>
  )
}
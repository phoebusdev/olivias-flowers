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
      router.push("/admin/dashboard")
    } else {
      setError("Invalid credentials. Use olivias.flowers@gmail.com / Fl0w3r$$88")
    }
    
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 p-4">
      <div className="w-full max-w-md bg-gray-900/50 border border-gray-700 rounded-lg backdrop-blur-sm p-6">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-yellow-400 rounded-full">
              <Lock className="h-6 w-6 text-black" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white">Admin Login</h1>
          <p className="text-gray-400 mt-2">
            Enter your credentials to access the admin dashboard
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 bg-red-900/50 border border-red-700 rounded-lg text-red-300 text-sm">
              {error}
            </div>
          )}
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-gray-300 text-sm font-medium">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-10 px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-md text-white placeholder:text-gray-400 focus:border-yellow-400 focus:outline-none"
              placeholder="olivias.flowers@gmail.com"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="password" className="text-gray-300 text-sm font-medium">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-10 px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-md text-white placeholder:text-gray-400 focus:border-yellow-400 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full h-11 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-md transition-colors disabled:opacity-50"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>
        
        <div className="mt-4 text-center text-sm text-gray-400">
          Demo credentials: olivias.flowers@gmail.com / Fl0w3r$$88
        </div>
      </div>
    </div>
  )
}
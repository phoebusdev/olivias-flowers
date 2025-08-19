"use client"

import { Lock } from "lucide-react"

export default function AdminLogin() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    if (email === "admin@oliviasflowers.com" && password === "admin123") {
      window.location.href = "/admin/dashboard"
    } else {
      const errorDiv = document.getElementById("error-message")
      if (errorDiv) {
        errorDiv.textContent = "Invalid credentials. Use admin@oliviasflowers.com / admin123"
        errorDiv.style.display = "block"
      }
    }
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
          <div id="error-message" className="hidden p-3 bg-red-900/50 border border-red-700 rounded-lg text-red-300 text-sm"></div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-gray-300 text-sm font-medium">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full h-10 px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-md text-white placeholder:text-gray-400 focus:border-yellow-400 focus:outline-none"
              placeholder="admin@oliviasflowers.com"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="password" className="text-gray-300 text-sm font-medium">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full h-10 px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-md text-white placeholder:text-gray-400 focus:border-yellow-400 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full h-11 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-md transition-colors"
          >
            Sign In
          </button>
        </form>
        
        <div className="mt-4 text-center text-sm text-gray-400">
          Demo credentials: admin@oliviasflowers.com / admin123
        </div>
      </div>
    </div>
  )
}
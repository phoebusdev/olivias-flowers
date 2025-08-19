"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ReactNode } from "react"

interface AdminLayoutProps {
  children: ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Check if user is authenticated (simple session storage check)
    const isLoggedIn = sessionStorage.getItem('admin-authenticated') === 'true'
    setIsAuthenticated(isLoggedIn)
    
    if (!isLoggedIn) {
      router.push('/admin/login')
    }
  }, [router])

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null // Will redirect to login
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <main>
        {children}
      </main>
    </div>
  )
}
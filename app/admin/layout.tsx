"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { ReactNode } from "react"
import { AdminNav } from "@/components/admin/admin-nav"

interface AdminLayoutProps {
  children: ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  if (!session || session.user?.role !== "ADMIN") {
    redirect("/admin/login")
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <AdminNav />
      <main className="pt-16">
        {children}
      </main>
    </div>
  )
}
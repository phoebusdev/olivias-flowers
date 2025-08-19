"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut, useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  Settings, 
  LogOut,
  Flower2
} from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard
  },
  {
    title: "Products",
    href: "/admin/products",
    icon: Package
  },
  {
    title: "Orders",
    href: "/admin/orders",
    icon: ShoppingCart
  },
  {
    title: "Customers",
    href: "/admin/customers",
    icon: Users
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings
  }
]

export function AdminNav() {
  const pathname = usePathname()
  const { data: session } = useSession()

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 border-b border-gray-700 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/admin" className="flex items-center space-x-2">
              <Flower2 className="h-8 w-8 text-yellow-400" />
              <span className="text-xl font-bold text-white">Admin Panel</span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      isActive
                        ? "bg-yellow-400 text-black"
                        : "text-gray-300 hover:text-white hover:bg-gray-800"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </Link>
                )
              })}
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-400">
              Welcome, {session?.user?.name || session?.user?.email}
            </span>
            <Button
              onClick={handleSignOut}
              variant="outline"
              size="sm"
              className="border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
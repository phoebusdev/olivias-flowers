import { withAuth } from "next-auth/middleware"

export default withAuth(
  function middleware(req) {
    // Add any custom middleware logic here
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl

        // Allow access to login page
        if (pathname.startsWith("/admin/login")) {
          return true
        }

        // Protect admin routes
        if (pathname.startsWith("/admin")) {
          return token?.role === "ADMIN"
        }

        // Allow all other routes
        return true
      },
    },
  }
)

export const config = {
  matcher: ["/admin/:path*"]
}
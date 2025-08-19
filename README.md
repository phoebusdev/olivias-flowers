# Olivia's Flowers - Modern Florist E-commerce

A sophisticated e-commerce website for a premium florist, built with Next.js 14+, TypeScript, and Tailwind CSS. Features a dark, gallery-inspired design with gold accents and comprehensive admin functionality.

## 🌺 Features

### Customer-Facing Features
- **Modern Homepage**: Hero section with animations, featured products, and testimonials
- **Product Gallery**: Responsive masonry layout with category filtering
- **Product Details**: Image carousels and detailed product information
- **WhatsApp Integration**: Direct ordering through WhatsApp with pre-filled messages
- **Responsive Design**: Optimized for all devices and screen sizes
- **SEO Optimized**: Meta tags, structured data, and sitemap generation

### Admin Dashboard
- **Authentication**: Secure admin login system
- **Product Management**: CRUD operations for products and categories
- **Order Overview**: Dashboard with sales statistics and recent orders
- **Content Management**: Manage testimonials and site settings

### Technical Features
- **Modern Tech Stack**: Next.js 14+ App Router, TypeScript, Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Performance**: Optimized images, lazy loading, and efficient caching
- **Security**: CSRF protection, secure headers, and input validation
- **Deployment Ready**: Vercel-optimized with proper configuration

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Vercel

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL database (Vercel Postgres recommended)
- Git

### 1. Clone & Install
```bash
git clone <repository-url>
cd olivias-flowers
npm install
```

### 2. Environment Setup
```bash
cp .env.example .env.local
```

Update `.env.local` with your configuration:
```env
DATABASE_URL="your-postgresql-url"
NEXTAUTH_SECRET="your-random-secret"
NEXTAUTH_URL="http://localhost:3000"
```

### 3. Database Setup
```bash
npx prisma db push
npx prisma generate
```

### 4. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to see the site.

## 📋 Environment Variables

### Required
- `DATABASE_URL`: PostgreSQL connection string
- `NEXTAUTH_SECRET`: Random secret for JWT encryption
- `NEXTAUTH_URL`: Your site URL

### Optional
- `RESEND_API_KEY`: For contact form emails
- `CONTACT_EMAIL`: Destination email for contact forms
- `VERCEL_ANALYTICS_ID`: Vercel Analytics tracking
- `SENTRY_DSN`: Error monitoring with Sentry

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

### Project Structure
```
├── app/                 # Next.js App Router pages
│   ├── admin/          # Admin dashboard
│   ├── products/       # Product pages
│   └── api/            # API routes
├── components/         # React components
│   ├── ui/            # UI primitives
│   └── admin/         # Admin components
├── lib/               # Utilities and configurations
├── prisma/            # Database schema
├── public/            # Static assets
└── types/             # TypeScript definitions
```

## 🎨 Design System

### Color Palette
- **Primary Background**: Deep charcoal (`#0a0a0a`)
- **Secondary Background**: Dark gray (`#111111`)
- **Accent**: Gold (`#d4af37`)
- **Text**: Warm cream (`#fafafa`)
- **Borders**: Subtle gray (`#222222`)

### Typography
- **Headings**: Bold, modern sans-serif
- **Body**: Clean, readable sans-serif
- **Accents**: Elegant serif for special elements

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Environment Variables for Production
```env
DATABASE_URL="your-vercel-postgres-url"
NEXTAUTH_SECRET="your-production-secret"
NEXTAUTH_URL="https://your-domain.vercel.app"
```

### Database Migration
```bash
npx prisma db push
```

## 🔐 Admin Access

**Demo Credentials:**
- Email: `admin@oliviasflowers.com`
- Password: `admin123`

**Note**: Change these credentials in production by modifying the authentication logic in `/app/admin/login/page.tsx`.

## 📱 Content Management

### Products
- Add/edit products through the admin dashboard
- Upload images to `/public/products/` directory
- Categories: Buqeta, Dasma, Përvjetorë, Ditëlindje, Ngushëllime

### Testimonials
- Manage customer reviews through the admin panel
- Display automatically on homepage

### Settings
- Configure site-wide settings
- Update contact information
- Manage WhatsApp integration

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta tag management
- **Structured Data**: JSON-LD for rich snippets
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine indexing control
- **OpenGraph**: Social media sharing optimization

## 🛡️ Security

- **CSRF Protection**: Built-in Next.js protection
- **Input Validation**: Server-side validation for all forms
- **Secure Headers**: Comprehensive security headers via Vercel
- **Authentication**: Secure admin authentication system

## 📞 Support

For technical support or customization requests, please refer to the documentation or contact the development team.

## 📄 License

This project is proprietary software developed for Olivia's Flowers.

---

**Built with ❤️ using Next.js and modern web technologies**
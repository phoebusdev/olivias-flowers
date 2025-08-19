import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://oliviasflowers.vercel.app'
  
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Add product pages (these would normally come from database)
  const productSlugs = [
    'buqete-elegante',
    'aranzhman-dasme',
    'buqete-ditelindje',
    'orkide-luksoze'
  ]

  const productRoutes = productSlugs.map((slug) => ({
    url: `${baseUrl}/products/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...productRoutes]
}
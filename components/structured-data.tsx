export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://oliviasflowers.vercel.app/#organization",
        "name": "Olivia's Flowers",
        "url": "https://oliviasflowers.vercel.app",
        "logo": {
          "@type": "ImageObject",
          "url": "https://oliviasflowers.vercel.app/logo.png",
          "width": 200,
          "height": 60
        },
        "sameAs": [
          "https://facebook.com/oliviasflowers",
          "https://instagram.com/oliviasflowers"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+355-69-123-4567",
          "contactType": "customer service"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rruga e Luleve 123",
          "addressLocality": "Tiranë",
          "addressCountry": "AL"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://oliviasflowers.vercel.app/#website",
        "url": "https://oliviasflowers.vercel.app",
        "name": "Olivia's Flowers",
        "description": "Çdo krijim është një vepër arti unike, e krijuar me kujdes për të kapur momentet tuaja të veçanta.",
        "publisher": {
          "@id": "https://oliviasflowers.vercel.app/#organization"
        },
        "inLanguage": "sq-AL"
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://oliviasflowers.vercel.app/#localbusiness",
        "name": "Olivia's Flowers",
        "image": "https://oliviasflowers.vercel.app/logo.png",
        "telephone": "+355-69-123-4567",
        "priceRange": "€€",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rruga e Luleve 123",
          "addressLocality": "Tiranë",
          "addressCountry": "AL"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 41.3275,
          "longitude": 19.8187
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification", 
            "dayOfWeek": "Saturday",
            "opens": "09:00",
            "closes": "16:00"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "127"
        }
      },
      {
        "@type": "Service",
        "name": "Floral Arrangements",
        "description": "Kompozime elegante lulesh për çdo rast të veçantë",
        "provider": {
          "@id": "https://oliviasflowers.vercel.app/#organization"
        },
        "serviceType": "Floral Design",
        "areaServed": {
          "@type": "City",
          "name": "Tiranë"
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
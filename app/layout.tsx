import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { AuthProvider } from "@/components/providers/session-provider";
import { StructuredData } from "@/components/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oliviasflowers.vercel.app"),
  title: {
    default: "Olivia's Flowers - Çdo Kompozim Tregon një Histori",
    template: "%s | Olivia's Flowers"
  },
  description: "Çdo krijim është një vepër arti unike, e krijuar me kujdes për të kapur momentet tuaja të veçanta. Specializohemi në buqeta, dekorime dasme dhe kompozime për çdo rast.",
  keywords: [
    "lule",
    "buqeta", 
    "dasma",
    "ditëlindje", 
    "dekorime",
    "Tiranë",
    "Albania",
    "flowers",
    "bouquets", 
    "wedding",
    "florist",
    "floral arrangements",
    "flower delivery",
    "kompozime lulesh",
    "lule fresh",
    "shërbim lulesh"
  ],
  authors: [{ name: "Olivia's Flowers" }],
  creator: "Olivia's Flowers",
  publisher: "Olivia's Flowers",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "sq_AL",
    url: "https://oliviasflowers.vercel.app",
    siteName: "Olivia's Flowers",
    title: "Olivia's Flowers - Çdo Kompozim Tregon një Histori",
    description: "Çdo krijim është një vepër arti unike, e krijuar me kujdes për të kapur momentet tuaja të veçanta.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Olivia's Flowers - Kompozime elegante lulesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olivia's Flowers - Çdo Kompozim Tregon një Histori", 
    description: "Çdo krijim është një vepër arti unike, e krijuar me kujdes për të kapur momentet tuaja të veçanta.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sq" className={cn(inter.variable, playfair.variable)}>
      <body
        className={cn(
          "min-h-screen bg-[#0a0a0a] text-[#fafafa] font-sans antialiased",
          inter.className
        )}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
        <StructuredData />
      </body>
    </html>
  );
}

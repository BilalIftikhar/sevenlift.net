import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { JsonLd } from "@/components/json-ld"
import { StickyMobileCta } from "@/components/sticky-mobile-cta"
import { organizationSchema, websiteSchema } from "@/lib/schema"
import { siteConfig } from "@/lib/site-config"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Forklift, Crane & Heavy Equipment Rental UAE`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "forklift rental Abu Dhabi",
    "forklift rental Musaffah",
    "mobile crane rental Musaffah",
    "mobile crane rental Abu Dhabi",
    "heavy equipment rental UAE",
    "telehandler rental UAE",
    "man lift rental Dubai",
    "forklift rental Dubai",
    "crane rental JAFZA",
    "ICAD equipment rental",
  ],
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  applicationName: siteConfig.name,
  category: "Heavy Equipment Rental",
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Forklift, Crane & Heavy Equipment Rental UAE`,
    description: siteConfig.description,
    images: [{ url: "/images/og/og-default.jpg", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Forklift, Crane & Heavy Equipment Rental UAE`,
    description: siteConfig.description,
    images: ["/images/og/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: true,
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f1e3d",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} pb-16 font-sans antialiased md:pb-0`}>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        {children}
        <StickyMobileCta />
        <Analytics />
      </body>
    </html>
  )
}

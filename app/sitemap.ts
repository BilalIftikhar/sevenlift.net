import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site-config"
import { services } from "@/lib/services"
import { locations } from "@/lib/locations"
import { abuDhabiAreas } from "@/lib/abu-dhabi-areas"
import { serviceAreaPages } from "@/lib/service-areas"
import { getAllPosts } from "@/lib/blog/posts"

/**
 * When page content last materially changed. Bump this when you edit page copy.
 * It must NOT be `new Date()`: a lastmod that changes on every request tells
 * Google the field is unreliable, and it then ignores lastmod for the whole site
 * — which slows the crawl of new pages.
 */
const CONTENT_UPDATED = new Date("2026-09-19")

export default function sitemap(): MetadataRoute.Sitemap {
  const now = CONTENT_UPDATED

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/equipment`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/equipment/forklift`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/equipment/mobile-crane`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/equipment/telehandler`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/equipment/man-lift`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/locations`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteConfig.url}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${siteConfig.url}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ]

  // Hand-written service pages (highest-intent, richest content).
  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteConfig.url}${service.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.95,
  }))

  // Generated service × city pages — the UAE-wide long-tail coverage.
  const serviceAreaRoutes: MetadataRoute.Sitemap = serviceAreaPages.map((page) => ({
    url: `${siteConfig.url}${page.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    // Core-emirate pages carry slightly more weight than the outlying ones.
    priority: page.location.primary ? 0.9 : 0.8,
  }))

  const locationRoutes: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${siteConfig.url}${location.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: location.primary ? 0.95 : 0.85,
  }))

  const abuDhabiAreaRoutes: MetadataRoute.Sitemap = abuDhabiAreas.map((area) => ({
    url: `${siteConfig.url}${area.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }))

  const blogRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified ?? post.datePublished),
    changeFrequency: "yearly",
    priority: 0.6,
  }))

  const all = [
    ...staticRoutes,
    ...serviceRoutes,
    ...serviceAreaRoutes,
    ...locationRoutes,
    ...abuDhabiAreaRoutes,
    ...blogRoutes,
  ]

  // Guard against a hand-written and generated page ever claiming the same URL.
  return all.filter(
    (entry, index) => all.findIndex((candidate) => candidate.url === entry.url) === index,
  )
}

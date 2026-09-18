import { siteConfig } from "@/lib/site-config"
import { services } from "@/lib/services"
import { locations } from "@/lib/locations"
import { abuDhabiAreas } from "@/lib/abu-dhabi-areas"
import { getAllPosts } from "@/lib/blog/posts"

export const dynamic = "force-static"

/**
 * /llms.txt — a plain-text map of the site for AI crawlers (llmstxt.org).
 * Built from the same data as the pages, so it never drifts out of date.
 */
export function GET() {
  const link = (title: string, path: string, note?: string) =>
    `- [${title}](${siteConfig.url}${path})${note ? `: ${note}` : ""}`

  const body = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.description}`,
    "",
    `${siteConfig.legalName} was founded in ${siteConfig.foundingYear} and operates from ${siteConfig.address.streetAddress}, ${siteConfig.address.addressLocality}, UAE. Phone and WhatsApp: ${siteConfig.phoneDisplay}. Email: ${siteConfig.email}. Open 24/7. Rates are quote-based; the site does not publish prices.`,
    "",
    "## Company",
    link("About", "/about", "company facts, fleet capacity ranges, coverage"),
    link("Contact", "/contact", "request a quote by phone, WhatsApp or email"),
    "",
    "## Services",
    ...services.map((service) => link(service.title, service.href, service.capacityRange)),
    link("All services", "/services", "every equipment type in every emirate"),
    "",
    "## Equipment specifications",
    link("Forklifts", "/equipment/forklift"),
    link("Mobile cranes", "/equipment/mobile-crane"),
    link("Telehandlers", "/equipment/telehandler"),
    link("Man lifts", "/equipment/man-lift"),
    "",
    "## Abu Dhabi districts",
    ...abuDhabiAreas.map((area) => link(area.title, area.href)),
    "",
    "## Emirates",
    ...locations.map((location) => link(location.title, location.href)),
    "",
    "## Guides",
    ...getAllPosts().map((post) => link(post.title, `/blog/${post.slug}`, post.description)),
    "",
  ].join("\n")

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}

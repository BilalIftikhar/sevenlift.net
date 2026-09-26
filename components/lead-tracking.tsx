"use client"

import { useEffect } from "react"
import { track } from "@vercel/analytics"

export type LeadMethod = "whatsapp" | "call" | "email" | "form"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

/**
 * Records one lead event, tagged with the page it came from, so Search Console
 * clicks can be matched to the enquiries each page actually produces. Sent to
 * Vercel Analytics, and to Google Analytics too when GA4 is installed.
 */
export function trackLead(method: LeadMethod, placement?: string) {
  const page = window.location.pathname
  track("Lead", { method, page, ...(placement ? { placement } : {}) })
  window.gtag?.("event", "generate_lead", { method, page_path: page, placement })
}

function methodForHref(href: string): LeadMethod | null {
  if (href.startsWith("tel:")) return "call"
  if (href.startsWith("mailto:")) return "email"
  if (href.includes("api.whatsapp.com") || href.includes("wa.me")) return "whatsapp"
  return null
}

/**
 * One document-level listener covers every call, WhatsApp, and email link on
 * the site (header, hero, sticky mobile bar, page CTAs, footer), so new buttons
 * are tracked without touching each component.
 */
export function LeadTracking() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.("a[href]")
      if (!link) return
      const method = methodForHref(link.getAttribute("href") ?? "")
      if (!method) return
      const placement = link.closest("header")
        ? "header"
        : link.closest("footer")
          ? "footer"
          : link.closest("[data-lead-placement]")?.getAttribute("data-lead-placement") ?? "page"
      trackLead(method, placement)
    }
    document.addEventListener("click", onClick, { capture: true })
    return () => document.removeEventListener("click", onClick, { capture: true })
  }, [])

  return null
}

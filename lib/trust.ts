import type { EquipmentKey } from "@/lib/locations"
import { siteConfig, yearsInBusiness } from "@/lib/site-config"

/**
 * Trust signals shown on every landing page: years trading, jobs completed per
 * equipment family, certifications, and customer testimonials.
 *
 * Every figure lives here and nowhere else, so a crane page in Sharjah and a
 * crane page in Dubai can never quote different job counts.
 *
 * TODO (owner action required): confirm each job count against the job log and
 * each certification against the certificate on file before relying on them.
 */

export { yearsInBusiness }

/** Completed rental jobs per equipment family, all emirates combined. */
export const jobsCompleted: Record<EquipmentKey, number> = {
  forklift: 850,
  "mobile-crane": 420,
  telehandler: 310,
  "man-lift": 380,
}

export const totalJobsCompleted = Object.values(jobsCompleted).reduce((sum, count) => sum + count, 0)

export const equipmentJobLabel: Record<EquipmentKey, string> = {
  forklift: "forklift jobs completed",
  "mobile-crane": "crane lifts completed",
  telehandler: "telehandler jobs completed",
  "man-lift": "man lift jobs completed",
}

/** Option values in the quote form's equipment select, per family. */
export const formEquipmentLabel: Record<EquipmentKey, string> = {
  forklift: "Forklift",
  "mobile-crane": "Mobile Crane",
  telehandler: "Telehandler",
  "man-lift": "Man Lift / Scissor Lift / Boom Lift",
}

export type Certification = {
  /** What is held or followed, in a few words. */
  name: string
  /** The body that issues or sets it. */
  issuer: string
  /** The issuing authority's own page, so visitors can check it. */
  href?: string
  /** One line on what it means for the customer. */
  detail: string
  /** Optional logo in /public, only where the issuer permits its use. */
  logo?: string
}

/**
 * Only list what the business actually holds. Add ISO 9001 / 45001 or a named
 * third-party inspection body here once the certificate numbers are confirmed.
 */
export const certifications: Certification[] = [
  {
    name: "Licensed Abu Dhabi Company",
    issuer: "Abu Dhabi Department of Economic Development",
    href: "https://www.added.gov.ae/",
    detail: `${siteConfig.legalName}, trading from Musaffah since ${siteConfig.foundingYear}.`,
  },
  {
    name: "OSHAD-SF Lift Planning",
    issuer: "Abu Dhabi Public Health Centre (OSHAD)",
    href: "https://www.adphc.gov.ae/",
    detail: "Lift plans, risk assessments, and permits to work prepared to the Abu Dhabi OSHAD framework.",
  },
  {
    name: "Third-Party Inspected Fleet",
    // TODO: name the inspection company on the certificates (e.g. TÜV, Bureau Veritas) and link its site.
    issuer: "Accredited third-party inspection body",
    detail: "Cranes and lifting equipment carry current third-party inspection and load-test certificates.",
  },
  {
    name: "Certified Operators & Riggers",
    // TODO: name the certifying body on the operator cards and link its site.
    issuer: "Third-party operator certification",
    detail: "Every operator and rigger holds a valid certificate for the machine class they run.",
  },
]

export type Testimonial = {
  quote: string
  /** Person's name as they agreed to be credited. */
  name: string
  role: string
  company?: string
  /** Area of the job, e.g. "ICAD, Abu Dhabi". */
  area: string
  equipment: EquipmentKey
  /** Where the review was left, e.g. "Google". */
  source?: string
}

/**
 * Real customer reviews only, copied with permission from Google Business
 * Profile or a signed client reference. Invented reviews breach Google's
 * review policies and UAE consumer protection law, so this stays empty until
 * genuine ones are collected (see docs/business-listing-kit.md, section 4).
 * The testimonials section renders automatically once entries exist.
 */
export const testimonials: Testimonial[] = []

/** Reviews for one equipment family first, then the rest, capped at `limit`. */
export function testimonialsFor(equipment?: EquipmentKey, limit = 3) {
  if (!equipment) return testimonials.slice(0, limit)
  const matching = testimonials.filter((t) => t.equipment === equipment)
  const others = testimonials.filter((t) => t.equipment !== equipment)
  return [...matching, ...others].slice(0, limit)
}

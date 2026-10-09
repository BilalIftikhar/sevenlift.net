import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"
import { pageMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"

const path = "/terms"

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use",
  description:
    "The terms that apply to using the Seven Lift General Transport website. Equipment hire is governed by your written quotation and hire agreement.",
  path,
})

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      path={path}
      updated="10 October 2026"
      intro={`These terms apply to your use of ${siteConfig.domain}, operated by ${siteConfig.legalName}. By using the website you agree to them.`}
      sections={[
        {
          heading: "Website information",
          paragraphs: [
            "The website gives general information about our equipment and services. Capacities, dimensions and specifications are typical figures for each class of machine; the exact machine, its load chart and the lift plan decide what can be done on your job. Availability and lead times can change.",
          ],
        },
        {
          heading: "Quotations and hire",
          paragraphs: [
            "Nothing on the website is an offer to hire. Every hire is governed by our written quotation and the hire agreement you sign, and those documents take priority over anything on the website.",
          ],
        },
        {
          heading: "Using the website",
          paragraphs: [
            "Please do not misuse the website, including by sending false or automated quote requests, attempting to access parts of it that are not public, or interfering with how it works.",
          ],
        },
        {
          heading: "Content and trademarks",
          paragraphs: [
            `The text, photos, logo and design of this website belong to ${siteConfig.legalName} or are used with permission. You may share links to our pages, but please do not copy our content for commercial use without written permission. Equipment manufacturers' names belong to their owners.`,
          ],
        },
        {
          heading: "Links to other websites",
          paragraphs: [
            "The website links to other services, such as WhatsApp and Google Maps. We are not responsible for their content or how they handle your information.",
          ],
        },
        {
          heading: "Liability",
          paragraphs: [
            "We work to keep the website accurate and available, but we do not guarantee that it is always complete, current or free of errors. To the extent permitted by law, we are not liable for loss arising from relying on website information alone. This does not limit our obligations under any hire agreement.",
          ],
        },
        {
          heading: "Governing law",
          paragraphs: [
            "These terms are governed by the laws of the Emirate of Abu Dhabi and the federal laws of the United Arab Emirates, and the courts of Abu Dhabi have jurisdiction.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [`Questions about these terms can be sent to ${siteConfig.email} or ${siteConfig.phoneDisplay}.`],
        },
      ]}
    />
  )
}

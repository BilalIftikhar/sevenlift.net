import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"
import { pageMetadata } from "@/lib/seo"
import { addressLine, siteConfig } from "@/lib/site-config"

const path = "/privacy-policy"

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Seven Lift General Transport collects, uses and protects the details you send through our website, WhatsApp, phone and email.",
  path,
})

// Describes what the site actually does: the quote form opens WhatsApp and
// emails the sales inbox (app/api/quote/route.ts), and GA4 plus Vercel
// Analytics measure visits (app/layout.tsx). Update this page if either changes.
export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      path={path}
      updated="10 October 2026"
      intro={`This policy explains what personal information ${siteConfig.legalName} ("Seven Lift", "we") collects through ${siteConfig.domain}, how we use it, and the choices you have.`}
      sections={[
        {
          heading: "Who we are",
          paragraphs: [
            `${siteConfig.legalName} is an equipment rental company at ${addressLine}. You can reach us at ${siteConfig.email} or ${siteConfig.phoneDisplay}.`,
          ],
        },
        {
          heading: "Information you send us",
          paragraphs: [
            "When you request a quote through the website form, we collect your name, phone number, email address, company, the equipment you need, your site location, your message, and the page you sent it from.",
            "When you contact us by WhatsApp, phone or email, we receive the details you choose to share, such as your number, name and job details.",
          ],
        },
        {
          heading: "Information collected automatically",
          paragraphs: [
            "We use Google Analytics and Vercel Analytics to understand how the website is used: pages viewed, the site that referred you, device and browser type, approximate location, and clicks on our call, WhatsApp and email buttons. We use this to improve the website and to see which pages lead to enquiries.",
            "Google Analytics uses cookies to do this. Vercel Analytics does not use cookies. You can block or delete cookies in your browser settings, or install Google's opt-out browser add-on.",
          ],
        },
        {
          heading: "How we use your information",
          paragraphs: [
            "We use the details you send us to reply to your enquiry, prepare quotations, arrange and deliver equipment, and keep records of hires. We do not sell your information, and we do not share it with other companies for their marketing.",
          ],
        },
        {
          heading: "Who receives your information",
          paragraphs: [
            "Quote form submissions are sent to our sales inbox through our email provider, Zoho Mail. If you choose to send your details on WhatsApp, WhatsApp (operated by Meta) handles that message. Website analytics are processed by Google and Vercel, which also hosts this website. We may share details with a subcontractor or transport provider only where needed to complete your hire, or where the law requires it.",
          ],
        },
        {
          heading: "How long we keep it",
          paragraphs: [
            "We keep enquiry and hire records for as long as needed to serve you and to meet our legal, accounting and tax obligations in the UAE. Analytics data is kept for the period set in our analytics accounts.",
          ],
        },
        {
          heading: "Your choices",
          paragraphs: [
            `You can ask us to tell you what information we hold about you, to correct it, or to delete it where we are not required to keep it, by emailing ${siteConfig.email}. We handle personal data in line with UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data.`,
          ],
        },
        {
          heading: "Changes to this policy",
          paragraphs: [
            "If we change how we handle personal information, we will update this page and the date at the top.",
          ],
        },
      ]}
    />
  )
}

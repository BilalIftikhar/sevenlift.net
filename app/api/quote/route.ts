import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { z } from "zod"
import { siteConfig } from "@/lib/site-config"

/**
 * Receives the quote form on every page and emails it to the sales inbox, so
 * enquiries do not depend on the visitor using WhatsApp.
 *
 * Sends through the company's own Zoho Mail mailbox over SMTP (the domain's MX
 * and SPF records already point at Zoho). Set in the Vercel project:
 *   SMTP_USER       mailbox that sends, e.g. info@sevenlift.net (required)
 *   SMTP_PASS       Zoho app-specific password for that mailbox (required)
 *   SMTP_HOST       default smtp.zoho.com
 *   SMTP_PORT       default 465 (SSL)
 *   QUOTE_TO_EMAIL  inbox that receives leads, comma-separated for several
 *                   (default: siteConfig.email)
 * Without SMTP_USER / SMTP_PASS the route answers 503 and the form shows the
 * email address and phone number instead.
 */

export const runtime = "nodejs"

const quoteSchema = z
  .object({
    name: z.string().trim().min(2).max(100),
    phone: z.string().trim().max(40).optional().default(""),
    email: z.string().trim().max(200).optional().default(""),
    company: z.string().trim().max(150).optional().default(""),
    equipment: z.string().trim().max(100).optional().default(""),
    location: z.string().trim().max(150).optional().default(""),
    message: z.string().trim().max(3000).optional().default(""),
    page: z.string().trim().max(300).optional().default(""),
    // Honeypot: a hidden field real visitors never fill.
    website: z.string().max(200).optional().default(""),
  })
  .refine((data) => data.phone.length >= 7 || z.string().email().safeParse(data.email).success, {
    message: "A phone number or a valid email is required",
  })

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => `&#${char.charCodeAt(0)};`)
}

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 })
  }

  const parsed = quoteSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "invalid_fields" }, { status: 422 })
  }
  const lead = parsed.data

  // Bots fill the hidden field; answer as if sent so they do not retry.
  if (lead.website) return NextResponse.json({ ok: true })

  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  if (!user || !pass) {
    console.error("[quote] SMTP_USER / SMTP_PASS not set; lead not emailed", { name: lead.name, page: lead.page })
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 })
  }

  const port = Number(process.env.SMTP_PORT ?? 465)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.zoho.com",
    port,
    secure: port === 465,
    auth: { user, pass },
  })

  const rows: [string, string][] = [
    ["Name", lead.name],
    ["Phone", lead.phone],
    ["Email", lead.email],
    ["Company", lead.company],
    ["Equipment", lead.equipment],
    ["Site location", lead.location],
    ["Message", lead.message],
    ["Sent from", lead.page ? `${siteConfig.url}${lead.page}` : ""],
  ]
  const filled = rows.filter(([, value]) => value)

  try {
    await transporter.sendMail({
      // Zoho only sends as the authenticated mailbox, so the visitor goes in Reply-To.
      from: `"Seven Lift Website" <${user}>`,
      to: process.env.QUOTE_TO_EMAIL ?? siteConfig.email,
      ...(lead.email ? { replyTo: `"${lead.name.replace(/"/g, "")}" <${lead.email}>` } : {}),
      subject: `Quote request: ${lead.equipment || "Equipment"}${lead.location ? ` in ${lead.location}` : ""} (${lead.name})`,
      text: filled.map(([label, value]) => `${label}: ${value}`).join("\n"),
      html: `<h2 style="font-family:sans-serif">New quote request from sevenlift.net</h2><table cellpadding="6" style="font-family:sans-serif;font-size:14px">${filled
        .map(
          ([label, value]) =>
            `<tr><td valign="top"><strong>${label}</strong></td><td>${escapeHtml(value).replace(/\n/g, "<br>")}</td></tr>`,
        )
        .join("")}</table>`,
    })
  } catch (error) {
    console.error("[quote] SMTP send failed", error)
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}

type WhatsAppIconProps = {
  size?: number
  className?: string
}

/**
 * Recognizable WhatsApp glyph rendered as a single-color currentColor SVG,
 * used in place of the generic lucide MessageCircle icon on every WhatsApp
 * call-to-action across the site.
 */
export function WhatsAppIcon({ size = 18, className }: WhatsAppIconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M16.001 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.25.6 4.36 1.65 6.19L3.2 28.8l6.78-1.78a12.74 12.74 0 0 0 6.02 1.53h.005c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.8-12.8zm0 23.4h-.004a10.57 10.57 0 0 1-5.39-1.48l-.387-.23-4.02 1.05 1.07-3.92-.25-.4a10.56 10.56 0 0 1-1.62-5.63c0-5.85 4.76-10.6 10.61-10.6 2.83 0 5.49 1.1 7.49 3.11a10.53 10.53 0 0 1 3.11 7.5c0 5.85-4.76 10.6-10.6 10.6zm5.81-7.93c-.32-.16-1.88-.93-2.17-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.69.08-1.87-.93-3.1-1.66-4.33-3.76-.33-.56.33-.52.94-1.73.1-.21.05-.39-.05-.55-.1-.16-.71-1.71-.97-2.34-.26-.63-.52-.55-.71-.56-.19-.01-.4-.01-.61-.01-.21 0-.55.08-.84.4-.29.32-1.11 1.09-1.11 2.65 0 1.56 1.14 3.07 1.3 3.28.16.21 2.19 3.34 5.31 4.55 2.63 1.02 3.16.87 3.71.79.55-.08 1.88-.77 2.14-1.51.26-.74.26-1.37.18-1.51-.08-.14-.29-.21-.61-.37z" />
    </svg>
  )
}

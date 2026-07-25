type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[]
}

/**
 * Renders one or more JSON-LD structured data blocks. Server component —
 * safe to include directly in any page/layout without a "use client" boundary.
 */
export function JsonLd({ data }: JsonLdProps) {
  const blocks = Array.isArray(data) ? data : [data]

  return (
    <>
      {blocks.map((block, index) => (
        // eslint-disable-next-line react/no-danger
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  )
}

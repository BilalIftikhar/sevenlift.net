import Link from "next/link"
import type { ReactNode } from "react"
import type { ContentBlock } from "@/lib/blog/types"

const INLINE_LINK = /\[([^\]]+)\]\((\/[^)\s]*)\)/g

/**
 * Renders `[anchor text](/internal/path)` inside post text as a Link, so posts
 * can point at the service page a sentence is about. Internal paths only.
 */
function withLinks(text: string): ReactNode {
  const parts: ReactNode[] = []
  let last = 0
  for (const match of text.matchAll(INLINE_LINK)) {
    const index = match.index ?? 0
    if (index > last) parts.push(text.slice(last, index))
    parts.push(
      <Link key={index} href={match[2]} className="font-semibold text-accent underline-offset-2 hover:underline">
        {match[1]}
      </Link>,
    )
    last = index + match[0].length
  }
  if (parts.length === 0) return text
  if (last < text.length) parts.push(text.slice(last))
  return parts
}

export function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          const Tag = block.level === 2 ? "h2" : "h3"
          return (
            <Tag key={index} className="text-foreground">
              {block.text}
            </Tag>
          )
        }
        if (block.type === "list") {
          return (
            <ul key={index} className="space-y-2.5 pl-1">
              {block.items.map((item) => (
                <li key={item} className="flex gap-3 font-medium leading-relaxed text-foreground">
                  <span className="mt-0.5 shrink-0 font-bold text-accent">✓</span>
                  <span>{withLinks(item)}</span>
                </li>
              ))}
            </ul>
          )
        }
        if (block.type === "table") {
          return (
            <div key={index} className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full min-w-[32rem] text-left text-sm">
                {block.caption && (
                  <caption className="bg-secondary/50 px-4 py-3 text-left font-bold text-foreground">
                    {block.caption}
                  </caption>
                )}
                <thead className="bg-secondary/50">
                  <tr>
                    {block.headers.map((header) => (
                      <th key={header} scope="col" className="px-4 py-3 font-bold text-foreground">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {block.rows.map((row) => (
                    <tr key={row.join("|")}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="px-4 py-3 font-medium text-muted-foreground">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        }
        if (block.type === "quote") {
          return (
            <blockquote
              key={index}
              className="border-l-4 border-accent bg-secondary/50 py-3 pl-5 font-medium italic text-foreground"
            >
              {withLinks(block.text)}
            </blockquote>
          )
        }
        return (
          <p key={index} className="font-medium leading-relaxed text-muted-foreground">
            {withLinks(block.text)}
          </p>
        )
      })}
    </div>
  )
}

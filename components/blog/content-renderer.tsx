import type { ContentBlock } from "@/lib/blog/types"

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
                  <span>{item}</span>
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
              {block.text}
            </blockquote>
          )
        }
        return (
          <p key={index} className="font-medium leading-relaxed text-muted-foreground">
            {block.text}
          </p>
        )
      })}
    </div>
  )
}

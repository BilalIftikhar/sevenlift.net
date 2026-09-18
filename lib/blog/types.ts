export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string }
  /** Comparison table. Answer engines quote tabular facts far more than prose. */
  | { type: "table"; caption?: string; headers: string[]; rows: string[][] }

export type RelatedLink = { title: string; href: string }

export type BlogPost = {
  slug: string
  /** On-page headline (H1 and schema headline). */
  title: string
  /** Shorter <title> for search results, when `title` would be truncated. */
  seoTitle?: string
  description: string
  category: string
  datePublished: string
  dateModified?: string
  readingTime: string
  heroImage: string
  heroImageAlt: string
  content: ContentBlock[]
  relatedLinks: RelatedLink[]
}

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string }

export type RelatedLink = { title: string; href: string }

export type BlogPost = {
  slug: string
  title: string
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

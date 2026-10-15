import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { PostCard } from "@/components/blog/post-card"
import { JsonLd } from "@/components/json-ld"
import { Reveal } from "@/components/reveal"
import { breadcrumbSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { getAllPosts } from "@/lib/blog/posts"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = pageMetadata({
  title: "Blog | Heavy Equipment Rental Guides for the UAE",
  description:
    "Practical guides on crane sizing, forklift selection, lift planning, safety and equipment rental costs for contractors and warehouse operators in the UAE.",
  path: "/blog",
})

/** Section order on the index; any new category falls in after these. */
const categoryOrder = ["Crane Guides", "Forklift Guides", "Equipment Guides", "Safety & Compliance", "Cost & Strategy"]

const categoryId = (category: string) =>
  category.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")

export default function BlogIndexPage() {
  const posts = getAllPosts()
  const categories = [...new Set(posts.map((post) => post.category))].sort((a, b) => {
    const rank = (category: string) => (categoryOrder.includes(category) ? categoryOrder.indexOf(category) : categoryOrder.length)
    return rank(a) - rank(b)
  })

  return (
    <main className="w-full overflow-x-hidden">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Blog", url: `${siteConfig.url}/blog` },
        ])}
      />
      <Header />

      <div className="min-h-screen bg-gradient-to-b from-background to-secondary pb-20 pt-16 md:pt-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 grid gap-10 lg:grid-cols-5 lg:items-start">
            <Reveal className="space-y-4 lg:col-span-3">
              <p className="text-sm font-bold uppercase tracking-widest text-accent">Guides &amp; Insights</p>
              <h1 className="text-foreground">Heavy Equipment Rental Blog</h1>
              <p className="text-lg font-medium text-muted-foreground">
                Practical, UAE-specific guidance on choosing equipment, staying compliant, and planning rental
                strategy for projects in Abu Dhabi, Dubai, and beyond.
              </p>
            </Reveal>
            <div className="lg:col-span-2">
              <ContactForm variant="hero" placement="hero-form" />
            </div>
          </div>

          <nav aria-label="Guide topics" className="mb-14 flex flex-wrap gap-3">
            {categories.map((category) => (
              <a
                key={category}
                href={`#${categoryId(category)}`}
                className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent/50 hover:text-accent"
              >
                {category}
              </a>
            ))}
          </nav>

          <div className="space-y-20">
            {categories.map((category, categoryIndex) => (
              <section key={category} id={categoryId(category)} className="scroll-mt-28">
                <h2 className="mb-8 text-foreground">{category}</h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {posts
                    .filter((post) => post.category === category)
                    .map((post, index) => (
                      <Reveal key={post.slug} delay={index * 100} className="h-full">
                        <PostCard post={post} priority={categoryIndex === 0 && index === 0} />
                      </Reveal>
                    ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

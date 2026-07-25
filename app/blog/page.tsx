import type { Metadata } from "next"
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
    "Practical guides on forklift selection, mobile crane safety, and equipment rental strategy for contractors and warehouse operators in Abu Dhabi, Dubai, and the UAE.",
  path: "/blog",
})

export default function BlogIndexPage() {
  const posts = getAllPosts()

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
          <Reveal className="mb-16 max-w-3xl space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">Guides &amp; Insights</p>
            <h1 className="text-foreground">Heavy Equipment Rental Blog</h1>
            <p className="text-lg font-medium text-muted-foreground">
              Practical, UAE-specific guidance on choosing equipment, staying compliant, and planning rental
              strategy for projects in Abu Dhabi, Dubai, and beyond.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 100} className="h-full">
                <PostCard post={post} priority={index === 0} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

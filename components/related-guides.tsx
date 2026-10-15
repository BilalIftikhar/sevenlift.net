import { Reveal } from "@/components/reveal"
import { PostCard } from "@/components/blog/post-card"
import { getPostsLinkingTo } from "@/lib/blog/posts"

type RelatedGuidesProps = {
  /** The current page's path; guides that link to it are listed. */
  path: string
  heading?: string
  className?: string
}

/** Guides that point at this page. Renders nothing when no guide does. */
export function RelatedGuides({ path, heading = "Planning Guides", className = "py-16 md:py-24" }: RelatedGuidesProps) {
  const posts = getPostsLinkingTo(path)
  if (posts.length === 0) return null

  return (
    <section className={className}>
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <h2 className="mb-8 text-foreground">{heading}</h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, idx) => (
            <Reveal key={post.slug} delay={idx * 100} className="h-full">
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

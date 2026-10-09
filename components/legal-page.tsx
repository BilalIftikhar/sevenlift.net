import Header from "@/components/header"
import Footer from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema } from "@/lib/schema"
import { siteConfig } from "@/lib/site-config"

export type LegalSection = { heading: string; paragraphs: string[] }

type LegalPageProps = {
  title: string
  path: string
  /** Shown as "Last updated", in words: "10 October 2026". */
  updated: string
  intro: string
  sections: LegalSection[]
}

/** Plain text layout shared by the privacy policy and terms of use. */
export function LegalPage({ title, path, updated, intro, sections }: LegalPageProps) {
  return (
    <main className="w-full overflow-x-hidden">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: title, url: `${siteConfig.url}${path}` },
        ])}
      />
      <Header />
      <article className="mx-auto max-w-3xl space-y-10 px-4 pb-24 pt-16 md:pt-24">
        <header className="space-y-4">
          <h1 className="text-foreground">{title}</h1>
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Last updated {updated}</p>
          <p className="text-lg font-medium leading-relaxed text-muted-foreground">{intro}</p>
        </header>
        {sections.map((section) => (
          <section key={section.heading} className="space-y-3">
            <h2 className="text-2xl font-extrabold text-foreground">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="font-medium leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </article>
      <Footer />
    </main>
  )
}

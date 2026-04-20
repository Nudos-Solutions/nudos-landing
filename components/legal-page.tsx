"use client"

import Link from "next/link"
import { AlertTriangle, ArrowLeft } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useI18n } from "@/lib/i18n"

type PolicyKey = "terms" | "privacy" | "cookies"

type BodyItem = string | { list: string[] }

type Section = {
  heading: string
  body: BodyItem[]
}

type PolicyContent = {
  title: string
  lastUpdated: string
  sections: Section[]
}

export default function LegalPage({ policy }: { policy: PolicyKey }) {
  const { t } = useI18n()
  const content = t.legal[policy] as PolicyContent

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="relative bg-accent text-background pt-36 pb-16 px-6 md:pt-44 md:pb-20">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.legal.backToHome}
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl leading-tight">{content.title}</h1>
          <p className="mt-3 text-sm text-background/50">{content.lastUpdated}</p>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <article>
            {content.sections.map((section) => (
              <div key={section.heading} className="mb-10">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                  {section.heading}
                </h2>
                {section.body.map((item, idx) =>
                  typeof item === "string" ? (
                    <p
                      key={idx}
                      className="text-foreground/80 leading-relaxed mb-4 last:mb-0"
                    >
                      {item}
                    </p>
                  ) : (
                    <ul
                      key={idx}
                      className="list-disc pl-6 space-y-2 text-foreground/80 leading-relaxed mb-4 last:mb-0"
                    >
                      {item.list.map((li) => (
                        <li key={li}>{li}</li>
                      ))}
                    </ul>
                  )
                )}
              </div>
            ))}
          </article>
        </div>
      </section>

      <Footer />
    </main>
  )
}

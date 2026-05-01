import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { BookOpen, ArrowLeft } from "lucide-react"
import { getGlossaryTermBySlug, getAllGlossarySlugs } from "@/content/glossary"
import BreadcrumbNav from "@/components/breadcrumb-nav"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { I18nProvider } from "@/lib/i18n"

export function generateStaticParams() {
  return getAllGlossarySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const term = getGlossaryTermBySlug(slug)
  if (!term) return {}

  return {
    title: `${term.term} — Marine Insurance Glossary`,
    description: term.definition,
    alternates: { canonical: `https://www.nudos.app/glossary/${term.slug}` },
    openGraph: {
      title: `${term.term} | NUDOS Glossary`,
      description: term.definition,
      images: [
        {
          url: `/og?title=${encodeURIComponent(term.term)}&subtitle=${encodeURIComponent("Marine Insurance Glossary")}`,
          width: 1200,
          height: 630,
          alt: `${term.term} — NUDOS Glossary`,
        },
      ],
    },
  }
}

export default async function GlossaryTermPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const term = getGlossaryTermBySlug(slug)
  if (!term) notFound()

  const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.term,
    description: term.definition,
    url: `https://www.nudos.app/glossary/${term.slug}`,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Marine Insurance Glossary",
      url: "https://www.nudos.app/glossary",
    },
  }

  return (
    <I18nProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }}
      />
      <main id="main-content" className="min-h-screen bg-background">
        <Header />
        <section className="pt-32 pb-20 px-6">
          <div className="mx-auto max-w-3xl">
            <BreadcrumbNav
              items={[
                { label: "Home", href: "/" },
                { label: "Glossary", href: "/glossary" },
                { label: term.term },
              ]}
            />

            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-accent" strokeWidth={2} />
              <span className="text-sm font-medium text-foreground/70">Glossary Term</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-foreground mb-6">
              {term.term}
            </h1>

            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              {term.definition}
            </p>

            {term.relatedService && (
              <div className="p-5 bg-card rounded-xl border border-border mb-8">
                <p className="text-sm font-semibold text-foreground mb-2">Related Service</p>
                <Link
                  href={`/services/${term.relatedService}`}
                  className="text-accent hover:underline text-sm"
                >
                  See how Nudos applies this →
                </Link>
              </div>
            )}

            <Link
              href="/glossary"
              className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-accent transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Glossary
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    </I18nProvider>
  )
}

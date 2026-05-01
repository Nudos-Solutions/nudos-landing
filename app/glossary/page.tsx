import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen } from "lucide-react"
import { glossaryTerms, getGlossaryLetters, getTermsByLetter } from "@/content/glossary"
import BreadcrumbNav from "@/components/breadcrumb-nav"
import GlossaryDefinition from "@/components/glossary-definition"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { I18nProvider } from "@/lib/i18n"

export const metadata: Metadata = {
  title: "Marine Insurance Glossary",
  description:
    "Marine insurance terms explained: H&M, P&I, SOLAS, MARPOL, General Average, and more. A comprehensive glossary for the maritime insurance industry.",
  alternates: { canonical: "https://www.nudos.app/glossary" },
  openGraph: {
    title: "Marine Insurance Glossary | NUDOS",
    description:
      "Marine insurance terms explained: H&M, P&I, SOLAS, MARPOL, General Average, and more.",
    images: [
      {
        url: "/og?title=Glossary&subtitle=Marine%20insurance%20terms%20explained",
        width: 1200,
        height: 630,
        alt: "NUDOS Marine Insurance Glossary",
      },
    ],
  },
}

export default function GlossaryPage() {
  const letters = getGlossaryLetters()

  const definedTermSetSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Marine Insurance Glossary",
    description: "Key terms and concepts in marine insurance, explained clearly.",
    url: "https://www.nudos.app/glossary",
    hasDefinedTerm: glossaryTerms.map((term) => ({
      "@type": "DefinedTerm",
      name: term.term,
      description: term.definition,
      url: `https://www.nudos.app/glossary#${term.slug}`,
    })),
  }

  return (
    <I18nProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetSchema) }}
      />
      <main id="main-content" className="min-h-screen bg-background">
        <Header />
        <section className="pt-32 pb-20 px-6">
          <div className="mx-auto max-w-3xl">
            <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Glossary" }]} />

            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-accent" strokeWidth={2} />
              <span className="text-sm font-medium text-foreground/70">Reference</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-foreground mb-4">
              Marine Insurance Glossary
            </h1>
            <p className="text-foreground/60 text-lg mb-10">
              Key terms and concepts in marine insurance, explained clearly.
            </p>

            {/* Letter navigation */}
            <nav aria-label="Glossary letter navigation" className="flex flex-wrap gap-2 mb-12 sticky top-20 bg-background/95 backdrop-blur-sm py-3 z-10">
              {letters.map((letter) => (
                <a
                  key={letter}
                  href={`#letter-${letter}`}
                  className="w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center text-sm font-semibold text-foreground/60 hover:text-accent hover:border-accent/30 transition-colors"
                >
                  {letter}
                </a>
              ))}
            </nav>

            {/* Terms */}
            {letters.map((letter) => (
              <div key={letter} id={`letter-${letter}`} className="mb-10 scroll-mt-32">
                <h2 className="text-2xl font-serif font-bold text-accent mb-4">{letter}</h2>
                <dl className="space-y-6">
                  {getTermsByLetter(letter).map((term) => (
                    <div key={term.slug} id={term.slug} className="scroll-mt-32">
                      <dt className="text-lg font-semibold text-foreground mb-1">{term.term}</dt>
                      <dd className="text-foreground/60 leading-relaxed">
                        <GlossaryDefinition definition={term.definition} currentSlug={term.slug} />
                        {term.relatedService && (
                          <>
                            {" "}
                            <Link
                              href={`/services/${term.relatedService}`}
                              className="text-accent hover:underline"
                            >
                              See how Nudos applies this →
                            </Link>
                          </>
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </I18nProvider>
  )
}

import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen, ArrowUpRight, Code } from "lucide-react"
import { glossaryTerms } from "@/content/glossary"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { I18nProvider } from "@/lib/i18n"

export const metadata: Metadata = {
  title: "Embeddable Marine Insurance Glossary Widget",
  description:
    "Add a free marine insurance glossary to your website. Embed our glossary widget with a single line of HTML — 25 terms, always up to date.",
  alternates: { canonical: "https://www.nudos.app/embed/glossary" },
  openGraph: {
    title: "Free Marine Insurance Glossary Widget | NUDOS",
    description: "Embed a marine insurance glossary on your website with one line of HTML.",
    images: [
      {
        url: "/og?title=Glossary%20Widget&subtitle=Free%20embeddable%20marine%20insurance%20glossary",
        width: 1200,
        height: 630,
        alt: "NUDOS Glossary Widget",
      },
    ],
  },
}

const embedCode = `<iframe
  src="https://www.nudos.app/embed/glossary/widget"
  width="100%"
  height="500"
  frameborder="0"
  style="border: 1px solid #222; border-radius: 12px;"
  title="Marine Insurance Glossary by NUDOS"
></iframe>`

export default function EmbedGlossaryPage() {
  return (
    <I18nProvider>
      <main id="main-content" className="min-h-screen bg-background">
        <Header />
        <section className="pt-32 pb-20 px-6">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Code className="w-5 h-5 text-accent" strokeWidth={2} />
              <span className="text-sm font-medium text-foreground/70">Free Widget</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-foreground mb-6">
              Embed a Marine Insurance Glossary on Your Website
            </h1>

            <p className="text-lg text-foreground/60 leading-relaxed mb-8">
              Add a comprehensive marine insurance glossary to your website with a single line of HTML. 25 terms, always up to date, powered by NUDOS. Free for any website.
            </p>

            {/* Preview */}
            <h2 className="text-xl font-serif font-bold text-foreground mb-4">Preview</h2>
            <div className="bg-card rounded-xl border border-border p-6 mb-8 max-h-80 overflow-y-auto">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-foreground">Marine Insurance Glossary</span>
                <span className="text-xs text-foreground/40 ml-auto">by NUDOS</span>
              </div>
              <dl className="space-y-4">
                {glossaryTerms.slice(0, 5).map((term) => (
                  <div key={term.slug}>
                    <dt className="text-sm font-semibold text-foreground">{term.term}</dt>
                    <dd className="text-xs text-foreground/60 leading-relaxed">{term.definition.slice(0, 120)}...</dd>
                  </div>
                ))}
              </dl>
              <p className="text-xs text-foreground/40 mt-4">+ {glossaryTerms.length - 5} more terms</p>
            </div>

            {/* Embed code */}
            <h2 className="text-xl font-serif font-bold text-foreground mb-4">Embed Code</h2>
            <p className="text-sm text-foreground/60 mb-3">Copy and paste this HTML into your website:</p>
            <pre className="bg-card rounded-xl border border-border p-4 text-sm text-foreground/70 overflow-x-auto mb-8">
              <code>{embedCode}</code>
            </pre>

            {/* Benefits */}
            <div className="bg-card rounded-xl p-6 border border-border mb-8">
              <h2 className="text-lg font-semibold text-foreground mb-3">Why use this widget?</h2>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>25 marine insurance terms, professionally defined</li>
                <li>Always up to date — terms are maintained by NUDOS</li>
                <li>Responsive — works on any screen size</li>
                <li>Lightweight — no JavaScript required</li>
                <li>Free for commercial and non-commercial use</li>
              </ul>
            </div>

            <div className="text-center">
              <Link
                href="/glossary"
                className="inline-flex items-center gap-2 text-accent hover:underline font-medium"
              >
                View full glossary
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </I18nProvider>
  )
}

import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen, ArrowUpRight } from "lucide-react"
import BreadcrumbNav from "@/components/breadcrumb-nav"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { I18nProvider } from "@/lib/i18n"

export const metadata: Metadata = {
  title: "The Complete Guide to AI-Powered Marine Insurance",
  description:
    "Everything you need to know about how AI is transforming marine insurance — from vessel inspection and condition scoring to automated premium calculation and claims intelligence.",
  alternates: { canonical: "https://www.nudos.app/guide" },
  openGraph: {
    title: "The Complete Guide to AI-Powered Marine Insurance | NUDOS",
    description:
      "Everything you need to know about how AI is transforming marine insurance.",
    images: [
      {
        url: "/og?title=The%20Complete%20Guide&subtitle=AI-Powered%20Marine%20Insurance",
        width: 1200,
        height: 630,
        alt: "The Complete Guide to AI-Powered Marine Insurance",
      },
    ],
  },
}

const sections = [
  {
    id: "vessel-inspection",
    title: "1. AI Vessel Inspection",
    content:
      "Traditional marine surveys require scheduling a surveyor, coordinating a site visit, and waiting days or weeks for a narrative report. AI-powered vessel inspection replaces this with computer vision — upload photos of the vessel, and the system maps structural zones, detects damage, and generates structured findings in minutes.",
    details: [
      "Zone mapping: hull below waterline, hull above waterline, deck, superstructure, fittings, machinery",
      "Damage detection: corrosion, osmotic blistering, impact damage, coating failure, weld deterioration",
      "Output: structured data with severity ratings, confidence scores, and precise location mapping",
      "Accepts imagery from smartphones, drones, or professional cameras",
    ],
    link: "/services/vessel-inspection",
    linkText: "Explore Vessel Inspection AI",
    blogLink: "/blog/computer-vision-hull-inspection",
    blogText: "How computer vision is revolutionizing hull damage detection",
  },
  {
    id: "condition-scoring",
    title: "2. Vessel Condition Scoring",
    content:
      "Inspection data alone is not enough for underwriting. It needs to be translated into a standardized, quantitative assessment. Condition scoring evaluates every structural component against 47+ international maritime standards — SOLAS, MARPOL, ABYC, and classification society rules — producing a repeatable, defensible vessel condition score.",
    details: [
      "Component-level scoring: hull plating, deck surfaces, coating systems, through-hulls, machinery",
      "Standard compliance: automatic checking against SOLAS, MARPOL, ABYC, and classification rules",
      "Weighted aggregation: hull integrity weighs more than cosmetic deck condition",
      "Repeatability: same inputs always produce the same score",
    ],
    link: "/services/condition-scoring",
    linkText: "Explore Condition Scoring",
    blogLink: "/blog/ai-vessel-condition-scoring",
    blogText: "How AI outperforms traditional maritime surveys",
  },
  {
    id: "vessel-valuation",
    title: "3. AI Vessel Valuation",
    content:
      "With structured condition data, vessel valuation becomes data-driven instead of estimate-based. The system cross-references condition scores with market comparables, depreciation curves, and replacement cost benchmarks to produce a defensible market value with full audit documentation.",
    details: [
      "Market comparables: cross-reference against vessel sale and listing data",
      "Condition-adjusted depreciation: age, usage, and condition-based value modeling",
      "Replacement cost benchmarks: new-build equivalent pricing",
      "Audit-ready output: full methodology documentation for every valuation",
    ],
    link: "/services/vessel-valuation",
    linkText: "Explore Vessel Valuation",
  },
  {
    id: "premium-engine",
    title: "4. Deterministic Premium Calculation",
    content:
      "The final step in the underwriting pipeline: converting condition and valuation data into calculated premiums. A deterministic pricing engine — where every variable is named, weighted, and timestamped — generates H&M and P&I premiums with a complete audit trail.",
    details: [
      "Deterministic: same inputs always produce the same premium (unlike probabilistic ML models)",
      "12+ risk variables: vessel condition, age, type, trading area, claims history, compliance",
      "Full audit trail: every variable, weight, and data source timestamped and stored",
      "Speed: minutes from data input to calculated premium",
    ],
    link: "/services/premium-engine",
    linkText: "Explore Premium Engine",
    blogLink: "/blog/instant-ship-insurance-premiums",
    blogText: "The future of instant vessel insurance premiums",
  },
  {
    id: "claims-intelligence",
    title: "5. Claims Intelligence",
    content:
      "Risk management does not stop at bind. Claims intelligence provides timestamped condition baselines at point of bind, tracks changes over time, and generates before-and-after comparisons when claims occur — accelerating settlement and reducing fraud.",
    details: [
      "Pre-loss baselines: timestamped condition record at point of bind",
      "Drift detection: automatic alerts when condition changes between inspections",
      "Claims comparison: visual and data comparison against stored baselines",
      "Fraud detection: flag pre-existing damage in claims submissions",
    ],
    link: "/services/claims-intelligence",
    linkText: "Explore Claims Intelligence",
    blogLink: "/blog/marine-insurance-claims-process",
    blogText: "The marine insurance claims process explained",
  },
]

export default function GuidePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Complete Guide to AI-Powered Marine Insurance",
    description:
      "Everything you need to know about how AI is transforming marine insurance.",
    url: "https://www.nudos.app/guide",
    datePublished: "2025-05-01",
    dateModified: "2026-05-01",
    author: { "@type": "Organization", name: "NUDOS", url: "https://www.nudos.app" },
    publisher: {
      "@type": "Organization",
      name: "NUDOS",
      logo: { "@type": "ImageObject", url: "https://www.nudos.app/images/nudos-logo.svg" },
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".guide-intro"],
    },
  }

  return (
    <I18nProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main id="main-content" className="min-h-screen bg-background">
        <Header />
        <section className="pt-32 pb-20 px-6">
          <div className="mx-auto max-w-3xl">
            <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Guide" }]} />

            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-accent" strokeWidth={2} />
              <span className="text-sm font-medium text-foreground/70">Comprehensive Guide</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-foreground mb-6">
              The Complete Guide to AI-Powered Marine Insurance
            </h1>

            <p className="guide-intro text-lg text-foreground/60 leading-relaxed mb-8">
              Marine insurance is a $34 billion industry still running on manual processes designed decades ago. AI is changing that — not by replacing human expertise, but by building the data infrastructure that connects vessel inspection to condition scoring to valuation to pricing to claims. This guide explains how each piece works.
            </p>

            {/* TOC */}
            <nav aria-label="Guide table of contents" className="mb-12 p-5 bg-card rounded-xl border border-border">
              <p className="text-sm font-semibold text-foreground mb-3">In this guide</p>
              <ol className="space-y-2">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-sm text-foreground/50 hover:text-accent transition-colors"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* Sections */}
            {sections.map((section) => (
              <div key={section.id} id={section.id} className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  {section.title}
                </h2>
                <p className="text-foreground/70 leading-relaxed mb-4">{section.content}</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  {section.details.map((d, i) => (
                    <li key={i} className="text-foreground/60 text-sm leading-relaxed">{d}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={section.link}
                    className="text-sm text-accent hover:underline font-medium"
                  >
                    {section.linkText} →
                  </Link>
                  {section.blogLink && (
                    <Link
                      href={section.blogLink}
                      className="text-sm text-foreground/50 hover:text-accent transition-colors"
                    >
                      Read: {section.blogText} →
                    </Link>
                  )}
                </div>
              </div>
            ))}

            {/* Related resources */}
            <div className="p-6 bg-card rounded-xl border border-border mb-12">
              <p className="text-sm font-semibold text-foreground mb-3">Related Resources</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/blog" className="text-xs bg-accent/10 text-accent px-3 py-1.5 rounded-full hover:bg-accent/20 transition-colors">
                  Blog
                </Link>
                <Link href="/faq" className="text-xs bg-accent/10 text-accent px-3 py-1.5 rounded-full hover:bg-accent/20 transition-colors">
                  FAQ
                </Link>
                <Link href="/glossary" className="text-xs bg-accent/10 text-accent px-3 py-1.5 rounded-full hover:bg-accent/20 transition-colors">
                  Marine Insurance Glossary
                </Link>
                <Link href="/blog/hull-and-machinery-insurance-guide" className="text-xs bg-accent/10 text-accent px-3 py-1.5 rounded-full hover:bg-accent/20 transition-colors">
                  H&M Insurance Guide
                </Link>
                <Link href="/blog/general-average-explained" className="text-xs bg-accent/10 text-accent px-3 py-1.5 rounded-full hover:bg-accent/20 transition-colors">
                  General Average Explained
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Ready to see it in action?
              </h2>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground hover:brightness-110 transition-all"
              >
                Talk to Us
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

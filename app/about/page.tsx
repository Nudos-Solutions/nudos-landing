import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Users, MapPin, ArrowUpRight, Briefcase, GraduationCap } from "lucide-react"
import BreadcrumbNav from "@/components/breadcrumb-nav"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { I18nProvider } from "@/lib/i18n"

export const metadata: Metadata = {
  title: "About NUDOS — Team, Mission & Marine Insurance AI Vision",
  description:
    "Meet the team behind NUDOS. We are building AI-powered infrastructure for marine insurance — from vessel inspection to premium calculation. Based in Montevideo and Miami Beach.",
  alternates: { canonical: "https://www.nudos.app/about" },
  openGraph: {
    title: "About NUDOS — Team & Mission",
    description:
      "Meet the team building AI-powered infrastructure for marine insurance.",
    images: [
      {
        url: "/og?title=About%20NUDOS&subtitle=The%20team%20behind%20marine%20insurance%20AI",
        width: 1200,
        height: 630,
        alt: "About NUDOS",
      },
    ],
  },
}

const milestones = [
  { year: "2024", event: "NUDOS founded in Montevideo, Uruguay" },
  { year: "2024", event: "Computer vision engine for vessel inspection developed" },
  { year: "2025", event: "Condition scoring engine launched — 27+ maritime standards" },
  { year: "2025", event: "Miami Beach office opened for Americas market" },
  { year: "2025", event: "Deterministic premium engine and claims intelligence released" },
  { year: "2026", event: "Full AI underwriting pipeline operational" },
]

const values = [
  {
    title: "Data over opinion",
    description:
      "Every underwriting decision should be traceable to verified data. We build systems where every variable is named, weighted, and timestamped.",
  },
  {
    title: "Deterministic by default",
    description:
      "Same inputs produce same outputs. Our pricing engine is deterministic — not probabilistic. Regulators and reinsurers can audit every calculation step.",
  },
  {
    title: "Infrastructure, not point solutions",
    description:
      "We do not build standalone tools. We build the connected infrastructure that moves data from vessel imagery to bound policy — inspection to scoring to valuation to premium.",
  },
  {
    title: "Domain depth",
    description:
      "Marine insurance is complex. SOLAS, MARPOL, classification societies, P&I clubs, general average — we build for people who understand these terms, not around them.",
  },
]

export default function AboutPage() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.nudos.app/#organization",
    name: "NUDOS",
    url: "https://www.nudos.app",
    logo: "https://www.nudos.app/images/nudos-logo.svg",
    description: "AI-powered marine insurance infrastructure",
    foundingDate: "2024",
    foundingLocation: {
      "@type": "Place",
      name: "Montevideo, Uruguay",
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 2,
      maxValue: 10,
    },
    knowsAbout: [
      "Marine Insurance",
      "Vessel Inspection",
      "Computer Vision",
      "Underwriting Automation",
      "Maritime Standards",
      "Hull & Machinery Insurance",
      "P&I Insurance",
    ],
    sameAs: [
      "https://www.instagram.com/usenudos",
      "https://www.linkedin.com/company/nudos-app",
    ],
  }

  return (
    <I18nProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <main id="main-content" className="min-h-screen bg-background">
        <Header />
        <section className="pt-32 pb-20 px-6">
          <div className="mx-auto max-w-3xl">
            <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "About" }]} />

            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-accent" strokeWidth={2} />
              <span className="text-sm font-medium text-foreground/70">About Us</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-foreground mb-6">
              Building the infrastructure layer for marine insurance
            </h1>

            <p className="text-lg text-foreground/60 leading-relaxed mb-6">
              NUDOS is an AI-powered marine insurance infrastructure company. We build the connected systems that move data from vessel imagery to underwriting decisions — replacing weeks of manual process with minutes of automated, auditable analysis.
            </p>

            <p className="text-lg text-foreground/60 leading-relaxed mb-12">
              We are not building another insurtech app. We are building the data infrastructure that the $34 billion marine insurance industry needs to make every underwriting decision traceable, repeatable, and defensible.
            </p>

            {/* Mission */}
            <div className="bg-card rounded-xl p-8 border border-border mb-14">
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">Our mission</h2>
              <p className="text-foreground/70 leading-relaxed text-lg">
                Make every marine underwriting decision traceable to verified vessel condition data. No guesswork. No stale survey reports. No opaque pricing models.
              </p>
            </div>

            {/* Values */}
            <h2 className="text-2xl font-serif font-bold text-foreground mb-8">What we believe</h2>
            <div className="grid sm:grid-cols-2 gap-6 mb-14">
              {values.map((value, i) => (
                <div key={i} className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <h2 className="text-2xl font-serif font-bold text-foreground mb-8">Our journey</h2>
            <div className="space-y-4 mb-14">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="text-sm font-bold text-accent bg-accent/10 px-3 py-1 rounded-full shrink-0">
                    {m.year}
                  </span>
                  <p className="text-foreground/70 text-sm leading-relaxed pt-0.5">{m.event}</p>
                </div>
              ))}
            </div>

            {/* Offices */}
            <h2 className="text-2xl font-serif font-bold text-foreground mb-8">Our offices</h2>
            <div className="grid sm:grid-cols-2 gap-6 mb-14">
              <Link href="/locations/montevideo" className="bg-card rounded-xl p-6 border border-border hover:border-accent/30 transition-colors group">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-foreground/50">Headquarters</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-1">Montevideo, Uruguay</h3>
                <p className="text-foreground/60 text-sm">Cuareim 1447</p>
              </Link>
              <Link href="/locations/miami-beach" className="bg-card rounded-xl p-6 border border-border hover:border-accent/30 transition-colors group">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-foreground/50">Americas</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-1">Miami Beach, Florida</h3>
                <p className="text-foreground/60 text-sm">1 Washington Ave</p>
              </Link>
            </div>

            {/* Expertise / E-E-A-T signals */}
            <div className="bg-card rounded-xl p-8 border border-border mb-14">
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">Our expertise</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Briefcase className="w-4 h-4 text-accent shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Marine Insurance</p>
                    <p className="text-xs text-foreground/50">H&M, cargo, liability coverage</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-accent shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Maritime Standards</p>
                    <p className="text-xs text-foreground/50">SOLAS, MARPOL, ABYC, classification rules</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Briefcase className="w-4 h-4 text-accent shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Computer Vision</p>
                    <p className="text-xs text-foreground/50">Hull damage detection, zone mapping, scoring</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-accent shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Underwriting Automation</p>
                    <p className="text-xs text-foreground/50">Deterministic pricing, audit trails, compliance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Want to work with us?
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground hover:brightness-110 transition-all"
                >
                  Talk to Us
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/guide"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-base font-semibold text-foreground hover:border-accent hover:text-accent transition-colors"
                >
                  Read Our Guide
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </I18nProvider>
  )
}

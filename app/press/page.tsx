import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Newspaper, Mail, Download, ArrowUpRight } from "lucide-react"
import BreadcrumbNav from "@/components/breadcrumb-nav"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { I18nProvider } from "@/lib/i18n"

export const metadata: Metadata = {
  title: "Press & Media — NUDOS",
  description:
    "Press resources for NUDOS — company facts, brand assets, and media contact. AI-powered marine insurance infrastructure based in Montevideo and Miami Beach.",
  alternates: { canonical: "https://www.nudos.app/press" },
  openGraph: {
    title: "Press & Media | NUDOS",
    description: "Press resources, brand assets, and media contact for NUDOS.",
    images: [
      {
        url: "/og?title=Press%20%26%20Media&subtitle=NUDOS%20press%20resources",
        width: 1200,
        height: 630,
        alt: "NUDOS Press & Media",
      },
    ],
  },
}

const companyFacts = [
  { label: "Founded", value: "2024" },
  { label: "Headquarters", value: "Montevideo, Uruguay" },
  { label: "US Office", value: "Miami Beach, FL" },
  { label: "Industry", value: "Marine InsurTech" },
  { label: "Product", value: "AI underwriting infrastructure" },
  { label: "Market Size", value: "$34B global marine premium" },
]

const boilerplate = `NUDOS is an AI-powered marine insurance infrastructure company. The platform connects vessel inspection, condition scoring, valuation, and premium calculation into a single automated pipeline — replacing weeks of manual underwriting process with minutes of auditable, deterministic analysis. NUDOS serves marine insurers, brokers, and vessel operators from offices in Montevideo, Uruguay and Miami Beach, Florida.`

export default function PressPage() {
  return (
    <I18nProvider>
      <main id="main-content" className="min-h-screen bg-background">
        <Header />
        <section className="pt-32 pb-20 px-6">
          <div className="mx-auto max-w-3xl">
            <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Press" }]} />

            <div className="flex items-center gap-2 mb-4">
              <Newspaper className="w-5 h-5 text-accent" strokeWidth={2} />
              <span className="text-sm font-medium text-foreground/70">Press & Media</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-foreground mb-6">
              Press Resources
            </h1>

            <p className="text-lg text-foreground/60 leading-relaxed mb-12">
              Everything journalists and media partners need to write about NUDOS.
            </p>

            {/* Media Contact */}
            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-12">
              <h2 className="text-lg font-semibold text-foreground mb-3">Media Contact</h2>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <a href="mailto:hi@nudos.app" className="text-accent hover:underline font-medium">
                  hi@nudos.app
                </a>
              </div>
              <p className="text-sm text-foreground/50 mt-2">
                For press inquiries, interview requests, and partnership opportunities.
              </p>
            </div>

            {/* Company Facts */}
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Company Facts</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {companyFacts.map((fact, i) => (
                <div key={i} className="bg-card rounded-xl p-4 border border-border">
                  <p className="text-xs font-medium text-foreground/50 uppercase tracking-wider mb-1">{fact.label}</p>
                  <p className="text-foreground font-semibold">{fact.value}</p>
                </div>
              ))}
            </div>

            {/* Boilerplate */}
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">About NUDOS</h2>
            <div className="bg-card rounded-xl p-6 border border-border mb-12">
              <p className="text-foreground/70 leading-relaxed">{boilerplate}</p>
              <p className="text-xs text-foreground/40 mt-4">Copy-ready boilerplate for press use.</p>
            </div>

            {/* Brand Assets */}
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Brand Assets</h2>
            <div className="bg-card rounded-xl p-6 border border-border mb-12">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-semibold text-foreground mb-3">Logo</p>
                  <div className="bg-background rounded-lg p-6 border border-border flex items-center justify-center mb-3">
                    <Image src="/images/nudos-logo.svg" alt="NUDOS logo" width={120} height={48} className="h-12 w-auto" />
                  </div>
                  <a
                    href="/images/nudos-logo.svg"
                    download
                    className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
                  >
                    <Download className="h-3 w-3" />
                    Download SVG
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-3">Brand Colors</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#1F6AFF]" />
                      <div>
                        <p className="text-sm font-medium text-foreground">NUDOS Blue</p>
                        <p className="text-xs text-foreground/50">#1F6AFF</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#0A0A0A]" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Background</p>
                        <p className="text-xs text-foreground/50">#0A0A0A</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#F5F5F5] border border-border" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Foreground</p>
                        <p className="text-xs text-foreground/50">#F5F5F5</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Pages */}
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Key Resources</h2>
            <div className="flex flex-wrap gap-2 mb-12">
              <Link href="/guide" className="text-xs bg-accent/10 text-accent px-3 py-1.5 rounded-full hover:bg-accent/20 transition-colors">
                Complete Guide
              </Link>
              <Link href="/about" className="text-xs bg-accent/10 text-accent px-3 py-1.5 rounded-full hover:bg-accent/20 transition-colors">
                About NUDOS
              </Link>
              <Link href="/blog" className="text-xs bg-accent/10 text-accent px-3 py-1.5 rounded-full hover:bg-accent/20 transition-colors">
                Blog
              </Link>
              <Link href="/services/vessel-inspection" className="text-xs bg-accent/10 text-accent px-3 py-1.5 rounded-full hover:bg-accent/20 transition-colors">
                Vessel Inspection AI
              </Link>
              <Link href="/services/premium-engine" className="text-xs bg-accent/10 text-accent px-3 py-1.5 rounded-full hover:bg-accent/20 transition-colors">
                Premium Engine
              </Link>
              <Link href="/glossary" className="text-xs bg-accent/10 text-accent px-3 py-1.5 rounded-full hover:bg-accent/20 transition-colors">
                Marine Insurance Glossary
              </Link>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground hover:brightness-110 transition-all"
              >
                Get in Touch
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

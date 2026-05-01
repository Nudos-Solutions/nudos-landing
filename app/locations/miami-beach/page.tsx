import type { Metadata } from "next"
import Link from "next/link"
import { MapPin, ArrowUpRight, Phone, Mail } from "lucide-react"
import BreadcrumbNav from "@/components/breadcrumb-nav"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { I18nProvider } from "@/lib/i18n"

export const metadata: Metadata = {
  title: "NUDOS Miami Beach — Marine Insurance AI for the Americas",
  description:
    "NUDOS Miami Beach office. AI-powered marine insurance infrastructure serving the Caribbean, Gulf of Mexico, and Americas. Vessel inspection, condition scoring, and premium automation.",
  alternates: { canonical: "https://www.nudos.app/locations/miami-beach" },
  openGraph: {
    title: "NUDOS Miami Beach — Marine Insurance AI",
    description:
      "AI-powered marine insurance infrastructure serving the Caribbean, Gulf of Mexico, and Americas.",
    images: [
      {
        url: "/og?title=Miami%20Beach&subtitle=Marine%20Insurance%20AI%20for%20the%20Americas",
        width: 1200,
        height: 630,
        alt: "NUDOS Miami Beach",
      },
    ],
  },
}

export default function MiamiBeachPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "NUDOS — Miami Beach",
    url: "https://www.nudos.app/locations/miami-beach",
    telephone: "+1-786-402-5514",
    email: "hi@nudos.app",
    description:
      "AI-powered marine insurance infrastructure serving the Caribbean, Gulf of Mexico, and Americas. Vessel inspection, condition scoring, valuation, and premium calculation.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1 Washington Ave",
      addressLocality: "Miami Beach",
      addressRegion: "FL",
      postalCode: "33139",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.7741,
      longitude: -80.134,
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Place", name: "Caribbean" },
      { "@type": "Place", name: "Gulf of Mexico" },
      { "@type": "Place", name: "Latin America" },
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "NUDOS",
      url: "https://www.nudos.app",
    },
  }

  return (
    <I18nProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <main id="main-content" className="min-h-screen bg-background">
        <Header />
        <section className="pt-32 pb-20 px-6">
          <div className="mx-auto max-w-3xl">
            <BreadcrumbNav
              items={[
                { label: "Home", href: "/" },
                { label: "Locations" },
                { label: "Miami Beach" },
              ]}
            />

            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-accent" strokeWidth={2} />
              <span className="text-sm font-medium text-foreground/70">Miami Beach, Florida</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-foreground mb-6">
              Marine Insurance AI for the Americas
            </h1>

            <p className="text-lg text-foreground/60 leading-relaxed mb-8">
              NUDOS Miami Beach serves the Caribbean, Gulf of Mexico, and Americas markets. Our AI-powered infrastructure processes vessel inspection data, generates condition scores, calculates valuations, and automates premium pricing for marine insurers, brokers, and vessel operators across the region.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-lg font-semibold text-foreground mb-3">Contact</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-accent shrink-0" />
                    <a href="tel:+17864025514" className="text-sm text-foreground/60 hover:text-accent transition-colors">
                      +1 (786) 402-5514
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-accent shrink-0" />
                    <a href="mailto:hi@nudos.app" className="text-sm text-foreground/60 hover:text-accent transition-colors">
                      hi@nudos.app
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/60">1 Washington Ave, Miami Beach, FL 33139</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-lg font-semibold text-foreground mb-3">Markets Served</h2>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li>Caribbean marine insurance</li>
                  <li>Gulf of Mexico vessel operators</li>
                  <li>Latin American marine markets</li>
                  <li>US East Coast commercial shipping</li>
                  <li>Yacht and recreational marine</li>
                </ul>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border mb-12">
              <h2 className="text-lg font-semibold text-foreground mb-3">Our Services</h2>
              <div className="flex flex-wrap gap-2">
                <Link href="/services/vessel-inspection" className="text-xs bg-accent/10 text-accent px-3 py-1.5 rounded-full hover:bg-accent/20 transition-colors">
                  Vessel Inspection AI
                </Link>
                <Link href="/services/condition-scoring" className="text-xs bg-accent/10 text-accent px-3 py-1.5 rounded-full hover:bg-accent/20 transition-colors">
                  Condition Scoring
                </Link>
                <Link href="/services/vessel-valuation" className="text-xs bg-accent/10 text-accent px-3 py-1.5 rounded-full hover:bg-accent/20 transition-colors">
                  Vessel Valuation
                </Link>
                <Link href="/services/premium-engine" className="text-xs bg-accent/10 text-accent px-3 py-1.5 rounded-full hover:bg-accent/20 transition-colors">
                  Premium Engine
                </Link>
                <Link href="/services/claims-intelligence" className="text-xs bg-accent/10 text-accent px-3 py-1.5 rounded-full hover:bg-accent/20 transition-colors">
                  Claims Intelligence
                </Link>
              </div>
            </div>

            <div className="text-center">
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

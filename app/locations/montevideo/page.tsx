import type { Metadata } from "next"
import Link from "next/link"
import { MapPin, ArrowUpRight, Phone, Mail } from "lucide-react"
import BreadcrumbNav from "@/components/breadcrumb-nav"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { I18nProvider } from "@/lib/i18n"

export const metadata: Metadata = {
  title: "NUDOS Montevideo — Marine Insurance AI Headquarters",
  description:
    "NUDOS headquarters in Montevideo, Uruguay. AI-powered marine insurance infrastructure for South American, transatlantic, and global maritime markets.",
  alternates: { canonical: "https://www.nudos.app/locations/montevideo" },
  openGraph: {
    title: "NUDOS Montevideo — Marine Insurance AI HQ",
    description:
      "AI-powered marine insurance infrastructure for South American, transatlantic, and global maritime markets.",
    images: [
      {
        url: "/og?title=Montevideo&subtitle=Marine%20Insurance%20AI%20Headquarters",
        width: 1200,
        height: 630,
        alt: "NUDOS Montevideo",
      },
    ],
  },
}

export default function MontevideoPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "NUDOS — Montevideo",
    url: "https://www.nudos.app/locations/montevideo",
    telephone: "+598-98-576-720",
    email: "hi@nudos.app",
    description:
      "NUDOS headquarters. AI-powered marine insurance infrastructure for South American, transatlantic, and global maritime markets.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Cuareim 1447",
      addressLocality: "Montevideo",
      addressCountry: "UY",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -34.9011,
      longitude: -56.1882,
    },
    areaServed: [
      { "@type": "Country", name: "Uruguay" },
      { "@type": "Country", name: "Argentina" },
      { "@type": "Country", name: "Brazil" },
      { "@type": "Place", name: "South America" },
      { "@type": "Place", name: "Transatlantic routes" },
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
                { label: "Montevideo" },
              ]}
            />

            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-accent" strokeWidth={2} />
              <span className="text-sm font-medium text-foreground/70">Montevideo, Uruguay</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-foreground mb-6">
              Marine Insurance AI Headquarters
            </h1>

            <p className="text-lg text-foreground/60 leading-relaxed mb-8">
              NUDOS is headquartered in Montevideo, Uruguay — a growing hub for technology and maritime services in South America. From here, we build and operate the AI infrastructure that powers marine insurance underwriting for clients across South America, transatlantic routes, and global maritime markets.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-lg font-semibold text-foreground mb-3">Contact</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-accent shrink-0" />
                    <a href="https://wa.me/59898576720" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/60 hover:text-accent transition-colors">
                      +598 98 576 720
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
                    <p className="text-sm text-foreground/60">Cuareim 1447, Montevideo, Uruguay</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-lg font-semibold text-foreground mb-3">Markets Served</h2>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li>South American maritime insurance</li>
                  <li>Transatlantic shipping routes</li>
                  <li>River Plate commercial vessels</li>
                  <li>Brazilian coastal shipping</li>
                  <li>Global marine underwriting</li>
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

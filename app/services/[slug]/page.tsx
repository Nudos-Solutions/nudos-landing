import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getServiceBySlug, getAllServiceSlugs } from "@/content/services"
import BreadcrumbNav from "@/components/breadcrumb-nav"
import ServicePageLayout from "@/components/service-page-layout"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { I18nProvider } from "@/lib/i18n"

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}

  return {
    title: service.title,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: `https://www.nudos.app/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | NUDOS`,
      description: service.metaDescription,
      images: [
        {
          url: `/og?title=${encodeURIComponent(service.h1)}&subtitle=${encodeURIComponent(service.metaDescription)}`,
          width: 1200,
          height: 630,
          alt: `${service.title} — NUDOS`,
        },
      ],
    },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    url: `https://www.nudos.app/services/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: "NUDOS",
      url: "https://www.nudos.app",
    },
  }

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to use ${service.title}`,
    description: service.metaDescription,
    step: service.steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.title,
      text: step.description,
    })),
  }

  return (
    <I18nProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <main id="main-content" className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 px-6">
          <div className="mx-auto max-w-4xl">
            <BreadcrumbNav
              items={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/#services" },
                { label: service.title },
              ]}
            />
          </div>
        </div>
        <ServicePageLayout service={service} />
        <Footer />
      </main>
    </I18nProvider>
  )
}

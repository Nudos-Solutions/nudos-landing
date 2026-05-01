import type { Metadata } from "next"
import { HelpCircle } from "lucide-react"
import { faqItems, faqCategories } from "@/content/faq"
import BreadcrumbNav from "@/components/breadcrumb-nav"
import FaqAccordion from "@/components/faq-accordion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { I18nProvider } from "@/lib/i18n"

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about NUDOS — how AI vessel inspection works, what maritime standards we check, pricing, and availability.",
  alternates: { canonical: "https://www.nudos.app/faq" },
}

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer.replace(/<[^>]*>/g, ""),
      },
    })),
  }

  return (
    <I18nProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main id="main-content" className="min-h-screen bg-background">
        <Header />
        <section className="pt-32 pb-20 px-6">
          <div className="mx-auto max-w-3xl">
            <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />

            <div className="flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-accent" strokeWidth={2} />
              <span className="text-sm font-medium text-foreground/70">Frequently Asked Questions</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-foreground mb-12">
              FAQ
            </h1>

            {faqCategories.map((category) => (
              <div key={category} className="mb-10">
                <h2 className="text-lg font-semibold text-foreground mb-4">{category}</h2>
                <FaqAccordion items={faqItems.filter((item) => item.category === category)} />
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </I18nProvider>
  )
}

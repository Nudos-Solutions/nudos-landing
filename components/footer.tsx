"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, Instagram, Linkedin } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="text-2xl font-bold text-foreground">
              NUDOS
            </Link>
            <p className="mt-4 text-sm text-foreground/60 leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">{t.footer.pages}</h4>
            <nav aria-label="Footer navigation" className="flex flex-col gap-3">
              {t.footer.pageLinks.map((item, index) => {
                const sectionIds = ["about", "works", "services", "traction", "vision"]
                return (
                  <Link
                    key={item}
                    href={`#${sectionIds[index] || item.toLowerCase().replaceAll(" ", "-")}`}
                    className="text-sm text-foreground/60 hover:text-accent transition-colors"
                  >
                    {item}
                  </Link>
                )
              })}
              <Link
                href="/blog"
                className="text-sm text-foreground/60 hover:text-accent transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/faq"
                className="text-sm text-foreground/60 hover:text-accent transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/glossary"
                className="text-sm text-foreground/60 hover:text-accent transition-colors"
              >
                Glossary
              </Link>
              <Link
                href="/locations/miami-beach"
                className="text-sm text-foreground/60 hover:text-accent transition-colors"
              >
                Miami Beach
              </Link>
              <Link
                href="/locations/montevideo"
                className="text-sm text-foreground/60 hover:text-accent transition-colors"
              >
                Montevideo
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">{t.footer.address}</h4>
            <div className="flex flex-col gap-3 mb-6">
              {t.footer.addresses.map((addr) => (
                <div key={addr.label} className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-foreground/60 mt-0.5 shrink-0" />
                  <p className="text-sm text-foreground/60">
                    <span className="font-semibold">{addr.label}:</span> {addr.text}
                  </p>
                </div>
              ))}
            </div>

            <h4 className="text-sm font-semibold text-foreground mb-4">{t.footer.contactUs}</h4>
            <div className="space-y-3">
              {t.footer.phones.map((phone) => (
                <div key={phone.label} className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-foreground/60 shrink-0" />
                  <a
                    href={phone.href}
                    target={phone.href.startsWith("http") ? "_blank" : undefined}
                    rel={phone.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-foreground/60 hover:text-accent transition-colors"
                  >
                    <span className="font-semibold">{phone.label}:</span> {phone.text}
                  </a>
                </div>
              ))}
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-foreground/60" />
                <a
                  href="mailto:hi@nudos.app"
                  className="text-sm text-foreground/60 hover:text-accent transition-colors"
                >
                  {t.footer.email}
                </a>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <a
                  href="https://www.instagram.com/usenudos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-accent transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/nudos-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60">{t.footer.copyright}</p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-sm text-foreground/60 hover:text-accent transition-colors">
              {t.footer.terms}
            </Link>
            <Link href="/privacy" className="text-sm text-foreground/60 hover:text-accent transition-colors">
              {t.footer.privacy}
            </Link>
            <Link href="/cookies" className="text-sm text-foreground/60 hover:text-accent transition-colors">
              {t.footer.cookies}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, ArrowUpRight, Globe, Instagram, Linkedin } from "lucide-react"
import { useI18n, type Locale } from "@/lib/i18n"

export default function Header() {
  const { t, locale, setLocale } = useI18n()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.works, href: "#works" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.traction, href: "#traction" },
    { name: t.nav.vision, href: "#vision" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setMobileMenuOpen(false)
  }

  const toggleLocale = () => {
    setLocale(locale === "en" ? "es" : "en")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div
        className={`mx-auto max-w-7xl transition-all duration-300 ${scrolled
            ? "mt-4 mx-4 px-6 py-2 shadow-lg bg-background/95 backdrop-blur-md rounded-lg"
            : "px-6 py-4 bg-transparent"
          }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/nudos-logo.svg"
              alt="NUDOS"
              width={scrolled ? 28 : 32}
              height={scrolled ? 28 : 32}
              className={`object-contain transition-all duration-300 ${scrolled ? "" : "brightness-0 invert"}`}
              priority
            />
            <span className={`font-bold transition-all duration-300 ${scrolled ? "text-xl text-foreground" : "text-2xl text-white"}`}>
              NUDOS
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium transition-colors cursor-pointer ${scrolled ? "text-foreground/70 hover:text-accent" : "text-white/80 hover:text-white"}`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className={`flex items-center gap-3 transition-all duration-300 ${scrolled ? "opacity-0 w-0 overflow-hidden" : "opacity-100"}`} aria-hidden={scrolled}>
              <a
                href="https://www.instagram.com/usenudos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Instagram"
                tabIndex={scrolled ? -1 : 0}
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/nudos-app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="LinkedIn"
                tabIndex={scrolled ? -1 : 0}
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <button
              onClick={toggleLocale}
              className={`flex items-center gap-1.5 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors ${scrolled ? "border-border text-foreground/70 hover:text-accent hover:border-accent" : "border-white/30 text-white/70 hover:text-white hover:border-white/60"}`}
              aria-label={`Switch to ${locale === "en" ? "Spanish" : "English"}`}
            >
              <Globe className="h-4 w-4" />
              {locale === "en" ? "ES" : "EN"}
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors cursor-pointer ${scrolled ? "border-foreground text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent" : "border-white/40 text-white hover:bg-white/15 hover:border-white/70"}`}
            >
              {t.nav.letsTalk}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <button className={`md:hidden ${scrolled ? "text-foreground" : "text-white"}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-6 mt-2 rounded-lg bg-background/95 backdrop-blur-md px-4">
            <nav className="flex flex-col gap-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-2">
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
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={toggleLocale}
                  className="flex items-center gap-1.5 rounded-full border border-border px-4 py-2.5 text-sm font-semibold text-foreground/70 hover:text-accent hover:border-accent transition-colors"
                >
                  <Globe className="h-4 w-4" />
                  {locale === "en" ? "ES" : "EN"}
                </button>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="flex items-center gap-2 rounded-full border border-foreground px-5 py-2.5 text-sm font-medium text-foreground cursor-pointer"
                >
                  {t.nav.letsTalk}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

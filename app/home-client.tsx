"use client"

import { I18nProvider } from "@/lib/i18n"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import WhatNudosIs from "@/components/what-nudos-is"
import SelectedWorks from "@/components/selected-works"
import Services from "@/components/services"
import DataAdvantage from "@/components/data-advantage"
import Traction from "@/components/traction"
import Vision from "@/components/vision"
import Testimonials from "@/components/testimonials"
import LatestArticles from "@/components/latest-articles"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function HomeClient() {
  return (
    <I18nProvider>
      <main id="main-content" className="min-h-screen bg-background">
        <Header />
        <Hero />
        <About />
        <WhatNudosIs />
        <SelectedWorks />
        <Services />
        <DataAdvantage />
        <Traction />
        <Testimonials />
        <Vision />
        <LatestArticles />
        <ContactSection />
        <Footer />
      </main>
    </I18nProvider>
  )
}

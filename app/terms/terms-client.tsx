"use client"

import { I18nProvider } from "@/lib/i18n"
import LegalPage from "@/components/legal-page"

export default function TermsClient() {
  return (
    <I18nProvider>
      <LegalPage policy="terms" />
    </I18nProvider>
  )
}

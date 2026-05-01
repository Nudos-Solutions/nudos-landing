"use client"

import { I18nProvider } from "@/lib/i18n"
import LegalPage from "@/components/legal-page"

export default function PrivacyClient() {
  return (
    <I18nProvider>
      <LegalPage policy="privacy" />
    </I18nProvider>
  )
}

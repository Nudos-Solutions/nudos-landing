"use client"

import { I18nProvider } from "@/lib/i18n"
import LegalPage from "@/components/legal-page"

export default function CookiesClient() {
  return (
    <I18nProvider>
      <LegalPage policy="cookies" />
    </I18nProvider>
  )
}

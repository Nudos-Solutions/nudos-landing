import type { Metadata } from "next"
import TermsClient from "./terms-client"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using the NUDOS marine insurance platform. Service agreements and usage policies.",
  alternates: { canonical: "https://www.nudos.app/terms" },
}

export default function TermsPage() {
  return <TermsClient />
}

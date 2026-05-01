import type { Metadata } from "next"
import PrivacyClient from "./privacy-client"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How NUDOS collects, uses, and protects your personal data. Our commitment to data privacy in marine insurance technology.",
  alternates: { canonical: "https://www.nudos.app/privacy" },
}

export default function PrivacyPage() {
  return <PrivacyClient />
}

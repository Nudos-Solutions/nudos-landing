import type { Metadata } from "next"
import CookiesClient from "./cookies-client"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How NUDOS uses cookies and similar technologies. Manage your cookie preferences for our marine insurance platform.",
  alternates: { canonical: "https://www.nudos.app/cookies" },
}

export default function CookiesPage() {
  return <CookiesClient />
}

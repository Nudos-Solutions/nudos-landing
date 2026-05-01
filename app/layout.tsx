import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, DM_Serif_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import LoadingScreen from "@/components/loading-screen"
import { OrganizationSchema, SoftwareApplicationSchema, WebSiteSchema, LocalBusinessSchemas, ContactPageSchema } from "@/components/structured-data"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nudos.app"),
  title: {
    default: "NUDOS — AI-Powered Marine Insurance Infrastructure",
    template: "%s | NUDOS",
  },
  description:
    "Nudos turns vessel data into underwriting decisions. AI-powered inspection, condition scoring, valuation, and premium calculation for marine insurance.",
  keywords: [
    "marine insurance AI",
    "vessel inspection technology",
    "hull damage detection",
    "marine underwriting automation",
    "vessel condition scoring",
    "maritime insurtech",
    "marine risk infrastructure",
  ],
  authors: [{ name: "NUDOS", url: "https://www.nudos.app" }],
  creator: "NUDOS",
  publisher: "NUDOS",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "es_UY",
    url: "https://www.nudos.app",
    siteName: "NUDOS",
    title: "NUDOS — AI-Powered Marine Insurance Infrastructure",
    description:
      "Nudos turns vessel data into underwriting decisions. AI-powered inspection, condition scoring, valuation, and premium calculation for marine insurance.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NUDOS — The Infra Layer for Marine Risk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@usenudos",
    creator: "@usenudos",
    title: "NUDOS — AI-Powered Marine Insurance Infrastructure",
    description:
      "Nudos turns vessel data into underwriting decisions. AI-powered inspection, condition scoring, valuation, and premium calculation.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.nudos.app",
    languages: {
      en: "https://www.nudos.app",
      es: "https://www.nudos.app",
      "x-default": "https://www.nudos.app",
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1f6aff" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/drasbgjxe/image/upload/q_auto/f_auto/v1776652499/clean_sailboat_hero_xvq7ba.jpg"
        />
      </head>
      <body className={`${dmSans.variable} ${dmSerif.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[10000] focus:bg-accent focus:text-accent-foreground focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
        >
          Skip to content
        </a>
        <OrganizationSchema />
        <WebSiteSchema />
        <SoftwareApplicationSchema />
        <LocalBusinessSchemas />
        <ContactPageSchema />
        <LoadingScreen />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

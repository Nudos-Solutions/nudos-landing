export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NUDOS",
    url: "https://www.nudos.app",
    logo: "https://www.nudos.app/images/nudos-logo.svg",
    description: "AI-powered marine insurance infrastructure",
    sameAs: [
      "https://www.instagram.com/usenudos",
      "https://www.linkedin.com/company/nudos-app",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+598-98-576-720",
        contactType: "sales",
        areaServed: "UY",
        availableLanguage: ["English", "Spanish"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+1-786-402-5514",
        contactType: "sales",
        areaServed: "US",
        availableLanguage: ["English", "Spanish"],
      },
    ],
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "Cuareim 1447",
        addressLocality: "Montevideo",
        addressCountry: "UY",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "1 Washington Ave",
        addressLocality: "Miami Beach",
        addressRegion: "FL",
        addressCountry: "US",
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NUDOS",
    url: "https://www.nudos.app",
    description:
      "AI-powered marine insurance infrastructure — vessel inspection, condition scoring, valuation, and premium calculation.",
    publisher: {
      "@type": "Organization",
      name: "NUDOS",
      url: "https://www.nudos.app",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function SoftwareApplicationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "NUDOS",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "AI-powered marine insurance infrastructure — vessel inspection, condition scoring, valuation, and premium calculation.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Contact for pricing",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

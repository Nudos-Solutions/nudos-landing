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

export function LocalBusinessSchemas() {
  const locations = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "NUDOS — Montevideo",
      url: "https://www.nudos.app",
      telephone: "+598-98-576-720",
      email: "hi@nudos.app",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Cuareim 1447",
        addressLocality: "Montevideo",
        addressCountry: "UY",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -34.9011,
        longitude: -56.1882,
      },
      parentOrganization: {
        "@type": "Organization",
        name: "NUDOS",
        url: "https://www.nudos.app",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "NUDOS — Miami Beach",
      url: "https://www.nudos.app",
      telephone: "+1-786-402-5514",
      email: "hi@nudos.app",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1 Washington Ave",
        addressLocality: "Miami Beach",
        addressRegion: "FL",
        postalCode: "33139",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 25.7741,
        longitude: -80.1340,
      },
      parentOrganization: {
        "@type": "Organization",
        name: "NUDOS",
        url: "https://www.nudos.app",
      },
    },
  ]

  return (
    <>
      {locations.map((loc, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(loc) }}
        />
      ))}
    </>
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
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.google.com/search?q=site:nudos.app+{search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ContactPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact NUDOS",
    url: "https://www.nudos.app/#contact",
    description: "Get in touch with NUDOS for AI-powered marine insurance infrastructure.",
    mainEntity: {
      "@type": "Organization",
      name: "NUDOS",
      email: "hi@nudos.app",
      telephone: ["+598-98-576-720", "+1-786-402-5514"],
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "4",
      bestRating: "5",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

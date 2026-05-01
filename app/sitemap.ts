import { MetadataRoute } from "next"
import { glossaryTerms } from "@/content/glossary"

const baseUrl = "https://www.nudos.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = "2026-05-01"

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/glossary`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/cookies`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
  ]

  const servicePages: MetadataRoute.Sitemap = [
    "vessel-inspection",
    "condition-scoring",
    "vessel-valuation",
    "premium-engine",
    "claims-intelligence",
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const blogPosts: MetadataRoute.Sitemap = [
    { slug: "computer-vision-hull-inspection", date: "2025-03-05" },
    { slug: "ai-vessel-condition-scoring", date: "2025-03-05" },
    { slug: "instant-ship-insurance-premiums", date: "2025-03-05" },
  ].map(({ slug, date }) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: date,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const glossaryPages: MetadataRoute.Sitemap = glossaryTerms.map((term) => ({
    url: `${baseUrl}/glossary/${term.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.4,
  }))

  return [...staticPages, ...servicePages, ...blogPosts, ...glossaryPages]
}

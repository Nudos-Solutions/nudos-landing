"use client"

import Link from "next/link"
import { glossaryCrossLinks } from "@/content/glossary"

export default function GlossaryDefinition({
  definition,
  currentSlug,
}: {
  definition: string
  currentSlug: string
}) {
  // Build segments: split definition by matching glossary terms, link them
  const links = glossaryCrossLinks
    .filter((cl) => cl.slug !== currentSlug)
    .sort((a, b) => b.phrase.length - a.phrase.length) // longest first to avoid partial matches

  // Find all matches with positions
  const matches: { start: number; end: number; phrase: string; slug: string }[] = []
  for (const link of links) {
    const regex = new RegExp(`\\b${link.phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "gi")
    let match
    while ((match = regex.exec(definition)) !== null) {
      // Check no overlap with existing matches
      const overlaps = matches.some(
        (m) => match!.index < m.end && match!.index + match![0].length > m.start
      )
      if (!overlaps) {
        matches.push({
          start: match.index,
          end: match.index + match[0].length,
          phrase: match[0],
          slug: link.slug,
        })
      }
    }
  }

  if (matches.length === 0) return <>{definition}</>

  // Sort by position
  matches.sort((a, b) => a.start - b.start)

  // Build elements
  const elements: React.ReactNode[] = []
  let lastEnd = 0

  matches.forEach((m, i) => {
    if (m.start > lastEnd) {
      elements.push(definition.slice(lastEnd, m.start))
    }
    elements.push(
      <Link
        key={i}
        href={`/glossary/${m.slug}`}
        className="text-accent hover:underline"
      >
        {m.phrase}
      </Link>
    )
    lastEnd = m.end
  })

  if (lastEnd < definition.length) {
    elements.push(definition.slice(lastEnd))
  }

  return <>{elements}</>
}

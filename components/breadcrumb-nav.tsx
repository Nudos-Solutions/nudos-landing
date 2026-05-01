import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
}

export default function BreadcrumbNav({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `https://www.nudos.app${item.href}` } : {}),
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-foreground/50 mb-8">
        {items.map((item, index) => (
          <span key={index} className="flex items-center gap-1.5">
            {index > 0 && <ChevronRight className="w-3.5 h-3.5" />}
            {item.href ? (
              <Link href={item.href} className="hover:text-accent transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground/70">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  )
}

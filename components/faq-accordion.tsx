"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { type FaqItem } from "@/content/faq"

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border border-border rounded-xl overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between p-5 text-left hover:bg-card/50 transition-colors"
            aria-expanded={openIndex === i}
          >
            <span className="font-semibold text-foreground pr-4">{item.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-foreground/40 shrink-0 transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === i && (
            <div className="px-5 pb-5">
              <p
                className="text-foreground/60 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

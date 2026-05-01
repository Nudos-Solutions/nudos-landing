"use client"

import { Anchor, Building2, Users, Ship, Briefcase } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { useEffect, useRef, useState } from "react"

const actorIcons = [
  <Building2 key="building" className="w-6 h-6" />,
  <Briefcase key="briefcase" className="w-6 h-6" />,
  <Ship key="ship" className="w-6 h-6" />,
  <Users key="users" className="w-6 h-6" />,
]

export default function Traction() {
  const { t } = useI18n()
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => [...new Set([...prev, index])])
            }
          })
        },
        { threshold: 0.05, rootMargin: "50px 0px" },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section id="traction" className="py-24 px-6 bg-card relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-[120px]" />

      <div className="mx-auto max-w-7xl relative">
        <div className="flex items-center gap-2 mb-6">
          <Anchor className="w-5 h-5 text-accent" strokeWidth={2} />
          <span className="text-sm font-bold uppercase tracking-widest text-foreground/60">
            {t.traction.badge}
          </span>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-foreground mb-6 text-5xl md:text-6xl font-black leading-tight tracking-tighter">
            {t.traction.title}
          </h2>
          <p className="text-foreground/60 text-lg leading-relaxed">
            {t.traction.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.traction.actors.map((actor, index) => (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el
              }}
              className={`bg-background rounded-3xl p-8 border border-border hover:border-accent/30 transition-all duration-500 group ${
                visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors shrink-0">
                  {actorIcons[index]}
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-accent mb-1">
                    {actor.type}
                  </p>
                  <h3 className="text-xl font-bold text-foreground leading-tight">
                    {actor.names}
                  </h3>
                </div>
              </div>
              <p className="text-foreground/60 leading-relaxed">{actor.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

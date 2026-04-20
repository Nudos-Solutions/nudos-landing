"use client"

import { Anchor, Globe, Database, Network } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const visionIcons = [
  <Network key="network" className="w-7 h-7" />,
  <Database key="database" className="w-7 h-7" />,
  <Globe key="globe" className="w-7 h-7" />,
]

export default function Vision() {
  const { t } = useI18n()

  return (
    <section id="vision" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-accent/5 rounded-full blur-[160px]" />

      <div className="mx-auto max-w-7xl relative">
        <div className="flex items-center gap-2 mb-6">
          <Anchor className="w-5 h-5 text-accent" strokeWidth={2} />
          <span className="text-sm font-bold uppercase tracking-widest text-foreground/40">
            {t.vision.badge}
          </span>
        </div>

        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="font-serif text-foreground mb-8 text-5xl md:text-6xl font-black leading-tight tracking-tighter">
            {t.vision.title}
          </h2>
          <p className="text-foreground/60 text-lg leading-relaxed max-w-2xl mx-auto">
            {t.vision.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.vision.pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-10 border border-border hover:border-accent/30 transition-colors text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                {visionIcons[index]}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{pillar.title}</h3>
              <p className="text-foreground/60 leading-relaxed">{pillar.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

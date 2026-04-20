"use client"

import { Layers, Cpu, GitBranch, ShieldCheck, Anchor } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const serviceIcons = [
  <Layers key="layers" className="w-6 h-6" />,
  <Cpu key="cpu" className="w-6 h-6" />,
  <GitBranch key="gitbranch" className="w-6 h-6" />,
  <ShieldCheck key="shieldcheck" className="w-6 h-6" />,
]

export default function Services() {
  const { t } = useI18n()

  return (
    <section id="services" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-2 mb-6">
          <Anchor className="w-5 h-5 text-accent" strokeWidth={2} />
          <span className="text-sm font-bold uppercase tracking-widest text-foreground/40">{t.services.badge}</span>
        </div>

        <h2 className="font-serif text-foreground mb-16 text-4xl md:text-5xl font-bold leading-tight">
          {t.services.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {t.services.items.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 border border-border hover:border-accent/30 transition-colors group"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                {serviceIcons[index]}
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">{service.title}</h3>
              <p className="text-foreground/60 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

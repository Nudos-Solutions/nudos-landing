"use client"

import { ArrowUpRight, Ship } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export default function Stats() {
  const { t } = useI18n()
  const stats = t.stats.items

  return (
    <section className="py-24 px-6 text-background bg-accent overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-background/20 rounded-lg">
                <Ship className="w-5 h-5 text-accent-foreground" strokeWidth={2.3} />
              </div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent-foreground/80">{t.stats.badge}</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-accent-foreground leading-tight">
              {t.stats.title}
            </h2>
          </div>

          <div className="pb-2">
            <p className="text-accent-foreground/70 max-w-sm mb-6 text-lg">
              {t.stats.description}
            </p>

            <a
              href="https://cargo-and-marine-prod-service-852397157506.us-central1.run.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 text-sm font-bold text-accent hover:scale-105 transition-all shadow-xl shadow-black/10"
            >
              {t.stats.cta}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border border-accent-foreground/20 rounded-[2rem] overflow-hidden">
          <div className="flex flex-col border-r border-accent-foreground/20">
            <div className="bg-background/10 p-10 flex-1 flex flex-col justify-between min-h-[300px] border-b border-accent-foreground/20 md:border-b-0">
              <p className="text-xs uppercase tracking-widest font-black text-accent-foreground/60 leading-none">{stats[0].label}</p>
              <p className="text-[7rem] lg:text-[9rem] font-serif font-bold text-accent-foreground tracking-tighter leading-none">{stats[0].value}</p>
            </div>
          </div>

          <div className="flex flex-col border-r border-accent-foreground/20">
            <div className="bg-background/5 p-10 flex-1 flex flex-col justify-between min-h-[250px] border-b border-accent-foreground/20">
              <p className="text-xs uppercase tracking-widest font-black text-accent-foreground/60 leading-none">{stats[3].label}</p>
              <p className="text-7xl lg:text-8xl font-serif font-bold text-accent-foreground tracking-tighter leading-none">{stats[3].value}</p>
            </div>
            <div className="bg-background/15 p-10 flex-1 flex flex-col justify-between min-h-[250px]">
              <p className="text-xs uppercase tracking-widest font-black text-accent-foreground/60 leading-none">{stats[4].label}</p>
              <p className="text-7xl lg:text-8xl font-serif font-bold text-accent-foreground tracking-tighter leading-none">{stats[4].value}</p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="bg-background/20 p-10 flex-1 flex flex-col justify-between min-h-[250px] border-b border-accent-foreground/20">
              <p className="text-xs uppercase tracking-widest font-black text-accent-foreground/60 leading-none">{stats[1].label}</p>
              <p className="text-7xl lg:text-8xl font-serif font-bold text-accent-foreground tracking-tighter leading-none">{stats[1].value}</p>
            </div>
            <div className="bg-background/10 p-10 flex-1 flex flex-col justify-between min-h-[250px]">
              <p className="text-xs uppercase tracking-widest font-black text-accent-foreground/60 leading-none">{stats[2].label}</p>
              <p className="text-7xl lg:text-8xl font-serif font-bold text-accent-foreground tracking-tighter leading-none">{stats[2].value}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

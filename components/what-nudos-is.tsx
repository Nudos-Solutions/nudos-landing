"use client"

import { Anchor, ArrowRight, Database, Ship, FileCheck } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const pillarIcons = [
  <Ship key="ship" className="w-6 h-6" />,
  <Database key="database" className="w-6 h-6" />,
  <FileCheck key="filecheck" className="w-6 h-6" />,
]

export default function WhatNudosIs() {
  const { t } = useI18n()

  return (
    <section id="what-nudos-is" className="py-24 px-6 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-[160px]" />

      <div className="mx-auto max-w-7xl relative">
        <div className="flex items-center gap-2 mb-6">
          <Anchor className="w-5 h-5 text-accent" strokeWidth={2} />
          <span className="text-sm font-bold uppercase tracking-widest text-foreground/60">
            {t.whatNudosIs.badge}
          </span>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-foreground mb-4 text-5xl md:text-6xl font-black leading-tight tracking-tighter">
            {t.whatNudosIs.title} <br />
            <span className="text-accent">{t.whatNudosIs.titleAccent}</span>
          </h2>
          <p className="text-foreground/60 text-lg leading-relaxed max-w-2xl">
            {t.whatNudosIs.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.whatNudosIs.pillars.map((pillar, index) => (
            <div key={index} className="relative">
              <div className="bg-background rounded-3xl p-8 border border-border hover:border-accent/30 transition-colors h-full group">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  {pillarIcons[index]}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{pillar.label}</h3>
                <p className="text-foreground/60 leading-relaxed">{pillar.detail}</p>
              </div>
              {index < 2 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 z-10 w-8 h-8 rounded-full bg-accent/10 items-center justify-center transform -translate-y-1/2">
                  <ArrowRight className="w-4 h-4 text-accent" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

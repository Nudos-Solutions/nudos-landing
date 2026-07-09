"use client"

import { ArrowUpRight, Anchor, Camera, Ship, CheckCircle, AlertTriangle, ScanLine, Gauge, Activity } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { useI18n } from "@/lib/i18n"

const workImages = [
  "https://res.cloudinary.com/drasbgjxe/image/upload/q_auto/f_auto/v1776652502/market-value_tkoy3h.jpg",             // 1 — Recreational (sailboat)
  "https://res.cloudinary.com/drasbgjxe/image/upload/q_auto/f_auto/v1776652502/modern_cargo_ship_side_xokp7n.jpg",   // 2 — Cargo
  "https://res.cloudinary.com/drasbgjxe/image/upload/q_auto/f_auto/v1776652498/cargo-tanker-stage_ago2hm.jpg",       // 3 — Cargo (tanker) — Decide
  "https://res.cloudinary.com/drasbgjxe/image/upload/q_auto/f_auto/v1776652503/recreational-motorboat_lxd1ym.jpg",   // 4 — Recreational (motorboat) — Value
  "https://res.cloudinary.com/drasbgjxe/image/upload/q_auto/f_auto/v1776652503/pwc-watercraft_bwz1dj.jpg",           // 5 — Recreational (PWC)
]

// Per-image analysis overlays: top-left, top-right, bottom-left
const workOverlays = [
  // Stage 01 — Capture
  {
    tl: { icon: <ScanLine className="w-4 h-4 text-cyan-400" />, label: "Data captured", value: "7 zones", color: "border-cyan-400/40" },
    tr: { icon: <AlertTriangle className="w-4 h-4 text-amber-400" />, label: "Vessel ID", value: "Confirmed", color: "border-amber-400/40" },
    bl: { icon: <Activity className="w-4 h-4 text-emerald-400" />, label: "Risk factors", value: "5 flagged", color: "border-emerald-400/40" },
  },
  // Stage 02 — Understand
  {
    tl: { icon: <CheckCircle className="w-4 h-4 text-emerald-400" />, label: "Condition score", value: "8.4 / 10", color: "border-emerald-400/40" },
    tr: { icon: <Ship className="w-4 h-4 text-cyan-400" />, label: "Standards checked", value: "27+", color: "border-cyan-400/40" },
    bl: { icon: <Gauge className="w-4 h-4 text-accent" />, label: "Compliance", value: "SOLAS · MARPOL", color: "border-accent/40" },
  },
  // Stage 03 — Decide
  {
    tl: { icon: <CheckCircle className="w-4 h-4 text-emerald-400" />, label: "Premium output", value: "$4,200 / yr", color: "border-emerald-400/40" },
    tr: { icon: <Ship className="w-4 h-4 text-cyan-400" />, label: "Variables weighted", value: "12", color: "border-cyan-400/40" },
    bl: { icon: <Gauge className="w-4 h-4 text-accent" />, label: "Audit trail", value: "Complete", color: "border-accent/40" },
  },
  // Stage 04 — Value (Recreational)
  {
    tl: { icon: <CheckCircle className="w-4 h-4 text-emerald-400" />, label: "Market value", value: "$284,000", color: "border-emerald-400/40" },
    tr: { icon: <Ship className="w-4 h-4 text-cyan-400" />, label: "Hull score", value: "9.1 / 10", color: "border-cyan-400/40" },
    bl: { icon: <Gauge className="w-4 h-4 text-accent" />, label: "Comparables", value: "12 matched", color: "border-accent/40" },
  },
  // Stage 05 — Monitor
  {
    tl: { icon: <Activity className="w-4 h-4 text-cyan-400" />, label: "Monitoring", value: "Active", color: "border-cyan-400/40" },
    tr: { icon: <AlertTriangle className="w-4 h-4 text-amber-400" />, label: "Drift detected", value: "0", color: "border-amber-400/40" },
    bl: { icon: <CheckCircle className="w-4 h-4 text-emerald-400" />, label: "Claims baseline", value: "Stored", color: "border-emerald-400/40" },
  },
]

export default function SelectedWorks() {
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
        { threshold: 0.1, rootMargin: "50px 0px" },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section id="works" className="py-16 lg:py-24 px-3 md:px-6 bg-card relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-[120px]" />

      <div className="mx-auto max-w-7xl relative">
        <div className="flex items-center gap-2 mb-6">
          <Anchor className="w-5 h-5 text-accent" strokeWidth={2} />
          <span className="text-sm font-bold uppercase tracking-widest text-foreground/60">{t.works.badge}</span>
        </div>

        <h2 className="font-serif text-foreground mb-12 lg:mb-16 text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tighter">
          {t.works.title} <br /><span className="text-accent">{t.works.titleAccent}</span>
        </h2>

        <div className="grid gap-10 lg:gap-12">
          {t.works.items.map((work, index) => {
            const overlay = workOverlays[index]
            return (
              <div key={index} className="group block outline-none">
                <div
                  ref={(el) => {
                    itemRefs.current[index] = el
                  }}
                  className={`flex flex-col lg:flex-row gap-6 lg:gap-8 lg:items-stretch transition-all duration-700 ease-out ${
                    visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                >
                  <div className="w-full lg:w-1/2 relative rounded-2xl lg:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/10 aspect-video lg:aspect-auto min-h-[220px] lg:min-h-[300px]">
                    <Image
                      src={workImages[index]}
                      alt={`${work.title} — AI vessel analysis`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />

                    {/* Scanning line */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-[scan_4s_ease-in-out_infinite]" />
                    </div>

                    {/* Static connecting line between top overlays */}
                    {overlay && (
                      <div className="absolute top-10 left-10 right-10 h-px bg-cyan-400/30 hidden lg:block pointer-events-none" />
                    )}

                    {/* Top-left tag */}
                    {overlay && (
                      <div className={`absolute top-4 left-4 lg:top-5 lg:left-5 bg-black/60 backdrop-blur-md border ${overlay.tl.color} rounded-xl px-2.5 py-1.5 lg:px-3 lg:py-2 items-center gap-2 hidden md:flex`}>
                        {overlay.tl.icon}
                        <div>
                          <p className="text-[8px] lg:text-[9px] font-bold uppercase tracking-widest text-white/50 leading-none mb-0.5">{overlay.tl.label}</p>
                          <p className="text-[10px] lg:text-xs font-bold text-white">{overlay.tl.value}</p>
                        </div>
                      </div>
                    )}

                    {/* Top-right tag */}
                    {overlay && (
                      <div className={`absolute top-4 right-4 lg:top-5 lg:right-5 bg-black/60 backdrop-blur-md border ${overlay.tr.color} rounded-xl px-2.5 py-1.5 lg:px-3 lg:py-2 items-center gap-2 hidden lg:flex`}>
                        {overlay.tr.icon}
                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-widest text-white/50 leading-none mb-0.5">{overlay.tr.label}</p>
                          <p className="text-xs font-bold text-white">{overlay.tr.value}</p>
                        </div>
                      </div>
                    )}

                    {/* Bottom-left tag */}
                    {overlay && (
                      <div className={`absolute bottom-4 left-4 lg:bottom-5 lg:left-5 bg-black/60 backdrop-blur-md border ${overlay.bl.color} rounded-xl px-2.5 py-1.5 lg:px-3 lg:py-2 flex items-center gap-2`}>
                        {overlay.bl.icon}
                        <div>
                          <p className="text-[8px] lg:text-[9px] font-bold uppercase tracking-widest text-white/50 leading-none mb-0.5">{overlay.bl.label}</p>
                          <p className="text-[10px] lg:text-xs font-bold text-white">{overlay.bl.value}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="w-full lg:w-1/2 flex flex-col justify-center p-4 md:p-5 lg:p-10 bg-background/40 backdrop-blur-sm rounded-xl md:rounded-2xl lg:rounded-[2.5rem] border border-border/50 group-hover:border-accent/30 transition-colors min-w-0 overflow-hidden">
                    <div className="flex flex-wrap gap-2 mb-4 lg:mb-6">
                      {work.features.map((feature, i) => (
                        <span key={i} className="text-[9px] lg:text-[10px] font-black uppercase tracking-widest px-2.5 py-1 lg:px-3 bg-accent/10 text-accent rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col mb-3 lg:mb-4">
                      {(work as any).eyebrow && (
                        <span className="block text-xs lg:text-sm font-semibold text-accent mb-2 tracking-wide uppercase">
                          {(work as any).eyebrow}
                        </span>
                      )}
                      
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground group-hover:text-accent transition-colors leading-tight">
                          {work.title}
                        </h3>
                        <div className="p-2.5 lg:p-3 rounded-full bg-foreground text-background group-hover:bg-accent group-hover:text-accent-foreground transition-all shrink-0 hidden md:flex">
                          <ArrowUpRight className="h-4 w-4 lg:h-5 lg:w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>

                    <p className="mt-3 lg:mt-6 text-foreground/60 text-sm md:text-base lg:text-lg leading-relaxed">{work.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


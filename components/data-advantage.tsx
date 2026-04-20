"use client"

import { Anchor, TrendingUp, Zap } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { useEffect, useRef, useState } from "react"

export default function DataAdvantage() {
  const { t } = useI18n()
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true)
        })
      },
      { threshold: 0.05, rootMargin: "50px 0px" },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="data-advantage"
      className="py-24 px-6 text-accent-foreground bg-accent overflow-hidden relative"
    >
      {/* Subtle animated background pulse */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.06) 0%, transparent 60%)",
          animation: "oceanBreath 6s ease-in-out infinite",
        }}
      />

      <div className="mx-auto max-w-7xl relative">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 bg-background/20 rounded-lg">
            <TrendingUp className="w-5 h-5 text-accent-foreground" strokeWidth={2.3} />
          </div>
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent-foreground/80">
            {t.dataAdvantage.badge}
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-accent-foreground leading-tight mb-8">
              {t.dataAdvantage.title}
            </h2>
            <p className="text-accent-foreground/75 text-lg leading-relaxed mb-8 max-w-xl">
              {t.dataAdvantage.description}
            </p>
            <p className="text-accent-foreground font-bold text-xl italic">
              {t.dataAdvantage.anchor}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {t.dataAdvantage.metrics.map((metric, index) => (
              <div
                key={index}
                className={`bg-background/10 backdrop-blur-sm rounded-2xl p-6 border border-accent-foreground/15 transition-all duration-500 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <p className="text-3xl lg:text-4xl font-serif font-bold text-accent-foreground mb-2">
                  {metric.value}
                </p>
                <p className="text-xs uppercase tracking-widest font-bold text-accent-foreground/60 leading-snug">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { ArrowUpRight, Anchor, AlertTriangle, CheckCircle, Activity, Cpu } from "lucide-react"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import { useI18n } from "@/lib/i18n"

// Detection markers mapped to actual visible damage spots on the ship image
// x/y = % of viewport, threshold = scroll progress (p) when scan line reaches that y
// scanLineTop = 4 + p * 88  →  threshold = (y - 4) / 88
const DETECTIONS = [
  {
    id: 1,
    x: 55,
    y: 35,
    label: "Structural Zone A",
    detail: "Risk factor: Low",
    color: "cyan" as const,
    threshold: 0.35,
  },
  {
    id: 2,
    x: 36,
    y: 60,
    label: "Condition Score",
    detail: "Zone integrity: 94.2%",
    color: "cyan" as const,
    threshold: 0.60,
  },
  {
    id: 3,
    x: 50,
    y: 75,
    label: "Hull Assessment",
    detail: "Insurable condition: Yes",
    color: "cyan" as const,
    threshold: 0.75,
  },
  {
    id: 4,
    x: 80,
    y: 82,
    label: "Compliance Check",
    detail: "SOLAS · MARPOL: Pass",
    color: "cyan" as const,
    threshold: 0.82,
  },
  {
    id: 5,
    x: 60,
    y: 50,
    label: "Valuation Input",
    detail: "Market ref: Captured",
    color: "amber" as const,
    threshold: 0.50,
  },
]

const COLOR_MAP = {
  red: {
    ring: "rgba(239,68,68,0.7)",
    dot: "#ef4444",
    border: "rgba(239,68,68,0.5)",
    text: "text-red-400",
    label: "text-red-300/70",
    glow: "rgba(239,68,68,0.3)",
  },
  amber: {
    ring: "rgba(251,191,36,0.7)",
    dot: "#fbbf24",
    border: "rgba(251,191,36,0.5)",
    text: "text-amber-400",
    label: "text-amber-300/70",
    glow: "rgba(251,191,36,0.3)",
  },
  cyan: {
    ring: "rgba(34,211,238,0.7)",
    dot: "#22d3ee",
    border: "rgba(34,211,238,0.5)",
    text: "text-cyan-400",
    label: "text-cyan-300/70",
    glow: "rgba(34,211,238,0.25)",
  },
}

export default function Hero() {
  const { t } = useI18n()
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mounted, setMounted] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 60)

    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const sectionH = sectionRef.current.offsetHeight
      const winH = window.innerHeight
      const scrollable = sectionH - winH
      const scrolled = -rect.top
      setScrollProgress(Math.max(0, Math.min(1, scrolled / scrollable)))
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const p = scrollProgress
  const scanPct = Math.round(p * 100)
  const scanLineTop = 4 + p * 88

  const analysisStarted = p > 0.04
  const hullVisible = p > 0.18
  const gradeVisible = p > 0.38
  const complete = p > 0.92

  const hullValue = complete
    ? "96% — Insurable"
    : hullVisible
    ? `${Math.round(75 + p * 21)}% — Assessing…`
    : "Awaiting data…"

  const gradeValue = complete ? "Ready — Bind" : gradeVisible ? "Generating output…" : "Pending…"
  const [scrollHeight, setScrollHeight] = useState("300vh")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const updateHeight = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      setScrollHeight(mobile ? "auto" : "300vh")
    }
    updateHeight()
    window.addEventListener("resize", updateHeight)
    return () => window.removeEventListener("resize", updateHeight)
  }, [])

  return (
    <section ref={sectionRef} id="home" className="relative" style={{ height: scrollHeight }}>

      {/* Sticky viewport (only on desktop) */}
      <div className={`${isMobile ? 'relative h-screen' : 'sticky top-0 h-screen'} overflow-hidden`}>

        {/* ── Full-screen ship image ── */}
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/drasbgjxe/image/upload/q_auto/f_auto/v1776652499/clean_sailboat_hero_xvq7ba.jpg"
            alt="AI Ship Hull Analysis and Maritime Insurance Platform"
            fill
            sizes="100vw"
            className="object-cover object-[center_65%] md:object-[center_70%]"
            style={{
              filter: `brightness(${0.62 + p * 0.22}) contrast(${0.92 + p * 0.10}) saturate(${0.9 + p * 0.25})`,
            }}
            priority
          />
          {/* Base dark vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,4,24,0.88) 0%, rgba(0,10,50,0.50) 55%, rgba(0,4,24,0.70) 100%)",
            }}
          />
          {/* Blue tint that builds with scroll */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, rgba(31,106,255,0.06), rgba(31,106,255,0.20))",
              opacity: Math.min(p * 1.8, 1),
            }}
          />
          {/* Emerald success overlay on complete */}
          {complete && (
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(ellipse at center, rgba(16,185,129,0.10) 0%, transparent 60%)",
                animation: "oceanBreath 3s ease-in-out infinite",
              }}
            />
          )}
        </div>

        {/* ── Analysis grid ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: Math.min(p * 3, 0.14),
            backgroundImage: `
              linear-gradient(rgba(31,106,255,0.55) 1px, transparent 1px),
              linear-gradient(90deg, rgba(31,106,255,0.55) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
            transition: "opacity 0.2s",
          }}
        />

        {/* ── Ambient glow ── */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div
            className="absolute left-[-8%] top-[12%] w-[50%] h-[50%] rounded-full blur-[140px]"
            style={{
              background: "radial-gradient(circle, rgba(31,106,255,0.14) 0%, transparent 70%)",
              animation: "oceanBreath 6s ease-in-out infinite",
            }}
          />
        </div>

        {/* ── Scroll-driven scan line ── */}
        <div
          className="absolute left-0 right-0 h-[2px] pointer-events-none z-10"
          style={{
            top: `${scanLineTop}%`,
            background:
              "linear-gradient(to right, transparent, rgba(31,106,255,0.85) 22%, rgba(100,220,255,1) 50%, rgba(31,106,255,0.85) 78%, transparent)",
            filter: "blur(0.8px)",
            boxShadow: "0 0 18px 3px rgba(100,220,255,0.45)",
            opacity: analysisStarted && !complete ? Math.min(p * 10, 1) : 0,
            transition: "opacity 0.4s",
          }}
        />
        {/* Scan glow halo */}
        <div
          className="absolute left-0 right-0 pointer-events-none z-10"
          style={{
            top: `calc(${scanLineTop}% - 40px)`,
            height: "80px",
            background: "linear-gradient(to bottom, transparent, rgba(31,106,255,0.07), transparent)",
            opacity: analysisStarted && !complete ? 1 : 0,
            transition: "opacity 0.4s",
          }}
        />

        {/* ══════════════ Detection circles (hidden on mobile) ══════════════ */}
        {DETECTIONS.map((d) => {
          const c = COLOR_MAP[d.color]
          const visible = p >= d.threshold
          // slightly delay label after the circle
          const labelVisible = p >= d.threshold + 0.03
          // flip label to left side if marker is in right half
          const labelLeft = d.x > 58

          return (
            <div
              key={d.id}
              className="absolute z-20 pointer-events-none hidden md:block"
              style={{
                left: `${d.x}%`,
                top: `${d.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Outer pulsing ring */}
              <div
                className="absolute rounded-full"
                style={{
                  width: 56,
                  height: 56,
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  border: `1.5px solid ${c.ring}`,
                  boxShadow: `0 0 12px ${c.glow}, inset 0 0 8px ${c.glow}`,
                  opacity: visible ? 1 : 0,
                  scale: visible ? "1" : "0.4",
                  transition: "opacity 0.4s ease, scale 0.4s cubic-bezier(0.34,1.56,0.64,1)",
                  animation: visible ? "ringPulse 2s ease-in-out infinite" : "none",
                }}
              />
              {/* Second larger ring */}
              <div
                className="absolute rounded-full"
                style={{
                  width: 76,
                  height: 76,
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  border: `1px solid ${c.ring.replace("0.7", "0.3")}`,
                  opacity: visible ? 1 : 0,
                  scale: visible ? "1" : "0.2",
                  transition: "opacity 0.5s ease 0.1s, scale 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.1s",
                  animation: visible ? "ringPulseOuter 2s ease-in-out 0.3s infinite" : "none",
                }}
              />
              {/* Center dot */}
              <div
                className="relative rounded-full"
                style={{
                  width: 10,
                  height: 10,
                  background: c.dot,
                  boxShadow: `0 0 8px ${c.glow}`,
                  opacity: visible ? 1 : 0,
                  scale: visible ? "1" : "0",
                  transition: "opacity 0.3s ease, scale 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                }}
              />

              {/* Connector line + label */}
              <div
                className="absolute top-1/2 pointer-events-none"
                style={{
                  [labelLeft ? "right" : "left"]: "50%",
                  transform: "translateY(-50%)",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: labelLeft ? "row-reverse" : "row",
                  gap: 0,
                  opacity: labelVisible ? 1 : 0,
                  transition: "opacity 0.4s ease",
                }}
              >
                {/* Line */}
                <div
                  style={{
                    width: labelVisible ? 28 : 0,
                    height: 1,
                    background: c.ring,
                    transition: "width 0.4s ease",
                    flexShrink: 0,
                  }}
                />
                {/* Label card */}
                <div
                  className="bg-black/80 backdrop-blur-md rounded-lg px-3 py-2 whitespace-nowrap"
                  style={{
                    border: `1px solid ${c.border}`,
                    transform: labelVisible ? "translateX(0)" : `translateX(${labelLeft ? 10 : -10}px)`,
                    transition: "transform 0.4s ease",
                  }}
                >
                  <p className={`text-[10px] font-bold uppercase tracking-widest leading-none mb-0.5 ${c.text}`}>
                    {d.label}
                  </p>
                  <p className="text-[10px] text-white/60">{d.detail}</p>
                </div>
              </div>
            </div>
          )
        })}

        {/* ── Hero text ── */}
        <div className="relative z-20 h-full flex flex-col justify-center pt-20 md:pt-0 px-6 md:px-16 lg:px-24">
          <div className="max-w-2xl">
            {/* Badge */}
            <div
              className="flex items-center gap-2 mb-5 text-cyan-400"
              style={{
                opacity: mounted ? 1 : 0,
                animation: mounted ? "fadeInLeft 0.7s ease-out 0ms both" : "none",
              }}
            >
              <Anchor className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">{t.hero.badge}</span>
            </div>

            {/* Title */}
            <h1
              className="leading-[1.08] font-sans font-black tracking-tight text-white text-4xl md:text-6xl lg:text-7xl"
              style={{
                animation: mounted ? "fadeInUp 0.9s cubic-bezier(0.22,1,0.36,1) 120ms both" : "none",
                opacity: mounted ? undefined : 0,
              }}
            >
              {t.hero.titleStart}
              <span
                className="text-cyan-400 underline decoration-cyan-400/30 underline-offset-8 inline-block"
                style={{
                  animation: mounted ? "fadeInUp 0.9s cubic-bezier(0.22,1,0.36,1) 280ms both" : "none",
                  opacity: mounted ? undefined : 0,
                }}
              >
                {t.hero.titleHighlight}
              </span>
            </h1>

            {/* Description */}
            <p
              className="mt-4 md:mt-6 text-white/65 text-base md:text-lg leading-relaxed max-w-xl"
              style={{
                animation: mounted ? "fadeInUp 0.8s ease-out 360ms both" : "none",
                opacity: mounted ? undefined : 0,
              }}
            >
              {t.hero.description}
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3 md:gap-4 mt-6 md:mt-8"
              style={{
                animation: mounted ? "fadeInUp 0.7s ease-out 480ms both" : "none",
                opacity: mounted ? undefined : 0,
              }}
            >
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-white hover:brightness-110 hover:scale-105 transition-all shadow-lg shadow-accent/30"
              >
                {t.hero.cta1}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white hover:bg-white/20 transition-all"
              >
                {t.hero.cta2}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* ══════════════ Status badges ══════════════ */}

        {/* Hull Integrity — top left */}
        <div
          className="absolute top-24 left-6 bg-black/65 backdrop-blur-md border rounded-xl px-4 py-3 hidden md:flex items-center gap-3 z-30"
          style={{
            borderColor: complete ? "rgba(16,185,129,0.45)" : "rgba(34,211,238,0.40)",
            opacity: hullVisible ? 1 : 0,
            transform: hullVisible ? "translateX(0)" : "translateX(-28px)",
            transition: "opacity 0.6s ease, transform 0.6s ease, border-color 0.5s ease",
          }}
        >
          <CheckCircle className={`w-4 h-4 shrink-0 ${complete ? "text-emerald-400" : "text-cyan-400"}`} />
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-300/70 leading-none mb-1">
              Asset Condition
            </p>
            <p className="text-sm font-bold text-white transition-all duration-300">{hullValue}</p>
          </div>
        </div>

        {/* Structural Grade — top right */}
        <div
          className="absolute top-24 right-6 bg-black/65 backdrop-blur-md border border-emerald-400/40 rounded-xl px-4 py-3 hidden md:flex items-center gap-3 z-30"
          style={{
            opacity: gradeVisible ? 1 : 0,
            transform: gradeVisible ? "translateX(0)" : "translateX(28px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <Activity
            className={`w-4 h-4 shrink-0 ${complete ? "text-emerald-400" : "text-emerald-400 animate-pulse"}`}
          />
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-300/70 leading-none mb-1">
              Underwriting Output
            </p>
            <p className="text-sm font-bold text-white transition-all duration-300">{gradeValue}</p>
          </div>
        </div>

        {/* Defects count — appears once markers start showing */}
        <div
          className="absolute top-24 left-1/2 -translate-x-1/2 bg-black/65 backdrop-blur-md border border-red-400/40 rounded-xl px-4 py-3 hidden lg:flex items-center gap-3 z-30"
          style={{
            opacity: p > 0.32 ? Math.min((p - 0.32) * 8, 1) : 0,
            transform: p > 0.32 ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(-12px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 animate-pulse" />
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-red-300/70 leading-none mb-1">
              Risk Factors
            </p>
            <p className="text-sm font-bold text-white">
              {DETECTIONS.filter((d) => p >= d.threshold).length} / {DETECTIONS.length} zones
            </p>
          </div>
        </div>

        {/* AI Scan progress — bottom left */}
        <div
          className="absolute bottom-8 left-6 bg-black/65 backdrop-blur-md border border-accent/40 rounded-xl px-4 py-3 hidden lg:flex items-center gap-3 z-30"
          style={{
            opacity: analysisStarted ? 1 : 0,
            transform: analysisStarted ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          <Cpu
            className={`w-4 h-4 shrink-0 ${!complete ? "text-accent animate-spin" : "text-emerald-400"}`}
            style={{ animationDuration: "2.5s" }}
          />
          <div className="min-w-[150px]">
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-accent/70 leading-none">
                {complete ? "Decision Ready" : "Processing"}
              </p>
              <p className="text-[10px] font-bold text-white/70">{scanPct}%</p>
            </div>
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${scanPct}%`,
                  background: complete
                    ? "linear-gradient(to right, #10b981, #34d399)"
                    : "linear-gradient(to right, #1f6aff, #64dcff)",
                  transition: "width 0.12s linear, background 0.6s ease",
                }}
              />
            </div>
          </div>
        </div>

        {/* Live status chip — bottom right */}
        <div
          className="absolute bottom-8 right-6 bg-black/70 backdrop-blur-md text-white rounded-2xl p-4 z-30 hidden md:flex items-center gap-4 shadow-xl"
          style={{
            border: complete ? "1px solid rgba(16,185,129,0.50)" : "1px solid rgba(31,106,255,0.35)",
            opacity: mounted ? 1 : 0,
            animation: mounted ? "fadeInUp 0.6s ease-out 800ms both" : "none",
            transition: "border-color 0.6s ease",
          }}
        >
          <div
            className="relative w-10 h-10 rounded-xl flex items-center justify-center shadow-inner"
            style={{
              background: complete ? "#10b981" : "#1f6aff",
              transition: "background 0.6s ease",
            }}
          >
            {complete ? (
              <CheckCircle className="w-5 h-5 text-white" />
            ) : (
              <>
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="absolute inset-0 rounded-xl animate-ping opacity-20 bg-accent" />
              </>
            )}
          </div>
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-widest text-white/50 leading-none mb-1">
              {complete ? "Underwriting Complete" : t.hero.liveBadgeLabel}
            </span>
            <span className="text-sm font-semibold">
              {complete ? "Premium Generated — Ready to Bind" : t.hero.liveBadgeValue}
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}

"use client"

import { ArrowUpRight, Anchor, EyeOff, Scale, FileX, Clock, ShieldAlert, DollarSign, Database, AlertTriangle, Cog } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useI18n } from "@/lib/i18n"

const serviceIcons = [
  <EyeOff key="eyeoff" className="w-5 h-5" />,
  <Scale key="scale" className="w-5 h-5" />,
  <FileX key="filex" className="w-5 h-5" />,
  <Clock key="clock" className="w-5 h-5" />,
  <ShieldAlert key="shieldalert" className="w-5 h-5" />,
  <DollarSign key="dollar" className="w-5 h-5" />,
  <AlertTriangle key="alert" className="w-5 h-5" />,
  <Database key="database" className="w-5 h-5" />,
  <Cog key="cog" className="w-5 h-5" />,
]

export default function About() {
  const { t } = useI18n()

  return (
    <section id="about" className="py-16 px-6 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Anchor className="w-5 h-5 text-accent" strokeWidth={2} />
              <span className="text-sm font-bold uppercase tracking-widest text-foreground/40">{t.about.badge}</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-serif font-black text-foreground leading-tight tracking-tighter text-balance">
              {t.about.title}
            </h2>

            <p className="mt-6 text-foreground/70 text-lg leading-relaxed whitespace-pre-line">
              {t.about.description}
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {t.about.services.map((service, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-foreground/80">
                  <span className="text-accent">{serviceIcons[index]}</span>
                  {service}
                </div>
              ))}
            </div>

            <Link
              href="#works"
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors group"
            >
              {t.about.cta}
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="bg-card rounded-3xl border border-border flex flex-col h-full justify-between overflow-hidden">
            {/* Vessel image at top of card */}
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src="https://res.cloudinary.com/drasbgjxe/image/upload/v1776652502/market-value_tkoy3h.jpg"
                alt="Vessel underwriting — the unseen risk"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card" />
            </div>

            <div className="p-8 pt-4 flex flex-col flex-1">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center mb-6 -mt-10 relative z-10 shadow-lg">
                  <EyeOff className="h-6 w-6 text-accent-foreground" />
                </div>

                <h3 className="text-2xl font-semibold text-foreground mb-4">{t.about.cardTitle}</h3>

                <p className="text-foreground/70 leading-relaxed mb-6">
                  {t.about.cardDescription}
                </p>
              </div>

              {/* Stats grid */}
              {(t.about as any).cardStats && (
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {(t.about as any).cardStats.map((stat: { value: string; label: string }, index: number) => (
                    <div key={index} className="text-center">
                      <p className="text-2xl font-serif font-bold text-accent leading-none mb-1">
                        {stat.value}
                      </p>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-foreground/50 leading-tight">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <div className="pt-6 border-t border-border mt-auto">
                <div className="flex items-center gap-4 text-sm font-medium">
                  <span className="text-foreground/60">{t.about.cardFooter}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

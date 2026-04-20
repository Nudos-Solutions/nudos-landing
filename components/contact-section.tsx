"use client"

import type React from "react"
import { useState } from "react"
import { ArrowUpRight, Send, Camera, CheckCircle, ScanLine, AlertTriangle, Gauge } from "lucide-react"
import Image from "next/image"
import { useI18n } from "@/lib/i18n"

export default function ContactSection() {
  const { t } = useI18n()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", message: "" })
      }
    } catch {
      // Silently handle error
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-2 mb-4">
          <Send className="w-5 h-5 text-accent" strokeWidth={2} />
          <span className="text-sm font-medium text-foreground/70">{t.contact.badge}</span>
        </div>

        <p className="text-foreground/70 max-w-xl mb-12 text-lg">
          {t.contact.description}
        </p>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="relative overflow-hidden rounded-3xl min-h-[400px]">
            <Image
              src="https://res.cloudinary.com/drasbgjxe/image/upload/v1776652504/yacht-aerial_famckg.jpg"
              alt="Aerial yacht view — Vessel Insurance"
              fill
              className="object-cover object-center rotate-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-accent/30 to-accent/40" />

            {/* Scanning line */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent animate-[scan_4s_ease-in-out_infinite]" />
            </div>

            {/* Top tag */}
            <div className="absolute top-6 left-6 right-6 bg-black/50 backdrop-blur-md border border-cyan-400/30 rounded-xl px-4 py-3 flex items-center gap-3">
              <ScanLine className="w-4 h-4 text-cyan-400 shrink-0 animate-pulse" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-400/70 leading-none mb-1">Data Pipeline</p>
                <p className="text-sm font-bold text-white">Processing — Stage 2/3</p>
              </div>
            </div>

            {/* Bottom overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex gap-3">
              <div className="flex-1 bg-black/50 backdrop-blur-md border border-emerald-400/30 rounded-xl px-4 py-3 flex items-center gap-3">
                <Gauge className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-400/70 leading-none mb-1">Risk Output</p>
                  <p className="text-sm font-bold text-white">Generating…</p>
                </div>
              </div>
              <div className="flex-1 bg-black/50 backdrop-blur-md border border-accent/30 rounded-xl px-4 py-3 flex items-center gap-3">
                <Camera className="w-4 h-4 text-accent shrink-0" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-accent/70 leading-none mb-1">Decision</p>
                  <p className="text-sm font-bold text-white">Pending…</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-10 rounded-3xl border border-border">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-12">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-3xl font-serif text-foreground">{t.contact.successTitle}</h3>
                <p className="text-foreground/70 max-w-sm">{t.contact.successMessage}</p>
              </div>
            ) : (
              <>
                <h3 className="text-3xl font-serif text-foreground mb-4">{t.contact.formTitle}</h3>
                <p className="text-foreground/70 mb-8">{t.contact.formDescription}</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-foreground/50 mb-2">
                      {t.contact.name}
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-accent transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-foreground/50 mb-2">
                      {t.contact.email}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-accent transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-foreground/50 mb-2">
                      {t.contact.message}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-accent transition-colors"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-semibold text-accent-foreground hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-60"
                  >
                    {loading ? "..." : t.contact.submit}
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

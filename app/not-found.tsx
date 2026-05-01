import Link from "next/link"
import { ArrowLeft, Anchor } from "lucide-react"

export const metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist. Return to NUDOS — AI-powered marine insurance infrastructure.",
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <Anchor className="w-12 h-12 text-accent mx-auto mb-6" strokeWidth={1.5} />
        <h1 className="text-6xl font-serif font-black text-foreground mb-4">404</h1>
        <p className="text-xl text-foreground/60 mb-8">
          This page drifted off course. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:brightness-110 transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:border-accent hover:text-accent transition-colors"
          >
            Read Blog
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          <Link href="/guide" className="text-xs text-foreground/40 hover:text-accent transition-colors">Guide</Link>
          <span className="text-foreground/20">·</span>
          <Link href="/services/vessel-inspection" className="text-xs text-foreground/40 hover:text-accent transition-colors">Vessel Inspection</Link>
          <span className="text-foreground/20">·</span>
          <Link href="/services/condition-scoring" className="text-xs text-foreground/40 hover:text-accent transition-colors">Condition Scoring</Link>
          <span className="text-foreground/20">·</span>
          <Link href="/services/premium-engine" className="text-xs text-foreground/40 hover:text-accent transition-colors">Premium Engine</Link>
          <span className="text-foreground/20">·</span>
          <Link href="/faq" className="text-xs text-foreground/40 hover:text-accent transition-colors">FAQ</Link>
          <span className="text-foreground/20">·</span>
          <Link href="/glossary" className="text-xs text-foreground/40 hover:text-accent transition-colors">Glossary</Link>
          <span className="text-foreground/20">·</span>
          <Link href="/about" className="text-xs text-foreground/40 hover:text-accent transition-colors">About</Link>
        </div>
      </div>
    </main>
  )
}

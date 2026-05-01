"use client"

import Link from "next/link"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import { services, type ServicePage } from "@/content/services"
import { blogPosts } from "@/content/blog"

export default function ServicePageLayout({ service }: { service: ServicePage }) {
  const relatedServices = services.filter((s) => service.relatedServices.includes(s.slug))
  const relatedArticles = blogPosts.filter((p) => service.relatedBlogSlugs.includes(p.slug))

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-foreground leading-tight tracking-tighter mb-6">
            {service.h1}
          </h1>
          <p className="text-foreground/60 text-lg md:text-xl leading-relaxed max-w-3xl">
            {service.subtitle}
          </p>
          <div className="mt-8">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground hover:brightness-110 transition-all"
            >
              Talk to Us
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-16 px-6 bg-card">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-10">
            The problem
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {service.problems.map((problem, i) => (
              <div key={i} className="bg-background rounded-2xl p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">{problem.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-10">
            How it works
          </h2>
          <div className="space-y-8">
            {service.steps.map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-sm shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 px-6 bg-card">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-10">
            Key capabilities
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {service.capabilities.map((cap, i) => (
              <div key={i} className="bg-background rounded-xl p-5 border border-border">
                <h3 className="text-sm font-semibold text-foreground mb-1">{cap.title}</h3>
                <p className="text-foreground/50 text-xs leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      {(relatedServices.length > 0 || relatedArticles.length > 0) && (
        <section className="py-16 px-6">
          <div className="mx-auto max-w-4xl">
            {relatedServices.length > 0 && (
              <div className="mb-12">
                <h2 className="text-xl font-semibold text-foreground mb-6">Related services</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {relatedServices.map((rs) => (
                    <Link
                      key={rs.slug}
                      href={`/services/${rs.slug}`}
                      className="flex items-center justify-between bg-card rounded-xl p-5 border border-border hover:border-accent/30 transition-colors group"
                    >
                      <div>
                        <p className="font-semibold text-foreground group-hover:text-accent transition-colors">
                          {rs.title}
                        </p>
                        <p className="text-foreground/50 text-sm mt-1">{rs.metaDescription.slice(0, 80)}...</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-foreground/30 group-hover:text-accent transition-colors shrink-0 ml-4" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {relatedArticles.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-6">Related articles</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {relatedArticles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/blog/${article.slug}`}
                      className="flex items-center justify-between bg-card rounded-xl p-5 border border-border hover:border-accent/30 transition-colors group"
                    >
                      <div>
                        <p className="font-semibold text-foreground group-hover:text-accent transition-colors">
                          {article.title}
                        </p>
                        <p className="text-foreground/50 text-sm mt-1">{article.readTime}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-foreground/30 group-hover:text-accent transition-colors shrink-0 ml-4" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* FAQ */}
      {service.faqs.length > 0 && (
        <section className="py-16 px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-10">
              Frequently asked questions
            </h2>
            <dl className="space-y-6">
              {service.faqs.map((faq, i) => (
                <div key={i} className="bg-card rounded-xl p-6 border border-border">
                  <dt className="text-lg font-semibold text-foreground mb-2">{faq.question}</dt>
                  <dd className="text-foreground/60 leading-relaxed">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-6 bg-card">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
            Ready to see it in action?
          </h2>
          <p className="text-foreground/60 mb-8 max-w-xl mx-auto">
            Whether you are an insurer, broker, or marina operator — Nudos plugs into your workflow.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground hover:brightness-110 transition-all"
          >
            Talk to Us
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

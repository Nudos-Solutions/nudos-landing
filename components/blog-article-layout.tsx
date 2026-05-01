"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { type BlogPost, blogPosts } from "@/content/blog"

export default function BlogArticleLayout({ post }: { post: BlogPost }) {
  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <div className="min-h-screen bg-background">
      {/* Header image */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 to-background" />
      </div>

      {/* Article */}
      <article className="px-6 -mt-20 relative">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-foreground/50">{post.date}</span>
            <span className="text-xs text-foreground/50">{post.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-foreground leading-tight tracking-tighter mb-8">
            {post.title}
          </h1>

          <div className="prose prose-lg max-w-none">
            {post.content.map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">
                    {block.replace("## ", "")}
                  </h2>
                )
              }
              if (block.startsWith("**") && block.endsWith("**")) {
                return (
                  <p key={i} className="text-foreground font-semibold mt-4 mb-2">
                    {block.replace(/\*\*/g, "")}
                  </p>
                )
              }
              if (block.startsWith("**")) {
                const parts = block.split("**")
                return (
                  <p key={i} className="text-foreground/70 leading-relaxed mb-4">
                    <strong className="text-foreground">{parts[1]}</strong>
                    {parts[2]}
                  </p>
                )
              }
              if (block.startsWith("- ")) {
                return (
                  <ul key={i} className="list-disc pl-6 mb-4 space-y-1">
                    {block.split("\n").map((line, j) => (
                      <li key={j} className="text-foreground/70">
                        {line.replace("- ", "")}
                      </li>
                    ))}
                  </ul>
                )
              }
              return (
                <p key={i} className="text-foreground/70 leading-relaxed mb-4">
                  {block}
                </p>
              )
            })}
          </div>
        </div>
      </article>

      {/* Related articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-6 bg-card mt-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-xl font-semibold text-foreground mb-6">More articles</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {relatedPosts.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group">
                  <div className="rounded-xl overflow-hidden mb-3">
                    <Image
                      src={rp.image}
                      alt={rp.title}
                      width={400}
                      height={220}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-xs text-foreground/50 mb-1">{rp.category} · {rp.readTime}</p>
                  <p className="font-semibold text-foreground group-hover:text-accent transition-colors">
                    {rp.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
            See how Nudos works
          </h2>
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

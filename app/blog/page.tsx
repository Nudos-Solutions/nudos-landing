import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { BookOpen } from "lucide-react"
import { blogPosts } from "@/content/blog"
import BreadcrumbNav from "@/components/breadcrumb-nav"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { I18nProvider } from "@/lib/i18n"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on marine insurance technology, vessel inspection AI, condition scoring, and underwriting automation from the NUDOS team.",
  alternates: { canonical: "https://www.nudos.app/blog" },
  openGraph: {
    title: "Blog | NUDOS",
    description:
      "Insights on marine insurance technology, vessel inspection AI, condition scoring, and underwriting automation from the NUDOS team.",
    images: [
      {
        url: "/og?title=Blog&subtitle=Marine%20insurance%20technology%20insights",
        width: 1200,
        height: 630,
        alt: "NUDOS Blog",
      },
    ],
  },
}

export default function BlogIndex() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: blogPosts.map((post, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://www.nudos.app/blog/${post.slug}`,
      name: post.title,
    })),
  }

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "NUDOS Blog",
    description: "Insights on marine insurance technology, vessel inspection AI, condition scoring, and underwriting automation.",
    url: "https://www.nudos.app/blog",
    publisher: {
      "@type": "Organization",
      name: "NUDOS",
      url: "https://www.nudos.app",
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `https://www.nudos.app/blog/${post.slug}`,
      datePublished: post.date,
      dateModified: post.dateModified,
    })),
  }

  return (
    <I18nProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <main id="main-content" className="min-h-screen bg-background">
        <Header />
        <section className="pt-32 pb-20 px-6">
          <div className="mx-auto max-w-7xl">
            <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />

            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-accent" strokeWidth={2} />
              <span className="text-sm font-medium text-foreground/70">Industry Insights</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-foreground mb-12">
              Blog
            </h1>

            <div className="grid md:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <div className="rounded-2xl overflow-hidden mb-4">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs font-medium text-foreground/60 bg-secondary px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-foreground/60">{post.date}</span>
                  </div>
                  <h2 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors capitalize">
                    {post.title}
                  </h2>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </I18nProvider>
  )
}

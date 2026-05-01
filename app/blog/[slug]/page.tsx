import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getBlogPostBySlug, getAllBlogSlugs } from "@/content/blog"
import BreadcrumbNav from "@/components/breadcrumb-nav"
import BlogArticleLayout from "@/components/blog-article-layout"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { I18nProvider } from "@/lib/i18n"

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `https://www.nudos.app/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      images: [
        {
          url: `/og?title=${encodeURIComponent(post.title)}&subtitle=${encodeURIComponent(post.description)}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.date,
      modifiedTime: post.dateModified,
      section: post.category,
      tags: post.keywords,
      authors: ["NUDOS"],
    },
    twitter: {
      card: "summary_large_image",
      site: "@usenudos",
      creator: "@usenudos",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.date,
    dateModified: post.dateModified,
    url: `https://www.nudos.app/blog/${post.slug}`,
    mainEntityOfPage: `https://www.nudos.app/blog/${post.slug}`,
    author: { "@type": "Organization", name: "NUDOS", url: "https://www.nudos.app" },
    publisher: {
      "@type": "Organization",
      name: "NUDOS",
      logo: { "@type": "ImageObject", url: "https://www.nudos.app/images/nudos-logo.svg" },
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".prose h2", ".prose p:first-of-type"],
    },
  }

  return (
    <I18nProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main id="main-content" className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 px-6">
          <div className="mx-auto max-w-3xl">
            <BreadcrumbNav
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: post.title },
              ]}
            />
          </div>
        </div>
        <BlogArticleLayout post={post} />
        <Footer />
      </main>
    </I18nProvider>
  )
}

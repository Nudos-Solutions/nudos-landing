# SEO Strategy Design — NUDOS Landing

**Date:** 2026-05-01
**Domain:** www.nudos.app
**Stack:** Next.js (App Router), Tailwind CSS, Vercel
**Target audience:** Insurers, brokers, marina/yacht club operators — global, English default, Spanish secondary
**Goal:** Organic search traffic for marine insurtech keywords

---

## 1. Technical SEO Infrastructure

### 1.1 Metadata (app/layout.tsx)

Expand the existing `metadata` export with:

```ts
export const metadata: Metadata = {
  metadataBase: new URL("https://www.nudos.app"),
  title: {
    default: "NUDOS — AI-Powered Marine Insurance Infrastructure",
    template: "%s | NUDOS",
  },
  description:
    "Nudos turns vessel data into underwriting decisions. AI-powered inspection, condition scoring, valuation, and premium calculation for marine insurance.",
  keywords: [
    "marine insurance AI",
    "vessel inspection technology",
    "hull damage detection",
    "marine underwriting automation",
    "vessel condition scoring",
    "maritime insurtech",
    "marine risk infrastructure",
  ],
  authors: [{ name: "NUDOS", url: "https://www.nudos.app" }],
  creator: "NUDOS",
  publisher: "NUDOS",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "es_UY",
    url: "https://www.nudos.app",
    siteName: "NUDOS",
    title: "NUDOS — AI-Powered Marine Insurance Infrastructure",
    description:
      "Nudos turns vessel data into underwriting decisions. AI-powered inspection, condition scoring, valuation, and premium calculation for marine insurance.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NUDOS — The Infra Layer for Marine Risk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NUDOS — AI-Powered Marine Insurance Infrastructure",
    description:
      "Nudos turns vessel data into underwriting decisions. AI-powered inspection, condition scoring, valuation, and premium calculation.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.nudos.app",
    languages: {
      "en": "https://www.nudos.app",
      "es": "https://www.nudos.app",
      "x-default": "https://www.nudos.app",
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}
```

**OG Image:** Create a 1200x630 branded image at `public/og-image.jpg`. Use NUDOS logo + tagline "The Infra Layer for Marine Risk" on dark background.

### 1.2 sitemap.ts

Create `app/sitemap.ts`:

```ts
import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.nudos.app"

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/cookies`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/glossary`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ]

  const servicePages = [
    "vessel-inspection",
    "condition-scoring",
    "vessel-valuation",
    "premium-engine",
    "claims-intelligence",
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const blogPosts = [
    "computer-vision-hull-inspection",
    "ai-vessel-condition-scoring",
    "instant-ship-insurance-premiums",
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticPages, ...servicePages, ...blogPosts]
}
```

### 1.3 robots.ts

Create `app/robots.ts`:

```ts
import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://www.nudos.app/sitemap.xml",
  }
}
```

### 1.4 JSON-LD Structured Data

Create `components/structured-data.tsx` — rendered in `app/layout.tsx`:

**Organization schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NUDOS",
  "url": "https://www.nudos.app",
  "logo": "https://www.nudos.app/images/nudos-logo.svg",
  "description": "AI-powered marine insurance infrastructure",
  "sameAs": [
    "https://www.instagram.com/usenudos",
    "https://www.linkedin.com/company/nudos-app"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+598-98-576-720",
      "contactType": "sales",
      "areaServed": "UY",
      "availableLanguage": ["English", "Spanish"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+1-786-402-5514",
      "contactType": "sales",
      "areaServed": "US",
      "availableLanguage": ["English", "Spanish"]
    }
  ],
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "Cuareim 1447",
      "addressLocality": "Montevideo",
      "addressCountry": "UY"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "1 Washington Ave",
      "addressLocality": "Miami Beach",
      "addressRegion": "FL",
      "addressCountry": "US"
    }
  ]
}
```

**SoftwareApplication schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NUDOS",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "AI-powered marine insurance infrastructure — vessel inspection, condition scoring, valuation, and premium calculation.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Contact for pricing"
  }
}
```

### 1.5 Performance Hints

Add to `app/layout.tsx` `<head>`:

```html
<link rel="preconnect" href="https://res.cloudinary.com" />
<link rel="dns-prefetch" href="https://res.cloudinary.com" />
```

### 1.6 Legal Page Metadata

Each legal page (`/privacy`, `/terms`, `/cookies`) must export page-level metadata. Convert from `"use client"` to server component wrapper pattern if needed, or use `generateMetadata`.

Example for `/privacy`:
```ts
export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How NUDOS collects, uses, and protects your personal data.",
  alternates: { canonical: "https://www.nudos.app/privacy" },
}
```

Same pattern for `/terms` and `/cookies`.

---

## 2. On-Page Keyword Optimization

### 2.1 Keyword Map

| Page/Section | Primary Keyword | Secondary Keywords |
|---|---|---|
| Homepage title | marine insurance AI | vessel underwriting, maritime insurtech |
| Hero | marine risk infrastructure | vessel data, underwriting automation |
| #about | marine insurance problem | vessel inspection gaps, underwriting blind spots |
| #what-nudos-is | underwriting infrastructure | vessel condition data, insurance pipeline |
| #works | vessel inspection AI pipeline | hull analysis, condition scoring, premium engine |
| #services | marine insurance technology | hybrid AI, claims intelligence |
| #traction | marine insurtech ecosystem | insurer integration, broker platform |
| #vision | marine underwriting platform | global infrastructure |
| Blog 1 | hull damage detection AI | computer vision ship inspection |
| Blog 2 | vessel condition scoring | maritime survey AI |
| Blog 3 | instant vessel insurance | marine insurance automation |
| /services/vessel-inspection | vessel inspection AI | hull damage detection, ship condition analysis |
| /services/condition-scoring | vessel condition scoring | SOLAS compliance, maritime survey automation |
| /services/vessel-valuation | vessel valuation AI | ship market value, marine asset appraisal |
| /services/premium-engine | marine insurance pricing | automated premium calculation |
| /services/claims-intelligence | marine claims intelligence | vessel monitoring, insurance claims |
| /faq | marine insurance FAQ | how does vessel AI work |
| /glossary | marine insurance glossary | H&M insurance, P&I meaning |

### 2.2 Meta Description Updates

Each page gets a unique, keyword-rich meta description (150-155 chars):

- **Home:** "Nudos turns vessel data into underwriting decisions. AI-powered inspection, condition scoring, valuation, and premium calculation for marine insurance."
- **Vessel Inspection:** "AI-powered vessel inspection that captures hull condition across structural zones. No site visit, no intermediary. See the actual asset."
- **Condition Scoring:** "Automated vessel condition scoring against SOLAS, MARPOL, and 47+ maritime standards. Consistent, repeatable, defensible."
- **Vessel Valuation:** "AI vessel valuation using condition data, market comparables, and depreciation curves. Defensible numbers, not broker estimates."
- **Premium Engine:** "Deterministic marine insurance pricing engine. Every variable named, weighted, and timestamped. Built for audit."
- **Claims Intelligence:** "Timestamped vessel baselines for marine claims. Before-and-after evidence trails that accelerate settlement and cut fraud."
- **FAQ:** "Common questions about NUDOS — how AI vessel inspection works, what standards we check, pricing, and availability."
- **Glossary:** "Marine insurance terms explained: H&M, P&I, SOLAS, MARPOL, General Average, and more."

### 2.3 Heading Adjustments

Minor keyword insertion into existing headings. Meaning preserved, no stuffing.

Examples:
- Hero subtitle: keep as-is ("The Infra Layer for Marine Risk") — already strong
- About h2: keep as-is — descriptive and keyword-adjacent
- Service cards: add keyword-relevant subtext if natural

### 2.4 Image Alt Text Optimization

Update alt attributes for keyword relevance:

| Component | Current Alt | Optimized Alt |
|---|---|---|
| hero.tsx | "AI Ship Hull Analysis and Maritime Insurance Platform" | "AI-powered vessel hull analysis for marine insurance underwriting" |
| about.tsx | "Vessel underwriting — the unseen risk" | "Marine insurance underwriting gap — vessel condition invisible to insurers" |
| contact-section.tsx | "Aerial yacht view — Vessel Insurance" | "Aerial vessel inspection view — AI marine insurance platform" |
| selected-works.tsx | `${work.title} — AI vessel analysis` | Keep — already good |

---

## 3. New Pages

### 3.1 Service Landing Pages

**Route pattern:** `/services/[slug]`

**5 pages:**

| Slug | Title | H1 |
|---|---|---|
| vessel-inspection | Vessel Inspection AI | See the actual asset — AI-powered vessel inspection |
| condition-scoring | Vessel Condition Scoring | Score vessel condition against 47+ maritime standards |
| vessel-valuation | AI Vessel Valuation | Defensible vessel valuations from verified data |
| premium-engine | Marine Premium Engine | Deterministic pricing with full audit trail |
| claims-intelligence | Claims Intelligence | Continuous monitoring and timestamped baselines |

**Page structure (shared layout):**
1. Breadcrumb (Home > Services > [Service Name])
2. Hero section: H1 + subtitle + CTA
3. Problem block: 2-3 pain points this service solves
4. How it works: 3-4 steps with icons
5. Key capabilities: feature grid
6. Cross-links: related services + relevant blog articles
7. CTA section: contact form or link to #contact

**Content source:** Expand from existing landing page section copy. Each service section already has strong description text. Service pages elaborate with more detail and keyword-rich copy.

**JSON-LD per page:** Service schema with name, description, provider (Organization ref).

**Implementation approach:** Create a shared `ServicePageLayout` component. Each service page passes its content as props/data. Avoids 5 separate page files with duplicated structure.

### 3.2 Blog

**Route pattern:** `/blog` (index) + `/blog/[slug]` (articles)

**Content storage:** MDX files in `/content/blog/` directory.

Each MDX file has frontmatter:
```yaml
---
title: "How computer vision is revolutionizing hull damage detection in cargo ships"
slug: "computer-vision-hull-inspection"
description: "Learn how AI-powered computer vision detects hull damage..."
date: "2025-03-05"
category: "Computer Vision"
keywords: ["hull damage detection", "computer vision ship inspection", "cargo vessel analysis"]
image: "https://res.cloudinary.com/drasbgjxe/image/upload/..."
---
```

**3 initial articles:**

1. **"How computer vision is revolutionizing hull damage detection in cargo ships"**
   - ~800-1000 words
   - Keywords: hull damage detection AI, computer vision ship inspection, cargo vessel hull analysis
   - Topics: traditional inspection problems, how CV works on vessels, structural zone mapping, accuracy vs human inspectors

2. **"Vessel condition scoring: how AI outperforms traditional maritime surveys"**
   - ~800-1000 words
   - Keywords: vessel condition scoring, maritime survey automation, AI vessel assessment
   - Topics: survey inconsistency problem, standardized scoring methodology, SOLAS/MARPOL compliance, repeatability

3. **"From ship photo to policy: the future of instant vessel insurance premiums"**
   - ~800-1000 words
   - Keywords: instant vessel insurance, marine insurance automation, ship photo to policy
   - Topics: current binding timeline (3-6 weeks), data-driven premium calculation, audit trail, future of marine underwriting

**Blog index page (`/blog`):**
- Grid of article cards (reuse latest-articles design)
- Category filter (optional, skip for now with 3 articles)
- Metadata: title "Blog | NUDOS", description targeting "marine insurance insights"

**Article page (`/blog/[slug]`):**
- Breadcrumb: Home > Blog > [Article Title]
- Article header: title, date, category, estimated read time
- MDX content body
- Related articles at bottom
- CTA: link to contact
- JSON-LD: Article schema (headline, author, datePublished, publisher, image)
- OG/Twitter cards per article

**Blog integration with landing page:**
- Update `latest-articles.tsx` to link to real `/blog/[slug]` routes
- Keep existing design and images

### 3.3 FAQ Page

**Route:** `/faq`

**~12 questions organized by category:**

**General:**
- What is Nudos?
- How does Nudos work?
- Who is Nudos built for?

**Inspection & Technology:**
- What types of vessels can Nudos inspect?
- How accurate is AI vessel condition scoring?
- What maritime standards does Nudos check against?
- How long does a vessel inspection take?

**Insurance & Pricing:**
- How are premiums calculated?
- What insurance types does Nudos support (H&M, P&I)?
- How does Nudos handle claims?

**Availability:**
- Is Nudos available in my country?
- How do I get started?

**Structure:**
- Accordion-style Q&A
- Anchor links for each question
- FAQPage JSON-LD schema (triggers rich results in Google)
- Breadcrumb: Home > FAQ
- Cross-links to relevant service pages within answers

### 3.4 Glossary Page

**Route:** `/glossary`

**~25 terms:**

Hull & Machinery (H&M), Protection & Indemnity (P&I), SOLAS, MARPOL, ABYC, General Average, Particular Average, Subrogation, Total Loss, Constructive Total Loss, Actual Total Loss, Marine Survey, Classification Society, Underwriting, Premium, Deductible, Indemnity, Insurable Interest, Proximate Cause, Utmost Good Faith (Uberrimae Fidei), Bottomry, Jettison, Salvage, Average Adjuster, Club Call

**Structure:**
- Alphabetical sections with anchor navigation (A-Z bar at top)
- Each term: `<dt>` term name + `<dd>` definition (2-3 sentences)
- Where relevant, link to Nudos service that relates (e.g., "See how Nudos automates [condition scoring](/services/condition-scoring)")
- DefinedTerm JSON-LD schema per entry
- Breadcrumb: Home > Glossary
- Metadata: "Marine Insurance Glossary — Key Terms Explained | NUDOS"

---

## 4. Internal Linking Strategy

### Cross-linking map:

```
Homepage sections ←→ Service pages (each section links to its dedicated page)
Service pages ←→ Related service pages (sidebar or bottom "Related" section)
Service pages ←→ Relevant blog articles
Blog articles ←→ Service pages (inline links in content)
Blog articles ←→ Glossary terms (link technical terms to glossary definitions)
FAQ answers ←→ Service pages (link within answer text)
Glossary terms ←→ Service pages (where relevant)
```

### Navigation updates:
- Add "Services" dropdown to header nav (or keep single-page anchors and add footer links)
- Add blog and FAQ to footer navigation
- Breadcrumbs on all new pages

---

## 5. Architecture & File Structure

```
app/
  layout.tsx              (updated metadata + structured data)
  page.tsx                (homepage — unchanged)
  sitemap.ts              (new)
  robots.ts               (new)
  privacy/page.tsx         (add metadata export)
  terms/page.tsx           (add metadata export)
  cookies/page.tsx         (add metadata export)
  faq/page.tsx             (new)
  glossary/page.tsx        (new)
  blog/
    page.tsx               (blog index)
    [slug]/page.tsx        (article page)
  services/
    [slug]/page.tsx        (service page)

components/
  structured-data.tsx      (new — JSON-LD scripts)
  service-page-layout.tsx  (new — shared service page layout)
  blog-article-layout.tsx  (new — shared blog article layout)
  faq-accordion.tsx        (new — FAQ accordion component)
  breadcrumb-nav.tsx       (new — breadcrumb component)
  latest-articles.tsx      (updated — links to real blog routes)

content/
  blog/
    computer-vision-hull-inspection.mdx
    ai-vessel-condition-scoring.mdx
    instant-ship-insurance-premiums.mdx
  services/
    vessel-inspection.ts    (service page content/data)
    condition-scoring.ts
    vessel-valuation.ts
    premium-engine.ts
    claims-intelligence.ts
  faq.ts                   (FAQ content/data)
  glossary.ts              (glossary content/data)

public/
  og-image.jpg             (new — 1200x630 OG image)
  favicon.ico              (verify exists)
  apple-touch-icon.png     (verify exists)
```

---

## 6. Testing & Verification

- Run Lighthouse audit (target 90+ SEO score)
- Validate structured data via Google Rich Results Test
- Verify sitemap.xml renders correctly at /sitemap.xml
- Verify robots.txt renders correctly at /robots.txt
- Check OG tags via social media debuggers (Facebook, LinkedIn, Twitter)
- Verify all internal links resolve (no 404s)
- Check heading hierarchy on each page (single h1, proper h2/h3 nesting)
- Submit sitemap to Google Search Console after deploy

---

## 7. Post-Launch Actions (Manual, Not Code)

1. Set up Google Search Console for www.nudos.app
2. Submit sitemap.xml
3. Request indexing for key pages
4. Set up Google Analytics 4 (or verify Vercel Analytics covers needs)
5. Monitor Search Console for crawl errors, indexing status
6. Disable Vercel Toolbar on production (fixes aria-hidden issue)

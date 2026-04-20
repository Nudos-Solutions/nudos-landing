# Legal Pages Design — Terms, Privacy, Cookies

**Date:** 2026-04-19
**Project:** nudos-landing
**Status:** Approved for implementation

## Goal

Add three legal policy pages to the Nudos landing site: Terms of Service, Data Protection (Privacy), and Cookie Policy. Content is Nudos-specific boilerplate (cargo insurance, CV/AI data processing, UY + US operations) that will be reviewed by legal counsel before production use.

## Decisions

| Decision | Choice |
|---|---|
| Page structure | Three separate pages (`/terms`, `/privacy`, `/cookies`) |
| Language | Full bilingual (EN/ES) via existing `lib/i18n.tsx` |
| Page chrome | Reuse existing `Header` + `Footer` components |
| Link target | Same tab (standard navigation) |
| Content source | Nudos-specific boilerplate (template — legal review required) |

## Architecture

### Routes (Next.js App Router)

```
app/
  terms/
    page.tsx       # Terms of Service
  privacy/
    page.tsx       # Data Protection / Privacy Policy
  cookies/
    page.tsx       # Cookie Policy
```

Each route is a simple server component that imports the shared `LegalPage` component and passes the relevant translation key.

### Shared component

**`components/legal-page.tsx`** — layout wrapper responsible for:

- Rendering `<Header />` at top
- Centered reading container: `max-w-3xl mx-auto px-6 py-20`
- Page title (DM Serif Display, large)
- "Last updated" date in muted text
- Disclaimer banner (subtle amber-accented outlined box): *"This is a template and should be reviewed by legal counsel before production use."*
- Iterating over `sections[]` and rendering each `{ heading, body }` with consistent typography:
  - Heading: `text-2xl font-semibold mt-12 mb-4`
  - Body paragraphs: `text-foreground/80 leading-relaxed mb-4`
  - Bullet lists where content calls for them
- Rendering `<Footer />` at bottom

Props shape (TypeScript):

```ts
type LegalPageProps = {
  title: string
  lastUpdated: string
  disclaimer: string
  sections: Array<{
    heading: string
    body: Array<string | { type: "list"; items: string[] }>
  }>
}
```

### Content (i18n)

Content lives in `lib/i18n.tsx` under a new top-level `legal` key in both `en` and `es` translations:

```ts
legal: {
  disclaimer: "",
  terms: {
    title: "Terms of Service",
    lastUpdated: "Last updated: April 2026",
    sections: [ /* see content structure below */ ],
  },
  privacy: { title, lastUpdated, sections: [...] },
  cookies: { title, lastUpdated, sections: [...] },
}
```

The page components access content via `useI18n()` → `t.legal.terms` / `t.legal.privacy` / `t.legal.cookies`.

### Footer wiring

Update `components/footer.tsx` — replace the three `href="#"` placeholders with real routes:

- `t.footer.terms` → `/terms`
- `t.footer.privacy` → `/privacy`
- `t.footer.cookies` → `/cookies`

No `target="_blank"` — standard in-tab navigation.

## Content structure

### `/terms` — Terms of Service

1. **Acceptance of terms** — using the site/platform constitutes agreement
2. **About Nudos** — cargo insurance risk-analysis platform using Computer Vision and AI
3. **Eligibility** — B2B only (insurers, brokers, shipowners, authorized representatives)
4. **Service description & limitations** — Nudos provides risk-analysis tooling; Nudos is NOT a licensed insurer and does not issue binding insurance decisions
5. **Account responsibilities & acceptable use** — accurate information, no unauthorized access, no reverse engineering
6. **Intellectual property** — Nudos retains ownership of the platform, models, methodologies, and outputs
7. **User-submitted data** — user grants Nudos a license to process submitted vessel imagery, specs, and documentation for service delivery and model improvement (on anonymized data)
8. **Disclaimers & limitation of liability** — service provided "as is"; liability capped; no guarantee of underwriting outcomes
9. **Termination** — Nudos may terminate access for breach; users may discontinue use at any time
10. **Governing law** — Uruguay (UY entity) / Florida, USA (US entity) depending on contracting entity
11. **Contact** — hi@nudos.app

### `/privacy` — Data Protection

1. **Who we are** — Nudos, operating from Montevideo, Uruguay and Miami Beach, Florida; data controller information
2. **Data we collect** — contact form submissions (name, email, message), vessel imagery & metadata submitted by authorized users, analytics via Vercel Analytics (IP-anonymized, aggregate)
3. **Legal bases** — consent, legitimate interest, contract performance; compliant with Uruguay Law 18.331 (Ley de Protección de Datos Personales), GDPR-style principles, and applicable US state privacy laws
4. **How we use data** — service delivery, communication, model improvement on anonymized data, security & fraud prevention
5. **Third parties** — Vercel (hosting, analytics), Resend (transactional email); no selling of personal data
6. **International transfers** — data may be processed in the US and Uruguay; appropriate safeguards applied
7. **Retention** — kept only as long as necessary for stated purposes or legal obligations
8. **Your rights** — access, rectification, deletion, portability, objection, withdrawal of consent
9. **Security** — industry-standard encryption in transit and at rest, access controls
10. **Changes to this policy** — material changes announced via site notice
11. **Contact / data requests** — hi@nudos.app

### `/cookies` — Cookie Policy

1. **What cookies are** — small text files stored on device
2. **Cookies we use** — essential cookies only (session, preferences); Vercel Analytics (privacy-friendly, no personal tracking)
3. **Third-party cookies** — any set by embedded services (Vercel)
4. **How to manage cookies** — browser settings guidance; note that disabling may affect site functionality
5. **Changes** — policy may be updated; revisit periodically
6. **Contact** — hi@nudos.app

## Visual & typography

- Container: `max-w-3xl mx-auto px-6 py-20` (comfortable reading width)
- Page title: DM Serif Display, `text-4xl md:text-5xl`, matches hero aesthetic
- Last-updated: `text-sm text-foreground/50 mt-2`
- Disclaimer banner: outlined box with amber accent border, `border-amber-500/30 bg-amber-500/5`, `rounded-lg p-4 my-8`, small warning icon
- Section headings: `text-2xl font-semibold mt-12 mb-4`
- Body: `text-foreground/80 leading-relaxed`
- Bullet lists: `list-disc pl-6 space-y-2`
- Uses existing theme tokens (`bg-background`, `text-foreground`, etc.) so light/dark theme works automatically

## Testing checklist

- Both EN and ES render correctly on all three pages
- Language toggle in header switches content on legal pages
- Footer links navigate to the correct route (no more `#`)
- All pages pass `next build` without type errors
- Pages are accessible: semantic `<h1>`, `<h2>`, paragraphs, lists; sufficient contrast
- Pages render correctly on mobile (reading container doesn't overflow, padding works)
- Disclaimer banner renders visibly in both themes

## Out of scope

- Legal review of content (user will handle with counsel)
- Consent management / cookie banner (future work if needed)
- Per-region legal variations beyond what the boilerplate covers
- SEO metadata beyond page title (can be added later if prioritized)

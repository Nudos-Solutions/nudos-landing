export interface ServicePage {
  slug: string
  title: string
  metaDescription: string
  h1: string
  subtitle: string
  problems: { icon: string; title: string; description: string }[]
  steps: { number: string; title: string; description: string }[]
  capabilities: { title: string; description: string }[]
  relatedServices: string[]
  relatedBlogSlugs: string[]
  keywords: string[]
}

export const services: ServicePage[] = [
  {
    slug: "vessel-inspection",
    title: "Vessel Inspection AI",
    metaDescription:
      "AI-powered vessel inspection that captures hull condition across structural zones. No site visit, no intermediary. See the actual asset.",
    h1: "See the actual asset — AI-powered vessel inspection",
    subtitle:
      "Vessel imagery is captured and processed through our vision engine. The system identifies the vessel, maps structural zones, and flags visible damage — generating the raw data layer that feeds everything downstream.",
    problems: [
      {
        icon: "EyeOff",
        title: "No asset visibility",
        description:
          "Underwriters bind millions in exposure on vessels they have never seen. Decisions rely on secondhand reports and outdated PDFs.",
      },
      {
        icon: "Clock",
        title: "Weeks-long inspection cycles",
        description:
          "Traditional marine surveys require scheduling, travel, and manual documentation. The process takes weeks before data reaches the underwriting desk.",
      },
      {
        icon: "AlertTriangle",
        title: "Inconsistent data capture",
        description:
          "Every surveyor documents differently. There is no standard for what gets captured, how it is recorded, or what level of detail is sufficient.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Upload vessel imagery",
        description:
          "Submit photos of the vessel from any source — smartphone, drone, or professional camera. The system accepts standard image formats.",
      },
      {
        number: "02",
        title: "Automatic zone mapping",
        description:
          "The vision engine identifies the vessel type and maps structural zones — hull, deck, superstructure, waterline, and fittings.",
      },
      {
        number: "03",
        title: "Damage detection",
        description:
          "AI analyzes each zone for visible damage: corrosion, osmotic blistering, impact marks, coating failure, and structural deformation.",
      },
      {
        number: "04",
        title: "Structured data output",
        description:
          "Results are delivered as structured data — zone-by-zone findings with severity ratings, confidence scores, and supporting imagery.",
      },
    ],
    capabilities: [
      { title: "Multi-zone analysis", description: "7+ structural zones inspected per vessel" },
      { title: "Damage classification", description: "Corrosion, blistering, impact, coating failure" },
      { title: "Vessel identification", description: "Automatic vessel type and ID confirmation" },
      { title: "No site visit required", description: "Remote inspection from uploaded imagery" },
      { title: "Standardized output", description: "Consistent data format regardless of source" },
      { title: "Audit trail", description: "Every finding timestamped and traceable" },
    ],
    relatedServices: ["condition-scoring", "vessel-valuation"],
    relatedBlogSlugs: ["computer-vision-hull-inspection"],
    keywords: ["vessel inspection AI", "hull damage detection", "ship condition analysis", "marine visual inspection"],
  },
  {
    slug: "condition-scoring",
    title: "Vessel Condition Scoring",
    metaDescription:
      "Automated vessel condition scoring against SOLAS, MARPOL, and 47+ maritime standards. Consistent, repeatable, defensible.",
    h1: "Score vessel condition against 47+ maritime standards",
    subtitle:
      "The platform translates visual findings into structured condition data. Every component is scored against international maritime standards. The output is consistent regardless of who uploads the data.",
    problems: [
      {
        icon: "Scale",
        title: "Subjective surveys",
        description:
          "Two surveyors inspecting the same vessel produce different reports. There is no repeatable, standardized scoring methodology.",
      },
      {
        icon: "FileX",
        title: "No pricing standards",
        description:
          "There is no agreed framework for how vessel condition maps to risk profile. Each insurer applies their own informal criteria.",
      },
      {
        icon: "ShieldAlert",
        title: "Compliance gaps",
        description:
          "Checking a vessel against 47+ international standards manually is slow, error-prone, and rarely comprehensive.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Ingest inspection data",
        description:
          "Structured findings from the visual inspection flow into the scoring engine automatically.",
      },
      {
        number: "02",
        title: "Standards mapping",
        description:
          "Each finding is checked against SOLAS, MARPOL, ABYC, and 47+ international maritime standards.",
      },
      {
        number: "03",
        title: "Component scoring",
        description:
          "Every structural component receives a condition score based on severity, extent, and standard compliance.",
      },
      {
        number: "04",
        title: "Aggregate output",
        description:
          "A composite vessel condition score is generated — repeatable, defensible, and ready for underwriting.",
      },
    ],
    capabilities: [
      { title: "47+ standards", description: "SOLAS, MARPOL, ABYC, and classification society rules" },
      { title: "Component-level scoring", description: "Individual scores for hull, deck, machinery, fittings" },
      { title: "Repeatability", description: "Same inputs produce same scores, every time" },
      { title: "Severity classification", description: "Critical, major, minor, cosmetic damage grades" },
      { title: "Compliance flagging", description: "Automatic alerts for standard violations" },
      { title: "Historical tracking", description: "Track condition changes across inspections" },
    ],
    relatedServices: ["vessel-inspection", "vessel-valuation"],
    relatedBlogSlugs: ["ai-vessel-condition-scoring"],
    keywords: ["vessel condition scoring", "SOLAS compliance check", "maritime survey automation", "vessel assessment AI"],
  },
  {
    slug: "vessel-valuation",
    title: "AI Vessel Valuation",
    metaDescription:
      "AI vessel valuation using condition data, market comparables, and depreciation curves. Defensible numbers, not broker estimates.",
    h1: "Defensible vessel valuations from verified data",
    subtitle:
      "The system cross-references condition data with market comparables, depreciation curves, and replacement cost benchmarks. The output: a defensible vessel valuation.",
    problems: [
      {
        icon: "DollarSign",
        title: "Guesswork valuations",
        description:
          "Vessel values are often estimated by brokers using informal benchmarks. No standardized methodology connects condition to value.",
      },
      {
        icon: "Database",
        title: "Data fragmentation",
        description:
          "Market comparables, depreciation data, and condition reports live in separate systems with no integration.",
      },
      {
        icon: "AlertTriangle",
        title: "Disputed claims",
        description:
          "When agreed value diverges from actual condition, claims disputes follow. 40% of marine claims face documentation challenges.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Condition data input",
        description:
          "Structured condition scores from the scoring engine feed directly into the valuation model.",
      },
      {
        number: "02",
        title: "Market comparison",
        description:
          "The system matches the vessel against comparable sales, listings, and market benchmarks.",
      },
      {
        number: "03",
        title: "Depreciation modeling",
        description:
          "Age, usage, and condition-adjusted depreciation curves refine the baseline market value.",
      },
      {
        number: "04",
        title: "Valuation output",
        description:
          "A defensible market value is generated with full methodology documentation for audit purposes.",
      },
    ],
    capabilities: [
      { title: "Market comparables", description: "Cross-reference against vessel sale and listing data" },
      { title: "Depreciation curves", description: "Age and condition-adjusted value modeling" },
      { title: "Replacement cost", description: "New-build equivalent pricing benchmarks" },
      { title: "Condition-adjusted", description: "Valuation reflects actual vessel state, not assumptions" },
      { title: "Audit-ready", description: "Full methodology documentation for every valuation" },
      { title: "Historical baseline", description: "Track value changes over time" },
    ],
    relatedServices: ["condition-scoring", "premium-engine"],
    relatedBlogSlugs: ["instant-ship-insurance-premiums"],
    keywords: ["vessel valuation AI", "ship market value", "marine asset appraisal", "vessel worth assessment"],
  },
  {
    slug: "premium-engine",
    title: "Marine Premium Engine",
    metaDescription:
      "Deterministic marine insurance pricing engine. Every variable named, weighted, and timestamped. Built for audit.",
    h1: "Deterministic pricing with full audit trail",
    subtitle:
      "Condition and valuation data flow into our deterministic pricing engine. The output: H&M and P&I premiums where every variable is named, weighted, and timestamped.",
    problems: [
      {
        icon: "Cog",
        title: "Manual pricing",
        description:
          "Marine premiums are calculated manually using spreadsheets and institutional knowledge. The process is slow, opaque, and inconsistent.",
      },
      {
        icon: "EyeOff",
        title: "No audit trail",
        description:
          "When a premium is challenged, there is no systematic way to explain how the number was derived.",
      },
      {
        icon: "Clock",
        title: "3-6 week binding cycles",
        description:
          "The time from submission to bound policy stretches weeks. Every delay is a competitive risk.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Data aggregation",
        description:
          "Condition scores, valuation output, and vessel metadata are assembled into the pricing input.",
      },
      {
        number: "02",
        title: "Variable weighting",
        description:
          "12+ risk variables are named, scored, and weighted according to the pricing model.",
      },
      {
        number: "03",
        title: "Premium calculation",
        description:
          "The deterministic engine generates H&M and P&I premiums. Same inputs, same output, every time.",
      },
      {
        number: "04",
        title: "Audit documentation",
        description:
          "Every variable, weight, and data source is timestamped and stored for full regulatory audit trail.",
      },
    ],
    capabilities: [
      { title: "Deterministic output", description: "Same inputs always produce same premium" },
      { title: "12+ risk variables", description: "Named, weighted, and timestamped" },
      { title: "H&M and P&I", description: "Hull & Machinery and Protection & Indemnity coverage" },
      { title: "Full audit trail", description: "Every calculation step documented and stored" },
      { title: "Regulatory ready", description: "Output meets regulatory documentation requirements" },
      { title: "Real-time pricing", description: "Premium generated in minutes, not weeks" },
    ],
    relatedServices: ["vessel-valuation", "claims-intelligence"],
    relatedBlogSlugs: ["instant-ship-insurance-premiums"],
    keywords: ["marine insurance pricing", "automated premium calculation", "underwriting engine", "marine premium AI"],
  },
  {
    slug: "claims-intelligence",
    title: "Claims Intelligence",
    metaDescription:
      "Timestamped vessel baselines for marine claims. Before-and-after evidence trails that accelerate settlement and cut fraud.",
    h1: "Continuous monitoring and timestamped baselines",
    subtitle:
      "Risk does not stop at bind. Nudos tracks condition changes over time, flags deterioration, and updates risk profiles as new data enters the system.",
    problems: [
      {
        icon: "ShieldAlert",
        title: "Disputed claims",
        description:
          "Without pre-loss documentation, every claim becomes a negotiation about what the vessel looked like before the incident.",
      },
      {
        icon: "Clock",
        title: "Slow settlement",
        description:
          "Claims investigation requires gathering evidence after the fact. The process takes months and costs both sides.",
      },
      {
        icon: "AlertTriangle",
        title: "Fraud exposure",
        description:
          "Without baseline condition data, distinguishing genuine claims from pre-existing damage is difficult and expensive.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Baseline capture",
        description:
          "At bind, the vessel's condition is documented as a timestamped baseline — the reference point for all future comparisons.",
      },
      {
        number: "02",
        title: "Ongoing monitoring",
        description:
          "The system tracks condition changes over time as new inspection data enters, flagging deterioration and drift.",
      },
      {
        number: "03",
        title: "Claims comparison",
        description:
          "When a claim occurs, the system generates a before-and-after comparison against the stored baseline.",
      },
      {
        number: "04",
        title: "Evidence package",
        description:
          "A complete, timestamped evidence trail is assembled for claims adjustment — accelerating settlement.",
      },
    ],
    capabilities: [
      { title: "Pre-loss baseline", description: "Timestamped condition record at point of bind" },
      { title: "Drift detection", description: "Automatic alerts when condition changes between inspections" },
      { title: "Before/after comparison", description: "Visual and data comparison for claims" },
      { title: "Evidence packaging", description: "Ready-to-use claims documentation" },
      { title: "Fraud detection", description: "Flag pre-existing damage in claims submissions" },
      { title: "Historical timeline", description: "Full condition history for every vessel" },
    ],
    relatedServices: ["vessel-inspection", "premium-engine"],
    relatedBlogSlugs: ["computer-vision-hull-inspection"],
    keywords: ["marine claims intelligence", "vessel monitoring", "insurance claims automation", "marine fraud detection"],
  },
]

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return services.find((s) => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug)
}

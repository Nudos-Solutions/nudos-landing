export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  dateModified: string
  category: string
  keywords: string[]
  image: string
  readTime: string
  content: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "computer-vision-hull-inspection",
    title: "How computer vision is revolutionizing hull damage detection in cargo ships",
    description:
      "Learn how AI-powered computer vision detects hull damage across structural zones, replacing weeks-long manual inspections with instant, standardized analysis.",
    date: "2025-03-05",
    dateModified: "2026-05-01",
    category: "Computer Vision",
    keywords: ["hull damage detection AI", "computer vision ship inspection", "cargo vessel hull analysis"],
    image:
      "https://res.cloudinary.com/drasbgjxe/image/upload/q_auto/f_auto/v1776652498/cargo-vision-inspection_yhxpc7.jpg",
    readTime: "6 min read",
    content: [
      "## The Problem with Traditional Hull Inspection",
      "For decades, marine hull inspection has relied on the same process: a surveyor boards the vessel, walks the deck, and documents what they see. The output is a PDF report — subjective, inconsistent, and typically weeks old by the time it reaches an underwriter's desk.",
      "This matters because hull condition is the single largest factor in marine insurance risk assessment. A vessel with undetected corrosion, osmotic blistering, or structural fatigue represents millions in potential claims exposure. Yet the industry's inspection methodology has barely changed since the 1970s.",
      "The numbers tell the story: 40% of marine insurance claims face documentation disputes. Not because the claims are fraudulent, but because the baseline condition data simply does not exist in a standardized, verifiable format.",
      "## How Computer Vision Changes the Equation",
      "Computer vision applies the same pattern recognition capabilities that power autonomous vehicles and medical imaging to the problem of vessel inspection. The technology analyzes photographs of a vessel and identifies damage patterns that human inspectors might miss — or document inconsistently.",
      "The process works in three stages:",
      "**Stage 1: Zone Mapping.** The system identifies the vessel type and maps structural zones — hull below waterline, hull above waterline, deck, superstructure, fittings, and machinery spaces. Each zone has different damage patterns and risk implications.",
      "**Stage 2: Damage Detection.** Within each zone, the AI analyzes for specific damage types: corrosion (surface and deep pitting), osmotic blistering, impact damage, coating failure, weld deterioration, and structural deformation. Each finding is classified by type, severity, and extent.",
      "**Stage 3: Structured Output.** Unlike a traditional survey report, the output is structured data — machine-readable findings with severity ratings, confidence scores, and precise location mapping. This data feeds directly into condition scoring and underwriting systems.",
      "## Accuracy vs. Human Inspectors",
      "The question insurers ask first: is it accurate? The evidence is compelling.",
      "In controlled comparisons, AI-powered hull analysis detects 15-20% more surface-level damage than manual inspection. The reason is consistency, not intelligence. A human surveyor's attention varies with fatigue, weather conditions, access limitations, and time pressure. The algorithm applies the same detection criteria to every square meter of hull surface.",
      "Where human expertise still wins is in contextual judgment — understanding whether a particular finding is structurally significant or cosmetic. This is why the most effective approach is hybrid: AI handles detection and classification, while deterministic rules handle risk assessment and compliance checking.",
      "## What This Means for Marine Insurance",
      "The implications for the marine insurance value chain are structural:",
      "**For underwriters:** Risk assessment based on verified, current vessel condition data instead of broker summaries and outdated survey reports. Premiums can reflect actual risk, not estimated risk.",
      "**For brokers:** Faster placement cycles. A structured vessel condition report accelerates the submission-to-quote process from weeks to days.",
      "**For vessel owners:** Fair pricing based on actual vessel condition. Well-maintained vessels get the premiums they deserve.",
      "**For claims teams:** Pre-loss baseline documentation that makes claims adjustment faster, fairer, and less adversarial.",
      "## The Bigger Picture",
      "Hull damage detection is the entry point, not the destination. When vessel condition data is captured in a structured, standardized format, it becomes the foundation for an entirely new approach to marine underwriting — one where every decision is traceable, repeatable, and defensible.",
      "The technology exists today. The question is not whether marine insurance will adopt computer vision for hull inspection, but how quickly the industry moves from pilots to production.",
    ],
  },
  {
    slug: "ai-vessel-condition-scoring",
    title: "Vessel condition scoring: how AI outperforms traditional maritime surveys",
    description:
      "Discover how automated vessel condition scoring delivers consistent, repeatable assessments against 47+ maritime standards — eliminating survey subjectivity.",
    date: "2025-03-05",
    dateModified: "2026-05-01",
    category: "Maritime AI",
    keywords: ["vessel condition scoring", "maritime survey automation", "AI vessel assessment"],
    image:
      "https://res.cloudinary.com/drasbgjxe/image/upload/q_auto/f_auto/v1776652504/vessel-ai-assessment_dyupaw.jpg",
    readTime: "7 min read",
    content: [
      "## Why Traditional Surveys Fall Short",
      "Marine surveying is one of the oldest professions in the insurance industry. Classification societies, independent surveyors, and P&I club inspectors have assessed vessel condition for centuries. The methodology is proven. The problem is not competence — it is consistency.",
      "Ask two experienced surveyors to inspect the same vessel on the same day, and you will get two different reports. Different terminology. Different severity assessments. Different recommendations. This is not a failure of skill — it is an inherent limitation of subjective, narrative-based reporting.",
      "For an underwriter trying to price risk accurately, this inconsistency creates a fundamental problem: the data feeding the pricing decision varies based on who collected it, not on the actual condition of the vessel.",
      "## The Scoring Framework",
      "Automated vessel condition scoring replaces narrative assessment with structured, quantitative output. The framework operates at three levels:",
      "**Component Level:** Every structural component — hull plating, deck surfaces, coating systems, through-hulls, machinery mounts — receives an individual condition score. The score reflects the severity, extent, and type of damage detected, measured against defined thresholds.",
      "**Standard Level:** Each component score is checked against relevant maritime standards. SOLAS structural requirements, MARPOL environmental compliance, ABYC recreational vessel standards, and classification society rules each define what constitutes acceptable condition for specific components.",
      "**Vessel Level:** Component scores aggregate into a composite vessel condition score. The aggregation is weighted — hull integrity carries more weight than cosmetic deck condition, for example — reflecting the actual risk hierarchy.",
      "## 47+ Standards, One Assessment",
      "The scale of the compliance challenge in maritime insurance is often underestimated. A single vessel may need to comply with:",
      "- **SOLAS** (Safety of Life at Sea) — structural integrity, fire safety, life-saving equipment\n- **MARPOL** (Marine Pollution) — environmental compliance, discharge systems, fuel containment\n- **ABYC** (American Boat and Yacht Council) — electrical systems, fuel systems, ventilation\n- **Classification society rules** — Lloyd's, DNV, Bureau Veritas, ABS — each with their own structural standards\n- **Flag state requirements** — varying by registration jurisdiction",
      "Checking a vessel against all applicable standards manually is a multi-day exercise. Automated scoring runs the full compliance check in minutes, flagging specific violations with references to the relevant standard clause.",
      "## Repeatability: The Underwriter's Best Friend",
      "The defining advantage of automated scoring is not speed — it is repeatability. When two assessments of the same vessel produce the same score, underwriters can trust the data. When they produce different scores, it means something actually changed.",
      "This repeatability enables capabilities that are impossible with subjective surveys:",
      "**Trend detection:** Track how a vessel's condition changes over time. A declining score flags emerging risk before it becomes a claim.",
      "**Portfolio analysis:** Compare condition scores across a fleet or book of business. Identify outliers and concentration risks.",
      "**Pricing calibration:** When condition data is consistent, pricing models can be calibrated against claims outcomes. The feedback loop between condition → premium → claims becomes measurable.",
      "## The Hybrid Approach",
      "Effective condition scoring does not replace human expertise. It augments it. The optimal architecture is hybrid:",
      "- **AI handles detection and measurement** — identifying damage, classifying severity, checking standards compliance\n- **Deterministic rules handle scoring** — converting findings into quantitative scores using defined methodologies\n- **Human experts handle exceptions** — reviewing edge cases, validating novel findings, updating scoring criteria",
      "This separation matters for regulatory acceptance. When a regulator or auditor asks how a score was derived, every step in the process is documented, traceable, and reproducible.",
      "## From Scoring to Underwriting",
      "Condition scoring is not an end in itself. It is the connective layer between physical inspection and financial decision-making. A vessel condition score becomes an input to valuation models, pricing engines, and claims baseline systems.",
      "The industry's transition from narrative surveys to structured scoring is not a question of technology adoption. It is a question of data infrastructure. The insurers who build this infrastructure first will price risk more accurately, settle claims faster, and retain better books of business.",
    ],
  },
  {
    slug: "instant-ship-insurance-premiums",
    title: "From ship photo to policy: the future of instant vessel insurance premiums",
    description:
      "How AI-driven automation is compressing the marine insurance binding cycle from weeks to minutes — from vessel photo to calculated premium.",
    date: "2025-03-05",
    dateModified: "2026-05-01",
    category: "InsurTech",
    keywords: ["instant vessel insurance", "marine insurance automation", "ship photo to policy"],
    image:
      "https://res.cloudinary.com/drasbgjxe/image/upload/q_auto/f_auto/v1776652498/cargo-insurance-app_pgd9ga.jpg",
    readTime: "6 min read",
    content: [
      "## The 3-6 Week Problem",
      "Binding a marine insurance policy today takes 3 to 6 weeks. The process involves broker submissions, survey scheduling, report generation, underwriter review, quote negotiation, and documentation. Each step introduces delay, manual effort, and data re-entry.",
      "For a $34 billion global premium pool, this inefficiency is not a minor inconvenience. It is a structural cost that affects every participant in the value chain:",
      "- **Vessel owners** wait weeks for coverage, sometimes operating without adequate insurance during the gap\n- **Brokers** spend hours assembling submissions and chasing updates\n- **Underwriters** review the same types of information repeatedly, with no standardized format\n- **Insurers** carry pricing risk during the extended binding cycle as market conditions change",
      "The fundamental issue is not that any single step is slow. It is that the entire chain is serial — each step waits for the previous one to complete — and the data format changes at every handoff.",
      "## What 'Instant' Actually Means",
      "The phrase 'instant insurance' can mean different things. In personal lines, it often means pre-underwritten products with simplified applications. In marine insurance, the assets are too complex and the exposures too large for that approach.",
      "What is achievable — and what the industry needs — is automated data flow from physical asset to pricing output. Not instant in the sense of zero processing time, but instant in the sense of eliminating the weeks of manual handoffs between inspection, scoring, valuation, and premium calculation.",
      "The pipeline looks like this:",
      "**Photo → Inspection Data (minutes).** Computer vision processes vessel imagery and generates structured condition findings. No scheduling. No site visit.",
      "**Inspection Data → Condition Score (seconds).** Automated scoring engine evaluates findings against maritime standards. Consistent output regardless of input source.",
      "**Condition Score → Valuation (seconds).** Market comparables, depreciation curves, and condition adjustment produce a defensible vessel value.",
      "**Valuation + Condition → Premium (seconds).** Deterministic pricing engine generates H&M and P&I premiums with full audit trail.",
      "Total elapsed time from photo upload to calculated premium: minutes, not weeks.",
      "## The Deterministic Difference",
      "Speed without accuracy is worse than being slow. The critical distinction in automated marine pricing is between probabilistic and deterministic approaches.",
      "A probabilistic approach uses machine learning to predict premiums based on historical patterns. It is fast, but it cannot explain its reasoning. When a reinsurer asks why a premium was set at a particular level, the answer is 'the model predicted it.'",
      "A deterministic approach uses defined rules: every variable is named, every weight is documented, every calculation step is traceable. The same inputs always produce the same output. When a reinsurer asks why, the answer is a complete audit trail.",
      "For regulated markets and sophisticated buyers, deterministic pricing is not optional. It is a requirement.",
      "## What Changes for the Market",
      "The compression of the binding cycle from weeks to minutes changes the economics of marine insurance in several ways:",
      "**Portfolio velocity.** Insurers can bind more policies with the same underwriting capacity. The bottleneck shifts from data processing to business development.",
      "**Pricing accuracy.** When premiums are calculated from current, verified condition data instead of stale survey reports, loss ratios improve. Well-maintained vessels pay less. Poorly-maintained vessels pay more. The market prices risk more efficiently.",
      "**Broker differentiation.** Brokers who can deliver structured, auditable vessel data will place business faster. Speed becomes a competitive advantage, not just a convenience.",
      "**Claims reduction.** When every policy is bound with a timestamped condition baseline, claims disputes decrease. The before-and-after evidence trail already exists.",
      "## The Infrastructure Layer",
      "None of this works without infrastructure. The marine insurance industry does not need another point solution for inspection or another AI model for pricing. It needs a connected system that moves data from physical asset to financial decision without manual intervention.",
      "This infrastructure layer — connecting vessel imagery to condition scores to valuations to premiums to claims baselines — is what transforms marine underwriting from an artisanal process to an engineered one.",
      "The technology is not theoretical. Every component described in this article exists today. The question is not whether the industry will adopt it, but which carriers, brokers, and MGAs will build the infrastructure first — and capture the competitive advantage that comes with it.",
    ],
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug)
}

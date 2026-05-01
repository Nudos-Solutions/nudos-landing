export interface GlossaryTerm {
  term: string
  slug: string
  definition: string
  relatedService?: string
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Actual Total Loss (ATL)",
    slug: "actual-total-loss",
    definition:
      "A loss where the insured vessel is completely destroyed, ceases to exist as the type of thing insured, or is irretrievably lost to the owner. Distinct from constructive total loss, ATL requires no abandonment notice.",
  },
  {
    term: "Average Adjuster",
    slug: "average-adjuster",
    definition:
      "An independent specialist who calculates the apportionment of losses in general average situations. Average adjusters determine how salvage costs and sacrificed cargo values are shared among all parties with interests in the maritime venture.",
  },
  {
    term: "ABYC (American Boat and Yacht Council)",
    slug: "abyc",
    definition:
      "A non-profit organization that develops safety standards for the design, construction, maintenance, and repair of recreational boats. ABYC standards cover electrical systems, fuel systems, ventilation, and structural requirements.",
    relatedService: "condition-scoring",
  },
  {
    term: "Bottomry",
    slug: "bottomry",
    definition:
      "A historical maritime contract where a shipowner borrows money using the vessel as collateral for a voyage. If the vessel is lost, the lender loses the loan. One of the oldest forms of marine insurance, now largely obsolete but foundational to modern maritime law.",
  },
  {
    term: "Classification Society",
    slug: "classification-society",
    definition:
      "An organization that establishes and maintains technical standards for the construction and operation of ships and offshore structures. Major societies include Lloyd's Register, DNV, Bureau Veritas, and ABS. Classification status directly affects insurability and premium pricing.",
    relatedService: "condition-scoring",
  },
  {
    term: "Club Call",
    slug: "club-call",
    definition:
      "An additional premium charged by P&I clubs to their members, typically at the end of the policy year, to cover claims that exceeded initial premium estimates. Club calls reflect the mutual insurance structure of most P&I clubs.",
  },
  {
    term: "Constructive Total Loss (CTL)",
    slug: "constructive-total-loss",
    definition:
      "A loss where the cost of repairing the vessel exceeds its insured value, making repair economically impractical. The owner may abandon the vessel to the insurer and claim the full insured amount. The threshold is typically 80% of insured value.",
    relatedService: "vessel-valuation",
  },
  {
    term: "Deductible",
    slug: "deductible",
    definition:
      "The portion of a claim that the insured must pay before the insurer's obligation begins. In marine insurance, deductibles vary by coverage type and vessel classification. Higher deductibles typically result in lower premiums.",
    relatedService: "premium-engine",
  },
  {
    term: "General Average",
    slug: "general-average",
    definition:
      "A principle of maritime law where all parties in a sea venture proportionally share losses resulting from voluntary sacrifices made to save the vessel and cargo. If cargo is jettisoned to save a sinking ship, all cargo owners contribute to the loss.",
  },
  {
    term: "Hull & Machinery (H&M)",
    slug: "hull-and-machinery",
    definition:
      "Insurance covering physical damage to the vessel's hull, machinery, and equipment. H&M is one of the two primary marine insurance classes (alongside P&I). Coverage includes collision damage, grounding, fire, and machinery breakdown.",
    relatedService: "premium-engine",
  },
  {
    term: "Indemnity",
    slug: "indemnity",
    definition:
      "The principle that insurance should restore the insured to the same financial position they were in before the loss — no better, no worse. In marine insurance, indemnity is calculated based on the agreed or actual value of the vessel at the time of loss.",
  },
  {
    term: "Insurable Interest",
    slug: "insurable-interest",
    definition:
      "A legal requirement that the insured must have a financial stake in the vessel or cargo being insured. Without insurable interest, a marine insurance contract is void. Owners, mortgagees, and charterers all have different forms of insurable interest.",
  },
  {
    term: "Jettison",
    slug: "jettison",
    definition:
      "The deliberate throwing overboard of cargo or equipment to lighten a vessel in distress. Jettison is a general average act — the loss is shared proportionally among all parties with interests in the voyage.",
  },
  {
    term: "MARPOL (Marine Pollution)",
    slug: "marpol",
    definition:
      "The International Convention for the Prevention of Pollution from Ships. MARPOL sets standards for discharge of oil, chemicals, sewage, garbage, and air emissions from vessels. Compliance is mandatory and affects vessel insurability.",
    relatedService: "condition-scoring",
  },
  {
    term: "Marine Survey",
    slug: "marine-survey",
    definition:
      "A professional inspection of a vessel's condition, typically conducted by a qualified surveyor. Surveys assess hull integrity, machinery condition, safety equipment, and regulatory compliance. Traditional surveys are being augmented by AI-powered inspection technology.",
    relatedService: "vessel-inspection",
  },
  {
    term: "Particular Average",
    slug: "particular-average",
    definition:
      "A partial loss affecting only one party's interest in a maritime venture, as opposed to general average which is shared. A hull dent from a collision is particular average — the loss falls on the hull insurer, not shared among all cargo interests.",
  },
  {
    term: "Premium",
    slug: "premium",
    definition:
      "The amount paid by the insured to the insurer for coverage. In marine insurance, premiums are calculated based on vessel condition, value, usage, geography, and claims history. Automated premium engines are replacing manual calculation methods.",
    relatedService: "premium-engine",
  },
  {
    term: "Protection & Indemnity (P&I)",
    slug: "protection-and-indemnity",
    definition:
      "Insurance covering third-party liabilities arising from vessel operation — crew injuries, cargo damage, pollution, and collision liability not covered by H&M insurance. P&I coverage is typically provided through mutual insurance clubs rather than commercial insurers.",
    relatedService: "premium-engine",
  },
  {
    term: "Proximate Cause",
    slug: "proximate-cause",
    definition:
      "The dominant or effective cause of a loss, used to determine whether a claim is covered under a marine insurance policy. If a vessel sinks due to hull corrosion during a storm, the proximate cause analysis determines whether the loss is attributed to the storm (covered) or the corrosion (potentially excluded).",
  },
  {
    term: "Salvage",
    slug: "salvage",
    definition:
      "The rescue of a vessel, cargo, or other property from peril at sea. Salvors are entitled to a salvage award proportional to the value saved and the risk undertaken. Salvage rights are one of the oldest principles in maritime law.",
  },
  {
    term: "SOLAS (Safety of Life at Sea)",
    slug: "solas",
    definition:
      "The International Convention for the Safety of Life at Sea, the most important international treaty governing maritime safety. SOLAS sets minimum standards for vessel construction, equipment, and operation. Compliance is mandatory for commercial vessels and directly affects insurability.",
    relatedService: "condition-scoring",
  },
  {
    term: "Subrogation",
    slug: "subrogation",
    definition:
      "The right of an insurer, after paying a claim, to step into the insured's position and pursue recovery from the party responsible for the loss. If a collision is caused by another vessel, the hull insurer can seek recovery from the at-fault vessel's insurer.",
  },
  {
    term: "Total Loss",
    slug: "total-loss",
    definition:
      "A loss where the vessel is completely destroyed or damaged beyond economical repair. Total loss may be actual (vessel ceases to exist) or constructive (repair cost exceeds insured value). Total loss triggers payment of the full sum insured.",
    relatedService: "vessel-valuation",
  },
  {
    term: "Underwriting",
    slug: "underwriting",
    definition:
      "The process of evaluating, selecting, and pricing marine insurance risks. Underwriters assess vessel condition, usage, geography, and claims history to determine whether to accept a risk and at what premium. Automated underwriting infrastructure is transforming this traditionally manual process.",
    relatedService: "vessel-inspection",
  },
  {
    term: "Utmost Good Faith (Uberrimae Fidei)",
    slug: "utmost-good-faith",
    definition:
      "A foundational principle of marine insurance requiring both parties to disclose all material facts. The insured must disclose known risks, and the insurer must clearly communicate coverage terms. Failure to observe utmost good faith can void the contract.",
  },
]

export function getGlossaryLetters(): string[] {
  const letters = new Set(glossaryTerms.map((t) => t.term[0].toUpperCase()))
  return Array.from(letters).sort()
}

export function getTermsByLetter(letter: string): GlossaryTerm[] {
  return glossaryTerms.filter((t) => t.term[0].toUpperCase() === letter)
}

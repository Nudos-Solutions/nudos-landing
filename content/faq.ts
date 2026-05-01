export interface FaqItem {
  question: string
  answer: string
  category: string
}

export const faqItems: FaqItem[] = [
  {
    category: "General",
    question: "What is Nudos?",
    answer:
      "Nudos is the infrastructure layer for marine insurance underwriting. We connect vessel data to financial decisions through AI-powered inspection, condition scoring, valuation, and premium calculation. Every output is traceable, repeatable, and defensible.",
  },
  {
    category: "General",
    question: "How does Nudos work?",
    answer:
      'The platform operates in five stages: Capture (vessel imagery processed by computer vision), Understand (condition scoring against 47+ maritime standards), Value (market-based vessel valuation), Decide (deterministic premium calculation), and Monitor (ongoing condition tracking). Data flows through each stage automatically — no manual handoffs. <a href="/services/vessel-inspection">Learn more about our inspection pipeline</a>.',
  },
  {
    category: "General",
    question: "Who is Nudos built for?",
    answer:
      "Nudos serves the marine insurance ecosystem: insurers and underwriting desks looking to automate risk assessment, brokers who need faster placement with structured data, marinas and yacht clubs digitizing fleet inspections, and surveyors augmenting traditional workflows with standardized output.",
  },
  {
    category: "Inspection & Technology",
    question: "What types of vessels can Nudos inspect?",
    answer:
      "Nudos inspects recreational vessels (sailboats, motorboats, personal watercraft), commercial vessels (cargo ships, tankers, bulk carriers), and specialized craft. The vision engine adapts its zone mapping and damage detection models based on vessel type and classification.",
  },
  {
    category: "Inspection & Technology",
    question: "How accurate is AI vessel condition scoring?",
    answer:
      'In controlled comparisons, our vision engine detects 15-20% more surface-level damage than manual inspection. The key advantage is consistency — the algorithm applies identical detection criteria to every zone of every vessel. Contextual risk assessment uses deterministic rules, not probabilistic models. <a href="/services/condition-scoring">See how condition scoring works</a>.',
  },
  {
    category: "Inspection & Technology",
    question: "What maritime standards does Nudos check against?",
    answer:
      'Nudos checks vessel condition against 47+ international maritime standards including SOLAS (Safety of Life at Sea), MARPOL (Marine Pollution), ABYC (American Boat and Yacht Council), and major classification society rules from Lloyd\'s, DNV, Bureau Veritas, and ABS. <a href="/glossary">See our marine insurance glossary</a> for standard definitions.',
  },
  {
    category: "Inspection & Technology",
    question: "How long does a vessel inspection take?",
    answer:
      "From image upload to structured condition report: minutes, not weeks. Traditional marine surveys require scheduling, travel, and manual documentation — a process that typically takes 2-4 weeks. Nudos processes uploaded vessel imagery and generates standardized output in minutes.",
  },
  {
    category: "Insurance & Pricing",
    question: "How are premiums calculated?",
    answer:
      'Nudos uses a deterministic pricing engine. Condition scores, vessel valuation, and 12+ risk variables are named, weighted, and calculated using defined rules. The same inputs always produce the same premium. Every calculation step is documented for full regulatory audit trail. <a href="/services/premium-engine">Learn about the premium engine</a>.',
  },
  {
    category: "Insurance & Pricing",
    question: "What insurance types does Nudos support?",
    answer:
      "Nudos generates premiums for Hull & Machinery (H&M) and Protection & Indemnity (P&I) coverage — the two primary marine insurance classes. The platform covers both recreational and commercial vessel categories.",
  },
  {
    category: "Insurance & Pricing",
    question: "How does Nudos handle claims?",
    answer:
      'Every inspection creates a timestamped condition baseline. When a claim occurs, the system generates a before-and-after comparison against the stored baseline — accelerating settlement and reducing fraud exposure. <a href="/services/claims-intelligence">Learn about claims intelligence</a>.',
  },
  {
    category: "Availability",
    question: "Is Nudos available in my country?",
    answer:
      "Nudos operates globally with offices in Montevideo (Uruguay) and Miami Beach (Florida, USA). The platform is designed to work across jurisdictions, with maritime standards coverage applicable worldwide. Contact us to discuss availability in your market.",
  },
  {
    category: "Availability",
    question: "How do I get started?",
    answer:
      'Contact our team to discuss your use case. Whether you are an insurer modernizing your marine book, a broker who needs faster placement, or a marina digitizing fleet inspections, Nudos integrates into your existing workflow. <a href="/#contact">Get in touch</a>.',
  },
]

export const faqCategories = [...new Set(faqItems.map((item) => item.category))]

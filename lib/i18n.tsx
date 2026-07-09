"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export type Locale = "en" | "es"

const translations = {
  en: {
    // Header
    nav: {
      home: "HOME",
      about: "THE PROBLEM",
      works: "THE SYSTEM",
      services: "WHY NUDOS",
      traction: "MARKET VALIDATION",
      vision: "THE FUTURE",
      letsTalk: "Talk to Us",
    },
    // Hero
    hero: {
      badge: "WHERE VESSEL DATA MEETS UNDERWRITING",
      titleStart: "The Infra Layer for ",
      titleHighlight: "Marine Risk.",
      description: "Nudos turns vessel data into real decisions.",
      cta1: "See the System",
      cta2: "Talk to Us",
      teamText: "From vessel photo to underwriting decision. No surveys. No delays.",
      liveBadgeLabel: "Live Pipeline",
      liveBadgeValue: "Data → Risk → Decision",
    },
    // Logo Cloud
    logoCloud: {
      logos: ["ORT CIE", "Google Cloud", "AIU"],
    },
    // About (THE PROBLEM)
    about: {
      badge: "The Problem",
      title: "Marine insurance prices risk without viewing the actual asset.",
      description:
        "Every day, underwriters bind millions in exposure on vessels they have never seen. The information reaching them is secondhand, inconsistent, and weeks old. There is no standard for how a vessel condition maps to its risk profile.\n\nThe result: mispriced premiums, disputed claims, and underwriting decisions built on incomplete information.\n\nThis isn't a technology gap. It is a structural one. The entire chain, from physical asset to financial decision, has no connective tissue.",
      services: [
        "No asset visibility",
        "Subjective surveys",
        "No pricing standards",
        "Weeks-long cycles",
        "Disputed claims",
        "Mispriced risk",
        "No audit trail",
        "Data fragmentation",
        "Manual bottlenecks",
      ],
      cta: "See How We Fix It",
      cardTitle: "The Cost of Blindness",
      cardDescription:
        "Underwriters are making million-dollar decisions based on PDF reports and phone calls. There's no repeatable way to connect what a vessel looks like to what it should cost to insure.",
      cardStats: [
        { value: "$34B", label: "Global marine premium pool" },
        { value: "40%", label: "Claims disputed due to poor documentation" },
        { value: "3–6 wks", label: "Average time to bind a marine policy" },
      ],
      cardFooter: "The data gap isn't an inconvenience. It's a structural cost.",
    },
    // What Nudos Is (Section between Problem and System)
    whatNudosIs: {
      badge: "What Nudos Is",
      title: "An underwriting infrastructure.",
      titleAccent: "Not an inspection tool.",
      description: "Nudos is the connective layer between physical vessels and financial decisions. We structure the path from raw asset data to underwriting output. Every decision is traceable, repeatable, and defensible.",
      pillars: [
        {
          label: "Physical Assets",
          detail: "Vessel imagery captured at the point of inspection, across every critical structural zone.",
        },
        {
          label: "Structured Data",
          detail: "Condition scores, valuations, and compliance checks mapped against 27+ international standards.",
        },
        {
          label: "Underwriting Decisions",
          detail: "Risk profiles, premiums, and audit trails generated from verified data.",
        },
      ],
    },
    // Selected Works (THE SYSTEM — Pipeline stages)
    works: {
      badge: "The System",
      title: "Five stages. ",
      titleAccent: "One decision.",
      items: [
        {
          eyebrow: "Stage 01 — Capture",
          title: "See the actual asset.",
          description:
            "Vessel imagery is captured and processed through our vision engine. The system identifies the vessel, maps structural zones, and flags visible damage generating the raw data layer that feeds everything downstream. No site visit. No third-party intermediary.",
          features: ["Visual Inspection", "Zone Mapping", "Damage Detection"],
        },
        {
          eyebrow: "Stage 02 — Understand",
          title: "Score the condition.",
          description:
            "The platform translates visual findings into structured condition data. Every component is scored against SOLAS, MARPOL, ABYC, and 27+ maritime standards. The output is consistent regardless of who uploads the data.",
          features: ["Condition Scoring", "Standard Compliance", "Consistency"],
        },
        {
          eyebrow: "Stage 03 — Decide",
          title: "Price with full traceability.",
          description:
            "Condition and valuation data flow into our deterministic pricing engine. The output: H&M premiums where every variable is named, weighted, and timestamped. Same inputs, same output, every time. Built for audit, built for the line.",
          features: ["Premium Engine", "Risk Weighting", "Audit Trail"],
        },
        {
          eyebrow: "Stage 04 — Value",
          title: "Determine what it's worth.",
          description:
            "The system cross-references condition data with market comparables, depreciation curves, and replacement cost benchmarks. The output: a defensible vessel valuation. No guesswork. No broker estimates.",
          features: ["Market Valuation", "Depreciation Curves", "Comparable Analysis"],
        },
        {
          eyebrow: "Stage 05 — Monitor",
          title: "Continuous risk, not a snapshot.",
          description:
            "Risk does not stop at bind. Nudos tracks condition changes over time, flags deterioration, and updates risk profiles as new data enters the system. When a claim occurs, the historical baseline is already there, timestamped and defensible.",
          features: ["Ongoing Monitoring", "Claims Baseline", "Risk Drift"],
        },
      ],
    },
    // Services (WHY NUDOS IS DIFFERENT)
    services: {
      badge: "Why Nudos Is Different",
      title: "Built for depth, not breadth.",
      items: [
        {
          title: "Vertical Depth",
          description:
            "We do not do horizontal SaaS. We go deep into one vertical, marine insurance, and own the full stack from physical inspection to financial output. Every model, every standard, every pricing variable is marine specific.",
        },
        {
          title: "Hybrid Architecture",
          description:
            "AI handles visual analysis and pattern recognition. Deterministic engines handle pricing and compliance. Intelligence where it matters, precision where it counts.",
        },
        {
          title: "End-to-End Pipeline",
          description:
            "Most solutions cover one stage. Nudos connects the entire chain, capture, condition scoring, valuation, premium calculation, and claims intelligence, in a single system. No handoffs. No data loss between steps.",
        },
        {
          title: "Claims Intelligence",
          description:
            "Every inspection creates a timestamped visual baseline. When a claim occurs, the before-and-after evidence trail is already there, accelerating settlement and cutting fraud exposure.",
        },
      ],
    },
    // Data Advantage
    dataAdvantage: {
      badge: "The Data Advantage",
      title: "Every inspection makes the system smarter.",
      description: "Nudos isn't static software. It's a compounding intelligence layer. Every vessel inspected, every premium calculated, every claim processed feeds back into the system refining risk models, improving accuracy, and building a proprietary dataset that no competitor can replicate.",
      metrics: [
        { label: "Vessel profiles in system", value: "Growing" },
        { label: "Condition datapoints per vessel", value: "200+" },
        { label: "Maritime standards mapped", value: "27+" },
        { label: "Premium accuracy improvement", value: "Continuous" },
      ],
      anchor: "This isn't a feature. It's a moat.",
    },
    // Traction / Validation
    traction: {
      badge: "Market Validation",
      title: "Already in the ecosystem.",
      description: "Nudos is live across the marine insurance value chain, working with the actors who write, distribute, and manage maritime risk.",
      actors: [
        {
          type: "Insurers",
          names: "Top-tier national carriers",
          detail: "Direct integration with underwriting desks for automated risk assessment and premium generation. Multiple carriers in pipeline.",
        },
        {
          type: "Brokers",
          names: "Digital-first broker networks",
          detail: "Enabling brokers to deliver structured, auditable vessel reports that accelerate placement and reduce back-and-forth.",
        },
        {
          type: "Marinas & Yacht Clubs",
          names: "Active fleet partnerships",
          detail: "Fleet-level inspection infrastructure deployed at the point of asset concentration across multiple locations.",
        },
        {
          type: "Surveyors",
          names: "Professional network",
          detail: "Augmenting traditional survey workflows with structured data capture and standardized output.",
        },
      ],
    },
    // Vision
    vision: {
      badge: "The Vision",
      title: "Building the global infrastructure for marine underwriting.",
      description: "Nudos is building toward a world where every marine underwriting decision is backed by verified, structured data from the actual asset. A single source of truth that connects insurers, brokers, marinas, and surveyors globally.",
      pillars: [
        {
          title: "Ecosystem Connectivity",
          detail: "One system connecting every actor in the marine insurance value chain.",
        },
        {
          title: "Single Source of Truth",
          detail: "Unified vessel data that eliminates information asymmetry across the market.",
        },
        {
          title: "Global Scale",
          detail: "Infrastructure designed to operate across every marina, every port, every fleet — worldwide.",
        },
      ],
    },
    // Contact
    contact: {
      badge: "Talk to Us",
      description:
        "We work with marine insurers, underwriting desks, brokers, marinas, yacht clubs, and surveying firms that are ready to connect vessel data to underwriting decisions. If your team still makes risk calls without seeing the asset, we should talk.",
      formTitle: "Built for teams that underwrite risk.",
      formDescription: "Whether you're an insurer modernizing your marine book, a broker who needs faster placement, or a marina digitizing fleet inspections, Nudos plugs into your workflow.",
      name: "Company Name",
      email: "Work Email",
      message: "What are you working on?",
      submit: "Get in Touch",
      successTitle: "Message Received",
      successMessage: "We'll review your message and follow up shortly. Looking forward to connecting.",
      overlayTitle: "Live Pipeline",
      overlayDescription: "Vessel data → Risk profile → Underwriting decision.",
    },
    // Stats (repurposed as supplementary data)
    stats: {
      badge: "Scale",
      title: "Infrastructure-grade capacity.",
      description:
        "Processing vessel data across global maritime routes. Building the connective tissue between physical assets and financial decisions.",
      cta: "Talk to Us",
      items: [
        { label: "Standards Mapped", value: "27+" },
        { label: "Structural Zones Scored", value: "7" },
        { label: "Pricing Variables", value: "200+" },
        { label: "Integration Partners", value: "6+" },
        { label: "Time to Decision", value: "Minutes" },
      ],
    },
    // Footer
    footer: {
      tagline: "Nudos — The infrastructure layer for marine risk.",
      pages: "SECTIONS",
      pageLinks: ["The Problem", "The System", "Why Nudos", "Market Validation", "The Future"],
      address: "HEADQUARTERS",
      addresses: [
        { label: "UY", text: "Cuareim 1447, Montevideo, Uruguay" },
        { label: "US", text: "1 Washington Ave, Miami Beach, Florida, United States" }
      ],
      contactUs: "GET IN TOUCH",
      phones: [
        { label: "UY", text: "+(598) 98-576-720", href: "https://wa.me/59898576720" },
        { label: "US", text: "+1 (786) 402-5514", href: "tel:+17864025514" }
      ],
      email: "hi@nudos.app",
      copyright: "2026 NUDOS. All rights reserved.",
      terms: "Terms of Service",
      privacy: "Data Protection",
      cookies: "Cookie Policy",
    },
    // Legal pages
    legal: {
      disclaimer: "",
      backToHome: "Back to home",
      terms: {
        title: "Terms of Service",
        lastUpdated: "Last updated: April 2026",
        sections: [
          {
            heading: "1. Acceptance of terms",
            body: [
              "By accessing or using the Nudos website or platform (collectively, the \"Service\"), you agree to be bound by these Terms of Service. If you do not agree, you may not use the Service.",
            ],
          },
          {
            heading: "2. About Nudos",
            body: [
              "Nudos is a technology platform that uses Computer Vision and AI to structure vessel data for marine underwriting. The Service provides risk analysis tools, condition scoring, valuation outputs, and premium calculations based on user-submitted inputs.",
            ],
          },
          {
            heading: "3. Eligibility",
            body: [
              "The Service is intended for business use by insurers, brokers, shipowners, marinas, surveyors, and their authorized representatives. By using the Service, you represent that you have the authority to bind the entity you represent.",
            ],
          },
          {
            heading: "4. Service description and limitations",
            body: [
              "The Service is a technology tool, not a regulated insurance product. In particular:",
              {
                list: [
                  "Nudos is a technology provider, not a licensed insurer or insurance broker.",
                  "Outputs such as risk scores, valuations, and premium calculations are decision-support tools, not binding insurance determinations.",
                  "Final underwriting and claims decisions remain the responsibility of the contracting insurer or authorized party.",
                ],
              },
            ],
          },
          {
            heading: "5. Account responsibilities and acceptable use",
            body: [
              "When you use the Service, you agree to:",
              {
                list: [
                  "Provide accurate, current information when submitting data to the Service.",
                  "Maintain the confidentiality of any credentials issued to you.",
                  "Not reverse engineer, scrape, or attempt to derive the underlying models.",
                  "Not use the Service in violation of applicable law or third-party rights.",
                ],
              },
            ],
          },
          {
            heading: "6. Intellectual property",
            body: [
              "Nudos retains all right, title, and interest in and to the Service, including its software, models, methodologies, user interface, and any improvements or derivatives. These Terms do not grant you any license to Nudos intellectual property other than the limited right to use the Service as described here.",
            ],
          },
          {
            heading: "7. User-submitted data",
            body: [
              "You retain ownership of vessel imagery, documentation, and other data you submit. By submitting content, you grant Nudos a worldwide, non-exclusive license to process that content to deliver the Service, improve its models using anonymized data, and for internal analytics. Nudos does not sell your submitted content.",
            ],
          },
          {
            heading: "8. Disclaimers and limitation of liability",
            body: [
              "The Service is provided \"as is\" and \"as available\" without warranties of any kind, whether express or implied. To the maximum extent permitted by law, Nudos disclaims all implied warranties, including merchantability and fitness for a particular purpose.",
              "Nudos is not liable for indirect, incidental, special, consequential, or exemplary damages. Nudos's total aggregate liability arising out of or related to these Terms shall not exceed the fees paid (if any) by you in the twelve (12) months preceding the event giving rise to the claim.",
            ],
          },
          {
            heading: "9. Termination",
            body: [
              "Nudos may suspend or terminate your access to the Service at any time for breach of these Terms. You may stop using the Service at any time. Provisions that by their nature should survive termination shall survive.",
            ],
          },
          {
            heading: "10. Governing law",
            body: [
              "For users contracting with the Uruguay entity, these Terms are governed by the laws of the Oriental Republic of Uruguay, with exclusive jurisdiction in the courts of Montevideo.",
              "For users contracting with the United States entity, these Terms are governed by the laws of the State of Florida, with exclusive jurisdiction in the courts of Miami-Dade County, Florida.",
            ],
          },
          {
            heading: "11. Contact",
            body: [
              "Questions about these Terms should be sent to hi@nudos.app.",
            ],
          },
        ],
      },
      privacy: {
        title: "Data Protection",
        lastUpdated: "Last updated: April 2026",
        sections: [
          {
            heading: "1. Who we are",
            body: [
              "Nudos is a technology platform operating from Montevideo, Uruguay, and Miami Beach, Florida. For the purposes of this policy, Nudos is the data controller for personal data collected through the website and Service.",
            ],
          },
          {
            heading: "2. Data we collect",
            body: [
              "We collect the following categories of data:",
              {
                list: [
                  "Contact information you submit through forms (name, company, email, message).",
                  "Vessel imagery, specifications, and related documentation submitted by authorized users.",
                  "Technical data about your visit (IP address, browser, device, pages viewed) via Vercel Analytics.",
                  "Communications you send to us by email or other channels.",
                ],
              },
            ],
          },
          {
            heading: "3. Legal bases for processing",
            body: [
              "We process personal data on the following legal bases: (a) your consent, (b) performance of a contract to which you are a party, (c) our legitimate interests in operating, securing, and improving the Service, and (d) compliance with legal obligations.",
              "We apply the principles of Uruguay Law 18.331 on the Protection of Personal Data, GDPR-equivalent standards, and applicable United States state privacy laws.",
            ],
          },
          {
            heading: "4. How we use your data",
            body: [
              "We use personal data:",
              {
                list: [
                  "To deliver the Service and respond to your requests.",
                  "To improve our models using anonymized and aggregated data.",
                  "To communicate about updates, security, and relevant product information.",
                  "To prevent fraud, abuse, and security incidents.",
                ],
              },
            ],
          },
          {
            heading: "5. Third parties",
            body: [
              "We share data with service providers under appropriate data-processing agreements, including: hosting and analytics (Vercel), transactional email (Resend), and professional advisors when required. We do not sell personal data.",
            ],
          },
          {
            heading: "6. International transfers",
            body: [
              "Your data may be processed in the United States, Uruguay, or other jurisdictions where our service providers operate. Where required, we rely on standard contractual clauses or equivalent safeguards.",
            ],
          },
          {
            heading: "7. Retention",
            body: [
              "We keep personal data only as long as necessary to fulfill the purposes described in this policy, meet legal obligations, resolve disputes, and enforce agreements.",
            ],
          },
          {
            heading: "8. Your rights",
            body: [
              "Subject to applicable law, you have the right to:",
              {
                list: [
                  "Access a copy of your personal data.",
                  "Request correction of inaccurate data.",
                  "Request deletion, subject to legal retention requirements.",
                  "Object to or restrict certain processing.",
                  "Withdraw consent where processing is based on consent.",
                  "File a complaint with your data protection authority.",
                ],
              },
            ],
          },
          {
            heading: "9. Security",
            body: [
              "We apply industry-standard technical and organizational measures, including encryption in transit and at rest, access controls, and periodic security reviews. No system is perfectly secure; please notify us immediately if you suspect unauthorized access to your account.",
            ],
          },
          {
            heading: "10. Changes to this policy",
            body: [
              "We may update this policy from time to time. Material changes will be announced through the Service or by email. Continued use of the Service after changes become effective constitutes acceptance.",
            ],
          },
          {
            heading: "11. Contact and data requests",
            body: [
              "To exercise your rights or ask questions about this policy, write to hi@nudos.app.",
            ],
          },
        ],
      },
      cookies: {
        title: "Cookie Policy",
        lastUpdated: "Last updated: April 2026",
        sections: [
          {
            heading: "1. What cookies are",
            body: [
              "Cookies are small text files stored on your device when you visit a website. They help the site function and provide basic analytics.",
            ],
          },
          {
            heading: "2. Cookies we use",
            body: [
              "We use a minimal set of cookies:",
              {
                list: [
                  "Essential cookies: required for the site to function, for example remembering your language preference during a session. These cannot be disabled.",
                  "Analytics cookies: Vercel Analytics, which provides aggregated, privacy-friendly usage statistics without tracking individuals across sites.",
                ],
              },
            ],
          },
          {
            heading: "3. Third-party cookies",
            body: [
              "Vercel sets analytics cookies on our behalf. We do not embed third-party advertising networks.",
            ],
          },
          {
            heading: "4. How to manage cookies",
            body: [
              "You can control cookies through your browser settings. Most browsers allow you to view, delete, and block cookies from specific sites. Note that disabling essential cookies may affect how the site works.",
            ],
          },
          {
            heading: "5. Changes",
            body: [
              "This Cookie Policy may be updated. The \"Last updated\" date at the top reflects the current version.",
            ],
          },
          {
            heading: "6. Contact",
            body: [
              "Questions about cookies should be sent to hi@nudos.app.",
            ],
          },
        ],
      },
    },
  },
  es: {
    // Header
    nav: {
      home: "INICIO",
      about: "EL PROBLEMA",
      works: "EL SISTEMA",
      services: "POR QUÉ NUDOS",
      traction: "VALIDACIÓN",
      vision: "EL FUTURO",
      letsTalk: "Hablemos",
    },
    // Hero
    hero: {
      badge: "DONDE LOS DATOS DEL BUQUE ENCUENTRAN LA SUSCRIPCIÓN",
      titleStart: "La capa de infraestructura para el ",
      titleHighlight: "riesgo marítimo.",
      description: "Los seguros marítimos siguen operando sin ver el activo real. Nudos convierte datos de embarcaciones en decisiones de suscripción reales — estructuradas, trazables y listas para la firma.",
      cta1: "Ver el Sistema",
      cta2: "Hablemos",
      teamText: "De la foto de la embarcación a la decisión de suscripción. Sin encuestas. Sin demoras.",
      liveBadgeLabel: "Pipeline en Vivo",
      liveBadgeValue: "Dato → Riesgo → Decisión",
    },
    // Logo Cloud
    logoCloud: {
      logos: ["ORT CIE", "Google Cloud", "AIU"],
    },
    // About (EL PROBLEMA)
    about: {
      badge: "El Problema",
      title: "Los seguros marítimos fijan precios sin ver el activo real.",
      description:
        "Cada día, los suscriptores firman millones en exposición sobre embarcaciones que nunca han visto. Los datos que reciben son de segunda mano, inconsistentes y tienen semanas de antigüedad. No existe un estándar para conectar la condición de una embarcación con su perfil de riesgo.\n\nEl resultado: primas mal calculadas, siniestros disputados y decisiones de suscripción basadas en información incompleta.\n\nEsto no es una brecha tecnológica. Es una brecha estructural. Toda la cadena — desde el activo físico hasta la decisión financiera — carece de tejido conectivo.",
      services: [
        "Sin visibilidad del activo",
        "Inspecciones subjetivas",
        "Sin estándares de precios",
        "Ciclos de semanas",
        "Siniestros disputados",
        "Riesgo mal calculado",
        "Sin registro de auditoría",
        "Fragmentación de datos",
        "Cuellos de botella manuales",
      ],
      cta: "Ver Cómo lo Resolvemos",
      cardTitle: "El Costo de la Ceguera",
      cardDescription:
        "Los suscriptores marítimos toman decisiones millonarias basándose en informes PDF y llamadas telefónicas. La industria no tiene una forma unificada y repetible de conectar cómo se ve una embarcación con cuánto debería costar asegurarla.",
      cardStats: [
        { value: "US$39.9B", label: "Pool global de primas marítimas" },
        { value: "40%", label: "Siniestros disputados por mala documentación" },
        { value: "3–6 sem", label: "Tiempo promedio para suscribir una póliza" },
      ],
      cardFooter: "La brecha de datos no es un inconveniente. Es un costo estructural.",
    },
    // What Nudos Is
    whatNudosIs: {
      badge: "Qué Es Nudos",
      title: "Una infraestructura de suscripción.",
      titleAccent: "No una herramienta de inspección.",
      description: "Nudos es la capa conectiva entre embarcaciones físicas y decisiones financieras. Estructuramos el camino desde datos crudos del activo hasta decisiones de suscripción — para que cada decisión sea trazable, repetible y defendible.",
      pillars: [
        {
          label: "Activos Físicos",
          detail: "Imágenes de embarcaciones capturadas en el punto de inspección, cubriendo cada zona estructural crítica.",
        },
        {
          label: "Datos Estructurados",
          detail: "Puntajes de condición, valoraciones y verificaciones de cumplimiento mapeados contra 27+ estándares internacionales.",
        },
        {
          label: "Decisiones de Suscripción",
          detail: "Perfiles de riesgo, primas y registros de auditoría generados a partir de datos verificados — no estimaciones.",
        },
      ],
    },
    // Selected Works (EL SISTEMA — Etapas del pipeline)
    works: {
      badge: "El Sistema",
      title: "Cinco etapas. ",
      titleAccent: "Una decisión.",
      items: [
        {
          eyebrow: "Etapa 01 — Captura",
          title: "Ver el activo real.",
          description:
            "Las imágenes de la embarcación se capturan y procesan a través de nuestro motor de visión. El sistema identifica la embarcación, mapea zonas estructurales y marca daños visibles — generando la capa de datos crudos que alimenta todo lo que sigue. Sin visita al sitio. Sin intermediario.",
          features: ["Inspección Visual", "Mapeo de Zonas", "Detección de Daños"],
        },
        {
          eyebrow: "Etapa 02 — Entender",
          title: "Puntuar la condición.",
          description:
            "La plataforma traduce los hallazgos visuales en datos de condición estructurados. Cada componente se puntúa contra SOLAS, MARPOL, ABYC y 27+ estándares marítimos. El resultado es una evaluación repetible y objetiva — consistente sin importar quién suba los datos o dónde esté la embarcación.",
          features: ["Puntuación de Condición", "Cumplimiento Normativo", "Consistencia"],
        },
        {
          eyebrow: "Etapa 03 — Decidir",
          title: "Cotizar con trazabilidad total.",
          description:
            "Los datos de condición y valoración fluyen a nuestro motor de precios determinístico. El resultado: primas H&M y P&I donde cada variable está nombrada, ponderada y registrada con marca temporal. Mismas entradas, mismo resultado, siempre. Diseñado para auditoría, diseñado para la línea.",
          features: ["Motor de Primas", "Ponderación de Riesgo", "Registro de Auditoría"],
        },
        {
          eyebrow: "Etapa 04 — Valorar",
          title: "Determinar cuánto vale.",
          description:
            "El sistema cruza datos de condición con comparables de mercado, curvas de depreciación y benchmarks de costo de reposición para producir una valoración defendible del buque. Sin adivinanzas. Sin estimaciones de broker. Un número respaldado por datos.",
          features: ["Valoración de Mercado", "Curvas de Depreciación", "Análisis Comparativo"],
        },
        {
          eyebrow: "Etapa 05 — Monitorear",
          title: "Riesgo continuo, no una foto.",
          description:
            "El riesgo no se detiene al suscribir. Nudos rastrea cambios de condición en el tiempo, señala deterioros y actualiza perfiles de riesgo a medida que ingresa nueva información. Cuando ocurre un siniestro, la línea base histórica ya está ahí — con marca temporal y defendible.",
          features: ["Monitoreo Continuo", "Línea Base de Siniestros", "Deriva de Riesgo"],
        },
      ],
    },
    // Services (POR QUÉ NUDOS ES DIFERENTE)
    services: {
      badge: "Por Qué Nudos Es Diferente",
      title: "Construido para profundidad, no amplitud.",
      items: [
        {
          title: "Profundidad Vertical",
          description:
            "No hacemos SaaS horizontal. Vamos profundo en una vertical — seguros marítimos — y dominamos todo el stack desde la inspección física hasta la decisión financiera. Cada modelo, cada estándar, cada variable de precios es específica para el sector marítimo.",
        },
        {
          title: "Arquitectura Híbrida",
          description:
            "La IA maneja el análisis visual y el reconocimiento de patrones. Los motores determinísticos manejan precios y cumplimiento. El resultado: inteligencia creativa donde importa, precisión matemática donde cuenta.",
        },
        {
          title: "Pipeline de Extremo a Extremo",
          description:
            "La mayoría de las soluciones cubren una etapa. Nudos conecta toda la cadena — captura, puntuación de condición, valoración, cálculo de primas e inteligencia de siniestros — en un solo sistema. Sin traspasos. Sin pérdida de datos entre pasos.",
        },
        {
          title: "Inteligencia de Siniestros",
          description:
            "Cada inspección crea una línea base visual con marca temporal. Cuando ocurre un siniestro, Nudos proporciona la evidencia del antes y el después que acelera la liquidación y reduce exponencialmente la exposición al fraude.",
        },
      ],
    },
    // Data Advantage
    dataAdvantage: {
      badge: "La Ventaja de Datos",
      title: "Cada inspección hace al sistema más inteligente.",
      description: "Nudos no es software estático. Es una capa de inteligencia compuesta. Cada embarcación inspeccionada, cada prima calculada, cada siniestro procesado retroalimenta el sistema — refinando modelos de riesgo, mejorando precisión y construyendo un dataset propietario que ningún competidor puede replicar.",
      metrics: [
        { label: "Perfiles de embarcaciones en el sistema", value: "Creciendo" },
        { label: "Puntos de datos por embarcación", value: "200+" },
        { label: "Estándares marítimos mapeados", value: "27+" },
        { label: "Mejora de precisión en primas", value: "Continua" },
      ],
      anchor: "Esto no es una funcionalidad. Es una barrera competitiva.",
    },
    // Traction / Validation
    traction: {
      badge: "Validación",
      title: "Ya integrado en el ecosistema.",
      description: "Nudos está activo en toda la cadena de valor del seguro marítimo — trabajando con los actores que suscriben, distribuyen y gestionan el riesgo marítimo.",
      actors: [
        {
          type: "Aseguradoras",
          names: "Carriers nacionales de primer nivel",
          detail: "Integración directa con equipos de suscripción para evaluación de riesgo automatizada y generación de primas. Múltiples carriers en pipeline.",
        },
        {
          type: "Brokers",
          names: "Redes de brokers digitales",
          detail: "Permitiendo a los brokers entregar informes de embarcaciones estructurados y auditables que aceleran la colocación.",
        },
        {
          type: "Marinas y Yacht Clubs",
          names: "Alianzas activas de flota",
          detail: "Infraestructura de inspección a nivel de flota desplegada en puntos de concentración de activos en múltiples ubicaciones.",
        },
        {
          type: "Peritos",
          names: "Red profesional",
          detail: "Potenciando flujos de trabajo de inspección tradicional con captura de datos estructurada y resultado estandarizado.",
        },
      ],
    },
    // Vision
    vision: {
      badge: "La Visión",
      title: "Construyendo la infraestructura global para la suscripción marítima.",
      description: "Nudos avanza hacia un mundo donde cada decisión de suscripción marítima está respaldada por datos verificados y estructurados del activo real. Una única fuente de verdad que conecta aseguradoras, brokers, marinas y peritos — a nivel global.",
      pillars: [
        {
          title: "Conectividad del Ecosistema",
          detail: "Un sistema conectando cada actor en la cadena de valor del seguro marítimo.",
        },
        {
          title: "Fuente Única de Verdad",
          detail: "Datos unificados de embarcaciones que eliminan la asimetría de información en el mercado.",
        },
        {
          title: "Escala Global",
          detail: "Infraestructura diseñada para operar en cada marina, cada puerto, cada flota — en todo el mundo.",
        },
      ],
    },
    // Contact
    contact: {
      badge: "Hablemos",
      description:
        "Trabajamos con aseguradoras marítimas, equipos de suscripción, brokers, marinas, yacht clubs y firmas de peritaje que están listos para conectar datos de embarcaciones con decisiones de suscripción. Si tu equipo todavía decide riesgo sin ver el activo, deberíamos hablar.",
      formTitle: "Diseñado para equipos que suscriben riesgo.",
      formDescription: "Ya seas una aseguradora buscando modernizar tu cartera marítima, un broker que necesita colocación más rápida, o una marina lista para digitalizar inspecciones de flota — Nudos se integra a tu flujo de trabajo.",
      name: "Nombre de la Empresa",
      email: "Correo Corporativo",
      message: "¿En qué estás trabajando?",
      submit: "Contactar",
      successTitle: "Mensaje Recibido",
      successMessage: "Revisaremos tu mensaje y te responderemos a la brevedad. Esperamos conectar contigo.",
      overlayTitle: "Pipeline en Vivo",
      overlayDescription: "Datos del buque → Perfil de riesgo → Decisión de suscripción.",
    },
    // Stats
    stats: {
      badge: "Escala",
      title: "Capacidad de nivel infraestructura.",
      description:
        "Procesando datos de embarcaciones en rutas marítimas globales. Construyendo el tejido conectivo entre activos físicos y decisiones financieras.",
      cta: "Hablemos",
      items: [
        { label: "Estándares Mapeados", value: "27+" },
        { label: "Zonas Estructurales Evaluadas", value: "7" },
        { label: "Variables de Pricing", value: "200+" },
        { label: "Socios de Integración", value: "6+" },
        { label: "Tiempo a Decisión", value: "Minutos" },
      ],
    },
    // Footer
    footer: {
      tagline: "Nudos — La capa de infraestructura para el riesgo marítimo. De datos de embarcaciones a decisiones de suscripción.",
      pages: "SECCIONES",
      pageLinks: ["El Problema", "El Sistema", "Por Qué Nudos", "Validación", "El Futuro"],
      address: "SEDE CENTRAL",
      addresses: [
        { label: "UY", text: "Cuareim 1447, Montevideo, Uruguay" },
        { label: "US", text: "1 Washington Ave, Miami Beach, Florida, United States" }
      ],
      contactUs: "CONTACTO",
      phones: [
        { label: "UY", text: "+(598) 98-576-720", href: "https://wa.me/59898576720" },
        { label: "US", text: "+1 (786) 402-5514", href: "tel:+17864025514" }
      ],
      email: "hi@nudos.app",
      copyright: "2026 NUDOS. Todos los derechos reservados.",
      terms: "Términos de Servicio",
      privacy: "Protección de Datos",
      cookies: "Política de Cookies",
    },
    // Legal pages
    legal: {
      disclaimer: "Este es un modelo y debe ser revisado por asesores legales antes de su uso en producción.",
      backToHome: "Volver al inicio",
      terms: {
        title: "Términos de Servicio",
        lastUpdated: "Última actualización: Abril 2026",
        sections: [
          {
            heading: "1. Aceptación de los términos",
            body: [
              "Al acceder o utilizar el sitio web y la plataforma de Nudos (conjuntamente, el \"Servicio\"), aceptas quedar vinculado por estos Términos de Servicio. Si no estás de acuerdo, no debes utilizar el Servicio.",
            ],
          },
          {
            heading: "2. Acerca de Nudos",
            body: [
              "Nudos es una plataforma tecnológica que utiliza Computer Vision e IA para estructurar datos de embarcaciones con fines de suscripción marítima. El Servicio ofrece herramientas de análisis de riesgo, puntuación de condición, valoraciones y cálculos de primas basados en insumos aportados por los usuarios.",
            ],
          },
          {
            heading: "3. Elegibilidad",
            body: [
              "El Servicio está destinado al uso empresarial por parte de aseguradoras, brokers, armadores, marinas, peritos y sus representantes autorizados. Al utilizar el Servicio, declaras contar con la autoridad para vincular a la entidad que representas.",
            ],
          },
          {
            heading: "4. Descripción del Servicio y limitaciones",
            body: [
              "El Servicio es una herramienta tecnológica, no un producto de seguro regulado. En particular:",
              {
                list: [
                  "Nudos es un proveedor de tecnología, no una aseguradora ni un broker licenciado.",
                  "Los resultados como puntajes de riesgo, valoraciones y cálculos de primas son herramientas de apoyo a la decisión, no determinaciones vinculantes de seguro.",
                  "Las decisiones finales de suscripción y siniestros son responsabilidad de la aseguradora contratante o parte autorizada.",
                ],
              },
            ],
          },
          {
            heading: "5. Responsabilidades de la cuenta y uso aceptable",
            body: [
              "Al utilizar el Servicio, aceptas:",
              {
                list: [
                  "Proveer información precisa y actualizada al enviar datos al Servicio.",
                  "Mantener la confidencialidad de las credenciales emitidas a tu nombre.",
                  "No realizar ingeniería inversa, scraping ni intentar derivar los modelos subyacentes.",
                  "No utilizar el Servicio en violación de la ley aplicable o derechos de terceros.",
                ],
              },
            ],
          },
          {
            heading: "6. Propiedad intelectual",
            body: [
              "Nudos conserva todo derecho, título e interés sobre el Servicio, incluyendo su software, modelos, metodologías, interfaz y toda mejora o derivado. Estos Términos no otorgan licencia alguna sobre la propiedad intelectual de Nudos más allá del derecho limitado de uso del Servicio aquí descrito.",
            ],
          },
          {
            heading: "7. Datos enviados por el usuario",
            body: [
              "Conservas la titularidad de las imágenes de embarcaciones, documentación y demás datos que envíes. Al enviar contenido, otorgas a Nudos una licencia mundial y no exclusiva para procesarlo con el fin de prestar el Servicio, mejorar sus modelos con datos anonimizados y para análisis internos. Nudos no vende tu contenido.",
            ],
          },
          {
            heading: "8. Descargos de responsabilidad y limitación de responsabilidad",
            body: [
              "El Servicio se brinda \"tal cual\" y \"según disponibilidad\", sin garantías de ningún tipo, expresas o implícitas. En la máxima medida permitida por la ley, Nudos rechaza todas las garantías implícitas, incluyendo comerciabilidad e idoneidad para un propósito particular.",
              "Nudos no es responsable por daños indirectos, incidentales, especiales, consecuentes o ejemplares. La responsabilidad total agregada derivada de estos Términos no excederá los honorarios pagados (si los hubiera) en los doce (12) meses previos al hecho que dio origen al reclamo.",
            ],
          },
          {
            heading: "9. Terminación",
            body: [
              "Nudos podrá suspender o dar por terminado tu acceso al Servicio en cualquier momento por incumplimiento de estos Términos. Puedes dejar de utilizar el Servicio en cualquier momento. Las disposiciones que por su naturaleza deban sobrevivir, sobrevivirán a la terminación.",
            ],
          },
          {
            heading: "10. Ley aplicable",
            body: [
              "Para los usuarios que contraten con la entidad de Uruguay, estos Términos se rigen por las leyes de la República Oriental del Uruguay, con jurisdicción exclusiva en los tribunales de Montevideo.",
              "Para los usuarios que contraten con la entidad de Estados Unidos, estos Términos se rigen por las leyes del Estado de Florida, con jurisdicción exclusiva en los tribunales del Condado de Miami-Dade, Florida.",
            ],
          },
          {
            heading: "11. Contacto",
            body: [
              "Consultas sobre estos Términos deben enviarse a hi@nudos.app.",
            ],
          },
        ],
      },
      privacy: {
        title: "Protección de Datos",
        lastUpdated: "Última actualización: Abril 2026",
        sections: [
          {
            heading: "1. Quiénes somos",
            body: [
              "Nudos es una plataforma tecnológica que opera desde Montevideo, Uruguay, y Miami Beach, Florida. A los efectos de esta política, Nudos es el responsable del tratamiento de los datos personales recolectados a través del sitio web y el Servicio.",
            ],
          },
          {
            heading: "2. Datos que recolectamos",
            body: [
              "Recolectamos las siguientes categorías de datos:",
              {
                list: [
                  "Información de contacto enviada a través de formularios (nombre, empresa, correo electrónico, mensaje).",
                  "Imágenes de embarcaciones, especificaciones y documentación relacionada enviadas por usuarios autorizados.",
                  "Datos técnicos de tu visita (dirección IP, navegador, dispositivo, páginas vistas) mediante Vercel Analytics.",
                  "Comunicaciones que nos envíes por correo electrónico u otros canales.",
                ],
              },
            ],
          },
          {
            heading: "3. Bases legales del tratamiento",
            body: [
              "Tratamos datos personales en base a: (a) tu consentimiento, (b) la ejecución de un contrato del que seas parte, (c) nuestros intereses legítimos en operar, asegurar y mejorar el Servicio, y (d) el cumplimiento de obligaciones legales.",
              "Aplicamos los principios de la Ley 18.331 de Protección de Datos Personales de Uruguay, estándares equivalentes al GDPR y las leyes estatales de privacidad aplicables en Estados Unidos.",
            ],
          },
          {
            heading: "4. Cómo utilizamos tus datos",
            body: [
              "Utilizamos los datos personales:",
              {
                list: [
                  "Para prestar el Servicio y responder a tus solicitudes.",
                  "Para mejorar nuestros modelos utilizando datos anonimizados y agregados.",
                  "Para comunicarnos sobre actualizaciones, seguridad e información relevante del producto.",
                  "Para prevenir fraudes, abusos e incidentes de seguridad.",
                ],
              },
            ],
          },
          {
            heading: "5. Terceros",
            body: [
              "Compartimos datos con proveedores de servicios bajo acuerdos de tratamiento de datos apropiados, incluyendo: hosting y analítica (Vercel), correo transaccional (Resend) y asesores profesionales cuando sea necesario. No vendemos datos personales.",
            ],
          },
          {
            heading: "6. Transferencias internacionales",
            body: [
              "Tus datos pueden procesarse en Estados Unidos, Uruguay u otras jurisdicciones donde operan nuestros proveedores. Cuando corresponda, aplicamos cláusulas contractuales estándar o salvaguardas equivalentes.",
            ],
          },
          {
            heading: "7. Retención",
            body: [
              "Conservamos los datos personales sólo durante el tiempo necesario para cumplir los fines descritos, las obligaciones legales, resolver disputas y hacer cumplir acuerdos.",
            ],
          },
          {
            heading: "8. Tus derechos",
            body: [
              "Sujeto a la ley aplicable, tienes derecho a:",
              {
                list: [
                  "Acceder a una copia de tus datos personales.",
                  "Solicitar la corrección de datos inexactos.",
                  "Solicitar la eliminación, sujeta a requerimientos legales de retención.",
                  "Oponerte o restringir ciertos tratamientos.",
                  "Retirar el consentimiento cuando el tratamiento se base en él.",
                  "Presentar un reclamo ante la autoridad de protección de datos correspondiente.",
                ],
              },
            ],
          },
          {
            heading: "9. Seguridad",
            body: [
              "Aplicamos medidas técnicas y organizativas estándar de la industria, incluyendo cifrado en tránsito y en reposo, controles de acceso y revisiones periódicas. Ningún sistema es perfectamente seguro; notifícanos de inmediato si sospechas de un acceso no autorizado a tu cuenta.",
            ],
          },
          {
            heading: "10. Cambios a esta política",
            body: [
              "Podemos actualizar esta política periódicamente. Los cambios relevantes serán anunciados a través del Servicio o por correo electrónico. El uso continuado del Servicio luego de su vigencia implica aceptación.",
            ],
          },
          {
            heading: "11. Contacto y solicitudes de datos",
            body: [
              "Para ejercer tus derechos o hacer consultas sobre esta política, escribe a hi@nudos.app.",
            ],
          },
        ],
      },
      cookies: {
        title: "Política de Cookies",
        lastUpdated: "Última actualización: Abril 2026",
        sections: [
          {
            heading: "1. Qué son las cookies",
            body: [
              "Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Ayudan al funcionamiento del sitio y proveen analítica básica.",
            ],
          },
          {
            heading: "2. Cookies que utilizamos",
            body: [
              "Utilizamos un conjunto mínimo de cookies:",
              {
                list: [
                  "Cookies esenciales: necesarias para que el sitio funcione, por ejemplo para recordar tu preferencia de idioma durante una sesión. No pueden desactivarse.",
                  "Cookies de analítica: Vercel Analytics, que provee estadísticas de uso agregadas y respetuosas de la privacidad, sin rastreo individual entre sitios.",
                ],
              },
            ],
          },
          {
            heading: "3. Cookies de terceros",
            body: [
              "Vercel coloca cookies de analítica en nuestro nombre. No integramos redes publicitarias de terceros.",
            ],
          },
          {
            heading: "4. Cómo gestionar las cookies",
            body: [
              "Puedes controlar las cookies a través de la configuración de tu navegador. La mayoría de los navegadores permite ver, eliminar y bloquear cookies de sitios específicos. Ten en cuenta que desactivar cookies esenciales puede afectar el funcionamiento del sitio.",
            ],
          },
          {
            heading: "5. Cambios",
            body: [
              "Esta Política de Cookies puede actualizarse. La fecha \"Última actualización\" en la parte superior refleja la versión vigente.",
            ],
          },
          {
            heading: "6. Contacto",
            body: [
              "Consultas sobre cookies deben enviarse a hi@nudos.app.",
            ],
          },
        ],
      },
    },
  },
};

type Translations = typeof translations
type TranslationKeys = Translations["en"]

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: TranslationKeys
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en")

  const value: I18nContextType = {
    locale,
    setLocale,
    t: translations[locale],
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}

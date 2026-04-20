import Image from "next/image"
import { Quote } from "lucide-react"

const testimonials = [
  {
    title: "Transformed Our Cargo Operations!",
    quote:
      "NUDOS cut our insurance quoting time from days to minutes. The computer vision analysis of our container images is incredibly accurate — damage detection alone has saved us hundreds of thousands in disputed claims.",
    author: "Savannah Nguyen",
    location: "Singapore, Asia-Pacific",
    image: "/images/imgi_108_user88.webp",
  },
  {
    title: "Vessel Assessment is a Game Changer!",
    quote:
      "The VesselScan Pro tool gives us a detailed condition report before every voyage. We trust the AI-generated seaworthiness score more than traditional manual inspections — it's faster and far more consistent.",
    author: "Darlene Robertson",
    location: "Hamburg, Germany",
    image: "/images/imgi_113_user93.webp",
  },
  {
    title: "Precise Premiums, Zero Surprises!",
    quote:
      "Before NUDOS, our cargo premiums were based on broad estimates. Now every quote is backed by real image analysis and route risk data. Our loss ratio has improved significantly in just one year.",
    author: "Michael Chen",
    location: "Shanghai, China",
    image: "/images/imgi_109_user89.webp",
  },
  {
    title: "Automated Claims That Actually Work!",
    quote:
      "NUDOS processes our cargo claims in hours instead of weeks. The visual evidence analysis is airtight and our clients appreciate the transparency. It has completely changed how we handle maritime disputes.",
    author: "Emily Rodriguez",
    location: "Miami, Florida",
    image: "/images/imgi_107_user87.webp",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4">
          <Quote className="w-5 h-5 text-accent" strokeWidth={2} />
          <span className="text-sm font-medium text-foreground/70">Testimonials</span>
        </div>

        <h2 className="text-3xl font-serif text-foreground mb-12 md:text-5xl">What Shippers Say</h2>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background rounded-3xl p-8 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">{testimonial.title}</h3>
              <p className="text-foreground/70 mb-8 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={56}
                  height={56}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-foreground/60">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import Link from "next/link"
import { BookOpen } from "lucide-react"

const articles = [
  {
    category: "Computer Vision",
    date: "Mar 5, 2025",
    title: "How computer vision is revolutionizing hull damage detection in cargo ships",
    image: "https://res.cloudinary.com/drasbgjxe/image/upload/q_auto/f_auto/v1776652498/cargo-vision-inspection_yhxpc7.jpg",
    href: "/blog/computer-vision-hull-inspection",
  },
  {
    category: "Maritime AI",
    date: "Mar 5, 2025",
    title: "Vessel condition scoring: how AI outperforms traditional maritime surveys",
    image: "https://res.cloudinary.com/drasbgjxe/image/upload/q_auto/f_auto/v1776652504/vessel-ai-assessment_dyupaw.jpg",
    href: "/blog/ai-vessel-condition-scoring",
  },
  {
    category: "InsurTech",
    date: "Mar 5, 2025",
    title: "From ship photo to policy: the future of instant vessel insurance premiums",
    image: "https://res.cloudinary.com/drasbgjxe/image/upload/q_auto/f_auto/v1776652498/cargo-insurance-app_pgd9ga.jpg",
    href: "/blog/instant-ship-insurance-premiums",
  },
]

export default function LatestArticles() {
  return (
    <section id="blog" className="py-20 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-accent" strokeWidth={2} />
          <span className="text-sm font-medium text-foreground/70">Industry Insights</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-12">Latest Articles</h2>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Link key={index} href={article.href} className="group">
              <div className="rounded-2xl overflow-hidden mb-4">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={400}
                  height={250}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center gap-4 mb-3">
                <span className="text-xs font-medium text-foreground/60 bg-secondary px-3 py-1 rounded-full">
                  {article.category}
                </span>
                <span className="text-xs text-foreground/60">{article.date}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors capitalize">
                {article.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

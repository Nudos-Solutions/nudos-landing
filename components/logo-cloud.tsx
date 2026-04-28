"use client"

import Image from "next/image"

const LOGOS = [
  { src: "https://res.cloudinary.com/drasbgjxe/image/upload/q_auto/f_auto/v1776652503/ort-cie-logo_dvmchk.png/images/ort-cie-logo.png", alt: "ORT CIE", href: "https://cie.ort.edu.uy/" },
  { src: "https://res.cloudinary.com/drasbgjxe/image/upload/q_auto/f_auto/v1776652500/google-cloud-startups_nkznbf.webp", alt: "Google Cloud for Startups", href: "https://cloud.google.com/startup" },
  { src: "https://res.cloudinary.com/drasbgjxe/image/upload/q_auto/f_auto/v1776652499/aiu-logo_uzyjrd.png", alt: "AIU", href: "https://www.linkedin.com/company/asociacion-insurtech-uruguaya/" },
]

export default function LogoCloud() {
  return (
    <section className="py-4 px-6 border-y border-border bg-card border-none">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {LOGOS.map((logo) => (
            <a
              key={logo.alt}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative opacity-80 hover:opacity-100 transition-opacity"
              style={{ width: 220, height: 100, display: "block" }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="220px"
                className="object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [visible, setVisible] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("nudos-visited")
    if (!hasVisited) {
      sessionStorage.setItem("nudos-visited", "1")
      return
    }

    setVisible(true)
    const timer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => setVisible(false), 600)
    }, 1400)

    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-600 ${fadeOut ? "opacity-0" : "opacity-100"}`}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-2">
          <img
            src="/images/nudos-logo.svg"
            alt="NUDOS"
            width={32}
            height={32}
          />
          <span className="text-foreground text-2xl font-bold">
            NUDOS
          </span>
        </div>

        {/* Animated line */}
        <div className="w-32 h-px bg-foreground/10 rounded-full overflow-hidden">
          <div className="h-full w-1/3 bg-accent rounded-full animate-[loadingSlide_1.2s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  )
}

import { ImageResponse } from "next/og"
import { type NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const title = searchParams.get("title") || "NUDOS"
  const subtitle = searchParams.get("subtitle") || "AI-Powered Marine Insurance Infrastructure"

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          padding: "60px 80px",
          position: "relative",
        }}
      >
        {/* Accent gradient */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "50%",
            height: "50%",
            background: "radial-gradient(circle at top right, rgba(31,106,255,0.15), transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "40%",
            height: "40%",
            background: "radial-gradient(circle at bottom left, rgba(31,106,255,0.08), transparent 70%)",
          }}
        />

        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              backgroundColor: "#1f6aff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              fontWeight: 900,
              color: "white",
            }}
          >
            N
          </div>
          <span
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "white",
              letterSpacing: "2px",
            }}
          >
            NUDOS
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 60 ? "42px" : "52px",
            fontWeight: 900,
            color: "white",
            lineHeight: 1.15,
            maxWidth: "900px",
            marginBottom: "20px",
          }}
        >
          {title}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "22px",
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.4,
            maxWidth: "700px",
          }}
        >
          {subtitle}
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "80px",
            right: "80px",
            height: "3px",
            background: "linear-gradient(to right, #1f6aff, transparent)",
            borderRadius: "2px",
          }}
        />

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            right: "80px",
            fontSize: "16px",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          nudos.app
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}

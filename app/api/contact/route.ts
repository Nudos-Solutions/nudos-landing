import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    const { error: sendError } = await resend.emails.send({
      from: "Nudos Contact Form <hi@nudos.app>",
      to: "hi@nudos.app",
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    })

    if (sendError) {
      console.error("Failed to send contact form email:", sendError)
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      )
    }

    await resend.emails.send({
      from: "Nudos <hi@nudos.app>",
      to: email,
      subject: "We received your message",
      text: `Hi ${name},\n\nThanks for reaching out — we received your message and will be in touch as soon as possible.\n\nThe Nudos Team\nhi@nudos.app`,
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    )
  }
}

import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { fullName, phone, from, to, email, date, details } = body

    // Validación básica (producción ready)
    if (!fullName || !phone || !from || !to || !email || !date) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    await resend.emails.send({
      from: "Top Movers <info@topmoversusatx.com>",
      to: ["info@topmoversusatx.com>"],
      subject: `🚚 New Move Request – ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="margin-bottom: 20px;">🚚 New Moving Request</h2>
          
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>From:</strong> ${from}</p>
          <p><strong>To:</strong> ${to}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Date:</strong> ${date}</p>
          
          ${
            details
              ? `<p><strong>Details:</strong> ${details}</p>`
              : ""
          }

          <hr style="margin-top: 30px; margin-bottom: 10px;" />
          <p style="font-size: 12px; color: #888;">
            Sent from topmoversusatx.com contact form
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact API Error:", error)

    return NextResponse.json(
      { error: "Error sending email" },
      { status: 500 }
    )
  }
}

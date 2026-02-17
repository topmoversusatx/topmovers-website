import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { fullName, phone, from, to, email, date, details } = body

    await resend.emails.send({
      from: "Top Movers <info@topmoversusatx.com>",
      to: ["info@topmoversusatx.com"],
      subject: `🚚 New Move Request – ${fullName}`,
      html: `
        <h2>New Moving Request</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>From:</strong> ${from}</p>
        <p><strong>To:</strong> ${to}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Details:</strong> ${details}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Error sending email" }, { status: 500 })
  }
}

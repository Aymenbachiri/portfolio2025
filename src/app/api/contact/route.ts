import { type NextRequest, NextResponse } from "next/server";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import { contactFormSchema } from "@/lib/schema/schema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const result = contactFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.format() },
        { status: 400 },
      );
    }

    const { name, email, subject, message } = result.data;

    const mailerSend = new MailerSend({
      apiKey: process.env.MAILERSEND_API_KEY || "",
    });

    const sentFrom = new Sender(
      "noreply@yourdomain.com",
      "Portfolio Contact Form",
    );
    const recipients = [
      new Recipient("aymen.bachiri99@gmail.com", "Aymen Bachiri"),
    ];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject(`Portfolio Contact: ${subject}`).setHtml(`
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}</p>
      `).setText(`
        New contact form submission
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `);

    await mailerSend.email.send(emailParams);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: `Failed to send email ${error}` },
      { status: 500 },
    );
  }
}

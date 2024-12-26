import { NextResponse } from 'next/server'
import * as z from 'zod'
import nodemailer from 'nodemailer'
import fs from 'fs'
import path from 'path'

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string(),
  message: z.string().min(10),
})

const logToFile = (message: string) => {
  const logPath = path.join(process.cwd(), 'contact-form.log')
  fs.appendFileSync(logPath, `${new Date().toISOString()}: ${message}\n`)
}

export async function POST(req: Request) {
  logToFile('API route hit')
  try {
    const body = await req.json()
    logToFile(`Received body: ${JSON.stringify(body)}`)

    const { name, email, subject, message } = formSchema.parse(body)

    logToFile(`Parsed form data: ${JSON.stringify({ name, email, subject, message })}`)

    // Log environment variables (be careful not to log sensitive information in production)
    logToFile(`SMTP_HOST: ${process.env.SMTP_HOST}`)
    logToFile(`SMTP_PORT: ${process.env.SMTP_PORT}`)
    logToFile(`SMTP_USER: ${process.env.SMTP_USER}`)

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Send email
    try {
      const info = await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: 'info@tonekingdev.com', // Replace with the recipient email address
        subject: `New Contact Form Submission: ${subject}`,
        text: `
          Name: ${name}
          Email: ${email}
          Subject: ${subject}
          Message: ${message}
        `,
        html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      })
      logToFile(`Email sent: ${info.messageId}`)
    } catch (emailError) {
      logToFile(`Error sending email: ${emailError}`)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ message: 'Form submitted successfully' })
  } catch (error) {
    logToFile(`Error processing contact form: ${error}`)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 })
  }
}
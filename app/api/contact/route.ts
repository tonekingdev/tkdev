import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, message }: { name: string; email: string; message: string } = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Tone King Development Contact Form" <${process.env.SMTP_USER}>`,
      to: 'info@tonekingdev.com',
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\nReply to this email to respond directly to the visitor.`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p>Reply to this email to respond directly to the visitor.</p>
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}


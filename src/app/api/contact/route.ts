import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Resend } from "resend";

const RECIPIENT_EMAIL = "officialutshob@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Sender Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid return email address is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { error: "Transmission message must be at least 5 characters long." },
        { status: 400 }
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();
    const timestamp = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });

    // HTML Email Template (styled like Utshob's Retro Terminal)
    const emailHtml = `
      <div style="background-color: #07080c; color: #f3f4f6; font-family: 'Courier New', Courier, monospace; padding: 24px; border: 2px solid #10b981; max-width: 600px; margin: 0 auto;">
        <div style="border-bottom: 2px solid #1f283d; padding-bottom: 12px; margin-bottom: 16px;">
          <h2 style="color: #10b981; margin: 0; font-size: 18px; letter-spacing: 1px;">
            [PORTFOLIO_UPLINK] Incoming Signal
          </h2>
          <p style="color: #6b7280; margin: 4px 0 0 0; font-size: 12px;">
            Transmitted: ${timestamp} (BST)
          </p>
        </div>

        <div style="background-color: #0d101a; border: 1px solid #20273c; padding: 16px; margin-bottom: 16px;">
          <p style="margin: 0 0 8px 0; font-size: 14px;">
            <strong style="color: #06b6d4;">Sender:</strong> ${cleanName}
          </p>
          <p style="margin: 0 0 8px 0; font-size: 14px;">
            <strong style="color: #06b6d4;">Reply-To Email:</strong> 
            <a href="mailto:${cleanEmail}" style="color: #10b981; text-decoration: underline;">${cleanEmail}</a>
          </p>
        </div>

        <div style="background-color: #0d101a; border: 1px solid #20273c; padding: 16px; margin-bottom: 16px;">
          <strong style="color: #10b981; display: block; margin-bottom: 8px; font-size: 13px;">
            TRANSMISSION CONTENT:
          </strong>
          <div style="color: #e5e7eb; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">
${cleanMessage}
          </div>
        </div>

        <div style="border-top: 1px solid #1a2030; padding-top: 12px; font-size: 11px; color: #4b5563; text-align: center;">
          Utshob Bose Portfolio · Terminal v2026 · Dispatcher System
        </div>
      </div>
    `;

    // 1. Try sending via Resend if API key is present
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const { error: resendError } = await resend.emails.send({
          from: process.env.RESEND_FROM || "Portfolio Uplink <onboarding@resend.dev>",
          to: [RECIPIENT_EMAIL],
          replyTo: cleanEmail,
          subject: `[Portfolio Signal] Message from ${cleanName}`,
          html: emailHtml,
          text: `New Portfolio Message\n\nFrom: ${cleanName} (${cleanEmail})\nDate: ${timestamp}\n\nMessage:\n${cleanMessage}`,
        });

        if (resendError) {
          console.error("[RESEND_ERROR]", resendError);
          throw new Error(resendError.message);
        }

        return NextResponse.json({
          success: true,
          message: `Signal transmitted to ${RECIPIENT_EMAIL}! Utshob has received your message.`,
        });
      } catch (err: any) {
        console.error("[RESEND_FAILED]", err);
      }
    }

    // 2. Try sending via Gmail App Password / Nodemailer SMTP
    const gmailPass = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS;
    const gmailUser = process.env.GMAIL_USER || process.env.SMTP_USER || RECIPIENT_EMAIL;

    if (gmailPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: gmailUser,
            pass: gmailPass.replace(/\s+/g, ""), // Remove any spaces in Google App Password
          },
        });

        await transporter.sendMail({
          from: `"Portfolio Uplink" <${gmailUser}>`,
          to: RECIPIENT_EMAIL,
          replyTo: cleanEmail,
          subject: `[Portfolio Signal] Message from ${cleanName}`,
          html: emailHtml,
          text: `New Portfolio Message\n\nFrom: ${cleanName} (${cleanEmail})\nDate: ${timestamp}\n\nMessage:\n${cleanMessage}`,
        });

        return NextResponse.json({
          success: true,
          message: `Signal transmitted to ${RECIPIENT_EMAIL}! Utshob will respond shortly.`,
        });
      } catch (smtpErr: any) {
        console.error("[SMTP_FAILED]", smtpErr);
        return NextResponse.json(
          {
            error: `SMTP Transmission error: ${smtpErr.message || "Failed to deliver email"}. Please verify your Gmail App Password.`,
          },
          { status: 500 }
        );
      }
    }

    // 3. If no email provider is configured yet:
    // Log transmission securely to console and inform sender
    console.log("[INCOMING_PORTFOLIO_TRANSMISSION]", {
      to: RECIPIENT_EMAIL,
      fromName: cleanName,
      fromEmail: cleanEmail,
      message: cleanMessage,
      timestamp,
    });

    return NextResponse.json({
      success: true,
      message: `Signal logged! To deliver directly to ${RECIPIENT_EMAIL}, add your GMAIL_APP_PASSWORD or RESEND_API_KEY in .env.local.`,
      needsCredentials: true,
    });
  } catch (error: any) {
    console.error("[CONTACT_API_ERROR]", error);
    return NextResponse.json(
      { error: "Transmission failed. Please try again or email officialutshob@gmail.com directly." },
      { status: 500 }
    );
  }
}

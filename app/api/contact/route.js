export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const fsPromises = fs.promises;

export async function POST(request) {
  try {
    const body = await request.json();
    console.log('/api/contact received body:', body);
    console.info('SMTP config present:', {
      host: !!process.env.SMTP_HOST,
      port: !!process.env.SMTP_PORT,
      user: !!process.env.SMTP_USER,
      pass: !!process.env.SMTP_PASS,
      to: !!process.env.EMAIL_TO,
    });
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const base = process.cwd();
    const dataDir = path.join(base, 'data');
    await fsPromises.mkdir(dataDir, { recursive: true });
    const filePath = path.join(dataDir, 'messages.json');

    let existing = [];
    try {
      const raw = await fsPromises.readFile(filePath, 'utf8');
      existing = JSON.parse(raw || '[]');
    } catch (e) {
      existing = [];
    }

    const entry = {
      id: Date.now(),
      name,
      email,
      message,
      createdAt: new Date().toISOString(),
    };

    existing.push(entry);
    await fsPromises.writeFile(filePath, JSON.stringify(existing, null, 2), 'utf8');

    // Attempt to send email if SMTP env vars are provided
    let emailed = false;
    let reason = '';
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS && process.env.EMAIL_TO) {
      try {
        const { createTransport } = await import('nodemailer');
        const transporter = createTransport({
          host: process.env.SMTP_HOST,
          port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
          secure: (process.env.SMTP_PORT === '465'),
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        try {
          await transporter.verify();
          console.info('SMTP transporter verified');
        } catch (verifyErr) {
          console.warn('SMTP transporter verify failed:', verifyErr?.message || verifyErr);
        }

        console.info('Attempting sendMail via', process.env.SMTP_HOST);
        const info = await transporter.sendMail({
          from: process.env.SMTP_FROM || process.env.SMTP_USER,
          to: process.env.EMAIL_TO,
          subject: `New message from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
          html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
        });

        console.info('sendMail result:', {
          messageId: info?.messageId,
          response: info?.response,
          accepted: info?.accepted,
          rejected: info?.rejected,
          envelope: info?.envelope,
        });
        emailed = true;
        var messageId = info?.messageId;
      } catch (sendErr) {
        console.error('Failed to send email:', sendErr);
        reason = sendErr?.message || String(sendErr);
      }
    } else {
      reason = 'SMTP not configured';
      console.info('SMTP env vars not configured — message stored only');
    }

    return NextResponse.json({ ok: true, stored: true, emailed, reason, messageId: typeof messageId !== 'undefined' ? messageId : null }, { status: 200 });
  } catch (err) {
    console.error('/api/contact error:', err);
    return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 });
  }
}

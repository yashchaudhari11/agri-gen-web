import nodemailer from 'nodemailer';

// ─── Email HTML Template ────────────────────────────────────────────────────
function buildEmailHtml({ name, phone, inquiryType, message }) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Enquiry — Agri-Gen Innovation</title>
</head>
<body style="margin:0;padding:0;background:#f4f6f3;font-family:'Helvetica Neue',Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f3;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0F2414 0%,#1B4332 60%,#1A3A6B 100%);border-radius:16px 16px 0 0;padding:36px 40px;text-align:center;">
              <p style="color:#3DAA35;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;margin:0 0 12px;">
                Agri-Gen Innovation
              </p>
              <h1 style="color:#ffffff;font-size:22px;font-weight:800;margin:0 0 6px;line-height:1.3;">
                New Website Enquiry
              </h1>
              <p style="color:rgba(255,255,255,0.45);font-size:12px;margin:0;">
                Submitted via agrigeninnovation.com contact form
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#ffffff;padding:36px 40px;">

              <!-- Enquiry type badge -->
              <p style="margin:0 0 24px;text-align:center;">
                <span style="display:inline-block;background:#3DAA3515;color:#3DAA35;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:6px 18px;border-radius:100px;border:1px solid #3DAA3530;">
                  ${inquiryType}
                </span>
              </p>

              <!-- Fields -->
              <table width="100%" cellpadding="0" cellspacing="0">

                <tr>
                  <td style="padding:0 0 16px;">
                    <p style="color:#9ca3af;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin:0 0 6px;">Full Name</p>
                    <p style="color:#111827;font-size:15px;font-weight:600;margin:0;padding:12px 16px;background:#f9fafb;border-radius:10px;border:1px solid #e5e7eb;">
                      ${name}
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:0 0 16px;">
                    <p style="color:#9ca3af;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin:0 0 6px;">Phone Number</p>
                    <p style="margin:0;">
                      <a href="tel:${phone}" style="display:block;color:#3DAA35;font-size:18px;font-weight:800;text-decoration:none;padding:12px 16px;background:#3DAA3508;border-radius:10px;border:1px solid #3DAA3520;">
                        📞 ${phone}
                      </a>
                    </p>
                  </td>
                </tr>

                ${message ? `
                <tr>
                  <td style="padding:0 0 16px;">
                    <p style="color:#9ca3af;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin:0 0 6px;">Message</p>
                    <p style="color:#374151;font-size:14px;line-height:1.7;margin:0;padding:14px 16px;background:#f9fafb;border-radius:10px;border:1px solid #e5e7eb;white-space:pre-wrap;">
                      ${message}
                    </p>
                  </td>
                </tr>
                ` : ''}

              </table>

              <!-- Quick Reply CTAs -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                <tr>
                  <td style="padding-right:8px;" width="50%">
                    <a href="tel:${phone}" style="display:block;text-align:center;background:#3DAA35;color:#ffffff;font-size:13px;font-weight:700;padding:14px 20px;border-radius:12px;text-decoration:none;">
                      📞 Call Back
                    </a>
                  </td>
                  <td style="padding-left:8px;" width="50%">
                    <a href="https://wa.me/91${phone.replace(/\D/g,'')}?text=Hello%20${encodeURIComponent(name)}%2C%20this%20is%20Agri-Gen%20Innovation%20responding%20to%20your%20enquiry." style="display:block;text-align:center;background:#25D366;color:#ffffff;font-size:13px;font-weight:700;padding:14px 20px;border-radius:12px;text-decoration:none;">
                      💬 WhatsApp Reply
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9fafb;border-radius:0 0 16px 16px;padding:24px 40px;text-align:center;border-top:1px solid #e5e7eb;">
              <p style="color:#9ca3af;font-size:11px;margin:0 0 4px;">
                AGRI-GEN Innovation Pvt. Ltd.
              </p>
              <p style="color:#9ca3af;font-size:10px;margin:0 0 4px;">
                GAT No.306, Old Janori Road, Near Hanuman Mandir, Jaulke, Nashik 422207
              </p>
              <p style="color:#9ca3af;font-size:10px;margin:0;">
                <a href="mailto:agrigeninnovation@gmail.com" style="color:#3DAA35;text-decoration:none;">agrigeninnovation@gmail.com</a>
                &nbsp;·&nbsp;
                <a href="https://agrigeninnovation.com" style="color:#3DAA35;text-decoration:none;">agrigeninnovation.com</a>
              </p>
              <p style="color:#d1d5db;font-size:10px;margin:12px 0 0;">
                ISO 9001:2015 Certified · Advance Biosolution for Sustainable Farming
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
  `.trim();
}

// ─── Auto-reply HTML for the sender ────────────────────────────────────────
function buildAutoReplyHtml({ name }) {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1.0"/></head>
<body style="margin:0;padding:0;background:#f4f6f3;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f3;padding:32px 16px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:540px;">
        <tr>
          <td style="background:linear-gradient(135deg,#0F2414 0%,#1B4332 60%,#1A3A6B 100%);border-radius:16px 16px 0 0;padding:40px;text-align:center;">
            <p style="color:#3DAA35;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;margin:0 0 14px;">Agri-Gen Innovation</p>
            <h1 style="color:#ffffff;font-size:24px;font-weight:800;margin:0 0 8px;">Thank You, ${name}! 🌿</h1>
            <p style="color:rgba(255,255,255,0.55);font-size:13px;margin:0;">We have received your enquiry.</p>
          </td>
        </tr>
        <tr>
          <td style="background:#ffffff;padding:36px 40px;text-align:center;">
            <p style="color:#374151;font-size:15px;line-height:1.8;margin:0 0 20px;">
              Our team will contact you within <strong style="color:#3DAA35;">24 hours</strong>.<br/>
              For urgent queries, call us directly:
            </p>
            <a href="tel:7385266728" style="display:inline-block;background:#3DAA35;color:#fff;font-size:16px;font-weight:800;padding:14px 32px;border-radius:12px;text-decoration:none;margin-bottom:28px;">
              📞 73852 66728
            </a>
            <p style="color:#9ca3af;font-size:12px;margin:0;">
              AGRI-GEN Innovation · Nashik, Maharashtra<br/>
              <a href="https://agrigeninnovation.com" style="color:#3DAA35;">agrigeninnovation.com</a>
            </p>
          </td>
        </tr>
        <tr>
          <td style="background:#f9fafb;border-radius:0 0 16px 16px;padding:16px 40px;text-align:center;border-top:1px solid #e5e7eb;">
            <p style="color:#d1d5db;font-size:10px;margin:0;">ISO 9001:2015 Certified · Advance Biosolution for Sustainable Farming</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>
  `.trim();
}

// ─── API Route Handler ──────────────────────────────────────────────────────
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, inquiryType, message } = body;

    // Basic validation
    if (!name?.trim() || !phone?.trim()) {
      return Response.json({ success: false, error: 'Name and phone are required.' }, { status: 400 });
    }

    // Create transporter — Gmail SMTP with App Password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // Send notification to Agri-Gen
    await transporter.sendMail({
      from: `"Agri-Gen Innovation" <${process.env.EMAIL_USER}>`,
      to: 'agrigeninnovation@gmail.com',
      replyTo: email || undefined,
      subject: `🌿 New Enquiry — ${inquiryType || 'General'} | ${name}`,
      html: buildEmailHtml({ name, phone, inquiryType: inquiryType || 'General Inquiry', message }),
    });

    // Send auto-reply to user (only if email provided)
    if (email?.trim()) {
      await transporter.sendMail({
        from: `"Agri-Gen Innovation" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `Thank You, ${name} — We've received your enquiry`,
        html: buildAutoReplyHtml({ name }),
      });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json(
      { success: false, error: 'Failed to send. Please call us directly at 73852 66728.' },
      { status: 500 }
    );
  }
}

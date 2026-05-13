const { Resend } = require("resend");

async function sendConfirmationEmail(email, name, auditId) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("Missing RESEND_API_KEY");
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const resultUrl = `${process.env.FRONTEND_URL}/result/${auditId}`;

  const emailContent = `
Hi ${name},

Thanks for using the AI Spend Audit tool!

Your audit results are ready:
${resultUrl}

We found optimization opportunities in your AI tool spending.
Our team at Credex will reach out if high savings are detected.

Best regards,
Credex Team
//   `;

  const response = await resend.emails.send({
    from: "Credex <onboarding@resend.dev>",
    to: email,
    subject: "Your AI Spend Audit Results",
    text: emailContent,
  });

  return response.data;
}

module.exports = { sendConfirmationEmail };
